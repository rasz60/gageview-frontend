import { Tabs } from "expo-router";

import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";

import IconButton from "@/app/utils/_IconButton";
import TabBarIcon from "@/components/TabBarIcon";

import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [ menus, setMenus ] = useState([]);
  useEffect(() => {
    getMenuList();
  }, []);

  const getMenuList = async () => {
    try {
      let menuList = await axiosInstance.get("/menu");
      setMenus(menuList.data);
    } catch (err) {
      console.error('Menu API 에러 : ', err);
      throw err;
    }
  }

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
