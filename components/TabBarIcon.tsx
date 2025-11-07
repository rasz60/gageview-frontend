import React from "react";
import { FontAwesome } from "@expo/vector-icons";

type TabBarIconProps = {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  size: number;
  color: string;
};

export default function TabBarIcon({ name, size, color }: TabBarIconProps) {
  return (
    <FontAwesome
      name={name}
      size={size}
      style={{ marginBottom: -5 }}
      color={color}
    />
  );
}
