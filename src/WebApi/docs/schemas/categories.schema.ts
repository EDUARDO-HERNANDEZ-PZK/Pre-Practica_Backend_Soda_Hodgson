export const CategoriesSchemas = {
  CategoriesRequest: {
    type: "object",
    required: [
      
        "name"
      
    ],
    properties: {
      
      name: { type: "string" },
      
    }
  },

  Categories: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      name: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
