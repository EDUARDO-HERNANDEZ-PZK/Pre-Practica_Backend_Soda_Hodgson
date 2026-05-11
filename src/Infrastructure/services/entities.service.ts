import { EntityType } from "../utils/entityTypes";
import {
  SqlEntitySettings,
  SqlColumnSettings,
} from "../builders/sqlEntitySettings";
import { IEntitiesService } from "../interface/entitiesService.interface";
import { injectable } from "tsyringe";

@injectable()
export class EntitiesService implements IEntitiesService {
  private entities = new Map<EntityType, SqlEntitySettings>();

  constructor() {
    this.buildEntities();
  }

  GetSettings(type: EntityType): SqlEntitySettings {
    const settings = this.entities.get(type);
    if (!settings) {
      throw new Error(`Entidad no encontrada: ${type}`);
    }
    return settings;
  }

  private buildEntities(): void {
        this.entities.set(EntityType.User, this.getUserSettings());
    this.entities.set(EntityType.Role, this.getRoleSettings());
    this.entities.set(EntityType.RolePermiso, this.getRolePermisoSettings());
    this.entities.set(EntityType.Permission, this.getPermissionSettings());
    this.entities.set(EntityType.Cash_Sessions, this.getCash_SessionsSettings());
    this.entities.set(EntityType.Daily_expense, this.getDaily_expenseSettings());
    this.entities.set(EntityType.Table, this.getTableSettings());
    this.entities.set(EntityType.Categories, this.getCategoriesSettings());
    this.entities.set(EntityType.Measurement_units, this.getMeasurement_unitsSettings());
    this.entities.set(EntityType.Conversions, this.getConversionsSettings());
    this.entities.set(EntityType.Sales, this.getSalesSettings());
    this.entities.set(EntityType.Sales_details, this.getSales_detailsSettings());
    this.entities.set(EntityType.Voided_sales_log, this.getVoided_sales_logSettings());
    this.entities.set(EntityType.Products, this.getProductsSettings());
  }

    
  private getUserSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("ROLE_ID", "role_id", false),
            new SqlColumnSettings("USERNAME", "username", false),
            new SqlColumnSettings("PASSWORD_HASH", "password_hash", false),
            new SqlColumnSettings("CREATE_AT", "create_at", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("USERS", columns);
  }

  private getRoleSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("DESCRIPTION", "description", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("ROLES", columns);
  }

  private getRolePermisoSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("ROLE_ID", "role_id", false),
            new SqlColumnSettings("PERMISSION_ID", "permission_id", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("ROLEPERMISOS", columns);
  }

  private getPermissionSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("DESCRIPTION", "description", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("PERMISSIONS", columns);
  }

  private getCash_SessionsSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("USER_ID", "user_id", false),
            new SqlColumnSettings("OPEN_TIME", "open_time", false),
            new SqlColumnSettings("CLOSE_TIME", "close_time", false),
            new SqlColumnSettings("OPENING_BALANCE", "opening_balance", false),
            new SqlColumnSettings("CLOSING_BALANCE_REAL", "closing_balance_real", false),
            new SqlColumnSettings("EXPECTED_CLOSING_BALANCE", "expected_closing_balance", false),
            new SqlColumnSettings("CASH_DIFFERENCE", "cash_difference", false),
            new SqlColumnSettings("STATUS", "status", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("CASH_SESSIONSS", columns);
  }

  private getDaily_expenseSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("SESSION_ID", "session_id", false),
            new SqlColumnSettings("DESCRIPTION", "description", false),
            new SqlColumnSettings("AMOUNT", "amount", false),
            new SqlColumnSettings("EXPENSE_TIME", "expense_time", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("DAILY_EXPENSES", columns);
  }

  private getTableSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("TABLE_NUMBER", "table_number", false),
            new SqlColumnSettings("STATUS", "status", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("TABLES", columns);
  }

  private getCategoriesSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("CATEGORIESS", columns);
  }

  private getMeasurement_unitsSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("ABBREVIATION", "abbreviation", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("MEASUREMENT_UNITSS", columns);
  }

  private getConversionsSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("FROM_UNI_ID", "from_uni_id", false),
            new SqlColumnSettings("TO_UNIT_ID", "to_unit_id", false),
            new SqlColumnSettings("CONVERSION_FACTOR", "conversion_factor", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("CONVERSIONSS", columns);
  }

  private getSalesSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("SESSION_ID", "session_id", false),
            new SqlColumnSettings("TABLE_ID", "table_id", false),
            new SqlColumnSettings("USER_CREATOR_ID", "user_creator_id", false),
            new SqlColumnSettings("RUC_NUMBER", "ruc_number", false),
            new SqlColumnSettings("SALE_TIME", "sale_time", false),
            new SqlColumnSettings("STATUS", "status", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("SALESS", columns);
  }

  private getSales_detailsSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("SALE_ID", "sale_id", false),
            new SqlColumnSettings("PRODUCT_ID", "product_id", false),
            new SqlColumnSettings("QUANTITY", "quantity", false),
            new SqlColumnSettings("UNIT_PRICE", "unit_price", false),
            new SqlColumnSettings("SUBTOTAL", "subtotal", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("SALES_DETAILSS", columns);
  }

  private getVoided_sales_logSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("SALE_ID", "sale_id", false),
            new SqlColumnSettings("REASON", "reason", false),
            new SqlColumnSettings("VOIDED_TIME", "voided_time", false),
            new SqlColumnSettings("USER_VOIDED", "user_voided", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("VOIDED_SALES_LOGS", columns);
  }

  private getProductsSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("CATEGORY_ID", "category_id", false),
            new SqlColumnSettings("UNIT_ID", "unit_id", false),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("DESCRIPTION", "description", false),
            new SqlColumnSettings("PRICE_SELL", "price_sell", false),
            new SqlColumnSettings("STOCK_CURRENT", "stock_current", false),
            new SqlColumnSettings("STOCK_MIN", "stock_min", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("PRODUCTSS", columns);
  }

}