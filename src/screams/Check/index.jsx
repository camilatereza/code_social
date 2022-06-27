import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { connection } from "../../database/database_service";
import { random } from "../../utils/commands";
import { styles } from "./styles";

const db = connection.getConnection()

export function Checkpoint() {
  const [checkData, setCheckData] = useState([])

  let search = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM checkpoint WHERE id_check = ?', [random(0, 12)],
        (_, results) => {
          var len = results.rows.length;
          if (len > 0) {
            setCheckData(results.rows.item(0))
          } else {
            alert('Dado não encontrado')
          };
        }
      );
    });
  }

  return (

    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          search()
        }}
      >
        <Text style={styles.btnTexto}>Novo dado</Text>
      </TouchableOpacity>

      <View style={styles.panel}>

        <Text style={styles.text} >
          {checkData.titulo}
        </Text>

      </View>
    </View>
  );
}