/**
 * Pantalla principal
 */

import React, { useEffect, useState } from "react";

import { View, Text, Button, FlatList, TextInput } from "react-native";

import {
  insertarPoliza,
  obtenerPolizas,
  buscarPoliza,
} from "../services/polizaService";

import { initDatabase } from "../database/database";

export default function HomeScreen() {
  /**
   * Estado local
   */

  const [polizas, setPolizas] = useState([]);

  const [busqueda, setBusqueda] = useState("");

  /**
   * Inicializar SQLite
   */

  useEffect(() => {
    initDatabase();

    cargarPolizas();
  }, []);

  /**
   * Obtener datos
   */

  function cargarPolizas() {
    const data = obtenerPolizas();

    setPolizas(data);
  }

  /**
   * Insertar póliza
   */

  function agregarPoliza() {
    insertarPoliza("POL-001", "Bruce Wayne", "WAPB700215XXX", "2025");
    insertarPoliza("POL-002", "Clark Kent", "KEC850418XXX", "2026");
    insertarPoliza("POL-003", "Peter Parker", "PAAP950810XXX", "2025");
    insertarPoliza("POL-004", "Tony Stark", "SATO700529A10", "2026");
    insertarPoliza("POL-005", "Arturo Belano", "BEA531203F78", "2025");

    cargarPolizas();
  }

  /**
   * Consultar póliza
   */

  function consultarPoliza() {
    if (!busqueda) {
      cargarPolizas();

      return;
    }

    const resultado = buscarPoliza(busqueda);

    setPolizas(resultado);
  }

  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 10,
        }}>
        Consulta Offline
      </Text>

      <Button title="Agregar póliza" onPress={agregarPoliza} />

      {/* INPUT */}

      <TextInput
        placeholder="Buscar por póliza o RFC"
        value={busqueda}
        onChangeText={setBusqueda}
        style={{
          borderWidth: 1,
          padding: 10,
          marginTop: 20,
          marginBottom: 10,
        }}
      />

      {/* BOTÓN CONSULTAR */}

      <Button title="Consultar" onPress={consultarPoliza} />

      {/* RESULTADOS */}

      <FlatList
        data={polizas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 1,
              padding: 10,
              marginTop: 10,
            }}>
            <Text>
              Póliza:
              {item.numero_poliza}
            </Text>

            <Text>
              Cliente:
              {item.cliente}
            </Text>

            <Text>
              RFC:
              {item.rfc}
            </Text>

            <Text>
              Vigencia:
              {item.vigencia}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
