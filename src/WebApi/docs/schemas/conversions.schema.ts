export const ConversionsSchemas = {
  ConversionsRequest: {
    type: "object",
    required: [
      
        "from_uni_id",
      
        "to_unit_id",
      
        "conversion_factor"
      
    ],
    properties: {
      
      from_uni_id: { type: "string" },
      
      to_unit_id: { type: "string" },
      
      conversion_factor: { type: "string" },
      
    }
  },

  Conversions: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      from_uni_id: { type: "string" },
      
      to_unit_id: { type: "string" },
      
      conversion_factor: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
