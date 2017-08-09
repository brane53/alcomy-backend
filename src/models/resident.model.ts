import * as moment from 'moment';

// With the use of Sequelize this class may be useless
export class Resident {
  id?: number;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  birthDate?: string;
  gender?: string;
  ssn?: string;
  isDnr?: boolean;
  isAmbulatory?: boolean;
  isVerbal?: boolean;
  diet?: string;

  constructor(resident) {
    this.firstName = resident.firstName;
    this.lastName = resident.lastName;
    this.middleName = resident.middleName;
    this.birthDate = resident.birthDate;
    this.gender = resident.gender;
    this.ssn = resident.ssn;
    this.isDnr = resident.isDnr;
    this.isAmbulatory = resident.isAmbulatory;
    this.isVerbal = resident.isVerbal;
    this.diet = resident.diet;
  }

  private createResidentObj() {
    return {
      first_name: this.firstName,
      last_name: this.lastName,
      middle_name: this.middleName,
      birth_date: this.birthDate,
      gender: this.gender,
      ssn: this.ssn,
      is_dnr: this.isDnr,
      is_ambulatory: this.isAmbulatory,
      is_verbal: this.isVerbal,
      diet: this.diet
    }
  }

  addQuery(): string {

    let resident = this.createResidentObj();
    let columns: string[] = Object.keys(resident);
    let values: string[] = [];
    for (var p in resident) {
      values.push(resident[p]);
    }

    let columnString = columns.join();
    let valuesString = values.toString();
    console.log("Value", valuesString);
    
    let query: string = `
      INSERT INTO resident (${columnString}) VALUES (${valuesString})
    `
    console.log(query);
    return query;
     
  }

}

/*  let resident = new Resident({
  firstName: 'brane',
  lastName: 'vrajich',
  middleName: '',
  birthDate: moment('1-1-11').format(),
  gender: 'male',
  ssn: '610050402',
  isDnr: true,
  isAmbulatory: true,
  isVerbal: true,
  diet: 'none'
})

resident.addQuery();  */


// Start Sequelize model for resident

