import React, { useState } from 'react';
import { StyleSheet, View, Modal, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { ThemedText } from '@/components/ThemedText';
import { AreaApiDatasource } from '../../infrastructure/datasources/AreaApiDatasource';
import { AreaRepositoryImpl } from './../../infrastructure/repositories/AreaRepositoryImpl';
import { ThemedColor } from '../../../../../ThemedColor';
import { ThemedView } from '../../../../../ThemedView';

interface CreateAreasViewProps {
  onAreaCreated: () => void;
}

const CreateAreasView: React.FC<CreateAreasViewProps> = ({onAreaCreated}) => {
  const [visible, setVisible] = useState(false);
  const [areaName, setAreaName] = useState('');
  const textColor = ThemedColor();

  const handleRegisterArea = async () => {
    if (!areaName.trim()) {
      Alert.alert('Error', 'El nombre del área es obligatorio');
      return;
    }

    try {
      const repository = new AreaRepositoryImpl(new AreaApiDatasource());
      await repository.createArea({ name: areaName });
      setAreaName('');
      setVisible(false);
      onAreaCreated();
    } catch (error) {
      console.log('No se pudo crear el área');
    }
  };

  return (
    <ThemedView>
      <View style={styles.container}>
        <Button
          onPress={() => setVisible(true)}
          mode="elevated"
          textColor={textColor.default}
          style={styles.openButton}
        >
          Registrar Área
        </Button>

        <Modal
          visible={visible}
          onRequestClose={() => setVisible(false)}
          animationType="fade"
          transparent
        >
          <View style={styles.modalContainer}>
            <View style={[styles.modalContent, { backgroundColor: textColor.modal }]}>
              <ThemedText type='subtitle' style={styles.modalText}>Registrar Área</ThemedText>
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
                  onPress={handleRegisterArea}
                  style={[styles.submitButton, { backgroundColor: textColor.thirtiary }]}
                  textColor={textColor.modal}
                >
                  Registrar
                </Button>
                <Button
                  style={[styles.cancelButton, { backgroundColor: textColor.disable }]}
                  textColor={textColor.modal}
                  mode="contained"
                  onPress={() => { setVisible(false); setAreaName(''); }}
                >
                  Cancelar
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  openButton: { marginTop: 5, backgroundColor: "#309b7b", },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%' },
  modalContent: { padding: 20, borderRadius: 10, width: '90%', alignItems: 'center' },
  modalText: { marginBottom: 5, textAlign: 'center' },
  input: { marginBottom: 20, width: '100%' },
  buttonsContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  submitButton: { marginRight: 10, flex: 1 },
  cancelButton: { flex: 1 },
});

export default CreateAreasView;
