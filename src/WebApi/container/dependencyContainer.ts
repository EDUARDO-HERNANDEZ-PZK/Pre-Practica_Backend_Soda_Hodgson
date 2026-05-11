import { container } from "tsyringe";
import { IProductsRepository } from "./../../Domain/repositories/productsRepository.interface";
import { ProductsRepository } from "./../../Infrastructure/repositories/products.repository";
import { IProductsService } from "./../../Application/interfaces/products.service.interface";
import { ProductsService } from "./../../Application/services/products.service";
import { ProductsController } from "./../controllers/products.controller";
import { IVoided_sales_logRepository } from "./../../Domain/repositories/voided_sales_logRepository.interface";
import { Voided_sales_logRepository } from "./../../Infrastructure/repositories/voided_sales_log.repository";
import { IVoided_sales_logService } from "./../../Application/interfaces/voided_sales_log.service.interface";
import { Voided_sales_logService } from "./../../Application/services/voided_sales_log.service";
import { Voided_sales_logController } from "./../controllers/voided_sales_log.controller";
import { ISales_detailsRepository } from "./../../Domain/repositories/sales_detailsRepository.interface";
import { Sales_detailsRepository } from "./../../Infrastructure/repositories/sales_details.repository";
import { ISales_detailsService } from "./../../Application/interfaces/sales_details.service.interface";
import { Sales_detailsService } from "./../../Application/services/sales_details.service";
import { Sales_detailsController } from "./../controllers/sales_details.controller";
import { ISalesRepository } from "./../../Domain/repositories/salesRepository.interface";
import { SalesRepository } from "./../../Infrastructure/repositories/sales.repository";
import { ISalesService } from "./../../Application/interfaces/sales.service.interface";
import { SalesService } from "./../../Application/services/sales.service";
import { SalesController } from "./../controllers/sales.controller";
import { IConversionsRepository } from "./../../Domain/repositories/conversionsRepository.interface";
import { ConversionsRepository } from "./../../Infrastructure/repositories/conversions.repository";
import { IConversionsService } from "./../../Application/interfaces/conversions.service.interface";
import { ConversionsService } from "./../../Application/services/conversions.service";
import { ConversionsController } from "./../controllers/conversions.controller";
import { IMeasurement_unitsRepository } from "./../../Domain/repositories/measurement_unitsRepository.interface";
import { Measurement_unitsRepository } from "./../../Infrastructure/repositories/measurement_units.repository";
import { IMeasurement_unitsService } from "./../../Application/interfaces/measurement_units.service.interface";
import { Measurement_unitsService } from "./../../Application/services/measurement_units.service";
import { Measurement_unitsController } from "./../controllers/measurement_units.controller";
import { ICategoriesRepository } from "./../../Domain/repositories/categoriesRepository.interface";
import { CategoriesRepository } from "./../../Infrastructure/repositories/categories.repository";
import { ICategoriesService } from "./../../Application/interfaces/categories.service.interface";
import { CategoriesService } from "./../../Application/services/categories.service";
import { CategoriesController } from "./../controllers/categories.controller";
import { ITableRepository } from "./../../Domain/repositories/tableRepository.interface";
import { TableRepository } from "./../../Infrastructure/repositories/table.repository";
import { ITableService } from "./../../Application/interfaces/table.service.interface";
import { TableService } from "./../../Application/services/table.service";
import { TableController } from "./../controllers/table.controller";
import { IDaily_expenseRepository } from "./../../Domain/repositories/daily_expenseRepository.interface";
import { Daily_expenseRepository } from "./../../Infrastructure/repositories/daily_expense.repository";
import { IDaily_expenseService } from "./../../Application/interfaces/daily_expense.service.interface";
import { Daily_expenseService } from "./../../Application/services/daily_expense.service";
import { Daily_expenseController } from "./../controllers/daily_expense.controller";
import { ICash_SessionsRepository } from "./../../Domain/repositories/cash_sessionsRepository.interface";
import { Cash_SessionsRepository } from "./../../Infrastructure/repositories/cash_sessions.repository";
import { ICash_SessionsService } from "./../../Application/interfaces/cash_sessions.service.interface";
import { Cash_SessionsService } from "./../../Application/services/cash_sessions.service";
import { Cash_SessionsController } from "./../controllers/cash_sessions.controller";
import { IPermissionRepository } from "./../../Domain/repositories/permissionRepository.interface";
import { PermissionRepository } from "./../../Infrastructure/repositories/permission.repository";
import { IPermissionService } from "./../../Application/interfaces/permission.service.interface";
import { PermissionService } from "./../../Application/services/permission.service";
import { PermissionController } from "./../controllers/permission.controller";
import { IRolePermisoRepository } from "./../../Domain/repositories/rolepermisoRepository.interface";
import { RolePermisoRepository } from "./../../Infrastructure/repositories/rolepermiso.repository";
import { IRolePermisoService } from "./../../Application/interfaces/rolepermiso.service.interface";
import { RolePermisoService } from "./../../Application/services/rolepermiso.service";
import { RolePermisoController } from "./../controllers/rolepermiso.controller";
import { IRoleRepository } from "./../../Domain/repositories/roleRepository.interface";
import { RoleRepository } from "./../../Infrastructure/repositories/role.repository";
import { IRoleService } from "./../../Application/interfaces/role.service.interface";
import { RoleService } from "./../../Application/services/role.service";
import { RoleController } from "./../controllers/role.controller";
import { IUserRepository } from "./../../Domain/repositories/userRepository.interface";
import { UserRepository } from "./../../Infrastructure/repositories/user.repository";
import { IUserService } from "./../../Application/interfaces/user.service.interface";
import { UserService } from "./../../Application/services/user.service";
import { UserController } from "./../controllers/user.controller";
import { ISingletonSqlConnection } from '../../Infrastructure/interface/dbConnection.interface';
import { SingletonSqlConnection } from '../../Infrastructure/database/dbConnection';
import { ISqlCommandOperationBuilder } from "../../Infrastructure/interface/sqlCommandOperation.interface";
import { SqlCommandOperationBuilder } from "../../Infrastructure/builders/sqlCommandOperation.builder";
import { EntitiesService } from "../../Infrastructure/services/entities.service";
import { IEntitiesService } from "../../Infrastructure/interface/entitiesService.interface";
//builder, database connection and entity service
container.registerSingleton<ISingletonSqlConnection>('ISingletonSqlConnection', SingletonSqlConnection);
container.register<ISqlCommandOperationBuilder>('IOperationBuilder', { useClass: SqlCommandOperationBuilder });
container.registerSingleton<IEntitiesService>('IEntityService', EntitiesService);

