import { Modal, View, Text } from "react-native";
import Button from "@/components/ui/Button/Button";
import { useRouter } from "expo-router";
import styles from "../../styles/globalStyles";

//need extra props for this component,that implements a useState that will affect
//the switches for the widgets (frequency,duration,quantity)
//WORKING ON ^
type Props = {
    visible: boolean;
    onClose: () => void;
};


export default function HabitSettingModal({ visible, onClose }: Props) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>

          <Text style={styles.modalTitle}>
            Habit Settings
          </Text>

          <View style={styles.widget}>
            <Text>Frequency</Text>
            <View style={styles.settingsRow}>
              <Button title={"Daily"} variant= "secondary" onPress={() => onClose()}/>
              <Button title={"Weekly"} variant= "secondary" onPress={() => onClose()}/>
              <Button title={"Monthly"} variant= "secondary" onPress={() => onClose()}/>
              <Button title={"Yearly"} variant= "secondary" onPress={() => onClose()}/>
            </View>
          </View>

          <View style={styles.widget}>
            <Text>Quantity</Text>
          </View>

          <View style={styles.widget}>
            <Text>Duration</Text>
          </View>

          <Button
            title="Close"
            onPress={onClose}
          />

        </View>
      </View>
    </Modal>
  );
}


//reminder y/n widget

//Setting	What it means
//Frequency	How often you do it	3 times per week  (daily,wekly,monthly,weekeds,ect)
//Quantity	How much you do each time	20 push-ups (10 pages,1 'session', X- times)
//Duration	How long you do it each time	(30 minutes,whole day, as-needed*)