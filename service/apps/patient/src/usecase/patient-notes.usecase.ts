import { Injectable } from "@nestjs/common";
import { IPatientNotes, Note } from "../core";

@Injectable()
export class PatientNotesUseCase {
    constructor(private patientNote: IPatientNotes) {}

    async createNote(id: string, note: any) {
        return await this.patientNote.createNotes(id, note)
    }

    async deleteNote(id: string, note: Note) {
        return this.patientNote.deleteNotes(id, note)
    }

    async getNotes(id: string) {
        return await this.patientNote.getNotes(id)
    }
}