// AUTO-GENERATED MODULE REGISTRATIONS
// Products
container.register<IProductsRepository>("IProductsRepository", { useClass: ProductsRepository });
container.register<IProductsService>("IProductsService", { useClass: ProductsService });
container.register<ProductsController>("ProductsController", { useClass: ProductsController });
// Voided_sales_log
container.register<IVoided_sales_logRepository>("IVoided_sales_logRepository", { useClass: Voided_sales_logRepository });
container.register<IVoided_sales_logService>("IVoided_sales_logService", { useClass: Voided_sales_logService });
container.register<Voided_sales_logController>("Voided_sales_logController", { useClass: Voided_sales_logController });
// Sales_details
container.register<ISales_detailsRepository>("ISales_detailsRepository", { useClass: Sales_detailsRepository });
container.register<ISales_detailsService>("ISales_detailsService", { useClass: Sales_detailsService });
container.register<Sales_detailsController>("Sales_detailsController", { useClass: Sales_detailsController });
// Sales
container.register<ISalesRepository>("ISalesRepository", { useClass: SalesRepository });
container.register<ISalesService>("ISalesService", { useClass: SalesService });
container.register<SalesController>("SalesController", { useClass: SalesController });
// Conversions
container.register<IConversionsRepository>("IConversionsRepository", { useClass: ConversionsRepository });
container.register<IConversionsService>("IConversionsService", { useClass: ConversionsService });
container.register<ConversionsController>("ConversionsController", { useClass: ConversionsController });
// Measurement_units
container.register<IMeasurement_unitsRepository>("IMeasurement_unitsRepository", { useClass: Measurement_unitsRepository });
container.register<IMeasurement_unitsService>("IMeasurement_unitsService", { useClass: Measurement_unitsService });
container.register<Measurement_unitsController>("Measurement_unitsController", { useClass: Measurement_unitsController });
// Categories
container.register<ICategoriesRepository>("ICategoriesRepository", { useClass: CategoriesRepository });
container.register<ICategoriesService>("ICategoriesService", { useClass: CategoriesService });
container.register<CategoriesController>("CategoriesController", { useClass: CategoriesController });
// Table
container.register<ITableRepository>("ITableRepository", { useClass: TableRepository });
container.register<ITableService>("ITableService", { useClass: TableService });
container.register<TableController>("TableController", { useClass: TableController });
// Daily_expense
container.register<IDaily_expenseRepository>("IDaily_expenseRepository", { useClass: Daily_expenseRepository });
container.register<IDaily_expenseService>("IDaily_expenseService", { useClass: Daily_expenseService });
container.register<Daily_expenseController>("Daily_expenseController", { useClass: Daily_expenseController });
// Cash_Sessions
container.register<ICash_SessionsRepository>("ICash_SessionsRepository", { useClass: Cash_SessionsRepository });
container.register<ICash_SessionsService>("ICash_SessionsService", { useClass: Cash_SessionsService });
container.register<Cash_SessionsController>("Cash_SessionsController", { useClass: Cash_SessionsController });
// Permission
container.register<IPermissionRepository>("IPermissionRepository", { useClass: PermissionRepository });
container.register<IPermissionService>("IPermissionService", { useClass: PermissionService });
container.register<PermissionController>("PermissionController", { useClass: PermissionController });
// RolePermiso
container.register<IRolePermisoRepository>("IRolePermisoRepository", { useClass: RolePermisoRepository });
container.register<IRolePermisoService>("IRolePermisoService", { useClass: RolePermisoService });
container.register<RolePermisoController>("RolePermisoController", { useClass: RolePermisoController });
// Role
container.register<IRoleRepository>("IRoleRepository", { useClass: RoleRepository });
container.register<IRoleService>("IRoleService", { useClass: RoleService });
container.register<RoleController>("RoleController", { useClass: RoleController });
// User
container.register<IUserRepository>("IUserRepository", { useClass: UserRepository });
container.register<IUserService>("IUserService", { useClass: UserService });
container.register<UserController>("UserController", { useClass: UserController });