import Image from 'next/image'
import React from 'react'

const Video_tab = () => {
    return (
        <section>
            <div className="h-[520px] w-full flex">
                <div className='w-[50%]'>
                    <Image
                        className='h-[520px] w-full object-cover'
                        src="/Mask Group 4.png"
                        width={600}
                        height={600}
                        alt=""

                    />

                </div>
                <div className='w-[25%]'>
                        <Image
                            className='h-[520px] w-full object-cover'
                            src="/Mask Group 5.png"
                            width={400}
                            height={400}
                            alt=""
                        />
                    </div>
                    <div className='w-[15%]'>
                        <Image
                            className='h-[520px] w-full object-cover'
                            src="/Mask Group 6.png"
                            width={600}
                            height={600}
                            alt=""
                        />
                    </div>
            </div>

        </section>
    )
}

export default Video_tab