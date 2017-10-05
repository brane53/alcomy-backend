import { Resident } from '../models/resident.model';
import { sequelize } from '../lib/database';


class ResidentRepository {
  constructor() {
      
  }


  // Gets all residents that below from a given facility
  public getResidents(facilityId?: number, query?) {
 
    return Resident.findAll({
      where: { facilityId: facilityId },
      limit: 20,
      offset: 4,
      raw: true
    });
  }

  
  

  // Creates a single resident in the database
  public addResident(resident) {
    return Resident.create(resident);
  }

}

export default new ResidentRepository();
