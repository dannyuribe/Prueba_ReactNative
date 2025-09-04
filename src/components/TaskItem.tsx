import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Task } from "../types/Task";

interface Props {
  task: Task;
}

export const TaskItem: React.FC<Props> = ({ task }) => {
  return (
    <View style={styles.container}>
      <Text>{task.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});