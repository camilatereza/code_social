import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connection } from "../../database/database_service";
import { styles } from "./styles";

const db = connection.getConnection()

export function Checkpoint() {
  const [checkData, setCheckData] = useState({})

  let searchCheck = () => {
    console.log(checkData)
    setCheckData({}); //será uma lista vazia

    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM checkpoint WHERE id_check = ?', [3],
        (results) => {
          var len = results.rows.length;
          if (len > 0) {
            setCheckData(results.rows.item(0))
          } else {
            alert('Nenhum dado encontrado')
          }
        }
      )
    })
    console.log(checkData)
  }

  return (

    <View style={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.text} >
          {checkData.titulo}
        </Text>
        <Text style={styles.text} >
          {checkData.descricao}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={searchCheck}>
          <Text style={styles.btnTexto}>Novo dado</Text>
        </TouchableOpacity>
    </View>
  );
}

function random() {
  return (
    Math.floor(Math.random() * 13 + 1)
  )
}