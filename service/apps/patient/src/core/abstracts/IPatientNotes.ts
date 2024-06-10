import { Note } from "../entity";

export abstract class IPatientNotes {
    abstract createNotes(id: string, payload: Note): Promise<Note>

    abstract getNotes(id: string): Promise<Note[]>

    abstract deleteNotes(id: string, payload: Note): any
}