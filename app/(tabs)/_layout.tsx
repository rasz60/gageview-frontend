import { Tabs } from "expo-router";

import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";

import IconButton from "@/app/utils/_IconButton";
import TabBarIcon from "@/components/TabBarIcon";

import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";

import { MenuItem } from "@/models/MenuItem"

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [ menus, setMenus ] = useState<MenuItem[]>([]);
  useEffect(() => {
    getMenuList();
  }, []);

  const getMenuList = async () => {
    try {
      let menuList = await axiosInstance.get<MenuItem[]>("/menu");
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
      {/*-- 자동 생성되는 home 메뉴 삭제 --*/}
      <Tabs.Screen name="home" options={{ href: null }} />

      {menus.filter((menu) => menu.position == "L").map((menu) => (
        <Tabs.Screen 
          key={menu._id}
          name={menu.name}
          options={{
              headerRight: 
                menu.headerYn === 'Y' ?
                  () => (
                    <IconButton url="/modal" icon="info-circle" color="light" />
                  )
                : undefined
              ,
              tabBarIcon: ({ color }) => (
              <TabBarIcon name="code" size={25} color={color} />
            )
          }}
        />
      ))}

      {menus.filter((menu) => menu.position == "C").map((menu) => (
        <Tabs.Screen
          key={menu._id}
          name={menu.name}
          options={{
            headerRight: 
              menu.headerYn === 'Y' ?
                () => (
                  <IconButton url="/modal" icon="info-circle" color="light" />
                )
              : undefined
            ,
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="code" size={25} color={color} />
            )
          }}
        />
      ))}

      {menus.filter((menu) => menu.position == "R").map((menu) => (
        <Tabs.Screen
          key={menu._id}
          name={menu.name}
          options={{
            headerRight: 
              menu.headerYn === 'Y' ?
                () => (
                  <IconButton url="/modal" icon="info-circle" color="light" />
                )
              : undefined
            ,
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="code" size={25} color={color} />
            )
          }}
        />
      ))}
    </Tabs>
  );
}
