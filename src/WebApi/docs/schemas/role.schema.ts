export const RoleSchemas = {
  RoleRequest: {
    type: "object",
    required: [
      
        "name",
      
        "description"
      
    ],
    properties: {
      
      name: { type: "string" },
      
      description: { type: "string" },
      
    }
  },

  Role: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      name: { type: "string" },
      
      description: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
