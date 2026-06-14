import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 8,
        flexBasis: "50%",
        alignItems: "center",
        justifyContent: "center",

    },

    text: {
        color: "white",
        fontSize: 16,
        fontWeight: 600,

    },

    primary: {
        backgroundColor: "#c96826",
    },

    secondary: {
        backgroundColor: "#c92e26",

    },
    danger: {

        backgroundColor: "red",
    },

    pressed: {
        opacity: 0.7,
    },

    disabled: {
        opacity: 0.4,
    },
});