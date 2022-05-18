import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        //estilo do painel geral
        flex: 1,
        backgroundColor: theme.colors.backgroundColor,
        alignItems: 'center'
    },
    panel:{
        //estilo do painel de checkpoint
        backgroundColor: '#AE91E1',
        width: '80%',
        height: '75%',
        justifyContent: 'center',
        margin: 90,
        borderRadius: 40
    },
    text: {
        //estilo dos comandos
        color: theme.colors.heading,
        fontFamily: theme.fonts.text,
        fontSize: 12.5,
        textAlign: 'justify',
        margin: 30
    }
})