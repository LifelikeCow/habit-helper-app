import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //main screen container
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#1A1818"
  },
  // block positionings
  centerBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 200,
    height: 200,
  },

  // Button stylings  
  buttonGroup: {
    width: "80%",
    gap: 12,
  },

  button: {
    padding: 15,
    backgroundColor: "#AD6E6E",
    borderRadius: 10,
    alignItems: "center",
  },

  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "50%",
    justifyContent: "center",
    alignContent: "center",
  },

  floatingButton: {
    position: "absolute",
    bottom: 50,
    zIndex: 999,
    elevation: 10,
  },

  saveButton: {
    position: "absolute",
    bottom: 50,  
    right: 15,
    zIndex: 999,
    elevation: 10,
  },
    //change button
  habitList: {
    maxHeight: 300,
  },

  listContent: {
    gap: 10,
  },

  habitItem: {
    padding: 15,
    backgroundColor: "#2A2A2A",
    borderRadius: 10,
  },

  habitListContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1A1818",
  },

  habitTitle: {
    fontSize: 22,
    color: "white",
    marginBottom: 20,
  },

  habitText: {
    color: "white",
  },

  text: {
    fontSize: 24,
    marginBottom: 20,
    color: "white",
  },

  section:{
    justifyContent: "center",
    alignItems: "center",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    width: "45%",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  widget: {
    width: "100%",
    padding: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 10,
  },
  settingsRow: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    width: "100%",
  },
});

export default styles;