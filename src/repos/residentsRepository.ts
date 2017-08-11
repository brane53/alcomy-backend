import { ResidentModel } from '../models/resident.model';
import { db } from '../lib/database';


class ResidentRepository {
  constructor() {
      
  }


  // Gets all residents that below from a given facility
  public getResidents(faciliyId?: number, query?) {
    return ResidentModel.findAll({
      attributes: ['firstName', 'lastName', 'birthDate'],
      limit: 2,
      offset: 4
    });
  }

  
  

  // Creates a single resident in the database
  public addResident(resident) {
    return ResidentModel.create(resident);
  }

}

export default new ResidentRepository();
