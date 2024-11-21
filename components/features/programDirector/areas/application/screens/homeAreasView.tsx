import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from '@/components/ThemedText';
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CreateAreasView from "./createAreasView";
import { useEffect, useState } from "react";
import { AreaApiDatasource, getAllAreas } from "../../infrastructure/datasources/AreaApiDatasource";
import { AreaEntity } from "../../domain/entities/AreaEntity";
import { ThemedColor } from "../../../../../ThemedColor";
import UpdateAreasView from './updateAreasView';
import { AreaRepositoryImpl } from "../../infrastructure/repositories/AreaRepositoryImpl";
import DeleteAreasView from './deleteAreasView';
import { ActivityIndicator } from "react-native-paper";

const HomeAreasView = () => {
  const [areas, setAreas] = useState<AreaEntity[]>([]);
  const [loading, setLoading] = useState(false);
  const [deleteArea, setDeleteArea] = useState<AreaEntity | null>(null);
  const [updateArea, setUpdateArea] = useState<AreaEntity | null>(null);
  const textColor = ThemedColor();

  const fetchAreas = async () => {
    setLoading(true);
    try {
      const response = await getAllAreas();
      setAreas(response || []);
    } catch (error) {
      Alert.alert("Error", "No se pudo obtener las áreas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAreas();
  }, []);

  const handleDeleteConfirm = async (areaId: number) => {
    try {
      const repository = new AreaRepositoryImpl(new AreaApiDatasource());
      await repository.deleteArea(Number(areaId));
      setDeleteArea(null);
      fetchAreas();
    } catch (error) {
      Alert.alert("Error", "No se pudo eliminar el área");
    }
  };

  if (loading) {
    return (
      <ThemedView style={styles.loadContainer}>
        <ActivityIndicator animating={true} color={textColor.thirtiary} size="large" />
        <ThemedText>Cargando Áreas...</ThemedText>
      </ThemedView>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          ÁREAS
        </ThemedText>
        <CreateAreasView onAreaCreated={fetchAreas} />

        {areas.length > 0 ? (
          areas.map((area) => (
            <View key={area.id} style={styles.areaContainer}>
              <ThemedText style={styles.areaText}>{area.name}</ThemedText>
              <Ionicons
                name="create"
                size={24}
                color={textColor.link}
                onPress={() => setUpdateArea(area)}
                style={styles.icon}
              />
              <Ionicons
                name="trash-bin"
                size={24}
                color={textColor.secondary}
                onPress={() => setDeleteArea(area)}
                style={styles.icon}
              />
            </View>
          ))
        ) : (
          <ThemedText>No hay áreas disponibles</ThemedText>
        )}

        {updateArea && (
          <UpdateAreasView
            id={updateArea.id!}
            initialName={updateArea.name}
            onClose={() => setUpdateArea(null)}
            visible={!!updateArea}
            onAreaUpdated={fetchAreas}
          />
        )}

        <DeleteAreasView
          area={deleteArea}
          onClose={() => setDeleteArea(null)}
          onAreaDeleted={fetchAreas}
        />
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', },
  scrollContainer: { flexGrow: 1, },
  container: { flex: 1, padding: 20, },
  title: { marginBottom: 20, textAlign: 'center', },
  areaContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10, },
  areaText: { flex: 1, fontSize: 16, },
  icon: { marginLeft: 10, padding: 5, },
});

export default HomeAreasView;
