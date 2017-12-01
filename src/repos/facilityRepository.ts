import { sequelize } from '../lib/database'
import { Facility, FacilityInstance } from '../models/facility.model'
import { Instance } from 'sequelize';

class FacilityRepository {
  constructor() {

  }

  public getFacilities() {
    return Facility.findAll()
  }

  public addFacility(facility: FacilityInstance) {
    return Facility.create(facility)
  }
  
  public getFacilityByID(id: string) {
    return Facility.findById(id, {rejectOnEmpty: true})
  }

  public updateFacility(id: string, facility: FacilityInstance) {
    return Facility.findById(id, { rejectOnEmpty: true })
      .then( (f: FacilityInstance) => {
        return f.update(facility, {returning: true})
      })
  }

  public deleteFacility(id: string) {
    return Facility.destroy({ where: {id: id} })
  }

}

export default new FacilityRepository()