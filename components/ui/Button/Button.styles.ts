import { StyleSheet } from "react-native";


export const styles = {
  primary: StyleSheet.create({
    button: {
      padding: 12,
      borderRadius: 8,
      flexBasis: "50%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#c96826",
    },

    text: {
      color: "white",
      fontSize: 16,
      fontWeight: "600",
    },

    pressed: {
      opacity: 0.7,
    },

    disabled: {
      opacity: 0.4,
    },
  }),

  secondary: StyleSheet.create({
    button: {
      padding: 12,
      borderRadius: 8,
      flexBasis: "50%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#c92e26",
    },

    text: {
      color: "white",
      fontSize: 16,
      fontWeight: "600",
    },

    pressed: {
      opacity: 0.7,
    },

    disabled: {
      opacity: 0.4,
    },
  }),

  danger: StyleSheet.create({
    button: {
      padding: 12,
      borderRadius: 8,
      flexBasis: "25%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#c96826",
    },

    text: {
      color: "white",
      fontSize: 16,
      fontWeight: "600",
    },

    pressed: {
      opacity: 0.7,
    },

    disabled: {
      opacity: 0.4,
    },
  }),
};