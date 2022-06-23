import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connection } from "../../database/database_service";
import { newData } from "../../utils/dataCheck";
import { styles } from "./styles";

const db = connection.getConnection()

export function Checkpoint() {
  const [checkData, setCheckData] = useState([])

  return (

    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setCheckData([]);
          setCheckData(newData());
        }}
      >
        <Text style={styles.btnTexto}>Novo dado</Text>
      </TouchableOpacity>

      <View style={styles.panel}>

        <Text style={styles.text} >
          {checkData.desafio}
        </Text>
        {/* <Text style={styles.text} >
          {checkData.descricao}
        </Text> */}

      </View>
    </View>
  );
}