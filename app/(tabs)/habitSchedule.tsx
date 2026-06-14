import { View, Text } from "react-native";
import styles from "../../styles/globalStyles";
import Button from "@/components/ui/Button/Button";
import { useRouter, useFocusEffect } from "expo-router";
import { loadHabits } from "@/services/habitService";
import { useState, useCallback } from "react";
import HabitTrackerList from "@/components/Habits/HabitTrackerList";
export default function habitSchedule() {
    const router = useRouter();
    const [habits, setHabits] = useState<string[]>([]);
    const [selected, setSelected] = useState<string[]>([]);

    useFocusEffect(
    useCallback(() => {
    const fetchHabits = async () => {
      const data = await loadHabits();
      setHabits(data || []);
    };

    fetchHabits();
  }, [])
);

    const handleToggle = (name: string) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((h) => h !== name) // uncheck
        : [...prev, name]               // check
    );
  };

    return (
        <View style={styles.container}>
            <View style={styles.centerBlock}>
                {habits.length === 0 ? (<Text style={styles.text}> No Current Habits</Text>) : (
                    <HabitTrackerList habits={habits} selected={selected} onToggle={handleToggle} />
                )}
            </View>
            
            <View style={[styles.floatingButton, { left: 15 }]} >
                <Button title={"Back"} onPress={() => router.back()}/>
            </View>
        </View>
    );
}