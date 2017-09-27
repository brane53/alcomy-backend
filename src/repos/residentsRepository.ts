import { Resident } from '../models/resident.model';
import { db } from '../lib/database';


class ResidentRepository {
  constructor() {
      
  }


  // Gets all residents that below from a given facility
  public getResidents(faciliyId?: number, query?) {

    // 

    return Resident.findAll({
      
      limit: 20,
      offset: 4
    });
  }

  
  

  // Creates a single resident in the database
  public addResident(resident) {
    return Resident.create(resident);
  }

}

export default new ResidentRepository();
