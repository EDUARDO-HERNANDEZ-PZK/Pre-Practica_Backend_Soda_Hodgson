export const Sales_detailsPaths = {
  "/sales_details": {
    get: {
      summary: "Get all Sales_details",
      tags: ["Sales_details"],
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
          description: "List of Sales_details",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Sales_details" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Sales_details",
      tags: ["Sales_details"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/Sales_detailsRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Sales_details created"
        }
      }
    }
  },

  "/sales_details/{id}": {
    get: {
      summary: "Get Sales_details by id",
      tags: ["Sales_details"],
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
          description: "Sales_details found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Sales_details" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Sales_details",
      tags: ["Sales_details"],
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
            schema: { $ref: "#/components/schemas/Sales_detailsRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Sales_details updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Sales_details",
      tags: ["Sales_details"],
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
          description: "Sales_details deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
