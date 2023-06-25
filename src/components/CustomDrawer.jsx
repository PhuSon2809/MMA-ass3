import { View, Text } from "react-native";
import React from "react";
import palette from "../constants/palette";
import images from "../constants/images";
import { Avatar } from "@rneui/themed";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

const CustomDrawer = (props) => {
  return (
    <View className="flex-1">
      <DrawerContentScrollView {...props}>
        <View className="p-3 mb-3">
          <View className="flex-row items-center mb-3">
            <Avatar size={70} rounded source={images.avatar} />
            <View className="ml-2">
              <Text className="text-gray-500 text-[15px]">Welcome back</Text>
              <Text
                className=" text-[18px] font-bold"
                style={{
                  color: palette.primary.darker,
                }}
              >
                Tran Phu Son
              </Text>
            </View>
          </View>

          <Text className="underline text-[18px] font-bold mb-2">
            Contact me:
          </Text>

          <View className="flex-row items-center gap-1 mb-2">
            <Icon name="call-outline" size={22} color={palette.main.main} />
            <Text className="text-[16px] font-semibold">0914360736</Text>
          </View>

          <View className="flex-row items-center gap-1">
            <Icon name="mail-outline" size={22} color={palette.main.main} />
            <Text className="text-[16px] font-semibold">
              phuson2809@gmail.com
            </Text>
          </View>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
