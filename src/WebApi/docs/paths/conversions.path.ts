export const ConversionsPaths = {
  "/conversions": {
    get: {
      summary: "Get all Conversions",
      tags: ["Conversions"],
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
          description: "List of Conversions",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Conversions" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Conversions",
      tags: ["Conversions"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/ConversionsRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Conversions created"
        }
      }
    }
  },

  "/conversions/{id}": {
    get: {
      summary: "Get Conversions by id",
      tags: ["Conversions"],
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
          description: "Conversions found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Conversions" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Conversions",
      tags: ["Conversions"],
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
            schema: { $ref: "#/components/schemas/ConversionsRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Conversions updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Conversions",
      tags: ["Conversions"],
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
          description: "Conversions deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
