import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveHabits = async (habits: string[]) => {
  const stored = await loadHabits();
  const merged = [...stored, ...habits];

  const unique = [...new Set(merged)];
  await AsyncStorage.setItem("HABITS", JSON.stringify(unique));
};


export const loadHabits = async () => {
  const data = await AsyncStorage.getItem("HABITS");
  return data ? JSON.parse(data) : [];
};