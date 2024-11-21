import axios from "axios";
import { AreaDataSource } from "../../domain/datasources/AreaDataSource";
import { AreaEntity } from "../../domain/entities/AreaEntity";
import { API_URL } from "../../../../../../constants/api";

const axiosInstance = axios.create({
  baseURL: `${API_URL}/areas`,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleApiError = (error: any) => {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.message || "Error al procesar la solicitud";
    console.error(`[API Error]: ${message}`);
    throw new Error(message);
  }
  console.error(`[Unknown Error]: ${error}`);
  throw new Error("Error desconocido en la solicitud");
};

export const createArea = async (area: AreaEntity): Promise<void> => {
  try {
    await axiosInstance.post("/", area);
  } catch (error) {
    handleApiError(error);
  }
};

export const getAllAreas = async (): Promise<AreaEntity[]> => {
  try {
    const response = await axiosInstance.get("/");
    return response.data.data;
  } catch (error) {
    handleApiError(error);
    return [];
  }
};

export const updateArea = async (id: number, area: AreaEntity): Promise<void> => {
  try {
    await axiosInstance.put(`/${id}`, area);
  } catch (error) {
    handleApiError(error);
  }
};

export const deleteArea = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`/${id}`);
  } catch (error) {
    handleApiError(error);
  }
};

export class AreaApiDatasource implements AreaDataSource {
  async createArea(area: AreaEntity): Promise<void> {
    await createArea(area);
  }

  async getAllAreas(): Promise<AreaEntity[]> {
    return await getAllAreas();
  }

  async updateArea(id: number, area: AreaEntity): Promise<void> {
    await updateArea(id, area);
  }

  async deleteArea(id: number): Promise<void> {
    await deleteArea(id);
  }
}
