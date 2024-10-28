import { PartialTemplatesRepository } from './PartialTemplatesRepository'; // Asegúrate de tener esta interfaz
import { PartialTemplatesDatasource } from '../../domain/datasources/PartialTemplatesDatasource';
import { PartialTemplate } from '../../domain/entities/PartialTemplate';

export class PartialTemplatesRepositoryImp implements PartialTemplatesRepository {
    private datasource: PartialTemplatesDatasource;

    constructor(datasource: PartialTemplatesDatasource) {
        this.datasource = datasource;
    }

    async fetchTemplatesByStatus(status: string): Promise<PartialTemplate[]> {
        return await this.datasource.fetchTemplatesByStatus(status);
    }
}
