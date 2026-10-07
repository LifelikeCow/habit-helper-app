import { View, Text,StyleSheet, TextInput, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import styles from "../../styles/globalStyles";
import BackButton from "@/components/ui/Button/Button";
import { useRouter, useFocusEffect } from "expo-router";
import { useState, useCallback } from "react";
import type { Habit } from "@/constants/Habit";
import { loadHabits } from "@/services/habitService";
import Button from "@/components/ui/Button/Button";
export default function About() {
    const [habits, setHabits] = useState<Habit[]>([]);
    const router = useRouter();
    useFocusEffect(
        useCallback(() => {
        const fetchHabits = async () => {
          const data = await loadHabits();
          setHabits(data || []);
        };
    
        fetchHabits();
      }, [])
    );
    return (
        <View style={styles.container}>
            <View style={styles.centerBlock}>
                <View style={[styles.floatingButton, { left: 15 }]}>
                        <Button title="Back" onPress={() => router.back()}/>
                </View>
        {habits.length === 0 ? (
            <Text style={styles.text}>No Current Habits</Text>
            ) : (
                habits.map((habit) => (
                    <View key={habit.name}>
                        <Text>{habit.name}</Text>
                        <Text>Frequency: {habit.frequency}</Text>
                        <Text>Quantity: {habit.quantity}</Text>
                        <Text>Duration: {habit.duration}</Text>
                    </View>
                ))
            )}
   
                <Text style={styles.text}> wuz good </Text>
                <Image source={{uri: "https://static.wikia.nocookie.net/chainsaw-man/images/c/ca/Asa_mugshot.png",               
                }}
                style={styles.image}/>

            </View>
        </View>
    );
}