import db from '../lib/database';

class Resident {
  constructor() {
      
  }

  getResidents() {
    return db.query('SELECT id, first_name, last_name FROM residents')
    .then((results) => {
      return results;
    });
  }

  addResident() {
    return db.query("INSERT INTO residents (first_name, last_name) VALUES ('Brane', 'Vrajich')")
    .then((results) => {
      return results;
    })
  }

}

export default new Resident();
