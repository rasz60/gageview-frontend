import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import type { Href } from "expo-router";

type btnProps = {
  url: Href;
  icon: keyof typeof FontAwesome.glyphMap;
  color?: string;
};

const IconButton: React.FC<btnProps> = ({ url, icon, color }) => {
  const colorScheme = useColorScheme();

  return (
    <Link href={url} asChild className="123">
      <Pressable>
        {({ pressed }) => (
          <FontAwesome
            name={icon}
            size={25}
            color={color ?? Colors[colorScheme ?? "light"].text}
            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable>
    </Link>
  );
};

export default IconButton;
