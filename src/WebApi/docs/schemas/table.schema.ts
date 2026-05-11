export const TableSchemas = {
  TableRequest: {
    type: "object",
    required: [
      
        "table_number",
      
        "status"
      
    ],
    properties: {
      
      table_number: { type: "number" },
      
      status: { type: "string" },
      
    }
  },

  Table: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      table_number: { type: "number" },
      
      status: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
