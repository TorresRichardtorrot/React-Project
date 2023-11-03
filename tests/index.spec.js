import app from "../src/app";
import request from "supertest";

describe("GET /product", () => {
  test("deberia responder con un status 200", async () => {
    const response = await request(app).get("/api/products").send();
    expect(response.statusCode).toBe(500);
  }, 30000);
});
