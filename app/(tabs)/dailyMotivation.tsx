import { View, Text, Button, StyleSheet, TextInput, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import styles from "../../styles/globalStyles";
import { getDailyQuote } from "../../services/quoteService";
import BackButton from "../../components/ui/Button/Button";
import { useRouter } from "expo-router";
export default function dailyMotivation() {
    const router = useRouter();
    const quote = getDailyQuote();
    return (
        <View style={styles.container}>
            <View style={styles.centerBlock}>
                <View style={[styles.floatingButton, { left: 15 }]}>
                    <BackButton title="Back" onPress={() => router.back()} />
                </View>
                <View style={styles.section}>
                    <Text style={styles.text}> {quote} </Text>
                </View>
            </View>
        </View>
    );
}
