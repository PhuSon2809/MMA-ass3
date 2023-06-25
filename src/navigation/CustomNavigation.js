import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NAVIGATION } from "../constants/navigationStrings";
import {
  DetailScreen,
  FavoriteScreen,
  HomeScreen,
  ListOrchidScreen,
} from "../screens";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.HOME}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={NAVIGATION.HOME}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={NAVIGATION.PRODUCT_DETAILS}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};

export const ListOrchidStack = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.LIST}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={NAVIGATION.LIST}
        component={ListOrchidScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={NAVIGATION.PRODUCT_DETAILS}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};

export const FavoriteStack = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.FAVORITE}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={NAVIGATION.FAVORITE}
        component={FavoriteScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={NAVIGATION.PRODUCT_DETAILS}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};
