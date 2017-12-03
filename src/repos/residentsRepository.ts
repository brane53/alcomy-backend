import { Resident, ResidentInstance } from '../models/resident.model';
import { sequelize } from '../lib/database';
import { Facility } from '../models/facility.model';


class ResidentRepository {
  constructor() {
      
  }

  // Gets all residents that below from a given facility and returns a promise with the residents
  public getResidents(facilityId: number): Promise<ResidentInstance[]> {
    return Resident.findAll({
      where: { facilityId: facilityId }
    });
  }

  // getResidentByID gets a resident by id and returns a promise with the resident instance
  public getResidentByID(id: number): Promise<ResidentInstance> {
    return Resident.findById(id, { rejectOnEmpty: true })
  }

  // Creates a single resident in the database and returns a promise with the added Resident
  public addResident(resident: ResidentInstance): Promise<ResidentInstance> {
    return Resident.create(resident);
  }

  // updateResident updates a resident and returns a promise with the newly edited resident
  public updateResident(id: string, newResident: ResidentInstance): Promise<ResidentInstance> {
    return Resident.findById(id, { rejectOnEmpty: true })
      .then((dbResident: ResidentInstance) => {
        return dbResident.update(newResident, { returning: true })
      })
  }

  // deleteResident returns a promise with the number of residents deleted
  public deleteResident(id: string): Promise<number> {
    return Resident.destroy({ where: { id: id } })
  }

}

export default new ResidentRepository();
