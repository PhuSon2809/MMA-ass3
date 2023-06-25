import React from "react";
import { useIsFocused } from "@react-navigation/native";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import orchids from "../assets/data/orchids";
import { Loading, ProductItem } from "../components";
import images from "../constants/images";
import palette from "../constants/palette";
import useFavorite from "../hooks/useFavorite";

const HomeScreen = ({ navigation }) => {
  const { addToFavorites, favorites, loading } = useFavorite(useIsFocused());

  const renderItem = ({ item }) => (
    <>
      <ProductItem
        orchid={item}
        favoriteList={favorites}
        onPress={() => addToFavorites(item)}
      />
    </>
  );

  return (
    <View className="bg-[#f8f8f8] flex-1">
      {/* Header */}
      <View
        className="flex-row items-center justify-between py-2 px-3"
        style={{ backgroundColor: palette.main.main }}
      >
        <View className="flex-row items-center gap-1">
          <Image source={images.logo_white} style={{ width: 35, height: 35 }} />
          <Text className="font-extrabold text-white text-[25px]">Orchid</Text>
        </View>

        <TouchableOpacity
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white"
          style={{
            backgroundColor: "rgba(225,225,225,0.4) ",
          }}
          onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu" size={26} color="white" />
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <View className="px-3">
        <View
          className="my-3 py-4 px-5 rounded-xl flex-row justify-between items-center"
          style={{ backgroundColor: palette.main.light }}
        >
          <View>
            <Text
              className="font-bold text-[18px]"
              style={{
                color: palette.primary.darker,
              }}
            >
              Get special discount
            </Text>
            <Text
              className="font-extrabold"
              style={{
                color: palette.main.main,
                fontSize: palette.sizes.h1,
              }}
            >
              Up to 35%
            </Text>
            <Text
              style={{
                color: palette.primary.darker,
              }}
            >
              01 - 25 June 2023
            </Text>

            <TouchableOpacity className=" mt-6 bg-[#347357] rounded-full w-28 h-10 flex items-center justify-center">
              <Text className="text-white font-semibold">Claim now</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={images.blue_orchid}
            style={{ width: 100, height: 150 }}
          />
        </View>
      </View>

      {/* List Produst */}
      <View className="pl-2.5 pr-2">
        <Text
          className="font-extrabold tracking-wider text-[22px] mb-2"
          style={{
            color: palette.primary.darker,
          }}
        >
          Best Seller
        </Text>
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            style={{ marginBottom: 365 }}
            data={orchids.slice(0, 6)}
            keyExtractor={(orchid) => orchid.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
