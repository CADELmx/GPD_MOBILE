import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, useColorScheme } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { PartialTemplate } from '../../domain/entities/PartialTemplate';
import { PartialTemplatesDatasourceImp } from '../../infraestructure/datasource/PartialTemplateDatasourceImp';
import { ThemedView } from '../../../../../ThemedView';
import { ThemedText } from '../../../../../ThemedText';
import { ThemedColor } from '../../../../../ThemedColor';

const StatusPartialTemplateView = () => {
  const [templates, setTemplates] = useState<PartialTemplate[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>('aprobado');
  const datasource = new PartialTemplatesDatasourceImp();
  const buttonTextColor = ThemedColor();

  const fetchTemplates = async () => {
    try {
      const fetchedTemplates = await datasource.fetchTemplatesByStatus(selectedStatus);
      setTemplates(fetchedTemplates);
    } catch (error) {
      return error
    }
  };

  useEffect(() => {
    fetchTemplates();
  }, [selectedStatus]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ThemedView style={styles.container}>
        <ThemedText type='title' style={styles.title}>
          Estado de la plantilla parcial
        </ThemedText>

        <SegmentedButtons
          value={selectedStatus}
          style={styles.containerButton}
          onValueChange={(value) => setSelectedStatus(value)}
          buttons={[
            {
              value: 'aprobado',
              label: 'Aprobado',
              uncheckedColor: buttonTextColor.disable,
              checkedColor: buttonTextColor.default,
              style: [styles.segmentedButton, selectedStatus === 'aprobado' && styles.selectedButton],
            },
            {
              value: 'corrección',
              label: 'Corrección',
              uncheckedColor: buttonTextColor.disable,
              checkedColor: buttonTextColor.default,
              style: [styles.segmentedButton, selectedStatus === 'corrección' && styles.selectedButton],
            },
            {
              value: 'pendiente',
              label: 'Pendiente',
              uncheckedColor: buttonTextColor.disable,
              checkedColor: buttonTextColor.default,
              style: [styles.segmentedButton, selectedStatus === 'pendiente' && styles.selectedButton],
            },
          ]}
          density="medium"
        />

        {templates.length > 0 ? (
          templates.map((template) => (
            <View key={template.name} style={styles.templateContainer}>
              <ThemedText style={styles.templateText}>{template.name}</ThemedText>
              <ThemedText style={styles.templateText}>Total: {template.total}</ThemedText>
              <ThemedText style={styles.templateText}>Estado: {template.status}</ThemedText>
            </View>
          ))
        ) : (
          <ThemedText type='default'>
            No hay plantillas disponibles para el estado seleccionado
          </ThemedText>
        )}
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1, },
  container: { flex: 1, padding: 20, },
  title: { marginBottom: 20, textAlign: 'center', },
  containerButton: { marginBottom: 25 },
  segmentedButton: { borderColor: '#309b7b', borderBottomWidth: 1 },
  selectedButton: { backgroundColor: '#309b7b', },
  templateContainer: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', width: '100%', },
  templateText: { fontSize: 16, },
});

export default StatusPartialTemplateView;
