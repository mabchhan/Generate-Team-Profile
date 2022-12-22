const Manager = require("../lib/Manager");

describe("create manager object", () => {
  it("should return new object", () => {
    const obj = new Manager();
    expect(typeof obj).toEqual("object");
  });

  it("should return Office number by getOfficeNumber()", () => {
    const offficeNumber = 23;
    const obj = new Manager("Foo", 1, "chhan@gmail.com", offficeNumber);
    expect(obj.getOfficeNumber()).toBe(offficeNumber);
  });

  it('should return "Manager" by getRole()', () => {
    const offficeNumber = 23;
    const obj = new Manager("Foo", 1, "chhan@gmail.com", offficeNumber);
    expect(obj.getRole()).toEqual("Manager");
  });
});
