import { View, Text, Button, StyleSheet, TextInput, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import styles from "../../styles/globalStyles";
import BackButton from "@/components/ui/Button/Button";
import { useRouter } from "expo-router";
export default function About() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.centerBlock}>
                <View style={[styles.floatingButton, { left: 15 }]}>
                    <BackButton title="Back" onPress={() => router.back()}/>
                </View>
                <Text style={styles.text}> wuz good </Text>
                <Image source={{uri: "https://static.wikia.nocookie.net/chainsaw-man/images/c/ca/Asa_mugshot.png",               
                }}
                style={styles.image}/>

            </View>
        </View>
    );
}