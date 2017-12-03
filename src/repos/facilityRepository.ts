import { sequelize } from '../lib/database'
import { Facility, FacilityInstance } from '../models/facility.model'
import { Instance } from 'sequelize';

class FacilityRepository {
  constructor() {

  }

  // getFacilities gets all facilities and returns a promise with those facilities
  public getFacilities(): Promise<FacilityInstance[]>{
    return Facility.findAll()
  }

  // addFacility adds a facility and returns a promise with that facility
  public addFacility(facility: FacilityInstance): Promise<FacilityInstance> {
    return Facility.create(facility)
  }
  
  // getFacilityByID gets a facility and returns a promise with that facility
  public getFacilityByID(id: string): Promise<FacilityInstance> {
    return Facility.findById(id, {rejectOnEmpty: true})
  }

  // updateFacility updates a facility and returns a promise with the newly edited facility
  public updateFacility(id: string, facility: FacilityInstance): Promise<FacilityInstance> {
    return Facility.findById(id, { rejectOnEmpty: true })
      .then( (f: FacilityInstance) => {
        return f.update(facility, {returning: true})
      })
  }

  // deleteFacility returns a promise with the number of facilities deleted
  public deleteFacility(id: string): Promise<number> {
    return Facility.destroy({ where: {id: id} })
  }

}

export default new FacilityRepository()