import cesar from "./cesar.js";
test("Mensaje de error", () => {
  expect(cesar("xyz", 26)).toBe("xyz");
  expect(cesar("xyz", 1)).toBe("yza");
  expect(cesar("xy z", 1)).toBe("yz a");
});
