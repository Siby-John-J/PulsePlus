import { IRole } from "../../core";

export class AdminRole implements IRole {
    processRequest() {
        return 'from admin'
    }
}

export class DoctorRole implements IRole {
    processRequest() {
        return 'from doctor'
    }
}

export class PatientRole implements IRole {
    processRequest() {
        return 'from doctor'
    }
}