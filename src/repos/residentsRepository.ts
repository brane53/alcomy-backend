import db from '../lib/database';
import { Resident } from '../models/resident.model';
import { connection } from '../lib/database';

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

    
    return connection.sync().then(()=>{
      return Resident.create(resident);
    })
    .catch((err)=>{
      console.log('There was an error when syncing to DB')
    });




    /* let res = new Resident(resident);
    let query = res.addQuery();
    
    return db.query(query)
    .then((results) => {
      return results;
    }) */
  }

}

export default new ResidentRepository();
