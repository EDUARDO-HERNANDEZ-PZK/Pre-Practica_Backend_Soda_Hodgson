export const PermissionPaths = {
  "/permission": {
    get: {
      summary: "Get all Permission",
      tags: ["Permission"],
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
          description: "List of Permission",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Permission" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Permission",
      tags: ["Permission"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/PermissionRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Permission created"
        }
      }
    }
  },

  "/permission/{id}": {
    get: {
      summary: "Get Permission by id",
      tags: ["Permission"],
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
          description: "Permission found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Permission" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Permission",
      tags: ["Permission"],
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
            schema: { $ref: "#/components/schemas/PermissionRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Permission updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Permission",
      tags: ["Permission"],
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
          description: "Permission deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
