export const TablePaths = {
  "/table": {
    get: {
      summary: "Get all Table",
      tags: ["Table"],
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
          description: "List of Table",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Table" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Table",
      tags: ["Table"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/TableRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Table created"
        }
      }
    }
  },

  "/table/{id}": {
    get: {
      summary: "Get Table by id",
      tags: ["Table"],
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
          description: "Table found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Table" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Table",
      tags: ["Table"],
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
            schema: { $ref: "#/components/schemas/TableRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Table updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Table",
      tags: ["Table"],
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
          description: "Table deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
