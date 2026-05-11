export const SalesPaths = {
  "/sales": {
    get: {
      summary: "Get all Sales",
      tags: ["Sales"],
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
          description: "List of Sales",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Sales" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Sales",
      tags: ["Sales"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/SalesRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Sales created"
        }
      }
    }
  },

  "/sales/{id}": {
    get: {
      summary: "Get Sales by id",
      tags: ["Sales"],
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
          description: "Sales found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Sales" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Sales",
      tags: ["Sales"],
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
            schema: { $ref: "#/components/schemas/SalesRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Sales updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Sales",
      tags: ["Sales"],
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
          description: "Sales deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
