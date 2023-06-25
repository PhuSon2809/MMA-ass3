import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import orchids from "../assets/data/orchids";
import { Loading, ProductItem } from "../components";
import images from "../constants/images";
import palette from "../constants/palette";
import useFavorite from "../hooks/useFavorite";
import Icon from "react-native-vector-icons/Ionicons";

const categoriyList = [
  {
    id: "1",
    title: "All",
  },
  {
    id: "2",
    title: "Tropical America",
  },
  {
    id: "3",
    title: "Tropical Asia",
  },
  {
    id: "4",
    title: "Tropical Africa",
  },
  {
    id: "5",
    title: "Oceania",
  },
  {
    id: "6",
    title: "Europe & Temperate Asia",
  },
  {
    id: "7",
    title: "North America",
  },
];

const ListOrchidScreen = ({ navigation }) => {
  const [orchidList, setOrchidList] = useState(orchids);
  const [catergoryIndex, setCategoryIndex] = useState(0);
  const [catergory, setCategory] = useState("All");

  const { addToFavorites, favorites, loading } = useFavorite(useIsFocused());

  useEffect(() => {
    if (catergory === "All") {
      setOrchidList(orchids);
    } else {
      const newListOrchid = orchids.filter(
        (item) => item.category === catergory
      );
      setOrchidList(newListOrchid);
    }
  }, [catergory]);

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
          <Text className="font-extrabold tracking-widest text-white text-[23px]">
            List Orchid
          </Text>
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

      {/* Category */}
      <View className="px-3">
        <Text
          className="font-bold tracking-wider text-[20px] mt-2"
          style={{
            color: palette.primary.darker,
          }}
        >
          Category
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categoriyList.map((category, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              onPress={() => {
                setCategoryIndex(index);
                setCategory(category.title);
              }}
              className="mr-2 my-2 py-1.5 px-3 rounded-full"
              style={{
                backgroundColor:
                  catergoryIndex === index ? palette.main.main : "#fff",
                borderColor:
                  catergoryIndex === index
                    ? palette.main.main
                    : palette.grey[400],
                borderWidth: 1.5,
              }}
            >
              <Text
                className="text-[15px] font-semibold"
                style={{
                  color: catergoryIndex === index ? "#fff" : palette.grey[500],
                }}
              >
                {category.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* List Produst */}
      <View className="pl-2.5 pr-2 mt-2">
        {loading ? (
          <Loading />
        ) : (
          <>
            {orchidList.length > 0 ? (
              <FlatList
                style={{ marginBottom: 155 }}
                data={orchidList}
                keyExtractor={(orchid) => orchid.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                numColumns={2}
              />
            ) : (
              <View className="justify-center items-center h-4/5">
                <Text className="text-lg font-bold mb-3 mt-8">
                  No orchids found.
                </Text>
              </View>
            )}
          </>
        )}
      </View>
    </View>
  );
};

export default ListOrchidScreen;
