import { Stack } from "expo-router";
import React from "react";

export default function UserLayout() {
  return (
    <Stack>
      <Stack.Screen name="camera-view" />
    </Stack>
  );
}
