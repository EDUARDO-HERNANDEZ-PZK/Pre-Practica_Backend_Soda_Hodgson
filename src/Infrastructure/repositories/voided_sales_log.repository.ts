/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { IVoided_sales_logRepository } from "../../Domain/repositories/voided_sales_logRepository.interface";
        import Voided_sales_log from "../../Domain/entities/voided_sales_log";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class Voided_sales_logRepository implements IVoided_sales_logRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<Voided_sales_log[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.Voided_sales_log)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      sale_id: row["SALE_ID"],
reason: row["REASON"],
voided_time: row["VOIDED_TIME"],
user_voided: row["USER_VOIDED"],
createdAt: row["CREATEDAT"],
updatedAt: row["UPDATEDAT"],
createdBy: row["CREATEDBY"],
updatedBy: row["UPDATEDBY"],
    } as Voided_sales_log)
);
}

async findById(id: string): Promise<Voided_sales_log | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.Voided_sales_log)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      sale_id: row["SALE_ID"],
reason: row["REASON"],
voided_time: row["VOIDED_TIME"],
user_voided: row["USER_VOIDED"],
createdAt: row["CREATEDAT"],
updatedAt: row["UPDATEDAT"],
createdBy: row["CREATEDBY"],
updatedBy: row["UPDATEDBY"],
  } as Voided_sales_log;
}

async create(entity: Voided_sales_log): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Voided_sales_log, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: Voided_sales_log): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Voided_sales_log, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: Voided_sales_log): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Voided_sales_log, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
