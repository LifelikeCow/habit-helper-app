import HabitList from "@/components/Habits/HabitList";
import Button from "@/components/ui/Button/Button";
import { useRouter, useFocusEffect } from "expo-router";
import { View, Text } from "react-native";
import styles from "../../styles/globalStyles";
import { useState, useCallback } from "react";
import { saveHabits, loadHabits } from "@/services/habitService";
import SettingModal from "@/components/Habits/HabitSettings";

export default function habit(){
    const router = useRouter();
    const [selected, setSelected] = useState<string[]>([]); //selected habit's pointer
    const [savedHabits, setSavedHabits] = useState<string[]>([]); //saved habit storage
    const [isEditing, setEditing] = useState<boolean>(false);   //boolean edit mode
    const [isSetting, setSetting] = useState<boolean>(false);   //boolean setting modal



    useFocusEffect(
        useCallback(() => {
        const fetchHabits = async () => {
          const data = await loadHabits();
          setSavedHabits(data || []);
        };
    
        fetchHabits();
      }, [])
    );
    const handleAdd = () => {
        setSetting(true);
    }
    const handleSave = async() => {
        const updated = [...new Set([...savedHabits, ...selected])];

        setSavedHabits(updated);
        await saveHabits(updated);
        setSelected([]);
    }

    const handleEdit = () => {
        setEditing(true);
        setSelected([]);
    }
    //maybe need to change some selected useState to revert changes 
    //made during editing
    const handleCancel = () => {
        setEditing(false);
        setSelected([]);
    }
    //filter keeps items where condition is TRUE
    const handleDelete = async () => {

        const updated = savedHabits.filter(h => !selected.includes(h));

        setSavedHabits(updated);

        await saveHabits(updated);

        setSelected([]);
    }
    //Delete function isnt saving changes to savedHabits <--fix--
    return (
        <View style={styles.container}>
            <View style={styles.centerBlock}>
                
                <HabitList selected={selected} setSelected={setSelected} savedHabits={savedHabits}
                            isEditing={isEditing}/>
                <View style={[styles.floatingButton, { left: 15 }]}>
                    <Button title="Back" onPress={() => router.back()}/>
                </View>
                <View style={[styles.floatingButton, { right: 15 }]}>
                    <Button title={isEditing ? "Delete!" : "Add"} onPress={isEditing ? handleDelete : handleAdd} disabled={selected.length === 0} />
                </View>
                
                
                <SettingModal visible={isSetting} onClose={() => router.back()}/>

                {!isEditing && (
                    <View style={[styles.floatingButton, { right: 105 }]}>
                        <Button title="Edit" onPress={handleEdit}/>
                    </View>
                )}

                {isEditing && (
                    <View style={[styles.floatingButton, { right: 105 }]}>
                        <Button title="Cancel" onPress={handleCancel}/>
                    </View>
                )}
                
            </View>
        </View>
    );
}
    
