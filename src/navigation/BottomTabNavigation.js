import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import {
  AddScreen,
  CartScreen,
  FavoriteScreen,
  HomeScreen,
  ListOrchidScreen,
  ProfileScreen,
} from "../screens";
import { NAVIGATION } from "../constants/navigationStrings";
import { Platform, Pressable, Text, View } from "react-native";
import palette from "../constants/palette";
import { FavoriteStack, HomeStack, ListOrchidStack } from "./CustomNavigation";
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "../components";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
  },
};

const BottomTabNavigation = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName={NAVIGATION.HOME_STACK}
      screenOptions={screenOptions}
    >
      <Tab.Screen
        name={NAVIGATION.HOME_STACK}
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="justify-center items-center">
              <Icon
                name={focused ? "home" : "home-outline"}
                size={28}
                color={focused ? palette.main.main : palette.grey[500]}
              />
              <Text
                style={{
                  color: focused ? palette.main.main : palette.grey[500],
                  fontWeight: "700",
                }}
              >
                Home
              </Text>
            </View>
          ),
          tabBarButton: (props) => (
            <CustomButton
              {...props}
              navigateName={NAVIGATION.HOME_STACK}
              screen={NAVIGATION.HOME}
            />
          ),
        }}
      />
      <Tab.Screen
        name={NAVIGATION.LIST_STACK}
        component={ListOrchidStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="justify-center items-center">
              <Icon
                name={focused ? "ios-flower" : "ios-flower-outline"}
                size={28}
                color={focused ? palette.main.main : palette.grey[500]}
              />
              <Text
                style={{
                  color: focused ? palette.main.main : palette.grey[500],
                  fontWeight: "700",
                }}
              >
                Orchid
              </Text>
            </View>
          ),
          tabBarButton: (props) => (
            <CustomButton
              {...props}
              navigateName={NAVIGATION.LIST_STACK}
              screen={NAVIGATION.LIST}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name={NAVIGATION.ADD}
        component={AddScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: palette.main.main,
                  width: Platform.OS == "ios" ? 50 : 60,
                  height: Platform.OS == "ios" ? 50 : 60,
                  top: Platform.OS == "ios" ? -2 : -18,
                  borderRadius: Platform.OS == "ios" ? 25 : 30,
                  borderWidth: 4,
                  borderColor: palette.common.white,
                }}
              >
                <Icon name="add" size={35} color={palette.common.white} />
              </View>
            );
          },
        }}
      /> */}
      <Tab.Screen
        name={NAVIGATION.FAVORITEX_STACK}
        component={FavoriteStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="justify-center items-center">
              <Icon
                name={focused ? "heart" : "heart-outline"}
                size={28}
                color={focused ? palette.main.main : palette.grey[500]}
              />
              <Text
                style={{
                  color: focused ? palette.main.main : palette.grey[500],
                  fontWeight: "700",
                }}
              >
                Wishlist
              </Text>
            </View>
          ),
          tabBarButton: (props) => (
            <CustomButton
              {...props}
              navigateName={NAVIGATION.FAVORITEX_STACK}
              screen={NAVIGATION.FAVORITE}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name={NAVIGATION.PROFILE}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="justify-center items-center">
              <Icon
                name={focused ? "person" : "person-outline"}
                size={28}
                color={focused ? palette.main.main : palette.grey[500]}
              />
              <Text
                style={{
                  color: focused ? palette.main.main : palette.grey[500],
                  fontWeight: "700",
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
