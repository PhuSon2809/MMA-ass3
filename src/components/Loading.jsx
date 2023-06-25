import React from "react";
import { ActivityIndicator, View } from "react-native";
import palette from "../constants/palette";

function Loading() {
  return (
    <View className="justify-center items-center h-4/5">
      <ActivityIndicator size="large" color={palette.main.main} />
    </View>
  );
}

export default Loading;
