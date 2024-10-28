import { PartialTemplate } from "../entities/PartialTemplate";

export interface PartialTemplateDatasource {
    fetchTemplatesByStatus(status: string): Promise<PartialTemplate[]>;
}