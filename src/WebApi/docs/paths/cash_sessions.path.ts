export const Cash_SessionsPaths = {
  "/cash_sessions": {
    get: {
      summary: "Get all Cash_Sessions",
      tags: ["Cash_Sessions"],
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
          description: "List of Cash_Sessions",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Cash_Sessions" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Cash_Sessions",
      tags: ["Cash_Sessions"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/Cash_SessionsRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Cash_Sessions created"
        }
      }
    }
  },

  "/cash_sessions/{id}": {
    get: {
      summary: "Get Cash_Sessions by id",
      tags: ["Cash_Sessions"],
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
          description: "Cash_Sessions found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Cash_Sessions" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Cash_Sessions",
      tags: ["Cash_Sessions"],
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
            schema: { $ref: "#/components/schemas/Cash_SessionsRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Cash_Sessions updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Cash_Sessions",
      tags: ["Cash_Sessions"],
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
          description: "Cash_Sessions deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
