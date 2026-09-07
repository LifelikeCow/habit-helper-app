
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import styles from "../../styles/globalStyles";
import { useState } from "react";
import type { Habit } from "@/constants/Habit";
import { HABITS } from "@/constants/Habit";

//variable type
type HabitProps = {
  selected: Habit[];
  setSelected: React.Dispatch<React.SetStateAction<Habit[]>>;
  savedHabits: Habit[];
  isEditing: boolean;
};

export default function HabitList({selected, setSelected, savedHabits, isEditing}: HabitProps){
  


    const toggleHabit = (habit: Habit) => {
      setSelected(prev =>
        prev.some(h => h.name === habit.name)
          ? prev.filter(h => h.name !== habit.name)
          : [...prev, habit]
      );
    };
    //use another loaddata() sht here to get 
    //data from user created habit so
    // it can correctly show ALL HABITS (default and created)habitlist 
    // in add and edit mode
    const displayedHabits = isEditing
  ? HABITS.filter(h => savedHabits.some(saved => saved.name === h.name))
  : HABITS.filter(h => !savedHabits.some(saved => saved.name === h.name));

    return (
    <View style={styles.habitListContainer}>
      <Text style={styles.habitTitle}>Select a Habit</Text>

      <ScrollView style={styles.habitList} contentContainerStyle={styles.listContent}>
        {displayedHabits.map((habit, index) => (
        <Pressable 
          key={index}
          style={styles.habitItem}
          onPress={() => toggleHabit(habit)}
        >
          <Text style={styles.habitText}>
            {habit.name} {selected.some(h => h.name === habit.name) ? "✓" : ""}
          </Text>
        </Pressable>
      ))}
      </ScrollView>
    </View>
  );
}
//


    //maybe have a seperate section for Identity
    //a habit is either in how many or how much

    //Sprit: Gratitude practice – write or think of 3 things daily
//           Spend time in nature – grounding and calming
//           Acts of kindness – boosts connection and fulfillment
//           Quiet time – prayer, reflection, or simply being still
//           Align actions with values – live intentionally

    //Mind: Daily reflection or journaling
//          Mindfulness or meditation
//          Limit information overload – take breaks from news/social media
//          Learn something new regularly /Studying
//          Reading
//          Positive Thinking / Growth Mindeset / Other Mindsets

    //Body:Exercise / Yoga / Hiking
//         Prioritize sleep
//         Eat Healthy/ Eat-Less/ Diet / Avoid Smoking & Alcohol
//         Stay hydrated
//         Get sunlight & fresh air
//         Hygiene - Shower, Brush Teeth, Floss, Clean Room