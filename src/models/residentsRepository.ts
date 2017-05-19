import db from '../lib/database';

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
    return db.query(`INSERT INTO residents (first_name, last_name) VALUES ('Brane', 'Vrajich')`)
    .then((results) => {
      return results;
    })
  }

}

export default new ResidentRepository();
