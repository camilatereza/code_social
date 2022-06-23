import { StyleSheet } from "react-native";
import { normalize } from "../../components/dimensoes";
import { theme } from "../../global/styles/theme";

export const Styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    square: {
      borderRadius: normalize(40),
      height: normalize(250),
      width: normalize(250),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.panelSecun,
    },
    circle: {
      borderRadius: normalize(200),
      height: normalize(190),
      width: normalize(190),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.panelGeneral
    },
    clockText: {
      fontSize: normalize(40),
      color: theme.colors.backgroundColor,
      fontFamily: theme.fonts.text,
      justifyContent: 'center',
      fontWeight: 'bold'
    },
    btnArea: {
      flexDirection: 'row',
      marginTop: normalize(40),
      height: normalize(20),
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.panelGeneral,
      height: normalize(60),
      width: normalize(60),
      margin: normalize(20),
      borderRadius: normalize(9),
    },
    btnTexto: {
      fontSize: normalize(18),
      fontWeight: 'bold',
      color: theme.colors.heading,
      fontFamily: theme.fonts.text
    }
  })