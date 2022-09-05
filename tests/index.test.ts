import { fatorial } from "../src/index"

it("deve retornar '1' para 1", () => {
  expect(fatorial(1)).toBe(1);
}

it("deve retornar '6' para 3", () => {
  expect(fatorial(3)).toBe(6);
}

it("deve retornar '1' para -1", () => {
  expect(fatorial(-1)).toBe(1);
}
