import { useIsFocused } from "@react-navigation/native";
import React from "react";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Loading, ProductItem } from "../components";
import images from "../constants/images";
import palette from "../constants/palette";
import useFavorite from "../hooks/useFavorite";
import { NAVIGATION } from "../constants/navigationStrings";

const FavoriteScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const { favorites, loading, removeFavorite, removeAllFavorites } =
    useFavorite(isFocused);

  const renderItem = ({ item }) => (
    <>
      <ProductItem
        orchid={item}
        favoriteList={favorites}
        screenName={NAVIGATION.FAVORITE}
        onPress={() =>
          Alert.alert(
            `Unlike ${item.name} ?`,
            `Do you want to unlike this ?`,
            [
              {
                text: "Cancel",
                style: "cancel",
              },
              { text: "OK", onPress: () => removeFavorite(item) },
            ],
            { cancelable: false }
          )
        }
      />
    </>
  );

  const clearAllOrchids = () => {
    Alert.alert("Confirm", "Clear all orchid in favorite list?", [
      {
        text: "Yes",
        onPress: removeAllFavorites,
      },
      {
        text: "No",
      },
    ]);
  };

  return (
    <View className="bg-[#f8f8f8] flex-1">
      {/* Header */}
      <View
        className="p-3 flex-row items-center justify-between"
        style={{ backgroundColor: palette.main.main }}
      >
        <View className="flex-row items-center gap-1">
          <Image source={images.logo_white} style={{ width: 35, height: 35 }} />
          <Text className="font-extrabold tracking-widest text-white text-[23px]">
            My Favorite
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

      <View className="pl-2.5 pr-2 flex-1 mt-5">
        <View className="mb-3 px-1">
          <TouchableOpacity
            activeOpacity={0.7}
            className="py-2 px-2 rounded-md flex items-center justify-center bg-white w-24"
            style={{
              backgroundColor: palette.error.lighter,
            }}
            onPress={clearAllOrchids}
          >
            <Text className="text-red-500 text-[16px] font-bold">
              Clear all
            </Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <Loading />
        ) : (
          <>
            {favorites.length > 0 ? (
              <FlatList
                style={{ marginBottom: 65 }}
                data={favorites}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
              />
            ) : (
              <View className="justify-center items-center h-4/5">
                <Text className="text-lg font-bold mb-3 mt-8">
                  No favorite orchids found.
                </Text>
              </View>
            )}
          </>
        )}
      </View>
    </View>
  );
};

export default FavoriteScreen;
