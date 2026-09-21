import { View, Text, Pressable, ScrollView} from "react-native";
import { useState } from "react";
import styles from "./dropdown.styles";
type Props = {
    label: string;
    value: string;
    elements: string[];
    onSelect: (value: string) => void;
};


export default function DropDownBar({ label, value, elements, onSelect}: Props) {
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.container}>

            <Text style={styles.label}>{label}</Text>

            <Pressable style={styles.bar} onPress={() => setOpen(!open)}>
                <Text style={styles.value}>{value}</Text>
            </Pressable>

            {open && (
                <View style={styles.dropdown}>
                    <ScrollView style={styles.scrollView}>
                    {elements.map((element) => (
                        <Pressable
                            key={element}
                            style={styles.option}
                            onPress={() => {
                                onSelect(element);
                                setOpen(false);
                            }}
                        >
                            <Text style={styles.optionText}>{element}</Text>
                        </Pressable>
                    ))}
                </ScrollView>
                </View>
            )}

        </View>
    );
}

//add css to view componenety