import { Dimensions, StyleSheet } from "react-native";
import { normalize } from "../../components/dimensoes";
import { theme } from "../../global/styles/theme";

const widthD = Dimensions.get("screen").width;
const heightD = Dimensions.get("screen").height;

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
    width: widthD/1.15,
    height: heightD/1.55,
    borderRadius: normalize(15),
    marginTop: normalize(40),
  },
  image: {
    width: widthD/1.3,
    height: heightD/1.78,
    borderRadius: normalize(9),
    resizeMode: "contain",
    marginHorizontal: normalize(10)
  },
  scroll: {
    width: widthD/1.23,
    height: heightD/1.23,
    marginTop: normalize(28),
    marginLeft: normalize(5),
    padding: normalize(0)
  },
})