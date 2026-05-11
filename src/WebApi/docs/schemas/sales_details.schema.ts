export const Sales_detailsSchemas = {
  Sales_detailsRequest: {
    type: "object",
    required: [
      
        "sale_id",
      
        "product_id",
      
        "quantity",
      
        "unit_price",
      
        "subtotal"
      
    ],
    properties: {
      
      sale_id: { type: "string" },
      
      product_id: { type: "string" },
      
      quantity: { type: "number" },
      
      unit_price: { type: "number" },
      
      subtotal: { type: "number" },
      
    }
  },

  Sales_details: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      sale_id: { type: "string" },
      
      product_id: { type: "string" },
      
      quantity: { type: "number" },
      
      unit_price: { type: "number" },
      
      subtotal: { type: "number" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
