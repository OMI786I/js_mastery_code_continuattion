import React from "react";
import { Slot } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
    </>
  );
}
