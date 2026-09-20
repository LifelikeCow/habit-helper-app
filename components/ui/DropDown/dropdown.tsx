import { View, Text, Pressable, ScrollView} from "react-native";
import { useState } from "react";

type Props = {
    label: string;
    value: string;
    elements: string[];
    onSelect: (value: string) => void;
};


export default function DropDownBar({ label, value, elements, onSelect}: Props) {
    const [open, setOpen] = useState(false);

    return (
        <View>

            <Text>{label}</Text>

            <Pressable onPress={() => setOpen(!open)}>
                <Text>{value}</Text>
            </Pressable>

            {open && (
                <ScrollView style={{ maxHeight: 200 }}>
                    {elements.map((element) => (
                        <Pressable
                            key={element}
                            onPress={() => {
                                onSelect(element);
                                setOpen(false);
                            }}
                        >
                            <Text>{element}</Text>
                        </Pressable>
                    ))}
                </ScrollView>
            )}

        </View>
    );
}