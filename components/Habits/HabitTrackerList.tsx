import { View, Text, Pressable, ScrollView } from "react-native";
import styles from "@/styles/globalStyles";
import type { Habit } from "@/constants/Habit";

type Props = {
  habits: Habit[];
  selected: Habit[];
  onToggle: (habit: Habit) => void;
};

export default function HabitList({ habits, selected, onToggle }: Props) {
  return (
   <View style={styles.habitListContainer}>
      <Text style={styles.habitTitle}>Your Habits</Text>

      <ScrollView
        style={styles.habitList}
        contentContainerStyle={styles.listContent}
      >
        {habits.map((habit) => {
          const isSelected = selected.includes(habit);

          return (
            <Pressable
              key={habit.name}
              style={[
                styles.habitItem,
                isSelected && { backgroundColor: "green" },
              ]}
              onPress={() => onToggle(habit.name)}
            >
              <Text style={styles.habitText}>
                {habit.name} {isSelected ? "✓" : ""}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}