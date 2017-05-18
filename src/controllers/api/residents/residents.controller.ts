import Resident from '../../../models/residents';



class ResidentsController {
  
  constructor(router) {
    // baseURL: /api/residents
    router.get('/', this.getResidents);
    router.get('/:id', this.getResident);
    router.post('/', this.addResident)
  }
  
  // gets a list of residents from the residents model
  getResidents(req, res) {
    const residents = [
      {
        firstName: "Brane",
        lastName: "Vrajich"
      },
      {
        firstName: "Brane",
        lastName: "Vrajich"
      },
      {
        firstName: "Brane",
        lastName: "Vrajich"
      },
      {
        firstName: "Brane",
        lastName: "Vrajich"
      },
      {
        firstName: "Brane",
        lastName: "Vrajich"
      },
    ];
    Resident.getResidents().then((result) => {
      res.json(result.rows);

    })
    .catch((err) => {
      console.log(`getResidents failed: ${err}`);
    });

  }
  
  getResident(req, res) {

  }

  addResident() {
    Resident.addResident()
  }

}

module.exports = ResidentsController;