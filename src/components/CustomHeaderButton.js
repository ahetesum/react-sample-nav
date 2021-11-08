import React, { Component } from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons/Ionicons";
import COLORS from "../constants/Colors";


const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? COLORS.whiteColor: COLORS.primaryDarkColor}
    />
  );
};

export default CustomHeaderButton;