export const Measurement_unitsPaths = {
  "/measurement_units": {
    get: {
      summary: "Get all Measurement_units",
      tags: ["Measurement_units"],
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
          description: "List of Measurement_units",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Measurement_units" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Measurement_units",
      tags: ["Measurement_units"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/Measurement_unitsRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Measurement_units created"
        }
      }
    }
  },

  "/measurement_units/{id}": {
    get: {
      summary: "Get Measurement_units by id",
      tags: ["Measurement_units"],
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
          description: "Measurement_units found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Measurement_units" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Measurement_units",
      tags: ["Measurement_units"],
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
            schema: { $ref: "#/components/schemas/Measurement_unitsRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Measurement_units updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Measurement_units",
      tags: ["Measurement_units"],
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
          description: "Measurement_units deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
