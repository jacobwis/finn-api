import * as db from "./db";

class Category {
  public static async getMainCategories() {
    const res = await db.any("SELECT * FROM categories WHERE parent IS NULL;");
    return res.map(row => new Category(row));
  }

  public static async findByID(id: string) {
    const res = await db.oneOrNone(
      "SELECT * FROM categories WHERE id = $1 LIMIT 1",
      [id]
    );

    return new Category(res);
  }

  public id: string;
  public name: string;

  public constructor(params: Partial<Category>) {
    this.id = params.id;
    this.name = params.name;
  }
}

export default Category;
