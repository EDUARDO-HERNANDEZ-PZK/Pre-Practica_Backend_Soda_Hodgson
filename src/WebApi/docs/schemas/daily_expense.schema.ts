export const Daily_expenseSchemas = {
  Daily_expenseRequest: {
    type: "object",
    required: [
      
        "session_id",
      
        "description",
      
        "amount",
      
        "expense_time"
      
    ],
    properties: {
      
      session_id: { type: "string" },
      
      description: { type: "string" },
      
      amount: { type: "number" },
      
      expense_time: { type: "string" },
      
    }
  },

  Daily_expense: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      session_id: { type: "string" },
      
      description: { type: "string" },
      
      amount: { type: "number" },
      
      expense_time: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
