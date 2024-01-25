import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <section  >
            <br />
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-2" >
                <div className="grid grid-cols-2">
                    <div>
                        <Image
                            className="marginss flex justify-end "
                            src="/Group 17.svg"
                            width={30}
                            height={30}
                            alt=""
                        />

                    </div>
                    <div>
                        <div className="marginss2">236</div>
                    </div>
                    <div>
                        <p className="marginss regular-16 block">Succeeded project</p>
                    </div>
                    <div>

                    </div>
                    <div>
                        <p className="marginss bold-22 lg:bold-48">Our clients describe us as a product team which creates <b>amazing UI/UX, by crafting top-notch user experience.</b></p>
                    </div>
                </div>





                <div className="grid grid-cols-2">
                    <div>
                        <Image
                            className="marginss flex justify-end "
                            src="/Group 17.svg"
                            width={30}
                            height={30}
                            alt=""
                        />

                    </div>
                    <div>
                        <div className="marginss2">9346</div>
                    </div>
                    <div>
                        <p className="marginss regular-16 block">Working hours Were spent</p>
                    </div>
                    <div>

                    </div>
                    <div>
                        <p className="marginss bold-22 lg:bold-48">We've structure our workflow process were from the funny<b>the century rather,</b> initial all the made,have spare to negatives.</p>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Contact