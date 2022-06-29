import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { styles } from "./styles";
import { findAll } from "../../utils/checkService"
import { random } from '../../utils/commands';

export function Checkpoint() {
  const [data, setData] = useState([])
  const max = data.length

  function findAllCheck() {
    findAll().then((response) => {
      setData(response._array);
    }), (error) => {
      console.log(error);
    }
  }

  const id = random(0, max);
  const checkList = data.map((item, index) => {
    if (index == id) {
      return (
        <>
          <Text style={styles.title}>
            {item.titulo}
          </Text>
          <Text style={styles.text}>
            {item.descricao}
          </Text>
          <Text style={styles.text}>
            {item.desafio}
          </Text>
          <Text style={styles.font}>
            {item.fonte}
          </Text>
        </>
      )
    } else {
      ''
    }
  });

  return (
    <View style={styles.container}>

        <TouchableOpacity
          onPress={() => {
            findAllCheck()
          }}
          style={styles.button}
        >
          <Text style={styles.btnTexto}>Novo dado</Text>
        </TouchableOpacity>

      <View style={styles.panel}>
        {checkList}
      </View>
    </View>
  );
};