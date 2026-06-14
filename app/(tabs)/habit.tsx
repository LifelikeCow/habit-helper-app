import HabitList from "@/components/Habits/HabitList";
import Button from "@/components/ui/Button/Button";
import { useRouter, useFocusEffect } from "expo-router";
import { View, Text } from "react-native";
import styles from "../../styles/globalStyles";
import { useState, useCallback } from "react";
import { saveHabits, loadHabits } from "@/services/habitService";
export default function habit(){
    const router = useRouter();
    const [selected, setSelected] = useState<string[]>([]); //selected habit's pointer
    const [savedHabits, setSavedHabits] = useState<string[]>([]); //saved habit storage
    const [isEditing, setEditing] = useState<boolean>(false);
    

    useFocusEffect(
        useCallback(() => {
        const fetchHabits = async () => {
          const data = await loadHabits();
          setSavedHabits(data || []);
        };
    
        fetchHabits();
      }, [])
    );

    const handleSave = async() => {
        await saveHabits(selected);
        setSavedHabits([...selected,...savedHabits]);
        //setSelected([]);
    }

    const handleEdit = () => {
        setEditing(true);
        setSelected([]);
    }
    //maybe need to change some selected useState to revert changes 
    //made during editing
    const handleCancel = () => {
        setEditing(false);
    }
    //filter keeps items where condition is TRUE
    const handleDelete = () => {
        setSavedHabits(prev =>
            prev.filter(h => !selected.includes(h))
        );
        setSelected([]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.centerBlock}>
                
                <HabitList selected={selected} setSelected={setSelected} savedHabits={savedHabits}
                            isEditing={isEditing}/>
                <View style={[styles.floatingButton, { left: 15 }]}>
                    <Button title="Back" onPress={() => router.back()}/>
                </View>
                <View style={[styles.floatingButton, { right: 15 }]}>
                    <Button title={isEditing ? "Delete!" : "Save"} onPress={isEditing ? handleDelete : handleSave} disabled={selected.length === 0} />
                </View>
                <View style={[styles.floatingButton, { right: 90 }]}>
                    <Button title="Edit" onPress={handleEdit}/>
                </View>
                {isEditing && (
                    <View style={[styles.floatingButton, {right: 150}]}>
                        <Button title="Cancel" onPress={handleCancel}/>
                    </View>
                )}

            </View>
        </View>
    );
}
    
