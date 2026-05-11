import { ProductsSchemas } from "./schemas/products.schema";
import { ProductsPaths } from "./paths/products.path";
import { Voided_sales_logSchemas } from "./schemas/voided_sales_log.schema";
import { Voided_sales_logPaths } from "./paths/voided_sales_log.path";
import { Sales_detailsSchemas } from "./schemas/sales_details.schema";
import { Sales_detailsPaths } from "./paths/sales_details.path";
import { SalesSchemas } from "./schemas/sales.schema";
import { SalesPaths } from "./paths/sales.path";
import { ConversionsSchemas } from "./schemas/conversions.schema";
import { ConversionsPaths } from "./paths/conversions.path";
import { Measurement_unitsSchemas } from "./schemas/measurement_units.schema";
import { Measurement_unitsPaths } from "./paths/measurement_units.path";
import { CategoriesSchemas } from "./schemas/categories.schema";
import { CategoriesPaths } from "./paths/categories.path";
import { TableSchemas } from "./schemas/table.schema";
import { TablePaths } from "./paths/table.path";
import { Daily_expenseSchemas } from "./schemas/daily_expense.schema";
import { Daily_expensePaths } from "./paths/daily_expense.path";
import { Cash_SessionsSchemas } from "./schemas/cash_sessions.schema";
import { Cash_SessionsPaths } from "./paths/cash_sessions.path";
import { PermissionSchemas } from "./schemas/permission.schema";
import { PermissionPaths } from "./paths/permission.path";
import { RolePermisoSchemas } from "./schemas/rolepermiso.schema";
import { RolePermisoPaths } from "./paths/rolepermiso.path";
import { RoleSchemas } from "./schemas/role.schema";
import { RolePaths } from "./paths/role.path";
import { UserSchemas } from "./schemas/user.schema";
import { UserPaths } from "./paths/user.path";
export const OpenApiSpecification = {
  openapi: "3.0.0",
  info: {
    title: "My API",
    version: "1.0.0",
    description: "Auto-generated API documentation"
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local server"
    }
  ],
  paths: {
    ...ProductsPaths,
    ...Voided_sales_logPaths,
    ...Sales_detailsPaths,
    ...SalesPaths,
    ...ConversionsPaths,
    ...Measurement_unitsPaths,
    ...CategoriesPaths,
    ...TablePaths,
    ...Daily_expensePaths,
    ...Cash_SessionsPaths,
    ...PermissionPaths,
    ...RolePermisoPaths,
    ...RolePaths,
    ...UserPaths,},
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    },
    schemas: {
      ...ProductsSchemas,
      ...Voided_sales_logSchemas,
      ...Sales_detailsSchemas,
      ...SalesSchemas,
      ...ConversionsSchemas,
      ...Measurement_unitsSchemas,
      ...CategoriesSchemas,
      ...TableSchemas,
      ...Daily_expenseSchemas,
      ...Cash_SessionsSchemas,
      ...PermissionSchemas,
      ...RolePermisoSchemas,
      ...RoleSchemas,
      ...UserSchemas,}
  }
};