import FacilityRepo from '../../../repos/facilityRepository';
import * as moment from 'moment';
import { Router, Request, Response } from 'express';


class FacilityController {
  constructor(router: Router) {
    // baseURL: /api/facilities
    router.get('/', this.getFacilities);
    router.get('/:id', this.getFacilityByID);
    router.post('/', this.addFacility);
    router.put('/:id', this.updateFacility);
    router.delete('/:id', this.deleteFacility);
  }

  getFacilities(req: Request, res: Response) {
    FacilityRepo.getFacilities()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).send({ error: err })
        console.log(`getFacilities failed: ${err}`);
      });
  }

  getFacilityByID(req: Request, res: Response) {
    FacilityRepo.getFacilityByID(req.params.id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        if (err.name === "SequelizeEmptyResultError"){
          res.status(404).send({ error: "id not found" })
        } else {
          res.status(500).send({ error: err })
        }
        console.log(`getFacilityByID failed: ${err}`);
      });
  }

  addFacility(req: Request, res: Response) {
    FacilityRepo.addFacility(req.body)
      .then((result) => {
        res.status(201).json(result)
      })
      .catch((err) => {
        res.status(500).send({ error: err })
        console.log(`addFacility failed: ${err}`);
      })
  }

  updateFacility(req: Request, res: Response) {
    FacilityRepo.updateFacility(req.params.id, req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        if (err.name === "SequelizeEmptyResultError") {
          res.status(404).send({ error: "id not found" })
        } else {
          res.status(500).send({ error: err })
        }
        console.log(`updateFacility failed: ${err}`);
      });
  }

  deleteFacility(req: Request, res: Response) {
    FacilityRepo.deleteFacility(req.params.id)
      .then((result) => {
        if (result === 0) {
          res.status(404).send({ error: "id not found" })
        } else {
          res.json(result);
        }
      })
      .catch((err) => {
        res.status(500).send({ error: err })
        console.log(`deleteFacility failed: ${err}`);
      });
  }

}

module.exports = FacilityController;


