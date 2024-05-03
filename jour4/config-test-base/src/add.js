export function sum(a, b) {
  if (typeof a === "string") throw new Error("un number est attendu");
  return a + b;
}
