import { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, ActivityIndicator, Pressable } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import styles from "../../styles/globalStyles";
import AppButton from "../../components/ui/Button/Button";

export default function HomeScreen() {
  const [message, setMessage] = useState("Hello, John");
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.centerBlock}>

        <View style={styles.buttonGrid}>
          <AppButton title="Start Habit" onPress={() => router.push("/habit")} />
          <AppButton title="Schedule/Habit Calendar/ Checklist" onPress={() => router.push("/about")} />
          <AppButton title="Daily Motivation" onPress={() => router.push("/dailyMotivation")} />
          <AppButton title="Habit Check Progress" onPress={() => router.push("/habitSchedule")} />
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>{message}</Text>
          <Image source={{uri: "https://s.yimg.com/ny/api/res/1.2/kiy6sAjj3vNImI_x_5lgfQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MA--/https://media.zenfs.com/en/creative_bloq_161/65201efbe328025966639ba937ec5222",
          }}
          style={styles.image}
          />
          <TextInput style={styles.text} placeholder="Email" />
          <Link style={styles.text} href={"/about"}>Next Screen</Link>

          <Button
            title="click me!!"
            onPress={() => setMessage("Welcome to my app!")}
            />
        </View>

      </View>
    </View>
  );
}
// Working on edit button. and handleEdit function, savedhabits changes
// Check note on line 34 habitlist.tsx
// currently trying 'local asyncstorage' want to move on to-server backend

//Second project for website . reccomendation website for movies/games/music/books/ect.
// a reccomendation website for stories/themes/ect 
// that can reccomend you other peieces of media besides itself
//with similar components depending on what you select (similar vibe, music, story,ect,). 


//maybe create a guide.start-up slide-show for first time app user opening
//add a widget that "level-ups" your habit that allows you to extend or increase quantity/lenght of habit
//decide what buttons to put on homescreen, how to setup app
//philosoy introudced like headspace, monitor mood for burnout, reccomend 1-3 habit max
//daily habit checklist in homescreen
//ONCE SKELETON IS DONE start working/learning about serverside back-end stuff