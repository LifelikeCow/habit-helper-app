import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        marginBottom: 20,
    },

    label: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 8,
    },

    bar: {
        height: 48,
        paddingHorizontal: 14,

        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,

        backgroundColor: "#fff",

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    value: {
        fontSize: 16,
        color: "#222",
    },

    arrow: {
        fontSize: 12,
        color: "#666",
    },

    dropdown: {
        marginTop: 4,

        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,

        backgroundColor: "#fff",

        overflow: "hidden",
        zIndex: 1000,
        elevation: 10,
    },

    scrollView: {
        maxHeight: 200,
    },

    option: {
        height: 48,
        paddingHorizontal: 14,

        justifyContent: "center",

        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },

    lastOption: {
        borderBottomWidth: 0,
    },

    optionText: {
        fontSize: 16,
        color: "#222",
    },
});