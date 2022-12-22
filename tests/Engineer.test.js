const Engineer = require("../lib/Engineer");

describe("create engineer object", () => {
  it("should return new object", () => {
    const obj = new Engineer();
    expect(typeof obj).toEqual("object");
  });

  it("should return Github username by getGithub()", () => {
    const Git = "githubUserName";
    const obj = new Engineer("Foo", 1, "chhan@gmail.com", Git);
    expect(obj.getGithub()).toBe(Git);
  });

  it('should return "Engineer " by getRole()', () => {
    const Git = "githubUserName";
    const obj = new Engineer("Foo", 1, "chhan@gmail.com", Git);
    expect(obj.getRole()).toEqual("Engineer");
  });
});
