/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { IMeasurement_unitsRepository } from "../../Domain/repositories/measurement_unitsRepository.interface";
        import Measurement_units from "../../Domain/entities/measurement_units";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class Measurement_unitsRepository implements IMeasurement_unitsRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<Measurement_units[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.Measurement_units)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      name: row["NAME"],
abbreviation: row["ABBREVIATION"],
createdAt: row["CREATEDAT"],
updatedAt: row["UPDATEDAT"],
createdBy: row["CREATEDBY"],
updatedBy: row["UPDATEDBY"],
    } as Measurement_units)
);
}

async findById(id: string): Promise<Measurement_units | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.Measurement_units)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      name: row["NAME"],
abbreviation: row["ABBREVIATION"],
createdAt: row["CREATEDAT"],
updatedAt: row["UPDATEDAT"],
createdBy: row["CREATEDBY"],
updatedBy: row["UPDATEDBY"],
  } as Measurement_units;
}

async create(entity: Measurement_units): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Measurement_units, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: Measurement_units): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Measurement_units, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: Measurement_units): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Measurement_units, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
