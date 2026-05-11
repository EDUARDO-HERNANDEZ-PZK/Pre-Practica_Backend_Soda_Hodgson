export const RolePermisoSchemas = {
  RolePermisoRequest: {
    type: "object",
    required: [
      
        "role_id",
      
        "permission_id"
      
    ],
    properties: {
      
      role_id: { type: "string" },
      
      permission_id: { type: "string" },
      
    }
  },

  RolePermiso: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      role_id: { type: "string" },
      
      permission_id: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
