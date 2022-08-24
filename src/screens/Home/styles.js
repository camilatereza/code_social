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
        alignItems: 'center',
    },
    panel: {
        //estilo do painel inicial
        backgroundColor: theme.colors.panelGeneral,
        width: normalize(325),
        height: normalize(155),
        borderBottomLeftRadius: normalize(50),
        borderBottomRightRadius: normalize(50),
    },
    title: {
        //estilo do titulo
        color: theme.colors.heading,
        fontFamily: theme.fonts.title,
        textAlign: 'center',
        fontSize: 35,
        marginBottom: normalize(25),
        marginTop: normalize(70)
    },
    content: {
        //view que reune todo o conteudo de comandos
        justifyContent: "center",
        alignItems: "center",
        marginTop: normalize(20),
    },
    commands: {
        //estilo do painel de comandos
        backgroundColor: theme.colors.panelSecun,
        width: widthD/1.3,
        height: heightD/2.5,
        marginVertical: normalize(25),
        borderRadius: normalize(20),
        justifyContent: 'center',
    },
    commands_data:(colorScheme) =>({
        //estilo do tex=>to comandos
        color: theme.colors.heading,
        // color: colorScheme === true ? "#000" : theme.colors.heading,
        fontFamily: theme.fonts.text,
        fontSize: 13,
        margin: normalize(3),
        marginVertical: normalize(5)
    }),
    chosen: {
        //painel de dados escolhidos
        fontFamily: theme.fonts.text,
        fontSize: 15,
        color: theme.colors.selectItem,
        height: normalize(180),
        width: normalize(270),
        textAlign: "center",
    },
    selector: {
        //componente para selecionar os comandos
        height: normalize(15),
        width: normalize(15),
        marginHorizontal: normalize(15),
        marginVertical: normalize(5),
        backgroundColor: theme.colors.selectItem,
        borderColor: theme.colors.selectItem
    },
    bntArea: {
        //botões lado a lado
        flexDirection: 'row',
        marginTop: normalize(10),
        height: normalize(60),
    },
    button: {
        //estilo dos botões
        justifyContent: 'center',
        marginHorizontal: normalize(15),
        alignItems: 'center',
        backgroundColor: theme.colors.panelGeneral,
        height: normalize(40),
        width: normalize(70),
        borderRadius: normalize(9),
    },
    btnTexto: {
        //texto de cada botão
        fontSize: 15,
        fontWeight: 'bold',
        color: theme.colors.heading,
        fontFamily: theme.fonts.text
    },

})