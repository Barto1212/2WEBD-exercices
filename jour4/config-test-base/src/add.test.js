import { test, expect } from "vitest";
import { sum } from "./add.js";
test("4 et 2 font 6", () => {
  expect(sum(2, 4)).toBe(6);
});

test("une erreur s'affiche lorsque l'on rentre une string", () => {
  try {
    expect(sum("2", 4))
  } catch (error) {}
});
