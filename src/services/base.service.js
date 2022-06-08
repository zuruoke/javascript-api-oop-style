/**
  @abstract This module implements all generic crud operations at the service level
  @abstract The respective models are injected to it through its constructor by allowing it to inherit from it
  @abstract It is open for extension but closed for modification
 */

import ApiError from "../errors/api.error.js";
import { httpStatusCodes } from "../helpers/httpStatusCodes.js";

export default class BaseService {
  model;
  constructor(model) {
    this.model = model;
  }

  post = async (data) => {
    return await this.model.create(data);
  };

  get = async () => {
    return await this.model.findAll();
  };

  getById = async (id) => {
    const result = await this.model.findOne({
      where: {
        id,
      },
    });
    if (result === null || result === undefined)
      throw new ApiError(
        `The id: ${id} was not found.`,
        httpStatusCodes.NOT_FOUND,
        "Not Found"
      );
    return result;
  };

  update = async (id, data) => {
    const result = await this.model.update(data, {
      where: {
        id,
      },
    });
    if (result === null || result === undefined)
      throw new ApiError(
        `The id: ${id} was not found.`,
        httpStatusCodes.NOT_FOUND,
        "Not Found"
      );
    return await this.getById(id);
  };

  delete = async (id) => {
    const result = await this.getById(id);
    await result.destroy();
    return await this.get();
  };
}
