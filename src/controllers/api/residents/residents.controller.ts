export class ResidentsController {
  
  constructor(router) {
    router.get('/', this.getResidents)
  }

  getResidents(req, res) {
    res.send("customers are returned");
  }

}