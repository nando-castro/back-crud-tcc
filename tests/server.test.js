const request = require("supertest");
const { app, server } = require("../src/index");

describe("GET /users", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/users");
    expect(res.status).toBe(200);
  });
});

describe("POST /user", () => {
  it("should return 201 OK", async () => {
    const res = await request(app)
      .post("/user")
      .send({ name: "test", email: "test@teste.com" });
    expect(res.status).toBe(201);
  });
});

describe("GET /users/:name", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/users/test");
    expect(res.status).toBe(200);
  });
});

describe("GET /user/:id", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/user/1");
    expect(res.status).toBe(200);
  });
});

// describe("PUT /user/:id", () => {
//   it("should return 200 OK", async () => {
//     const res = await request(app)
//       .put("/user/1")
//       .send({ name: "test", email: "teste@test.com" });
//     expect(res.status).toBe(200);
//   });
// });

// describe("DELETE /user/:id", () => {
//   it("should return 200 OK", async () => {
//     const res = await request(app).delete("/user/1");
//     expect(res.status).toBe(200);
//   });
// });

// No final dos testes, feche o servidor Express
afterAll((done) => {
  server.close((err) => {
    if (err) {
      console.error("Erro ao fechar o servidor Express:", err);
    } else {
      console.log("Servidor Express fechado com sucesso");
    }
    done();
  });
});
