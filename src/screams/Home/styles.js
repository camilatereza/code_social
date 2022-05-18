import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const Styles = StyleSheet.create({
    container: {
        //estilo do painel geral
        flex: 1,
        backgroundColor: theme.colors.backgroundColor,
        alignItems: 'center'
    },
    panel: {
        //estilo do painel inicial
        backgroundColor: '#817CCC',
        width: '100%',
        height: '28%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    title: {
        //estilo do titulo
        color: theme.colors.heading,
        fontFamily: theme.fonts.title,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 32,
        marginTop: 107
    },
    commands:{
        //estilo do painel de comandos
        backgroundColor: '#AE91E1',
        width: '55%',
        height: '40%',
        margin: 85,
        borderRadius: 20,
        justifyContent: 'center' 
    },
    commands_data: {
        //estilo dos comandos
        color: theme.colors.heading,
        fontFamily: theme.fonts.text,
        fontSize: 16,
        margin: 4,
        marginVertical: 5
    }
})