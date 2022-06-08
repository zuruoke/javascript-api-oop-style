import request from "supertest";
import { app } from "../src/app.js";

describe("ALL CRUD", () => {
  /**
   * @returns a 404 status code when the route is not valid or unknown
   */

  describe("make any request to an unknown route", () => {
    test("should respond with a 404 status code and return a page not found test", async () => {
      const response = await request(app).get("/unkwnown").send();
      expect(response.statusCode).toBe(404);
      expect(response.text).toBe("route not found");
    });
  });
});
