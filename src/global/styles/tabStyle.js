import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const Styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: '90%',
        height: '10%',
        backgroundColor: '#EBEBEB',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 15
    },
    button: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 0,
    },
    text: {
        textAlign: 'auto',
        fontFamily: theme.fonts.text,
        fontSize: 13,
        color: theme.colors.buttons,
    },
    image: {
        padding: 10,
        marginHorizontal: 18,
        height: 28,
        width: 28,
        resizeMode: 'stretch',
    },
    play: {
        backgroundColor: theme.colors.buttonPlay,
        marginHorizontal: 18,
        height: 43,
        width: 43,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center'
    }
})