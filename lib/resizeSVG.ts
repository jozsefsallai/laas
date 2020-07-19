export default function resizeSVG(svg: string, width: number, height: number): string {
  const reWidth: RegExp = /width="(.*?)ex"/g;
  const reHeight: RegExp = /height="(.*?)ex"/g;

  const originalWidth = parseFloat(reWidth.exec(svg)[1]);
  const originalHeight = parseFloat(reHeight.exec(svg)[1]);

  let newHeight = originalHeight * width / originalWidth;
  let newWidth = width;

  if (newHeight > height && originalWidth > originalHeight) {
    newHeight = height;
    newWidth = originalWidth * height / originalHeight;
  }

  return svg
    .replace(`width="${originalWidth.toString()}ex"`, `width="${newWidth}px"`)
    .replace(`height="${originalHeight.toString()}ex"`, `height="${newHeight}px"`);
}
