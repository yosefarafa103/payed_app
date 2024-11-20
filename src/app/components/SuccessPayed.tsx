
import { FaCheck } from "react-icons/fa";
const SuccessPayed = () => {
    return (
        <>
            <div className="flex items-center p-[15px] flex-col gap-2">
                <span className="size-[90px] rounded-[50%] border-8 flex items-center justify-center border-green-300 text-[32px] text-green-300">
                    <FaCheck />
                </span>
                <h2 className="text-[22px] font-semibold">Payment Successful</h2>
                <p>
                    Thank you for your purchase!
                </p>
            </div>
            <section className="p-[10px] rounded-[6px] border border-solid border-[#eee]">
                <div className="flex items-center justify-between">
                    <p>$5</p>
                    <h4>Amount Paid</h4>
                </div>
                <div className="flex items-center justify-between mt-[5px]">
                    <p>{new Date().toLocaleDateString()}</p>
                    <h4>Date & Time</h4>
                </div>
                <div className="flex items-center justify-between mt-[5px]">
                    <p>{new Date().getTime()}</p>
                    <h4>Referance</h4>
                </div>
            </section>
        </>
    )
}

export default SuccessPayed