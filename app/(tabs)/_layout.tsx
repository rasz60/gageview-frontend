import { Tabs } from "expo-router";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

import TabBarIcon from "@/components/TabBarIcon";
import IconButton from "@/app/utils/_IconButton";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="one"
        options={{
          title: "Tab One",
          headerRight: () => (
            <IconButton url="/modal" icon="info-circle" color="light" />
          ),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="code" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Index",
          headerRight: () => (
            <IconButton url="/modal" icon="info-circle" color="light" />
          ),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          headerRight: () => (
            <IconButton url="/modal" icon="info-circle" color="light" />
          ),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="code" size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
