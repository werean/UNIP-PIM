import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("tickets", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("ticket_body").notNullable();
    table.string("urgency").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("tickets");
}
