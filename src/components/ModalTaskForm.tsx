import React, { useState } from "react";
import { Alert, Button as RNButton, TextInput, View } from "react-native";
import 'react-native-get-random-values';
import Modal from "react-native-modal";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../redux/tasksSlice";
import { Task } from "../types/Task";

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

export const ModalTaskForm: React.FC<Props> = ({ isVisible, onClose }) => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!description.trim()) {
      Alert.alert("Error", "El campo no puede estar vacío");
      return;
    }

    const newTask: Task = { id: uuidv4(), description };
    dispatch(addTask(newTask));
    setDescription("");
    onClose();
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={{ backgroundColor: "white", padding: 20, borderRadius: 8 }}>
        <TextInput
          placeholder="Descripción"
          value={description}
          onChangeText={setDescription}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 8,
            marginBottom: 12,
            borderRadius: 4,
          }}
        />
        <RNButton title="Agregar Task" onPress={handleAddTask} />
      </View>
    </Modal>
  );
};