import { Body, Controller, Delete, Get, Post, Query } from "@nestjs/common";
import { PatientNotesUseCase } from "../usecase";
import { Note } from "../core";

@Controller('notes')
export class PatientNotesController {
    constructor(private notesUsecase: PatientNotesUseCase) {}

    @Get('get')
    getNotes(@Query() id: string) {
        console.log(id)
        return this.notesUsecase.getNotes(id)
    }

    @Post('create')
    createNotes(@Query() query: { id: string }, @Body() body: object) {
        return this.notesUsecase.createNote(query.id, body)
    }

    @Delete('delete')
    deleteNotes(@Query() query: {id: string}, @Body() body: Note) {
        return this.notesUsecase.deleteNote(query.id, body)
    }
}