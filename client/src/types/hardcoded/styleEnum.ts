
export enum ChatTextHolderStyle {
    STYLE1 = 'h-[18%] mt-3 flex justify-start flex-col',
    STYLE2 = 'h-[18%] mt-3 flex flex-col items-end',
    STYLE3 = 'w-fit rounded-md h-[100%] shadow-lg bg-white flex px-3 items-center',
    STYLE4 = 'w-fit rounded-md h-[100%] shadow-lg text-white bg-blue-600 flex px-3 items-center'
}

export enum UserTemplateStyle {
    ROW = 'flex flex-row items-center gap-2',
    COLUMN = 'flex flex-col items-center gap-2 text-center'
}

export enum PatientBillingTableStyle {
    TITLE = 'text-left font-normal text-gray-500 text-sm pb-2',
    DATA = 'text-black font-medium py-3'
}

export enum ModelInputStyle {
    STYLE = 'outline-none border-[1px] border-gray-500 h-[2.5em] w-[30em] px-2 rounded-md'
}

export enum AppointmentAddStyle {
    ADDED = "px-4 bg-blue-500 text-white rounded-md h-[2em]",
    NOT_ADDED = "px-4 bg-gray-300 rounded-md h-[2em]"
}