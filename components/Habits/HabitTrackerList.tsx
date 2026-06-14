import { View, Text, Pressable, ScrollView } from "react-native";
import styles from "@/styles/globalStyles";

type Props = {
  habits: string[];
  selected: string[];
  onToggle: (name: string) => void;
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
              key={habit}
              style={[
                styles.habitItem,
                isSelected && { backgroundColor: "green" },
              ]}
              onPress={() => onToggle(habit)}
            >
              <Text style={styles.habitText}>
                {habit} {isSelected ? "✓" : ""}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}