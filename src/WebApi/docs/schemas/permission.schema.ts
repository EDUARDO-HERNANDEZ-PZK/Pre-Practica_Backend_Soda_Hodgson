export const PermissionSchemas = {
  PermissionRequest: {
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

  Permission: {
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
