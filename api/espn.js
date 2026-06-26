// api/espn.js — Vercel Serverless Function
// WC2026 Simulator v1.5.3: ESPN CORS proxy
//
// Endpoint: GET /api/espn?dates=20260611-20260721&endpoint=fifa.world
//
// Vercel executes this server-side, so no CORS restrictions apply.
// The response is cached at the CDN edge for 2 minutes (s-maxage=120).

export default async function handler(req, res) {
  // Only allow GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { dates, endpoint = 'fifa.world', limit = '300' } = req.query;

  if (!dates) {
    return res.status(400).json({ error: 'Missing required param: dates' });
  }

  // Sanitize: allow only yyyymmdd[-yyyymmdd] format
  if (!/^\d{8}(-\d{8})?$/.test(dates)) {
    return res.status(400).json({ error: 'Invalid dates format. Use YYYYMMDD or YYYYMMDD-YYYYMMDD' });
  }

  // Whitelist valid endpoints
  const ALLOWED_ENDPOINTS = ['fifa.world', 'fifa.world.cup'];
  const safeEndpoint = ALLOWED_ENDPOINTS.includes(endpoint) ? endpoint : 'fifa.world';

  const espnUrl = `https://site.api.espn.com/apis/site/v2/sports/soccer/${safeEndpoint}/scoreboard?dates=${dates}&limit=${parseInt(limit, 10) || 300}`;

  try {
    const espnRes = await fetch(espnUrl, {
      headers: {
        // Mimic a browser to avoid ESPN blocking bot UA
        'User-Agent': 'Mozilla/5.0 (compatible; WC2026Simulator/1.5)',
        'Accept': 'application/json',
      },
    });

    if (!espnRes.ok) {
      return res.status(espnRes.status).json({
        error: `ESPN returned ${espnRes.status}`,
        url: espnUrl,
      });
    }

    const data = await espnRes.json();

    // Cache at Vercel CDN edge: fresh for 2 min, serve stale up to 10 min while revalidating
    res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    return res.status(200).json(data);
  } catch (err) {
    console.error('[api/espn] Fetch error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
