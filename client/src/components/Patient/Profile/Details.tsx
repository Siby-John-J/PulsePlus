import { useDispatch } from "react-redux";
import { turnOnDetailsPopup } from "../../../redux/slices/patient/patientDetailPopupSlice";
import { detailsTypes } from "../../../types/patient/patientTypes";

function Details(props: { props: detailsTypes }) {
    const dispatch = useDispatch()

    function validate(value: any) {
        if (typeof value === "object" && value.length > 20) {
            return value.toString().slice(0, 20);
        }

        if (value !== undefined) {
            return value;
        } else {
            return "null";
        }
    }

    return (
        <div className="details bg-slate-300 col-span-4 row-span-4 rounded-3xl flex flex-col text-center text-black">
            {
                props.props.email !== undefined ?
                    <div className="flex flex-row justify-between items-center text-start mx-5 h-[100%]">
                        <div className="flex flex-col justify-evenly h-full">
                            <div>
                                <h1 className="font-extralight">Date of Birth</h1>
                                <p className="font-medium">
                                    {validate(props.props.dob)}
                                </p>
                            </div>
                            <div>
                                <h1 className="font-extralight">Address</h1>
                                <p className="font-medium">
                                    {validate(props.props.address)}
                                </p>
                            </div>
                            <div>
                                <h1 className="font-extralight">Blood Group</h1>
                                <p className="font-medium">
                                    {validate(props.props.blood_group)}
                                </p>
                            </div>
                            <div>
                                <h1 className="font-extralight">Place</h1>
                                <p className="font-medium">
                                    {validate(props.props.place)}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-evenly pr-0 h-full">
                            <div>
                                <h1 className="font-extralight">Phone</h1>
                                <p className="font-medium">
                                    {validate(props.props.phone)}
                                </p>
                            </div>
                            <div>
                                <h1 className="font-extralight">Gender</h1>
                                <p className="font-medium">
                                    {validate(props.props.gender)}
                                </p>
                            </div>
                            <div>
                                <h1 className="font-extralight">Age</h1>
                                <p className="font-medium">
                                    {validate(props.props.age)}
                                </p>
                            </div>
                            <div>
                                <h1 className="font-extralight">Email</h1>
                                <p className="font-medium">
                                    {validate(props.props.email)}
                                </p>
                            </div>
                        </div>
                    </div>
                 : <div></div>
            }

            <div className="mb-3 cursor-pointer" onClick={e => {
                dispatch(turnOnDetailsPopup())
            }}>edit details</div>
        </div>
    );
}

export default Details