import type { Knex } from "knex";
import { TicketTableName } from "../../src/models";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TicketTableName, (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("ticket_body").notNullable();
    table.string("urgency").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TicketTableName);
}
