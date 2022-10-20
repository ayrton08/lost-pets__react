import { findById } from "../../src/lib/findById";

describe("findById()", () => {
  // test("should return an object", () => {
  //   const arg = "1";

  //   return expect(findById(arg)).toBeTypeOf("object");
  // }, 10000);

  test("should return any available response data", () => {
    const arg = "1";
  }, 10000);

  test("should return an error if args cant be converted to a number", () => {
    const arg = "invalid";

    return expect(findById(arg)).rejects.toThrow();
  }, 10000);
});
