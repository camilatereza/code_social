import { StyleSheet } from "react-native";
import { normalize } from "../../components/dimensoes";
import { theme } from "../../global/styles/theme";

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
        fontSize: normalize(35),
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
        width: normalize(270),
        height: normalize(250),
        marginVertical: normalize(25),
        borderRadius: normalize(20),
        justifyContent: 'center',
    },
    commands_data: {
        //estilo do texto comandos
        color: theme.colors.heading,
        fontFamily: theme.fonts.text,
        fontSize: normalize(15),
        margin: normalize(3),
        marginVertical: normalize(5)
    },
    chosen: {
        //painel de dados escolhidos
        fontFamily: theme.fonts.text,
        fontSize: normalize(13),
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
        fontSize: normalize(16),
        fontWeight: 'bold',
        color: theme.colors.heading,
        fontFamily: theme.fonts.text
    }
})