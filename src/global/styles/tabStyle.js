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
        padding: 15,
        marginHorizontal: 40,
        // margin: 5,
        height: 30,
        width: 30,
        resizeMode: 'stretch',
    }
})