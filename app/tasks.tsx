import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import { Button } from "../src/components/Button";
import { ModalTaskForm } from "../src/components/ModalTaskForm";
import { TaskItem } from "../src/components/TaskItem";
import { RootState } from "../src/redux/store";

export default function TasksScreen() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="Agregar nuevo Task" onPress={() => setModalVisible(true)} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
        style={{ marginTop: 16 }}
      />
      <ModalTaskForm isVisible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
}