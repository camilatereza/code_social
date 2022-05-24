import { StyleSheet } from "react-native";
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
      borderRadius: 40,
      height: 295,
      width: 295,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.panelSecun,
    },
    circle: {
      borderRadius: 200,
      height: 230,
      width: 230,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.panelGeneral
    },
    clockText: {
      fontSize: 40,
      color: theme.colors.backgroundColor,
      fontFamily: theme.fonts.text,
      justifyContent: 'center',
      fontWeight: 'bold'
    },
    btnArea: {
      flexDirection: 'row',
      marginTop: 35,
      height: 20,
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.panelSecun,
      height: 70,
      width: 70,
      margin: 20,
      borderRadius: 9,
    },
    btnTexto: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.heading,
      fontFamily: theme.fonts.text
    }
  })