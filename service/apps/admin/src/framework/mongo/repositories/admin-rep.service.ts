import { InjectModel } from "@nestjs/mongoose";
import { AppoinetmentEnitity, IAppointment, RecordsEntity } from "apps/admin/src/core";
import { Appoinetment } from "../models/appoinetment.schema";
import { Model } from "mongoose";

export class AppoinetmentRepository extends IAppointment {
    constructor(
        @InjectModel(Appoinetment.name) readonly appointschema: Model<AppoinetmentEnitity>,
      ) {
        super();
    }

    async getDoctorId(id: string): Promise<object> {
        return await this.appointschema.findOne({senderId: id}, { accept: 1 })
    }

    async getAppointsForDoctor(id: string): Promise<AppoinetmentEnitity[]> {
        return await this.appointschema.find({accept: id, valid: true})
    }

    async createAppoinetment(payload: AppoinetmentEnitity): Promise<object> {
        const res =  await this.appointschema.create(payload)
        if(res) {
            return { response: true }
        } else {
            return { response: false }
        }
    }

    async getAppoinetment(): Promise<AppoinetmentEnitity[]> {
        return await this.appointschema.find()
    }

    async getOneAppointment(_id: string): Promise<AppoinetmentEnitity> {
        return await this.appointschema.findOne({_id})
    }

    async changeStatus(status: string, payload: object): Promise<AppoinetmentEnitity> {
        return await this.appointschema.findOneAndUpdate(payload, {status: status}, {
            returnDocument: 'after',
        })
    }

    async acceptAppointment(_id: string, payload: object): Promise<object> {
        return await this.appointschema.findOneAndUpdate({_id}, payload)
    }

    async addRecords(id: string, payload: RecordsEntity): Promise<object> {
        return await this.appointschema.findOneAndUpdate({_id: id}, {records: payload})
    }

    async getByRecords(id: string, type: string): Promise<object[]> {
        const res = await this.appointschema.find({ 'records.doctorData': { $in: [id] } }, { senderId: 1 })
        console.log(res);
        
        return res
    }

    async removeRecord(id: string): Promise<any> {
        return await this.appointschema.findOneAndUpdate(
            { 'records.doctorData': { $in: [id] } },
            { 'records': { $pull: { doctorData: id } }})
    }

    async addDoctor(id: string, appointId: string): Promise<any> {
        return await this.appointschema.findOneAndUpdate({_id: appointId}, {accept: id})
    }

    async removeDoctor(id: string): Promise<any> {
        
    }

    async addItems(payload: any): Promise<AppoinetmentEnitity> {
        const { id, ...rest } = payload
        
        return await this.appointschema.findOneAndUpdate({_id: id}, rest)
    }

    async findForPatients(id: string): Promise<AppoinetmentEnitity[]> {
        return await this.appointschema.find({senderId: id, valid: true})
    }
}