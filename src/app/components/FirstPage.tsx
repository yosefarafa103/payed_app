import { IoIosArrowForward, IoMdPricetag } from "react-icons/io";
import { TiDocumentText } from "react-icons/ti";
import BodyContianer from "./BodyContianer";
import arkamLogo from "@/assets/arkam.png"
import PaymentMethods from "./PaymentMethods";

const FirstPage = () => {

    return (
        <BodyContianer>
            <section className="flex justify-between">
                {/* <span className="size-[40px] flex cursor-pointer hover:bg-[#ffbb8a] items-center hover:text-white transition-all duration-[300ms] text-[#f69424] justify-center rounded-[50%] bg-[#fdf1e8]">
                    <IoIosArrowForward />
                </span>
                <div></div> */}
                <h2 className="font-bold text-center w-full">تفاصيل الدفع</h2>
            </section>
            <section className="rounded-[12px] border border-[#f7f7f7] py-[20px] mt-[20px] px-[15PX] shadow-[#eee] shadow-2xl">
                {/* <h4>LOGO</h4> */}
                <img loading="lazy" alt="" src={arkamLogo.src} />
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
            <PaymentMethods />
        </BodyContianer>
    )
}

export default FirstPage