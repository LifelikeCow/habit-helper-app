import { Modal, View, Text } from "react-native";
import Button from "@/components/ui/Button/Button";
import { useRouter } from "expo-router";
import styles from "../../styles/globalStyles";
import { useState } from "react";

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

//WORKING ON-?>  
//--creating group switch button for frequency widget--
//--add list elements into scrolltab/bar for quantity and duration widgets <--curr focus
//--change habit constant to become obj? that holds data aswell (not just name)




//reminder y/n widget

//Setting	What it means
//Frequency	How often you do it	3 times per week  (daily,wekly,monthly,weekeds,ect)
//Quantity	How much you do each time	20 push-ups (10 pages,1 'session', X- times)
//Duration	How long you do it each time	(30 minutes,whole day, as-needed*)