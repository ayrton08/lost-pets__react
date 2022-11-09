import { register } from "../../src/lib/handlerRegister";

describe("handlerRegister()", () => {
  test("should create a new user", async () => {
    const args = {
      email: "",
      fullname: "",
      password: "",
    };
    const response = await register(args);
    expect(response).toEqual({
      status: true,
    });
  });
});
