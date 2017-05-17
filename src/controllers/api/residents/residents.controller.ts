

class ResidentsController {
  
  constructor(router) {
    router.get('/', this.getResidents)
  }

  getResidents(req, res) {
    res.send('List of Residents');
  }

}

module.exports = ResidentsController;