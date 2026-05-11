export const RolePermisoPaths = {
  "/rolepermiso": {
    get: {
      summary: "Get all RolePermiso",
      tags: ["RolePermiso"],
      parameters: [
        {
          name: "page",
          in: "query",
          required: false,
          schema: {
            type: "integer",
            example: 1
          },
          description: "Page number"
        },
        {
          name: "pageSize",
          in: "query",
          required: false,
          schema: {
            type: "integer",
            example: 100
          },
          description: "Number of records per page"
        }
      ],
      responses: {
        200: {
          description: "List of RolePermiso",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/RolePermiso" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create RolePermiso",
      tags: ["RolePermiso"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/RolePermisoRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "RolePermiso created"
        }
      }
    }
  },

  "/rolepermiso/{id}": {
    get: {
      summary: "Get RolePermiso by id",
      tags: ["RolePermiso"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" }
        }
      ],
      responses: {
        200: {
          description: "RolePermiso found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/RolePermiso" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update RolePermiso",
      tags: ["RolePermiso"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" }
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/RolePermisoRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "RolePermiso updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete RolePermiso",
      tags: ["RolePermiso"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" }
        }
      ],
      responses: {
        204: {
          description: "RolePermiso deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
