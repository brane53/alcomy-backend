import ResidentRepo from '../../../repos/residentsRepository'
import * as moment from 'moment'
import { Router, Request, Response } from 'express'



class ResidentsController {

  constructor(router: Router) {
    // baseURL: /api/residents
    router.get('/', this.getResidents)
    router.get('/:id', this.getResidentByID)
    router.post('/', this.addResident)
    router.put('/:id', this.updateResident)
    router.delete('/:id', this.deleteResident)
  }

  // gets a list of residents from the residents model
  getResidents(req: Request, res: Response) {
    let facilityID: number = req.query.facility
    if (facilityID === undefined) {
      res.status(400).send({ error: "must specify a facility" })
    }
    console.log("facility id: ", facilityID)
    ResidentRepo.getResidents(facilityID)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.status(500).send({ error: err })
        console.log(`getResidents failed: ${err}`)
      })
  }

  getResidentByID(req: Request, res: Response) {
    ResidentRepo.getResidentByID(req.params.id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        if (err.name === "SequelizeEmptyResultError") {
          res.status(404).send({ error: "id not found" })
        } else {
          res.status(500).send({ error: err })
        }
        console.log(`getResidentByID failed: ${err}`);
      });
  }

  addResident(req: Request, res: Response) {
    ResidentRepo.addResident(req.body)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        if (err.name === "SequelizeForeignKeyConstraintError") {
          res.status(400).send({ error: "facility not found" })
        }
        res.status(500).send({ error: err })
        console.log(`addResident failed: ${err}`)
      })
  }

  updateResident(req: Request, res: Response) {
    ResidentRepo.updateResident(req.params.id, req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        if (err.name === "SequelizeEmptyResultError") {
          res.status(404).send({ error: "id not found" })
        } else {
          res.status(500).send({ error: err })
        }
        console.log(`updateResident failed: ${err}`);
      });
  }

  deleteResident(req: Request, res: Response) {
    ResidentRepo.deleteResident(req.params.id)
      .then((result) => {
        if (result === 0) {
          res.status(404).send({ error: "id not found" })
        } else {
          res.json(result);
        }
      })
      .catch((err) => {
        res.status(500).send({ error: err })
        console.log(`deleteResident failed: ${err}`);
      });
  }

}

module.exports = ResidentsController


