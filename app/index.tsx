import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-blue-600 font-pblack"> This is Home</Text>
      <Link href="/home">Go to tabs</Link>
    </View>
  );
}
