import MongoClass from "./MongoClass.js";
import { productsSchema } from "./models/ProductsSchema.js";

export class MongoDBProducts extends MongoClass {
  constructor() {
    super("products", productsSchema);
  }

  async getAll() {
    try {
      // el primer argumento es el filtro de busqueda, el segundo es son las opciones de paginado
      const all = await this.baseModel.paginate({}, { limit: 5, page: 1 });
      return all;
    } catch (err) {
      throw new Error(err);
    }
  }
}
