export default function Cone(H, N, R) {
  const top = [0, 0, H];
  const base = [];
  const angle = (2 * Math.PI) / N;

  for (let i = 0; i < N; i++) {
    const x = (R * Math.cos(angle * i)).toFixed(3);
    const y = (R * Math.sin(angle * i)).toFixed(3);
    base.push([x, y, 0]);
  }
  return {
    top,
    base,
  };
}
