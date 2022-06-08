/**
  @abstract This module implements all generic crud operations at the controller level;
  @abstract The respective services are injected to it through its constructor by allowing it to inherit from it;
  @abstract It is open for extension but closed for modification;
 */

import { httpStatusCodes } from "../helpers/httpStatusCodes.js";

export default class BaseController {
  service;
  constructor(service) {
    this.service = service;
  }

  post = async (req, res) => {
    const resource = await this.service.post(req.body);
    res.status(httpStatusCodes.CREATED).send(resource);
  };

  get = async (req, res) => {
    const resource = await this.service.get();
    res.status(httpStatusCodes.OK).send(resource);
  };

  getById = async (req, res) => {
    const { id } = req.params;
    const resource = await this.service.getById(id);
    res.status(httpStatusCodes.OK).send(resource);
  };

  update = async (req, res) => {
    const { id } = req.params;
    const resource = await this.service.update(id, req.body);
    res.status(httpStatusCodes.CREATED).send(resource);
  };

  delete = async (req, res) => {
    const { id } = req.params;
    const resource = await this.service.delete(id);
    res.status(httpStatusCodes.CREATED).send(resource);
  };
}
