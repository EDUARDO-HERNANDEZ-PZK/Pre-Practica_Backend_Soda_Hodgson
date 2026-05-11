/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { ICash_SessionsRepository } from "../../Domain/repositories/cash_sessionsRepository.interface";
        import Cash_sessions from "../../Domain/entities/cash_sessions";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class Cash_SessionsRepository implements ICash_SessionsRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<Cash_sessions[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.Cash_Sessions)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      user_id: row["USER_ID"],
open_time: row["OPEN_TIME"],
close_time: row["CLOSE_TIME"],
opening_balance: row["OPENING_BALANCE"],
closing_balance_real: row["CLOSING_BALANCE_REAL"],
expected_closing_balance: row["EXPECTED_CLOSING_BALANCE"],
cash_difference: row["CASH_DIFFERENCE"],
status: row["STATUS"],
createdAt: row["CREATEDAT"],
updatedAt: row["UPDATEDAT"],
createdBy: row["CREATEDBY"],
updatedBy: row["UPDATEDBY"],
    } as Cash_sessions)
);
}

async findById(id: string): Promise<Cash_sessions | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.Cash_Sessions)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      user_id: row["USER_ID"],
open_time: row["OPEN_TIME"],
close_time: row["CLOSE_TIME"],
opening_balance: row["OPENING_BALANCE"],
closing_balance_real: row["CLOSING_BALANCE_REAL"],
expected_closing_balance: row["EXPECTED_CLOSING_BALANCE"],
cash_difference: row["CASH_DIFFERENCE"],
status: row["STATUS"],
createdAt: row["CREATEDAT"],
updatedAt: row["UPDATEDAT"],
createdBy: row["CREATEDBY"],
updatedBy: row["UPDATEDBY"],
  } as Cash_sessions;
}

async create(entity: Cash_sessions): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Cash_Sessions, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: Cash_sessions): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Cash_Sessions, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: Cash_sessions): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Cash_Sessions, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
