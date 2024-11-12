
import { IoIosArrowForward, IoMdPricetag } from "react-icons/io";
import { TiDocumentText } from "react-icons/ti";
import BodyContianer from "./BodyContianer";

const FirstPage = () => {
    // rgb 
    return (
        <BodyContianer>
            <section className="flex justify-between items-center">
                <span className="size-[40px] flex cursor-pointer hover:bg-[#ffbb8a] items-center hover:text-white transition-all duration-[300ms] text-[#f69424] justify-center rounded-[50%] bg-[#fdf1e8]">
                    <IoIosArrowForward />
                </span>
                <h2 className="font-semibold">تفاصيل الدفع</h2>
                <div></div>
            </section>
            <section className="rounded-[12px] border border-[#f7f7f7] py-[20px] mt-[20px] px-[15PX] shadow-[#eee] shadow-2xl">
                <h4>LOGO</h4>
                <div className="flex items-center font-semibold mt-[15px]  gap-2">
                    <span className="size-[30px] text-[20px] flex items-center justify-center bg-[#eee] rounded-[8px]">
                        <IoMdPricetag />
                    </span>
                    <h4 className="text-[14px]">مبلغ الفاتورة: 5 KWD</h4>
                </div>
                <div className="flex items-center font-semibold mt-[15px]  gap-2">
                    <span className="size-[30px] text-[20px] flex items-center justify-center bg-[#eee] rounded-[8px]">
                        <TiDocumentText />
                    </span>
                    <h4 className="text-[14px]">نوع الفاتوره: (عربون تثبيت) (PREPAY INVOCE)</h4>
                </div>

            </section>
            <h4 className="font-semibold mt-[25px]">اختر طريقه الدفع الي تناسبك</h4>
            <div className="flex mt-[15px] items-center gap-2">
                <div className="min-h-[100px] flex-1 bg-[#eee] rounded-[8px]"></div>
                <div className="min-h-[100px] flex-1 bg-[#eee] rounded-[8px]"></div>
            </div>
        </BodyContianer>
    )
}

export default FirstPage