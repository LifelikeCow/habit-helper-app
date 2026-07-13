import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveHabits = async (habits: string[]) => {

  await AsyncStorage.setItem(
        "HABITS",
        JSON.stringify(habits)
    );
};


export const loadHabits = async () => {
  const data = await AsyncStorage.getItem("HABITS");
  return data ? JSON.parse(data) : [];
};