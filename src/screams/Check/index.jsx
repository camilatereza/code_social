import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { openConnection } from "../../database/database_service";
import { random } from "../../utils/commands";
import { styles } from "./styles";

const db = openConnection()

export function Checkpoint() {
  const [checkData, setCheckData] = useState([])

  function search () {
    return new Promise((resolve, reject) =>
    db.transaction(tx => {
      tx.executeSql('select * from checkpoint', [],
        (_, { rows }) => {
          setCheckData(resolve(rows))
        }),
        (sqlError) => {
          console.log(sqlError);
        }
    }, (txError) => {
      console.log(txError);
    }))
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
          teste
          {console.log(checkData)}
        </Text>

      </View>
    </View>
  );
}