import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
import { styles } from "./styles";
import { findAll, deleteById, addData } from "../../utils/checkService"
import { random } from '../../utils/commands';

export function Checkpoint() {
  const [data, setData] = useState([])
  const max = data.length

  function insert() {
    const insertId = addData();

    if (insertId == null || insertId == undefined) {
      alert("Não foi possivel inserir o novo dado")
    }
  }

  function delet() {
    deleteById(id)
    alert("Excluido com sucesso: ")
}

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
          {/* <Text style={styles.text}>
             {item.id}
          </Text> */}
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
          {/* <Text style={styles.text}>
            {item.resposta}
          </Text> */}
        </>
      )
    } else {
      ''
    }
  });

  return (
    <View style={styles.container}>

      <View style={styles.btnArea}>
        <TouchableOpacity
          onPress={() => {
            findAllCheck()
          }}
          style={styles.button}
        >
          <Text style={styles.btnTexto}>Novo dado</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // insert()
            console.log(data.length)
          }}
          style={styles.button}
        >
          <Text style={styles.btnTexto}>Inserir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.panel}>
        {checkList}
      </View>
    </View>
  );
};