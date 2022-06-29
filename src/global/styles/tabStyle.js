import { StyleSheet } from "react-native";
import { normalize } from "../../components/dimensoes";
import { theme } from "./theme";

export const Styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: normalize(290),
        height: normalize(65),
        backgroundColor: theme.colors.backgroundColor,
        alignItems: 'center',
        marginHorizontal: normalize(15),
        marginVertical: normalize(15)
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
        fontSize: normalize(12),
        color: theme.colors.buttons,
    },
    image: {
        padding: normalize(12),
        marginHorizontal: normalize(16),
        height: normalize(15),
        width: normalize(15),
        resizeMode: 'stretch',
    },
    dado: {
        backgroundColor: theme.colors.buttonCenter,
        marginHorizontal: normalize(15),
        height: normalize(38),
        width: normalize(38),
        borderRadius: normalize(9),
        alignItems: 'center',
        justifyContent: 'center'
    }
})