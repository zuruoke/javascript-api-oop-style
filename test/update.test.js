import request from "supertest";
import { app } from "../src/app.js";

describe("PUT /cat", () => {
  /**
   * @returns a 201 status code and the updated data
   * @returns a 404 status code when id is not valid or found
   */
  describe("update a particular cat fact", () => {
    test("should respond with a 201 status code and return a payload with the updated data", async () => {
      const response = await request(app).put("/cat/4").send({
        text: "facts updated",
      });
      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty("text", "facts updated");
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

  describe("not passed a valid cat fact id", () => {
    test("should return 404 status code", async () => {
      const response = await request(app).put("/cat/1000000890").send({
        text: "facts updated",
      });
      expect(response.statusCode).toBe(404);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
});
