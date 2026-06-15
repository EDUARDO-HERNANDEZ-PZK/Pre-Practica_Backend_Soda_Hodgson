import { createClient } from "@libsql/client";

const dbUrl = process.env.TURSO_DB_URL || "not-found";
const token = process.env.TURSO_DB_AUTH_TOKEN || "not-found";

export async function initializeDatabase(): Promise<void> {
  const db = createClient({ url: dbUrl, authToken: token });

  try {

  await db.execute(`
    CREATE TABLE IF NOT EXISTS USERS (
        ID TEXT PRIMARY KEY,
        ROLE_ID TEXT,
        USERNAME TEXT,
        PASSWORD_HASH TEXT,
        CREATE_AT TEXT,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ User ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS ROLES (
        ID TEXT PRIMARY KEY,
        NAME TEXT,
        DESCRIPTION TEXT,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Role ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS ROLEPERMISOS (
        ID TEXT PRIMARY KEY,
        ROLE_ID TEXT,
        PERMISSION_ID TEXT,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ RolePermiso ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS PERMISSIONS (
        ID TEXT PRIMARY KEY,
        NAME TEXT,
        DESCRIPTION TEXT,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Permission ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS CASH_SESSIONSS (
        ID TEXT PRIMARY KEY,
        USER_ID TEXT,
        OPEN_TIME TEXT,
        CLOSE_TIME TEXT,
        OPENING_BALANCE INTEGER,
        CLOSING_BALANCE_REAL INTEGER,
        EXPECTED_CLOSING_BALANCE INTEGER,
        CASH_DIFFERENCE INTEGER,
        STATUS TEXT,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Cash_Sessions ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS DAILY_EXPENSES (
        ID TEXT PRIMARY KEY,
        SESSION_ID TEXT,
        DESCRIPTION TEXT,
        AMOUNT INTEGER,
        EXPENSE_TIME TEXT,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Daily_expense ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS TABLES (
        ID TEXT PRIMARY KEY,
        TABLE_NUMBER INTEGER,
        STATUS TEXT,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Table ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS CATEGORIESS (
        ID TEXT PRIMARY KEY,
        NAME TEXT,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Categories ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS MEASUREMENT_UNITSS (
        ID TEXT PRIMARY KEY,
        NAME TEXT,
        ABBREVIATION TEXT,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Measurement_units ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS CONVERSIONSS (
        ID TEXT PRIMARY KEY,
        FROM_UNI_ID TEXT,
        TO_UNIT_ID TEXT,
        CONVERSION_FACTOR TEXT,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Conversions ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS SALESS (
        ID TEXT PRIMARY KEY,
        SESSION_ID TEXT,
        TABLE_ID TEXT,
        USER_CREATOR_ID TEXT,
        RUC_NUMBER TEXT,
        SALE_TIME TEXT,
        STATUS TEXT,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Sales ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS SALES_DETAILSS (
        ID TEXT PRIMARY KEY,
        SALE_ID TEXT,
        PRODUCT_ID TEXT,
        QUANTITY INTEGER,
        UNIT_PRICE INTEGER,
        SUBTOTAL INTEGER,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Sales_details ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS VOIDED_SALES_LOGS (
        ID TEXT PRIMARY KEY,
        SALE_ID TEXT,
        REASON TEXT,
        VOIDED_TIME TEXT,
        USER_VOIDED INTEGER,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Voided_sales_log ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS PRODUCTSS (
    ID TEXT PRIMARY KEY,
    CATEGORY_ID TEXT,
    UNIT_ID TEXT,
    NAME TEXT,
    DESCRIPTION TEXT,
    PRICE_SELL INTEGER,
    STOCK_CURRENT INTEGER DEFAULT 0,
    STOCK_EXPIRED INTEGER DEFAULT 0,
    STOCK_DAMAGED INTEGER DEFAULT 0,
    STOCK_MIN INTEGER,
    CREATEDAT TEXT,
    UPDATEDAT TEXT,
    CREATEDBY TEXT,
    UPDATEDBY TEXT
);
`);

console.log("✔ Products ready");


  } catch (error) {
    console.error("Database init error:", error);
  } finally {
    await db.close();
  }
}