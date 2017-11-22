import { sequelize } from '../lib/database';
import { User } from './user.model';
import { Employee } from './employee.model';
import { Facility } from './facility.model';
import { Resident } from './resident.model';
import { Medication } from './medication.model';
import { MedicationInventoryItem } from './medication-inventory.model';
import { Prescription } from './medication-prescription.model';
import { MedicationTask } from './medication-task.model';
import { PhoneNumber } from './phone-number.model';
import { Room } from './room.model';
import { Address } from './address.model';
import { Specialist } from './specialist.model';
import { Contact } from './contact.model';


const db: any = {
  Facility: Facility,
  User: User,
  Employee: Employee,
  Resident: Resident,
  Medication: Medication,
  MedicationInventoryItem: MedicationInventoryItem,
  Prescription: Prescription,
  MedicationTask: MedicationTask,
  PhoneNumber: PhoneNumber,
  Room: Room,
  Address: Address,
  Specialist: Specialist,
  Contact: Contact
}

// 
Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
})

db.sequelize = sequelize;

console.log('run db')
export default db;