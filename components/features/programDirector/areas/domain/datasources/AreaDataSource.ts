import { AreaEntity } from "../entities/AreaEntity";

export interface AreaDataSource {
  createArea(area: AreaEntity): Promise<void>;
  getAllAreas(): Promise<AreaEntity[]>;
  updateArea(id: number, area: AreaEntity): Promise<void>;
  deleteArea(id: number): Promise<void>;
}