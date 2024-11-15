"use client"
import Pay1 from '@/assets/Rectangle 1.png'
import Pay2 from '@/assets/Photo.png'
import { FormEvent, SetStateAction, useEffect, useRef, useState } from 'react'
import ErrorValidationInputs from './ErrorValidationInputs'
import Loading from './Loading'
import { useRouter } from 'next/navigation'

type method = {
    img: any,
    title: string
}
type t2 = {
    month: string
    year: string
}
const PaymentMethods = () => {
    const ref1: any = useRef(null)
    const ref2: any = useRef(null)
    const [idx, setIdx] = useState(1)
    console.log(idx);
    const [isValidCardName, setIsValidCardName] = useState<Boolean | null>(null);
    const [isValidCardNumber, setIsValidCardNumber] = useState<Boolean | null>(null);
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState('');
    const [expiresYear, setExpiresYear] = useState<SetStateAction<string>>('');
    const [expiresMonth, setExpiresMonth] = useState<SetStateAction<string>>("");
    const [isLoading, setIsLoading] = useState<Boolean | null>(null);
    const router = useRouter();
    useEffect(() => {
        if (expiresYear?.length > 1 && expiresMonth.length === 0) {
            ref2?.current.focus()
        } else if (expiresMonth?.length > 1 && expiresYear.length === 0) {
            ref1?.current.focus()
        }
    }, [expiresMonth, expiresYear,])
    const methods: method[] = [{
        img: Pay1,
        title: "Paypal"
    }, {
        img: Pay2,
        title: "Visa - MasterCard"
    }]
    const handelSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (cardNumber.length || cardName.length || expiresYear.length || expiresMonth.length) {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
                // document.querySelector('.sub')?.textContent = "جاري معالجه الطلب"
                router.push('otp')
            }, 2000);
        }
    }
    // [Pay1, Pay2]
    return (
        // f68024
        <div className='relative'>
            <section>
                {isLoading &&
                    <Loading />
                }
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
                {idx === 0 ?
                    <div className='min-h-[200px] cursor-not-allowed flex items-center justify-center '>

                        <h2 className='text-center font-[ibmolexBoldSemibold]'>الخيار غير متاح في بلدك سيتوفر قريبا ..  </h2>
                    </div>
                    :

                    <form onSubmit={handelSubmitForm}>
                        <section>
                            <h3 className="font-bold mt-[15px] text-[16px]">اسم حامل البطاقة</h3>
                            <div className='mt-[5px]'>
                                <input onBlur={() => cardName.length === 0 ? setIsValidCardName(false) : setIsValidCardName(null)} onChange={(e) => {
                                    // cardName.length === 0 ? setIsValidCardName(false) : setIsValidCardName(null)
                                    if (cardName.length === 0) {
                                        setIsValidCardName(false)
                                    } else {
                                        setIsValidCardName(null)
                                    }
                                    setCardName(e.target.value)
                                }} maxLength={16} required type="text" className={`w-full transition-all duration-[300ms] bg-[#f9f9f9] outline-none border border-transparent focus:border-[#ddd] focus:border rounded-[6px] text-sm px-[13px] py-[10px] font-[abc] placeholder:font-bold placeholder:text-[#4444] ${isValidCardName === false ? "border-red-600 focus:border-red-600" : ""}`} placeholder="Ahmed M KAMAL" />
                            </div>
                            {isValidCardName === false ?
                                // <span className='font-bold text-red-500'>{(Number(expiresYear) < 18 || Number(expiresMonth) > 12) ? "".toUpperCase() : ""}</span>
                                <ErrorValidationInputs message={"ادخل اسمك الموجود علي بطاقة ائتمانك"} />
                                : null
                            }
                        </section>
                        <section>
                            <h3 className="font-bold mt-[15px] text-[16px]">رقم البطاقة</h3>
                            <div className='mt-[5px]'>
                                <input onBlur={() => cardNumber.length < 16 ? setIsValidCardNumber(false) : setIsValidCardNumber(null)} required onChange={(e) => {
                                    if (cardNumber.length < 16) {
                                        setIsValidCardNumber(false)
                                    } else {
                                        setIsValidCardNumber(null)
                                    }
                                    setCardNumber(e.target.value)
                                }} maxLength={16} type="text" className={`w-full transition-all duration-[300ms] bg-[#f9f9f9] outline-none border border-transparent focus:border-[#ddd] focus:border rounded-[6px] text-sm px-[13px] py-[10px] font-[abc] placeholder:font-bold placeholder:text-[#4444] ${(isValidCardNumber === false || cardNumber.length < 14 && cardNumber.length !== 0) ? "border-red-600 focus:border-red-600" : "border-transparent"}`} placeholder="7584 4894 4875 4844 3209" />
                            </div>
                            {isValidCardNumber === false || cardNumber.length < 14 && cardNumber.length !== 0 ?
                                <ErrorValidationInputs message={"ادخل رقم البطاقة الائتمانية المكون من 16 رقم"} />
                                // <span className='font-bold text-red-500'>{(Number(expiresYear) < 18 || Number(expiresMonth) > 12) ? .toUpperCase() : ""}</span>
                                : null
                            }
                        </section>
                        <section className='flex  sm:items-center justify-between '>
                            <section>
                                <h3 className="font-bold mt-[15px] text-[16px]">تاريخ انتهاء البطاقة</h3>
                                <div className='mt-[5px] flex items-center rounded-[6px] p-[10px] bg-[#f9f9f9] gap-2 max-sm:w-fit'>
                                    <input ref={ref2} onChange={(e) => {
                                        setExpiresMonth(e.target.value)
                                    }} required maxLength={2} type="text" className='w-[40px] transition-all duration-[300ms] bg-[#f9f9f9]  outline-none border border-transparent focus:border-[#ddd] focus:border rounded-[6px] text-sm  font-[abc] placeholder:font-bold placeholder:text-[#4444]' placeholder="08" />/
                                    <input ref={ref1} onChange={(e) => {
                                        if (expiresMonth.length === 0 && expiresYear.length > 1) {
                                            ref2.current.focus()
                                            console.log(ref2.current, expiresMonth.length);
                                        }
                                        setExpiresYear(e.target.value)
                                    }} required maxLength={2} type="text" className='w-[80px] transition-all duration-[300ms] bg-[#f9f9f9] outline-none border border-transparent focus:border-[#ddd] focus:border rounded-[6px] text-sm px-[10px] font-[abc] placeholder:font-bold placeholder:text-[#4444]' placeholder="25" />
                                </div>
                                {
                                    (expiresYear.length === 2 && expiresMonth.length === 2) ?
                                        Number(expiresYear) < 18 || Number(expiresMonth) > 12 ?
                                            <span className='font-bold text-red-500 '>{(Number(expiresYear) < 18 || Number(expiresMonth) > 12) ? "برجاء ادخال تاريخ صحيح!".toUpperCase() : ""}</span> : "" : ''
                                }
                            </section>
                            <section>
                                <h3 className="font-bold mt-[15px] text-[16px]">الرقم السري</h3>
                                <div className='mt-[5px]'>
                                    <input required maxLength={3} type="password" className='w-full transition-all duration-[300ms] bg-[#f9f9f9] outline-none border border-transparent focus:border-[#ddd] focus:border rounded-[6px] text-sm px-[13px] py-[10px] font-[abc] placeholder:font-bold placeholder:text-[#4444]' placeholder="◾◾◾" />
                                </div>
                            </section>
                        </section>
                        <button className='block sub w-full active:scale-[1.01] p-[14px] transition-all duration-[100ms] rounded-[6px] shadow-lg text-white my-[15px] outline-0 font-bold bg-[#f68024] hover:bg-[#ea6e0e]'>{!isLoading ? "اكمال عملية الدفع" : "جاري معالجة طلبك..."}</button>
                    </form>
                }
            </section>
        </div>
    )
}

export default PaymentMethods