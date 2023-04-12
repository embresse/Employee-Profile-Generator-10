const Manager = require("../lib/Manager");

const manager = new Manager("Michael Scott","2","datemike@example.com","555 555 5555");

test("constructor returns name, id , email, and office #", () => {
  expect(manager.name).toBe("Michael Scott");
  expect(manager.id).toBe("2");
  expect(manager.email).toBe("datemike@example.com");
  expect(manager.officeNumber).toBe("555 555 5555");
});

test("getOfficeNumber() returns phone", () => {
  expect(manager.getOfficeNumber()).toBe("555 555 5555");
});

test("getRole() returns role of Manager", () => {
  expect(manager.getRole()).toBe("manager");
});