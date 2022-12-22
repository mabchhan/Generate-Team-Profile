const Employee = require("../lib/Employee");

// create employee object
describe("Employee Object", () => {
  it("should return new object", () => {
    const obj = new Employee();

    expect(typeof obj).toEqual("object");
  });

  // employee name
  it("should return employee name by getName()", () => {
    const name = "Mab chhan";
    const obj = new Employee(name);
    expect(obj.getName()).toEqual(name);
  });

  // employee Id
  it("should return employee ID by getId", () => {
    const id = 1;
    const obj = new Employee("Mab Chhan", id);
    expect(obj.getId()).toEqual(id);
  });

  // employee Email
  it("should return employee Email by getEmail()", () => {
    const email = "chhan@gmail.com";
    const obj = new Employee("Mab Chhan", 1, email);
    expect(obj.getEmail()).toEqual(email);
  });

  // employee role
  it('should return "Employee" getRole()', () => {
    const obj = new Employee("Mab Chhan", 1, "chhan@gmail.com");
    expect(obj.getRole()).toEqual("Employee");
  });
});
