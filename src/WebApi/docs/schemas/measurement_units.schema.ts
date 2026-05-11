export const Measurement_unitsSchemas = {
  Measurement_unitsRequest: {
    type: "object",
    required: [
      
        "name",
      
        "abbreviation"
      
    ],
    properties: {
      
      name: { type: "string" },
      
      abbreviation: { type: "string" },
      
    }
  },

  Measurement_units: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      name: { type: "string" },
      
      abbreviation: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
