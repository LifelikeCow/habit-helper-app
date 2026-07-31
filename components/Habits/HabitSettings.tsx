import { Modal } from "react-native";
import Button from "@/components/ui/Button/Button";
import { useRouter } from "expo-router";
type Props = {
    visible: boolean;
    onClose: () => void;
};


export default function HabitSettingModal({visible,onClose}: Props) {
    const router = useRouter();
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
        >
            <Button title={"Back"} onPress={router.back()}/>
        </Modal>

    );
}