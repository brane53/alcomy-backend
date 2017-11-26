import FacilityRepo from '../../../repos/facilityRepository';
import * as moment from 'moment';
import { Router, Request, Response } from 'express';
// import { Response } from '_debugger';


class FacilityController {

  constructor(router: Router) {
    // baseURL: /api/facilities
    router.get('/', this.getFacilities);
    router.post('/', this.addFacility);
  }

  // // gets a list of residents from the residents model
  getFacilities(req: Request, res: Response) {
    FacilityRepo.getFacilities()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).send({ error: err })
        console.log(`getResidents failed: ${err}`);
      });
  }

  // get a single resident record
  addFacility(req: Request, res: Response) {
    FacilityRepo.addFacility(req.body)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.status(500).send({ error: err })
        console.log(`addFacility failed: ${err}`);
      })
  }

}

module.exports = FacilityController;


