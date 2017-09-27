import ResidentRepo from '../../../repos/residentsRepository';
import * as moment from 'moment';
import {Router} from 'express';


class ResidentsController {

  constructor(router: Router) {
    // baseURL: /api/residents
    router.get('/', this.getResidents);
    router.get('/:id', this.getResident);
    router.post('/', this.addResident);
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

    ResidentRepo.getResidents().then((result) => {
      res.json(result);

    })
      .catch((err) => {
        console.log(`getResidents failed: ${err}`);
      });

  }

  // get a single resident record
  getResident(req, res) {

  }

  addResident(req, res) {

    /* const resident = {
      firstName: 'brane',
      lastName: 'vrajich',
      middleName: '',
      birthDate: moment('1-1-11').format(),
      gender: 'male',
      ssn: '610050402',
      isDnr: true,
      isAmbulatory: true,
      isVerbal: true
    } */
    
    ResidentRepo.addResident(req.body)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.log(`addResident failed: ${err}`);
      })
  }

}

module.exports = ResidentsController;


"brane"