'use client'
import React, { useEffect, useRef, useState } from 'react'
import BodyContianer from '../components/BodyContianer'

const OTP = () => {
    const [timer, setTimer] = useState<number>(30);
    const input1 = useRef();
    // const input2 = useRef();
    // const input3 = useRef();
    // const input4 = useRef();
    // const input5 = useRef();
    // const input6 = useRef();
    // const arr = [input1, input2, input3, input4, input5, input6]

    useEffect(() => {
        let interval: NodeJS.Timeout = setInterval(() => {
            setTimer(prev => prev - 1)
        }, 1000);
        // if (timer === 0) {
        // }
        return () => clearInterval(interval)
    }, [timer])
    return (
        <div>
            <BodyContianer>
                <h2 className='text-center text-[20px] font-semibold'>كود التحقق</h2>
                <h4 className='mt-[25px] sm:text-[22px] text-center font-bold'>
                    ادخل رمز التحقق الذي يصلك في رسالة نصية والمكون من 6 أرقام او انتظر مكالمة البنك لتأكيد عملية الدفع
                </h4>
                <section ref={input1} className='flex items-center justify-center gap-2 mt-[25px]'>
                    {[1, 2, 3, 4, 5, 6].map((el, i) => (
                        <div className='size-[45px] flex items-center px-[10px] justify-center p-[20px] relative '>
                            <input onChange={(e) => {
                                console.log(input1?.current.children.length);
                                console.log(input1?.current.children[i + 1]);

                            }} maxLength={1} type="text" disabled={i === ((input1?.current?.children.length) - 1) ? true : false} className=' rounded-[6px] absolute w-full h-full text-center bg-[#f7f4fa]' />
                        </div>
                    ))}
                </section>
                <button className='block w-full active:scale-[1.01] p-[14px] transition-all duration-[100ms] rounded-[6px] shadow-lg text-white my-[20px] outline-0 font-bold bg-[#f68024] hover:bg-[#ea6e0e]'>تأكيد</button>
                <div className="flex mt-[30px] font-[ibmolexBoldMeduim] items-center flex-col">
                    <div className='flex justify-center items-center gap-3'>
                        <h4>لم يصلك كود؟ </h4>
                        <span className='underline cursor-pointer'>اضغط هنا لاعادة الارسال</span>
                    </div>
                    <section className='flex gap-2 items-center text-[#d01010]'>
                        <h2 className='font-semibold'>سيصلك كود جديد خلال </h2>
                        <div>00:{timer >= 0 ? timer : "00"}</div>
                    </section>
                </div>
            </BodyContianer>
        </div>
    )
}

export default OTP