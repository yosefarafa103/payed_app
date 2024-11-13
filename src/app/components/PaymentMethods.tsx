"use client"
import Pay1 from '@/assets/Rectangle 1.png'
import Pay2 from '@/assets/Photo.png'
import { FormEvent, FormEventHandler, SetStateAction, useState } from 'react'
type method = {
    img: any,
    title: string
}
type t2 = {
    month: string
    year: string
}
const PaymentMethods = () => {
    const [idx, setIdx] = useState(0)
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState('');
    const [expiresYear, setExpiresYear] = useState<SetStateAction<string>>();
    const [expiresMonth, setExpiresMonth] = useState<SetStateAction<string>>();
    const [pass, setPass] = useState("");
    if (Number(expiresYear) < 2018 || Number(expiresMonth) > 12) {
        console.log("invalid Date!");
    } else {

        console.log("Valid Date!✅");
    }
    const methods: method[] = [{
        img: Pay1,
        title: "Paypal"
    }, {
        img: Pay2,
        title: "Visa - MasterCard"
    }]
    const handelSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


    }
    // [Pay1, Pay2]
    return (
        // f68024
        <div>
            <h4 className="font-bold mt-[25px] text-[18px]">اختر طريقه الدفع الي تناسبك</h4>
            <div className="flex mt-[15px] items-center gap-2">
                {methods.map((m, i) => (
                    <section onClick={() => setIdx(i)} className='flex-1 active:scale-[1.01]'>
                        <div className={`min-h-[100px] cursor-pointer flex flex-col gap-2 items-center justify-center group hover:bg-[#f58025] transition-all duration-[300ms] ${i === idx ? "bg-[#f58025] text-white" : "bg-[#eee]"} rounded-[8px]`}>
                            <img src={m.img.src} alt="" className='object-cover' />
                            <h4 className={`font-bold text-sm font-[abc] transition-all duration-[300ms]  group-hover:text-white  ${i === idx ? "text-white" : "text-[#1c374b]"}`}>{m.title.toUpperCase()}</h4>
                        </div>
                    </section>
                ))}
                {/* <div className="min-h-[100px] flex-1 bg-[#eee] rounded-[8px]"></div> */}
            </div>
            <form onSubmit={handelSubmitForm}>
                <section>
                    <h3 className="font-bold mt-[15px] text-[16px]">اسم حامل البطاقة</h3>
                    <div className='mt-[5px]'>
                        <input onChange={(e) => setCardName(e.target.value)} maxLength={14} required type="text" className='w-full transition-all duration-[300ms] bg-[#f9f9f9] outline-none border border-transparent focus:border-[#ddd] focus:border rounded-[6px] text-sm px-[13px] py-[10px] font-[abc] placeholder:font-bold placeholder:text-[#4444]' placeholder="Ahmed M KAMAL" />
                    </div>
                </section>
                <section>
                    <h3 className="font-bold mt-[15px] text-[16px]">رقم البطاقة</h3>
                    <div className='mt-[5px]'>
                        <input required onChange={(e) => setCardNumber(e.target.value)} maxLength={14} type="text" className='w-full transition-all duration-[300ms] bg-[#f9f9f9] outline-none border border-transparent focus:border-[#ddd] focus:border rounded-[6px] text-sm px-[13px] py-[10px] font-[abc] placeholder:font-bold placeholder:text-[#4444]' placeholder="7584 4894 4875 4844 3209" />
                    </div>
                </section>
                <section className='flex sm:items-center justify-between '>
                    <section>
                        <h3 className="font-bold mt-[15px] text-[16px]">تاريخ انتهاء البطاقة</h3>
                        <div className='mt-[5px] flex items-center rounded-[6px] p-[10px] bg-[#f9f9f9] gap-2 max-sm:w-fit'>
                            <input onChange={(e) => setExpiresMonth(e.target.value)} required maxLength={2} type="text" className='w-[40px] transition-all duration-[300ms] bg-[#f9f9f9]  outline-none border border-transparent focus:border-[#ddd] focus:border rounded-[6px] text-sm  px-[10px] font-[abc] placeholder:font-bold placeholder:text-[#4444]' placeholder="8" />/
                            <input onChange={(e) => setExpiresYear(e.target.value)} required maxLength={4} type="text" className='w-[80px] transition-all duration-[300ms] bg-[#f9f9f9] outline-none border border-transparent focus:border-[#ddd] focus:border rounded-[6px] text-sm px-[10px] font-[abc] placeholder:font-bold placeholder:text-[#4444]' placeholder="2025" />
                        </div>
                        <span className='font-bold text-red-500 '>{(Number(expiresYear) < 2018 || Number(expiresMonth) > 12) ? "برجاء ادخال تاريخ صحيح!".toUpperCase() : ""}</span>
                    </section>
                    <section>
                        <h3 className="font-bold mt-[15px] text-[16px]">الرقم السري</h3>
                        <div className='mt-[5px]'>
                            <input required maxLength={3} type="password" className='w-full transition-all duration-[300ms] bg-[#f9f9f9] outline-none border border-transparent focus:border-[#ddd] focus:border rounded-[6px] text-sm px-[13px] py-[10px] font-[abc] placeholder:font-bold placeholder:text-[#4444]' placeholder="◾◾◾" />
                        </div>
                    </section>
                </section>
                <button className='block w-full active:scale-[1.01] p-[14px] transition-all duration-[100ms] rounded-[6px] shadow-lg text-white my-[15px] outline-0 font-bold bg-[#f68024] hover:bg-[#ea6e0e]'>اكمال عملية الدفع</button>
            </form>
        </div>
    )
}

export default PaymentMethods