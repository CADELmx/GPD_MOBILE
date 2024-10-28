import { API_URL } from "../../../../../../constants/api";
import { PartialTemplate } from "../../domain/entities/PartialTemplate";

export class PartialTemplatesDatasourceImp implements PartialTemplatesDatasourceImp {
  async fetchTemplatesByStatus(status: string): Promise<PartialTemplate[]> {
    const response = await fetch(`${API_URL}/partial-templates?status=${status}`);

    if (!response.ok) {
      throw new Error('Error al obtener las plantillas parciales');
    }
    const data = await response.json();
    return data.data;
  }

}
