const Employee = require("../lib/Employee");

// create employee object
describe("Employee Object", () => {
  it("should return new object", () => {
    const employeeObj = new Employee();

    expect(typeof employeeObj).toEqual("object");
  });

  // employee name
  it("should return employee name by getName()", () => {
    const name = "Mab chhan";
    const employeeObj = new Employee(name);
    expect(employeeObj.getName()).toEqual(name);
  });

  // employee Id
  it("should return employee ID by getId", () => {
    const id = "01";
    const employeeObj = new Employee("Mab Chhan", id);
    expect(employeeObj.getId()).toEqual(id);
  });

  // employee Email
  it("should return employee Email by getEmail()", () => {
    const email = "chhan@gmail.com";
    const employeeObj = new Employee("Mab Chhan", "01", email);
    expect(employeeObj.getEmail()).toEqual(email);
  });

  // employee role
  it('should return "Employee" getRole()', () => {
    const employeeObj = new Employee("Mab Chhan", "01", "chhan@gmail.com");
    expect(employeeObj.getRole()).toEqual("Employee");
  });
});
