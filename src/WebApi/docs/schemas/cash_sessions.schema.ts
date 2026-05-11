export const Cash_SessionsSchemas = {
  Cash_SessionsRequest: {
    type: "object",
    required: [
      
        "user_id",
      
        "open_time",
      
        "close_time",
      
        "opening_balance",
      
        "closing_balance_real",
      
        "expected_closing_balance",
      
        "cash_difference",
      
        "status"
      
    ],
    properties: {
      
      user_id: { type: "string" },
      
      open_time: { type: "string" },
      
      close_time: { type: "string" },
      
      opening_balance: { type: "number" },
      
      closing_balance_real: { type: "number" },
      
      expected_closing_balance: { type: "number" },
      
      cash_difference: { type: "number" },
      
      status: { type: "string" },
      
    }
  },

  Cash_Sessions: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      user_id: { type: "string" },
      
      open_time: { type: "string" },
      
      close_time: { type: "string" },
      
      opening_balance: { type: "number" },
      
      closing_balance_real: { type: "number" },
      
      expected_closing_balance: { type: "number" },
      
      cash_difference: { type: "number" },
      
      status: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
