export const UserSchemas = {
  UserRequest: {
    type: "object",
    required: [
      
        "role_id",
      
        "username",
      
        "password_hash",
      
        "create_at"
      
    ],
    properties: {
      
      role_id: { type: "string" },
      
      username: { type: "string" },
      
      password_hash: { type: "string" },
      
      create_at: { type: "string" },
      
    }
  },

  User: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      role_id: { type: "string" },
      
      username: { type: "string" },
      
      password_hash: { type: "string" },
      
      create_at: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
