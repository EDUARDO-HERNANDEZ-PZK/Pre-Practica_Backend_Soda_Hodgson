export const Daily_expensePaths = {
  "/daily_expense": {
    get: {
      summary: "Get all Daily_expense",
      tags: ["Daily_expense"],
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
          description: "List of Daily_expense",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Daily_expense" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Daily_expense",
      tags: ["Daily_expense"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/Daily_expenseRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Daily_expense created"
        }
      }
    }
  },

  "/daily_expense/{id}": {
    get: {
      summary: "Get Daily_expense by id",
      tags: ["Daily_expense"],
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
          description: "Daily_expense found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Daily_expense" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Daily_expense",
      tags: ["Daily_expense"],
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
            schema: { $ref: "#/components/schemas/Daily_expenseRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Daily_expense updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Daily_expense",
      tags: ["Daily_expense"],
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
          description: "Daily_expense deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
