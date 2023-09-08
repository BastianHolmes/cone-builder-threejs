export default function Triangulation(height, surfaces, radius) {
  const indices = [];
  const vertices = [];
  const surfaceNum = Number(surfaces);

  // Вершины основания пирамиды
  for (let i = 0; i < surfaceNum; i++) {
    const angle = (2 * Math.PI * i) / surfaceNum;
    const x = Number(radius) * Math.cos(angle);
    const z = Number(radius) * Math.sin(angle);
    vertices.push(x.toFixed(3), 0, z.toFixed(3));
  }

  vertices.push(0, Number(height), 0);

  // Индексы для каждой грани
  for (let i = 0; i < surfaceNum; i++) {
    const a = i;
    const b = (i + 1) % surfaceNum;
    const c = surfaceNum;

    indices.push(a.toFixed(3), b.toFixed(3), c.toFixed(3));
  }

  // Индексы для основания
  for (let i = 0; i < surfaceNum; i++) {
    const a = i;
    const b = (i + 1) % surfaceNum;
    const c = surfaceNum;

    indices.push(a.toFixed(3), b.toFixed(3), c.toFixed(3));
  }

  return { indices, vertices };
}
