

class ResidentsController {
  
  constructor(router) {
    // baseURL: /api/residents
    router.get('/', this.getResidents);
    router.get('/:id', this.getResident);
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
    res.json(residents);
  }
  
  getResident(req, res) {

  }

}

module.exports = ResidentsController;