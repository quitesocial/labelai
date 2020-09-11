export default function fixers({ w, h }, canvasSize) {
  const horizontal = w > h
  let realW = horizontal
    ? parseInt(canvasSize.width, 10)
    : parseInt((w * canvasSize.height) / h, 10)

  const realH = horizontal
    ? parseInt((canvasSize.width * h) / w, 10)
    : parseInt(canvasSize.height, 10)

  const fixW = (x) =>
    parseInt((x * w) / realW + realW / 2 - canvasSize.width / 2, 10)
  const fixH = (y) =>
    parseInt((y * h) / realH + realH / 2 - canvasSize.height / 2, 10)

  return { fixW, fixH }
}
