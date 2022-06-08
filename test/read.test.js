import request from "supertest";
import { app } from "../src/app.js";

describe("GET /cat", () => {
  /**
   * @returns a 200 status code and an array payload
   * @returns a 404 status code when id is not valid or found
   */
  describe("making a get request to get cat facts", () => {
    test("should respond with a 200 status code and return a body with id and the text", async () => {
      const response = await request(app).get("/cat").send();
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

  describe("not passed a valid cat fact id", () => {
    test("should return 404 status code", async () => {
      const response = await request(app).get("/cat/1000000890").send();
      expect(response.statusCode).toBe(404);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
});
