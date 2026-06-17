export const ProductsSchemas = {
  ProductsRequest: {
    type: "object",
    required: [
      
        "category_id",
      
        "unit_id",
      
        "name",
      
        "description",
      
        "price_sell",
      
        "stock_current",
      
        "stock_min",

        "stock_expired",
      
        "stock_damaged"
      
    ],
    properties: {
      
      category_id: { type: "string" },
      
      unit_id: { type: "string" },
      
      name: { type: "string" },
      
      description: { type: "string" },
      
      price_sell: { type: "number" },
      
      stock_current: { type: "number" },
      
      stock_min: { type: "number" },

      stock_expired: { type: "number" },
      
      stock_damaged: { type: "number" },
      
    }
  },

  Products: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      category_id: { type: "string" },
      
      unit_id: { type: "string" },
      
      name: { type: "string" },
      
      description: { type: "string" },
      
      price_sell: { type: "number" },
      
      stock_current: { type: "number" },
      
      stock_min: { type: "number" },
      stock_expired: { type: "number" },
      
      stock_damaged: { type: "number" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
