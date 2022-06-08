import CatModel from "../models/cat.model.js";
import functions from "../helpers/catfacts.js";

/**
 @abstract seed the database with data;
 */
export const saveDataOnStart = async () => {
  const result = await functions.getListFromAPI();
  const data = result.map((catFact) => {
    const payload = {};
    payload.text = catFact.text;
    return payload;
  });
  await CatModel.bulkCreate(data);
};
