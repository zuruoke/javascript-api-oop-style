import request from "supertest";
import { app } from "../src/app.js";

describe("POST /cat", () => {
  /**
   * @returns a 201 status code and the newly created cat fact
   * @returns a 500 status code when the request body is null or the text field
   */

  describe("given a payload with a text field", () => {
    test("should respond with a 201 status code and return a body with id and the text", async () => {
      const response = await request(app).post("/cat").send({
        text: "cats are kind",
      });
      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("text", "cats are kind");
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

  describe("not passing a payload or does not contain the text field", () => {
    test("should return a validation error which translates to 500 status code", async () => {
      const response = await request(app).post("/cat").send({});
      expect(response.statusCode).toBe(500);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
});
