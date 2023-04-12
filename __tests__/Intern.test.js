const Intern = require('../lib/Intern');

const intern = new Intern("Plop", "4", "intern@example.com", "Penn State" );

test("constructor returns name, id, email, and school", () => {
    expect(intern.name).toBe("Plop");
    expect(intern.id).toBe("4");
    expect(intern.email).toBe("intern@example.com");
    expect(intern.school).toBe("Penn State")

});

test("getRole() return role of Intern", () => {
    expect(intern.getRole()).toBe("intern")
});

test("getSchool return github of Intern", () => {
    expect(intern.getSchool()).toBe("Penn State")
});