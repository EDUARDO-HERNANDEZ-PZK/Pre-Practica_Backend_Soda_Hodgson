export const Voided_sales_logPaths = {
  "/voided_sales_log": {
    get: {
      summary: "Get all Voided_sales_log",
      tags: ["Voided_sales_log"],
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
          description: "List of Voided_sales_log",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Voided_sales_log" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Voided_sales_log",
      tags: ["Voided_sales_log"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/Voided_sales_logRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Voided_sales_log created"
        }
      }
    }
  },

  "/voided_sales_log/{id}": {
    get: {
      summary: "Get Voided_sales_log by id",
      tags: ["Voided_sales_log"],
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
          description: "Voided_sales_log found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Voided_sales_log" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Voided_sales_log",
      tags: ["Voided_sales_log"],
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
            schema: { $ref: "#/components/schemas/Voided_sales_logRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Voided_sales_log updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Voided_sales_log",
      tags: ["Voided_sales_log"],
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
          description: "Voided_sales_log deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
