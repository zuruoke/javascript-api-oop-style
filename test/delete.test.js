import request from "supertest";
import { app } from "../src/app.js";

describe("DELETE /cat", () => {
  /**
   * @returns a 201 status code and an array without the deleted fact
   * @returns a 404 status code when id is not valid or found
   */
  describe("deletes a particular cat fact", () => {
    test("should respond with a 201 status code and return payload array without the deleted data", async () => {
      const response = await request(app).delete("/cat/1").send();
      expect(response.statusCode).toBe(201);
      expect(response.body).toEqual(expect.not.arrayContaining([{ id: 1 }]));
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

  describe("not passed a valid cat fact id", () => {
    test("should return 404 status code", async () => {
      const response = await request(app).delete("/cat/1000000890").send();
      expect(response.statusCode).toBe(404);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
});
