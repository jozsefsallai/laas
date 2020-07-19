import { NextApiRequest, NextApiResponse } from 'next';
import renderSVG from '../../lib/renderSVG';
import resizeSVG from '../../lib/resizeSVG';
import sharp from 'sharp';

export default async (req: NextApiRequest, res: NextApiResponse) => {
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

  let width = 1200;
  let height = 400;

  if (req.query.width) {
    let w = parseInt(req.query.width as string);
    if (w && w > 0 && w <= 5000) {
      width = w;
    }
  }

  if (req.query.height) {
    let h = parseInt(req.query.height as string);
    if (h && h > 0 && h <= 5000) {
      height = h;
    }
  }

  const transparent = req.query.disable_transparency === undefined || req.query.disable_transparency !== 'true';
  const white = req.query.white && req.query.white === 'true';

  let svg = renderSVG(raw);

  if (white) {
    svg = svg.replace('<svg', '<svg color="#fff"');
  }

  const buffer = Buffer.from(resizeSVG(svg, width, height));

  const image = sharp(buffer);

  if (!transparent) {
    image.flatten({ background: white ? '#000000' : '#ffffff' });
  }

  const png = await image.png().toBuffer();

  res.setHeader('Content-Type', 'image/png');
  return res.send(png);
};
