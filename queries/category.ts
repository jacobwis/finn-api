import Category from "../models/category";

const categories = async () => {
  return await Category.getMainCategories();
};

interface CategoryArgs {
  id: string;
}

const category = async (obj: any, args: CategoryArgs) => {
  return await Category.findByID(args.id);
};

export default {
  Query: {
    categories,
    category
  }
};
