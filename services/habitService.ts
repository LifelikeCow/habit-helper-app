import AsyncStorage from "@react-native-async-storage/async-storage";
import { Habit } from "@/constants/Habit";

export const saveHabits = async (habits: Habit[]) => {
  //const stored = await loadHabits();
  //const merged = [...stored, ...habits];

  //const unique = [...new Set(merged)];
  await AsyncStorage.setItem("HABITS", JSON.stringify(habits));
};


export const loadHabits = async (): Promise<Habit[]> => {
  const data = await AsyncStorage.getItem("HABITS");
  return data ? JSON.parse(data) : [];
};