import { detailsTypes, patientTypes } from "../types/patient/patientTypes";
import { responseType } from "../types/responseType";
import { useStoreGet } from "./useStore";

export const usePatientUpdate = async (payload: any, query: object): Promise<responseType | detailsTypes> => {
    const token = useStoreGet()
    
    const response = await fetch("http://localhost:2000/patient-service/actions/update", {
        method: "post",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({payload, query}),
    });

    return await response.json();
}
