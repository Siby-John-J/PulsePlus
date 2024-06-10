import { InjectModel } from '@nestjs/mongoose';
import { IPatientNotes, Note } from '../../../core';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoNotesRepository extends IPatientNotes {
  constructor(
    @InjectModel(Note.name) readonly notesSchema: Model<Note>,
  ) {
    super();
  }
  async createNotes(id: string, payload: Note): Promise<Note> {
    const data =  {...payload, patientId: id }
    return await this.notesSchema.create(data)
  }

  async deleteNotes(id: string, payload: Note) {
    return await this.notesSchema.findOneAndDelete({patientId: id}, payload)
  }

  async getNotes(id: string): Promise<Note[]> {
    return await this.notesSchema.find()
  }
}
