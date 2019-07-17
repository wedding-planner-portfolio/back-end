const server = require("./server");
const request = require("supertest");

describe("server.js", () => {
  describe("server GET request", () => {
    it("should return status code 200", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("should return with our api message", async () => {
      const res = await request(server).get("/");
      expect(res.body).toEqual({ message: "API running." });
    });
  });
});
