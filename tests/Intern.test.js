const Intern = require("../lib/Intern");

describe("create intern object", () => {
  it("should return new object", () => {
    const obj = new Intern();
    expect(typeof obj).toEqual("object");
  });

  it("should return school by getSchool()", () => {
    const school = "UCLA";
    const obj = new Intern("Foo", 1, "chhan@gmail.com", school);
    expect(obj.getSchool()).toBe(school);
  });

  it('should return "Intern" by getRole()', () => {
    const school = "UCLA";
    const obj = new Intern("Foo", 1, "chhan@gmail.com", school);
    expect(obj.getRole()).toEqual("Intern");
  });
});
