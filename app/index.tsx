import { useRouter } from "expo-router";
import { View } from "react-native";
import { Button } from "../src/components/Button";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Tasks" onPress={() => router.push("/tasks")} />
      <Button title="Listado" onPress={() => router.push("/listado")} />
    </View>
  );
}