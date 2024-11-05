import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SegmentedButtons, Text } from 'react-native-paper';
import { PartialTemplate } from '../../domain/entities/PartialTemplate';
import { PartialTemplatesDatasourceImp } from '../../infraestructure/datasource/PartialTemplateDatasourceImp';
import { ThemedView } from '../../../../../ThemedView';

const StatusPartialTemplateView = () => {
  const [templates, setTemplates] = useState<PartialTemplate[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>('aprobado');

  const datasource = new PartialTemplatesDatasourceImp();

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
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <ThemedView style={globalStyles.container}>
        <Text style={globalStyles.title} variant="headlineLarge">
          Estado de la plantilla parcial
        </Text>

        <SegmentedButtons
          value={selectedStatus}
          style={globalStyles.containerButton}
          onValueChange={(value) => setSelectedStatus(value)}
          buttons={[
            {
              value: 'aprobado',
              label: 'Aprobado',
              style: [globalStyles.segmentedButton, selectedStatus === 'aprobado' && globalStyles.selectedButton],
            },
            {
              value: 'corrección',
              label: 'Corrección',
              style: [globalStyles.segmentedButton, selectedStatus === 'corrección' && globalStyles.selectedButton],
            },
            {
              value: 'pendiente',
              label: 'Pendiente',
              style: [globalStyles.segmentedButton, selectedStatus === 'pendiente' && globalStyles.selectedButton],
            },
          ]}
          density="medium"
        />

        {templates.length > 0 ? (
          templates.map((template) => (
            <View key={template.name} style={globalStyles.templateContainer}>
              <Text style={globalStyles.templateText}>{template.name}</Text>
              <Text style={globalStyles.templateText}>Total: {template.total}</Text>
              <Text style={globalStyles.templateText}>Estado: {template.status}</Text>
            </View>
          ))
        ) : (
          <Text>No hay plantillas disponibles para el estado seleccionado.</Text>
        )}
      </ThemedView>
    </ScrollView>
  );
};

const globalStyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  containerButton: {
    marginBottom: 25
  },
  segmentedButton: {
    borderColor: '#309b7b',
    borderBottomWidth: 1
  },
  selectedButton: {
    backgroundColor: '#309b7b',
  },
  templateContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  templateText: {
    fontSize: 16,
  },
});

export default StatusPartialTemplateView;
