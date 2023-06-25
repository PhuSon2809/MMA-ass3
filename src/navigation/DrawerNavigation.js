import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NAVIGATION } from "../constants/navigationStrings";
import { ProfileScreen } from "../screens";
import BottomTabNavigation from "./BottomTabNavigation";
import palette from "../constants/palette";
import { CustomDrawer } from "../components";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: palette.main.main,
        drawerPosition: "right",
      }}
    >
      <Drawer.Screen
        component={BottomTabNavigation}
        name={NAVIGATION.HOME_DRAWER}
      />
      <Drawer.Screen component={ProfileScreen} name={NAVIGATION.PROFILE} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
