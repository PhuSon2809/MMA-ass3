import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { NAVIGATION } from "../constants/navigationStrings";
import palette from "../constants/palette";

const ProductItem = ({ orchid, favoriteList, onPress, screenName }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="bg-white mx-2 mb-4 p-2.5 rounded-xl"
    >
      <View
        className="rounded-xl"
        style={{ width: palette.sizes.width / 2 - 47 }}
      >
        <Pressable
          onPress={() =>
            navigation.navigate(NAVIGATION.PRODUCT_DETAILS, {
              orchid,
              screenName,
            })
          }
        >
          <Image source={orchid.img} className="h-36 w-full rounded-lg" />
        </Pressable>
        <View className="mt-2">
          <Text className="font-bold text-[17px]">{orchid.name}</Text>
          <Text className="text-gray-500">{orchid.category}</Text>
          <View className="flex-row items-center justify-between">
            <Text
              className="text-[22px] font-extrabold mt-2"
              style={{ color: palette.main.main }}
            >
              ${orchid.price}
            </Text>
            <TouchableOpacity
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: favoriteList.find(
                  (favorite) => favorite.id === orchid.id
                )
                  ? palette.error.lighter
                  : "rgba(0,0,0,0.2) ",
              }}
              onPress={onPress}
            >
              <Icon
                name="ios-heart"
                size={23}
                color={
                  favoriteList.find((favorite) => favorite.id === orchid.id)
                    ? palette.error.main
                    : palette.common.black
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
