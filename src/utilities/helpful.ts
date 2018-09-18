export function kmphToMs(v: number): string  {
    const ms = v / 0.621 * 1000 / 60 / 60;
    return ms.toFixed(2);
}