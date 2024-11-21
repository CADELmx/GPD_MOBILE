import { AreaEntity } from "../entities/AreaEntity";

export interface AreaRepository {
  createArea(area: AreaEntity): Promise<void>;
  getAllAreas(): Promise<AreaEntity[] | null>;
  updateArea(id: number, area: AreaEntity): Promise<void>;
  deleteArea(id: number): Promise<void>;

}