import { NextApiRequest, NextApiResponse } from 'next';
import renderSVG from '../../lib/renderSVG';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (!['POST', 'GET'].includes(req.method)) {
    return res.status(405).send('Method not allowed.');
  }

  let raw;

  switch (req.method) {
    case 'GET':
      raw = req.query.input;
      break;
    case 'POST':
      raw = req.body;
      break;
  }

  if (!raw || !raw.length) {
    return res.status(400).send('Body not provided.');
  }

  const output = renderSVG(raw);

  res.setHeader('Content-Type', 'image/svg+xml');
  return res.send(output);
};
