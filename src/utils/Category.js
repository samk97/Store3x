
const categoryApiUrl = process.env.REACT_APP_CATEGORY_API_URL;

export const fetchCategories = async () => {
    try {
      const response = await fetch(categoryApiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  };


export const fetchCategoriesById = async (productId) => {
    try {
      const response = await fetch(`${categoryApiUrl}/${productId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  };
  