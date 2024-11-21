import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { AreaEntity } from '../../domain/entities/AreaEntity';
import React from 'react';
import { ThemedColor } from '../../../../../ThemedColor';
import { Modal, StyleSheet, View, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { AreaRepositoryImpl } from '../../infrastructure/repositories/AreaRepositoryImpl';
import { AreaApiDatasource } from '../../infrastructure/datasources/AreaApiDatasource';

interface DeleteAreasViewProps {
  area: AreaEntity | null;
  onClose: () => void;
  onAreaDeleted: () => void;
}

const DeleteAreasView: React.FC<DeleteAreasViewProps> = ({ area, onClose, onAreaDeleted }) => {
  const textColor = ThemedColor();

  if (!area) {
    return null;
  }

  const handleConfirm = async () => {
    try {
      const repository = new AreaRepositoryImpl(new AreaApiDatasource());
      if (area.id !== undefined) {
        await repository.deleteArea(area.id);
      }
      onClose();
      onAreaDeleted();
    } catch (error) {
      Alert.alert('Error', 'No se pudo eliminar el área');
    }
  }

  return (
    <ThemedView style={styles.container}>
      <Modal
        animationType="fade"
        transparent
        visible={!!area}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, { backgroundColor: textColor.modal }]}>
            <ThemedText type="subtitle" style={styles.modalText}>Eliminar Área</ThemedText>
            <ThemedText style={styles.modalText}>¿Estás seguro de eliminar el área ?</ThemedText>
            <ThemedText style={[styles.areaName, { color: textColor.secondary }]}>"{area.name}"</ThemedText>
            <View style={styles.buttonsContainer}>
              <Button
                mode="contained"
                onPress={handleConfirm}
                style={[styles.submitButton, { backgroundColor: textColor.thirtiary }]}
                textColor={textColor.modal}
              >
                Eliminar
              </Button>
              <Button
                style={[styles.cancelButton, { backgroundColor: textColor.disable }]}
                textColor={textColor.modal}
                mode="outlined"
                onPress={onClose}
              >
                Cancelar
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  openButton: { marginTop: 20, backgroundColor: "#309b7b" },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%' },
  modalContent: { padding: 20, borderRadius: 10, width: '90%', alignItems: 'center' },
  modalText: { marginTop: 10, marginBottom: 5, textAlign: 'center' },
  areaName: { fontSize: 16, marginBottom: 20, fontWeight: 'bold' },
  input: { marginBottom: 20, width: '100%' },
  buttonsContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  submitButton: { marginRight: 10, flex: 1 },
  cancelButton: { flex: 1 },
});

export default DeleteAreasView;