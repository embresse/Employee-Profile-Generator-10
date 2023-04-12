const Engineer = require("../lib/Engineer");

const engineer = new Engineer("Dwight Schrute", "3", "schrutefarms@example.com", "github.com/schruterules" );

test("constructor returns name, id, email, github", () => {
    expect(engineer.name).toBe("Dwight Schrute");
    expect(engineer.id).toBe("3");
    expect(engineer.email).toBe("schrutefarms@example.com");
    expect(engineer.github).toBe("github.com/schruterules");
});

test("get Role() returns role of Engineer", () => {
    expect(engineer.getEmail()).toBe("schrutefarms@example.com");
});

test("getGithub() returns github of Engineer", () => {
    expect(engineer.getGithub()).toBe("github.com/schruterules");
});