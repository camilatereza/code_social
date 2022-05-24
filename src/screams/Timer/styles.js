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
    clock: {
      fontSize: 40,
      color: theme.colors.backgroundColor,
      fontFamily: theme.fonts.text
    }
  })