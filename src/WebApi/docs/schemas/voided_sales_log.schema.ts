export const Voided_sales_logSchemas = {
  Voided_sales_logRequest: {
    type: "object",
    required: [
      
        "sale_id",
      
        "reason",
      
        "voided_time",
      
        "user_voided"
      
    ],
    properties: {
      
      sale_id: { type: "string" },
      
      reason: { type: "string" },
      
      voided_time: { type: "string" },
      
      user_voided: { type: "number" },
      
    }
  },

  Voided_sales_log: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      sale_id: { type: "string" },
      
      reason: { type: "string" },
      
      voided_time: { type: "string" },
      
      user_voided: { type: "number" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
