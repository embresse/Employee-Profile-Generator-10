const Employee = require("../lib/Employee");

const employee = new Employee ("Creed Bratton", "1", "creedsworld@example.com");

test("constructor returns name, id, email", () => {
    expect(employee.name).toBe("Creed Bratton");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("creedsworld@example.com");
});

test("getName() returns name of employee", () => {
    expect(employee.getName()).toBe("Creed Bratton");
});

test("getId() returns id of employee", () => {
    expect(employee.getId()).toBe("1");
});

test("getEmail() returns email of employee", () => {
    expect(employee.getEmail()).toBe("creedsworld@example.com");
});

test("getRole() returns role of employee", () => {
    expect(employee.getRole()).toBe("employee");
})