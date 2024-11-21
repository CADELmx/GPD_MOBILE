import { AreaDataSource } from "../../domain/datasources/AreaDataSource";
import { AreaEntity } from "../../domain/entities/AreaEntity";
import { AreaRepository } from "../../domain/repositories/AreaRepository";

export class AreaRepositoryImpl implements AreaRepository {
  constructor(private readonly datasource: AreaDataSource) {}

  async createArea(area: AreaEntity): Promise<void> {
      await this.datasource.createArea(area);
  }

  async getAllAreas(): Promise<AreaEntity[]> {
    return await this.datasource.getAllAreas();
  }

  async updateArea(id: number, area: AreaEntity): Promise<void> {
    await this.datasource.updateArea(id, area);
  }

  async deleteArea(id: number): Promise<void> {
    await this.datasource.deleteArea(id);
  }
}