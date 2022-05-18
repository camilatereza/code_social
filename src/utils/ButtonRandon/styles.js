import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const Styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.button,
        borderRadius: 14,
        alignContent: 'center'
    },

    image: {
        width: 30,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    description: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 10,
        textAlign: 'justify'
    }
})