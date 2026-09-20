import { Modal, View, Text } from "react-native";
import Button from "@/components/ui/Button/Button";
import { useRouter } from "expo-router";
import styles from "../../styles/globalStyles";
import { useState } from "react";
import DropDownBar from "@/components/ui/DropDown/dropdown";

//need extra props for this component,that implements a useState that will affect
//the switches for the widgets (frequency,duration,quantity)
//WORKING ON ^
type Props = {
    visible: boolean;
    onClose: () => void;
    onSave: () => void;
};


export default function HabitSettingModal({ visible, onClose, onSave }: Props) {
  
    const [isPressed,setPress] = useState<string>("Daily");
    const [quantity, setQuantity] = useState("Once");
    const [frequency, setFrequency] = useState("Every day");
    const [duration, setDuration] = useState("10 minutes");

    const quantities = [
        "Once",
        "Twice",
        "Three times",
        "Four times",
        "Five times",
        "Six times",
        "Seven times",
        "Eight times",
        "Nine times",
        "Ten times"
    ];

    const frequencies = [
        "Every day",
        "Every week",
        "3 times a week",
        "5 times a week"
    ];

    const durations = [
        "5 minutes",
        "10 minutes",
        "15 minutes",
        "20 minutes",
        "30 minutes",
        "45 minutes",
        "60 minutes"
    ];

const handlePress = () => {

  
}

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>

          <Text style={styles.modalTitle}>
            Habit Settings
          </Text>

          <View style={styles.widget}>
            <Text>Frequency</Text>
            <View style={styles.settingsRowButtonGroup}>
              <Button title={"Daily"} variant= "secondary" onPress={() => setPress("Daily")} disabled={isPressed === "Daily"}/>
              <Button title={"Weekly"} variant= "secondary" onPress={() => setPress("Weekly")} disabled={isPressed === "Weekly"}/>
              <Button title={"Monthly"} variant= "secondary" onPress={() => setPress("Monthly")} disabled={isPressed === "Monthly"}/>
              <Button title={"Yearly"} variant= "secondary" onPress={() => setPress("Yearly")} disabled={isPressed === "Yearly"}/>
            </View>
          </View>

          <View style={styles.widget}>
            <Text>Quantity</Text>
              <DropDownBar
                label="Quantity"
                value={quantity}
                elements={quantities}
                onSelect={setQuantity}
              />
          </View>

          <View style={styles.widget}>
            <Text>Duration</Text>
          </View>


          <View style={styles.bottomButtonGroup}>
            <Button title="close" variant= "danger" onPress={onClose}/>
            <Button title="save" variant= "danger" onPress={onSave}/>
          </View>
          
        </View>
      </View>
    </Modal>
  );
}


//WORKING ON-?> * Creating dropdown menu ui component for widgets *
//--creating group switch button for frequency widget--
//--add list elements into scrolltab/bar for quantity and 
// duration widgets <--curr focus


//reminder y/n widget

//Setting	What it means
//Frequency	How often you do it	3 times per week  (daily,wekly,monthly,weekeds,ect)
//Quantity	How much you do each time	20 push-ups (10 pages,1 'session', X- times)
//Duration	How long you do it each time	(30 minutes,whole day, as-needed*)