import { Pressable, Text } from "react-native";
import { styles } from "./Button.styles";

export default function Button({
  title,
  onPress,
  variant = "primary",
  disabled = false,
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles[variant].button,
        styles[variant],
        pressed && styles[variant].pressed,
        disabled && styles[variant].disabled,
      ]}
    >
      <Text style={styles[variant].text}>{title}</Text>
    </Pressable>
  );
}

//WORK ON ^
//cleaning up the settings modal ui and
//need to seperate global styles css(layout/positioning/ect) 
// from ui/component css styles
