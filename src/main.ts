import "reflect-metadata";
//AUTO-IMPORT-DOTENV
import "dotenv/config";
import express from "express";
// import { initializeDatabase } from "./Infrastructure/database/initializeDatabase";
//AUTO-IMPORT-CONTAINER
import "./WebApi/container/dependencyContainer";
//AUTO-IMPORT-ROUTES
import productsRoutes from "./WebApi/routes/products.routes";
import voided_sales_logRoutes from "./WebApi/routes/voided_sales_log.routes";
import sales_detailsRoutes from "./WebApi/routes/sales_details.routes";
import salesRoutes from "./WebApi/routes/sales.routes";
import conversionsRoutes from "./WebApi/routes/conversions.routes";
import measurement_unitsRoutes from "./WebApi/routes/measurement_units.routes";
import categoriesRoutes from "./WebApi/routes/categories.routes";
import tableRoutes from "./WebApi/routes/table.routes";
import daily_expenseRoutes from "./WebApi/routes/daily_expense.routes";
import cash_sessionsRoutes from "./WebApi/routes/cash_sessions.routes";
import permissionRoutes from "./WebApi/routes/permission.routes";
import rolepermisoRoutes from "./WebApi/routes/rolepermiso.routes";
import roleRoutes from "./WebApi/routes/role.routes";
import userRoutes from "./WebApi/routes/user.routes";
//AUTO-IMPORT-OPENAPI
import { apiReference } from "@scalar/express-api-reference";
import { OpenApiSpecification } from "./WebApi/docs/openapi";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//AUTO-REGISTER-OPENAPI
app.get("/api-docs", async (req, res, next) => {
  try {
    const scalar = await import("@scalar/express-api-reference");

    const middleware = scalar.apiReference({
      content: OpenApiSpecification,
    }) as express.RequestHandler;

    return middleware(req, res, next);
  } catch (error) {
    next(error);
  }
});

app.get("/", (req, res) => {
  res.send("Soda Hudson System API working!");
});


//AUTO-REGISTER-ROUTES
app.use("/products", productsRoutes);
app.use("/voided_sales_log", voided_sales_logRoutes);
app.use("/sales_details", sales_detailsRoutes);
app.use("/sales", salesRoutes);
app.use("/conversions", conversionsRoutes);
app.use("/measurement_units", measurement_unitsRoutes);
app.use("/categories", categoriesRoutes);
app.use("/table", tableRoutes);
app.use("/daily_expense", daily_expenseRoutes);
app.use("/cash_sessions", cash_sessionsRoutes);
app.use("/permission", permissionRoutes);
app.use("/rolepermiso", rolepermisoRoutes);
app.use("/role", roleRoutes);
app.use("/user", userRoutes);

// async function startServer() {
// //   await initializeDatabase();

//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// }

// startServer();

export default app;