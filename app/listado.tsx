import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { fetchListado } from "../src/api/listadoApi";

interface ListItem {
  id: number;
  name: string;
  avatar?: string;
}

export default function ListadoScreen() {
  const [data, setData] = useState<ListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchListado()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  console.log(data);

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 12,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            <Text style={{ flex: 1 }}>{item.name}</Text>
            {item.avatar ? (
              <Image
                source={{ uri: item.avatar }}
                style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 12 }}
                resizeMode="cover"
              />
            ) : null}
          </View>
        )}
      />
    </View>
  );
}