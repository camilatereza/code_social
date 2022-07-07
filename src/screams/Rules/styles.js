import { StyleSheet } from "react-native";
import { normalize } from "../../components/dimensoes";
import { theme } from "../../global/styles/theme";

export const Styles = StyleSheet.create({
  container: {
    //estilo do painel geral
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.panelSecun,
    width: normalize(280),
    height: normalize(450),
    borderRadius: normalize(15),
    marginTop: normalize(40),
  },
  image: {
    width: normalize(250),
    height: normalize(400),
    borderRadius: normalize(9),
    resizeMode: "contain",
    marginHorizontal: normalize(10)
  },
  scroll: {
    width: normalize(260),
    height: normalize(430),
    marginTop: normalize(28),
    marginLeft: normalize(5),
    padding: normalize(0)
  },
})