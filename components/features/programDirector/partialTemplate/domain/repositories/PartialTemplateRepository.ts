import { PartialTemplate } from "../entities/PartialTemplate";

export interface PartialTemplateRepository {
  getTemplatesByStatus(status: string): Promise<PartialTemplate[]>;
}