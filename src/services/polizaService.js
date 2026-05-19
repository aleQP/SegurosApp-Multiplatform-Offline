/**
 * Servicios SQLite modernos
 */

import { db } from "../database/database";

/**
 * Insertar póliza
 */

export function insertarPoliza(numero, cliente, rfc, vigencia) {
  try {
    db.runSync(
      `
      INSERT INTO polizas
      (
        numero_poliza,
        cliente,
        rfc,
        vigencia
      )
      VALUES (?, ?, ?, ?)
      `,

      [numero, cliente, rfc, vigencia]
    );

    console.log("Póliza insertada");
  } catch (error) {
    console.log(error);
  }
}

/**
 * Buscar póliza por
 * número o RFC
 */

export function buscarPoliza(busqueda) {
  try {
    const result = db.getAllSync(
      `
      SELECT *
      FROM polizas

      WHERE
      numero_poliza LIKE ?
      OR
      rfc LIKE ?
      `,

      [`%${busqueda}%`, `%${busqueda}%`]
    );

    return result;
  } catch (error) {
    console.log(error);

    return [];
  }
}

/**
 * Obtener pólizas
 */

export function obtenerPolizas() {
  try {
    const result = db.getAllSync(
      `
      SELECT * FROM polizas
      `
    );

    return result;
  } catch (error) {
    console.log(error);

    return [];
  }
}
