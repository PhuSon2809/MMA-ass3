import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { ListFunctions } from "../assets/data/listFunction";
import images from "../constants/images";
import palette from "../constants/palette";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-3 py-2 flex-row items-center justify-between">
        <View className="flex-row items-center gap-1">
          <Image source={images.logo} style={{ width: 30, height: 30 }} />
          <Text
            className="font-extrabold"
            style={{ fontSize: palette.sizes.h3, color: palette.main.main }}
          >
            Orchid
          </Text>
        </View>

        <TouchableOpacity
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white"
          style={{
            backgroundColor: "rgba(52, 115, 87,0.1) ",
          }}
          onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu" size={26} color={palette.main.main} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View className="h-64 flex-col items-center justify-center gap-2">
          <Image
            source={images.avatar}
            className="rounded-full"
            style={{ width: 100, height: 100 }}
          />
          <Text
            className="text-[25px] font-bold"
            style={{ color: palette.primary.darker }}
          >
            Tran Phu Son
          </Text>
          <Text className="font-semibold" style={{ color: palette.main.main }}>
            Edit Profile
          </Text>
        </View>

        <View className="px-5">
          {ListFunctions.map((item) => (
            <View
              key={item.id}
              className="p-3 flex-row items-center justify-between mb-3"
            >
              <View className="flex-row items-center gap-2">
                {item.icon}
                <Text className="text-[16px] font-semibold">{item.title}</Text>
              </View>
              <Pressable>
                <Icon name="chevron-forward-outline" size={24} color="black" />
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
