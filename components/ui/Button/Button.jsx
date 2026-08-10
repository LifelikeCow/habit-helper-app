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
//change the button component to implement variants that change the entire ui
// of the button. (USed for settings widgets)

//<Pressable
//  style={[
//    styles[variant].button,
//    pressed && styles[variant].pressed,
//    disabled && styles[variant].disabled,
//  ]}
//>
//  <Text style={styles[variant].text}>
//    {title}
//  </Text>
//  </Pressable