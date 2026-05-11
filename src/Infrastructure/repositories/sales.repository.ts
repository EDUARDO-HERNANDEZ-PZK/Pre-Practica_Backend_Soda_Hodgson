/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { ISalesRepository } from "../../Domain/repositories/salesRepository.interface";
        import Sales from "../../Domain/entities/sales";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class SalesRepository implements ISalesRepository {

  /* AUTO-GENERATED-PROPERTIES START */
        private readonly _operationBuilder: ISqlCommandOperationBuilder;
private readonly _connection: ISingletonSqlConnection;
        /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
        constructor(
  @inject("IOperationBuilder") operationBuilder: ISqlCommandOperationBuilder,
  @inject("ISingletonSqlConnection") connection: ISingletonSqlConnection
) {
  this._operationBuilder = operationBuilder;
  this._connection = connection;
}
        /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
        async findAll(page: number = 1, pageSize: number = 100): Promise<Sales[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.Sales)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      session_id: row["SESSION_ID"],
table_id: row["TABLE_ID"],
user_creator_id: row["USER_CREATOR_ID"],
ruc_number: row["RUC_NUMBER"],
sale_time: row["SALE_TIME"],
status: row["STATUS"],
createdAt: row["CREATEDAT"],
updatedAt: row["UPDATEDAT"],
createdBy: row["CREATEDBY"],
updatedBy: row["UPDATEDBY"],
    } as Sales)
);
}

async findById(id: string): Promise<Sales | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.Sales)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      session_id: row["SESSION_ID"],
table_id: row["TABLE_ID"],
user_creator_id: row["USER_CREATOR_ID"],
ruc_number: row["RUC_NUMBER"],
sale_time: row["SALE_TIME"],
status: row["STATUS"],
createdAt: row["CREATEDAT"],
updatedAt: row["UPDATEDAT"],
createdBy: row["CREATEDBY"],
updatedBy: row["UPDATEDBY"],
  } as Sales;
}

async create(entity: Sales): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Sales, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: Sales): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Sales, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: Sales): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Sales, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
