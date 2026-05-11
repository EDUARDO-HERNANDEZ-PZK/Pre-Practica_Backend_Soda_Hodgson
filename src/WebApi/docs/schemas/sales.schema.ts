export const SalesSchemas = {
  SalesRequest: {
    type: "object",
    required: [
      
        "session_id",
      
        "table_id",
      
        "user_creator_id",
      
        "ruc_number",
      
        "sale_time",
      
        "status"
      
    ],
    properties: {
      
      session_id: { type: "string" },
      
      table_id: { type: "string" },
      
      user_creator_id: { type: "string" },
      
      ruc_number: { type: "string" },
      
      sale_time: { type: "string" },
      
      status: { type: "string" },
      
    }
  },

  Sales: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      session_id: { type: "string" },
      
      table_id: { type: "string" },
      
      user_creator_id: { type: "string" },
      
      ruc_number: { type: "string" },
      
      sale_time: { type: "string" },
      
      status: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
