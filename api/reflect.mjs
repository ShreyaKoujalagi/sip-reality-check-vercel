// Vercel adapter for the existing, tested Netlify-format reflection handler.
// Keep provider keys server-side; never expose them in client JavaScript.
import reflection from '../netlify/functions/reflect.cjs';

export default async function handler(req, res) {
  const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body ?? {});
  try {
    const result = await reflection.handler({ httpMethod: req.method, body });
    for (const [name, value] of Object.entries(result.headers ?? {})) res.setHeader(name, value);
    res.status(result.statusCode ?? 500).send(result.body ?? '');
  } catch (error) {
    console.error('Reflection handler failed');
    res.status(500).json({ ok: false, message: 'Reflection unavailable. Please try again.' });
  }
}
