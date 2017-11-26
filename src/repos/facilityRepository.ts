import { sequelize } from '../lib/database';
import { Facility, IFacility } from '../models/facility.model';

class FacilityRepository {
  constructor() {

  }

  public getFacilities() {
    return Facility.findAll();
  }




  // Creates a single resident in the database
  public addFacility(facility: IFacility) {
    console.log("facility: *************", facility)
    return Facility.create(facility);
  }

}

export default new FacilityRepository();
