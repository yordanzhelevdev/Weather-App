export function kmphToMs(v: number): string {
  const ms = ((v / 0.621) * 1000) / 60 / 60;
  return ms.toFixed(2);
}

export function checkTime(n) {
  if (n < 10) {
    n = "0" + n;
  }
  return n;
}
