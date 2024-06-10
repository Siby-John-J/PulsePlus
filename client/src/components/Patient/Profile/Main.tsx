
function Main(props: any) {
    return (
        <div className="main bg-slate-300 col-span-2 rounded-3xl row-span-4 text-black flex flex-col justify-center items-center">
            <div className="bg-black h-[80px] w-[80px] rounded-full mb-3"></div>
            <h1 className="text-3xl font-semibold mb-4">{props.data.name}</h1>
            <p>Created</p>
            <p className="font-medium mb-6">{'date'}</p>
        </div>
    );
}

export default Main