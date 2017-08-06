import db from '../lib/database';
import { Resident } from './resident.model';

class ResidentRepository {
  constructor() {
      
  }

  getResidents() {
    return db.query('SELECT id, first_name, last_name FROM residents')
    .then((results) => {
      return results;
    });
  }

  

  addResident(resident) {
    let res = new Resident(resident);
    let query = res.addQuery();
    
    return db.query(query)
    .then((results) => {
      return results;
    })
  }

}

export default new ResidentRepository();
