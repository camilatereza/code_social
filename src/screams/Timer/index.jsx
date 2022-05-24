import React, {useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Styles } from './styles';

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export function Timer() {
  const [number, setNumber] = useState();
  const [button, setButton] = useState('Iniciar');

  function iniciar() {
    if (timer !== null) {
      // parar o timer
      clearInterval(timer);
      timer = null;
      setButton('Iniciar');

    } else {
      //iniciar o timer
      timer = setInterval(() => {
        ss++;
  
        if (ss == 60) {
          ss = 0;
          mm++;
        }
  
        if (mm == 60) {
          mm = 0;
          hh++;
        }
  
        // formatação da hora
        let format =
          (hh < 10 ? '0' + hh : hh) + ':' +
          (mm < 10 ? '0' + mm : mm) + ':' +
          (ss < 10 ? '0' + ss : ss);
  
        setNumber(format);
  
      }, 1000)
      setButton('Parar');
    }
  }

  function limpar() {
    if(timer !== null) {
      // parar o timer
      clearInterval(timer);
      timer = null;
    }
    // zerar o timer
    setNumber('00:00:00');
    ss = 0;
    mm = 0;
    hh = 0;
    setButton('Iniciar');
  }

  return (
    <View style={Styles.container}>

      <View style={Styles.square}>
        <View style={Styles.circle}>

          <Text style={Styles.clockText}>
            {number == null ? '00:00:00': number}
          </Text>
        </View>
      </View>

      <View style={Styles.btnArea}>
        <TouchableOpacity style={Styles.button} onPress={iniciar}>
          <Text style={Styles.btnTexto}>{button}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.button} onPress={limpar}>
          <Text style={Styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}