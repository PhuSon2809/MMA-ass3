import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import palette from "../constants/palette";
import { ScrollView } from "react-native";

const DetailScreen = ({ route, navigation }) => {
  const { orchid } = route.params;

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    checkFavoriteStatus();
  }, []);

  const checkFavoriteStatus = async () => {
    try {
      const favoritesString = await AsyncStorage.getItem("favorites");
      if (favoritesString) {
        const favoritesArray = JSON.parse(favoritesString);
        const isFavorite = favoritesArray.some((item) => item.id === orchid.id);
        setIsFavorite(isFavorite);
      }
    } catch (error) {
      console.log("Error checking favorite status:", error);
    }
  };

  const toggleFavorite = async () => {
    try {
      const favoritesString = await AsyncStorage.getItem("favorites");
      let favoritesArray = [];

      if (favoritesString) {
        favoritesArray = JSON.parse(favoritesString);
      }

      if (isFavorite) {
        favoritesArray = favoritesArray.filter((item) => item.id !== orchid.id);
      } else {
        favoritesArray.push(orchid);
      }

      const updatedFavoritesString = JSON.stringify(favoritesArray);
      await AsyncStorage.setItem("favorites", updatedFavoritesString);
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.log("Error toggling favorite:", error);
    }
  };

  return (
    <ScrollView>
      <View className="bg-white flex-1">
        <View>
          <View style={{ height: 300 }}>
            <Image
              source={orchid.img}
              resizeMode="cover"
              className="w-full h-full"
            />
          </View>

          <View className="flex-row items-center justify-between px-4 py-3 absolute w-full">
            <TouchableOpacity
              className="bg-white w-11 h-11 rounded-full flex items-center justify-center "
              onPress={() => navigation.goBack()}
              activeOpacity={0.8}
            >
              <Icon
                name="chevron-back-outline"
                size={30}
                color={palette.main.main}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-white w-11 h-11 rounded-full flex items-center justify-center"
              onPress={toggleFavorite}
            >
              <Icon
                name="ios-heart"
                size={30}
                color={isFavorite ? palette.error.main : palette.main.main}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Detail */}
        <View className="p-4">
          <View className="flex-row items-center justify-between">
            <Text
              className="text-[30px] font-extrabold"
              style={{ color: palette.main.main }}
            >
              ${orchid.price}
            </Text>

            <View className="flex-row items-center gap-1">
              <Icon name="star" size={24} color={palette.warning.main} />
              <Text className="text-[18px]">${orchid.price}</Text>
            </View>
          </View>
          <Text className="text-[28px] font-extrabold mt-3">{orchid.name}</Text>
          <Text className="text-[20px] font-semibold text-gray-500">
            {orchid.category}
          </Text>

          <Text className="text-[20px] font-bold mt-5">Description</Text>
          <Text className="text-[16px] text-justify">{orchid.about}</Text>

          <View className="flex-row items-center gap-1 my-7">
            <View className="p-1 pl-2 pr-5 border-r-2 border-gray-500">
              <Text className="text-[20px] font-semibold">Size</Text>
              <Text
                className="text-[18px] font-semibold"
                style={{ color: palette.main.main }}
              >
                Medium
              </Text>
            </View>

            <View className="p-1 pl-2 pr-5 border-r-2 border-gray-500">
              <Text className="text-[20px] font-semibold">Height</Text>
              <Text
                className="text-[18px] font-semibold"
                style={{ color: palette.main.main }}
              >
                7.5"
              </Text>
            </View>

            <View className="p-1 pl-2 pr-5 border-r-2 border-gray-500">
              <Text className="text-[20px] font-semibold">Humidity</Text>
              <Text
                className="text-[18px] font-semibold"
                style={{ color: palette.main.main }}
              >
                15%
              </Text>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            className="py-1 bg-[#347357] rounded-lg flex-row items-center justify-center gap-1"
          >
            <Icon name="basket" size={35} color={palette.common.white} />
            <Text className="text-white font-semibold text-[20px]">
              Add to cart
            </Text>
          </TouchableOpacity>
          <View className="mb-20"></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
