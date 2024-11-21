import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from '@/components/ThemedText';
import React, { useState } from "react";
import { ThemedColor } from "../../../../../ThemedColor";
import { Alert, Modal, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
import { AreaRepositoryImpl } from "../../infrastructure/repositories/AreaRepositoryImpl";
import { AreaApiDatasource } from "../../infrastructure/datasources/AreaApiDatasource";
interface UpdateAreasViewProps {
  id: number;
  initialName: string;
  onClose: () => void;
  visible: boolean;
  onAreaUpdated: () => void;
}

const UpdateAreasView: React.FC<UpdateAreasViewProps> = ({ id, initialName, onClose, visible, onAreaUpdated }) => {
  const [areaName, setAreaName] = useState(initialName);
  const textColor = ThemedColor();

  const handleUpdateArea = async () => {
    if (!areaName.trim()) {
      Alert.alert('Error', 'El nombre del área es obligatorio');
      return;
    }

    try {
      const repository = new AreaRepositoryImpl(new AreaApiDatasource());
      await repository.updateArea(id, { name: areaName });
      setAreaName('');
      Alert.alert('Éxito', 'El área ha sido actualizado con éxito');
      onClose();
      onAreaUpdated();
    } catch (error) {
      Alert.alert('Error', 'No se pudo actualizar el área');
    }
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType="fade"
      transparent
    >
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, { backgroundColor: textColor.modal }]}>
          <ThemedText type="subtitle" style={styles.modalText}>Editar Área</ThemedText>
          <TextInput
            placeholderTextColor={textColor.default}
            label="Nombre del Área"
            value={areaName}
            onChangeText={setAreaName}
            style={[styles.input, { backgroundColor: textColor.default }]}
            theme={{ colors: { primary: textColor.modal } }}
          />
          <View style={styles.buttonsContainer}>
            <Button
              mode="contained"
              style={[styles.submitButton, { backgroundColor: textColor.thirtiary }]}
              textColor={textColor.modal}
              onPress={handleUpdateArea}
            >
              Registrar
            </Button>
            <Button
              style={[styles.cancelButton, { backgroundColor: textColor.disable }]}
              textColor={textColor.modal}
              mode="contained"
              onPress={onClose}
            >
              Cancelar
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  openButton: { marginTop: 20, backgroundColor: "#309b7b" },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%' },
  modalContent: { padding: 20, borderRadius: 10, width: '90%', alignItems: 'center' },
  modalText: { marginBottom: 15, textAlign: 'center' },
  input: { marginBottom: 20, width: '100%' },
  buttonsContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  submitButton: { marginRight: 10, flex: 1, },
  cancelButton: { flex: 1 },
});

export default UpdateAreasView;
