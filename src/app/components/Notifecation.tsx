const Notifecation = ({ message, type = 'msg' }: { message: string, type: "error" | "msg" }) => {
    return (
        <div className={`text-white p-[15px] text-xl font-bold  text-center ${type !== "error" ? "bg-green-300" : "bg-red-400"}`}>{message}</div>
    )
}

export default Notifecation