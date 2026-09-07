import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //main screen container
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#1A1818"
  },
  //--------------------------
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
  //---------------------
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

  bottomButtonGroup: {
    position: "absolute",
    bottom: 20,
    left: 15,
    right: 15,

    flexDirection: "row",
    justifyContent: "center",
    gap: 60,
  },
  settingsRowButtonGroup: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    width: "50%",
    left:100
  },
  //------------------------
  //habit-list 
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
    backgroundColor: "rgba(26, 24, 24, 0.5)",
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
  //------------------------
  //modal settings
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    width: "25%",
    height: "70%",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#2A2A2A",
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 22,
    marginBottom: 20,
    color: "white"
  },

  widget: {
    width: "100%",
    padding: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white"
  },
  
});

export default styles;