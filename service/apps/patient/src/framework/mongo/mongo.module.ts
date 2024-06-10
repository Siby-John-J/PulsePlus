import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IPatientTokens, IPatientRepository, IPatientNotes } from '../../core';
import { MongoRepository } from './repositories/mongo-rep.service';
import { PatientSchema } from './models/patient.schema';
import { NotificationSchema } from './models/notification.schema';
import { FamilySchema } from './models/family.schema';
import { MongoTokenRepository } from './repositories/mongo-rep-actions.service';
import { NotesSchema } from './models/notes.schema';
import { MongoNotesRepository } from './repositories/mongo-rep.notes.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Patient',
        schema: PatientSchema,
      },
      {
        name: 'Notification',
        schema: NotificationSchema,
      },
      {
        name: 'Family',
        schema: FamilySchema,
      },
      {
        name: 'Note',
        schema: NotesSchema,
      },
    ]),
  ],
  providers: [
    {
      provide: IPatientRepository,
      useClass: MongoRepository,
    },
    {
      provide: IPatientTokens,
      useClass: MongoTokenRepository,
    },
    {
      provide: IPatientNotes,
      useClass: MongoNotesRepository,
    },
  ],
  exports: [IPatientRepository, IPatientTokens, IPatientNotes],
})
export class MongoFrameWorkModule {}
