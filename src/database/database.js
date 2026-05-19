/**
 * Configuración SQLite moderna
 */

import * as SQLite from "expo-sqlite";

/**
 * Abrir base de datos
 */

export const db = SQLite.openDatabaseSync("polizas.db");

/**
 * Inicializar tablas
 */

export function initDatabase() {
  try {
    db.execSync(`

      CREATE TABLE IF NOT EXISTS polizas (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        numero_poliza TEXT,
        cliente TEXT,
        rfc TEXT,
        vigencia TEXT

      );

    `);

    console.log("Base de datos inicializada");
  } catch (error) {
    console.log(error);
  }
}
