// import React from 'react'
// import Layout from '../components/layout/Layout'
// // import Contact from './Contact';

// const Contact = () => {
//     return (
//         <Layout>
//             <div className="row g-3">
//                 <div className="col">
//                     {/* <img src="E:\web dev projects\E_Commerce\Picsart_23-05-09_12-32-31-466.jpg"></img> */}
//                     <img url="E:\web dev projects\E_Commerce\Picsart_23-05-09_12-32-31-466.jpg" class="rounded float-start" alt="contact_image_loading error"></img>
//                     <div className="col">
//                         <h1>We are happy to help you out!</h1>
//                         <h4>Contact info:9932227937</h4>
//                         <h4>keshavchaudhary23132@gmail.com</h4>
//                     </div>
//                 </div>
//             </div>

//         </Layout>
//     )
// }

// export default Contact


import React from 'react';
import Layout from '../components/layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
    return (
        <Layout title="Contact us">
            <div className="row g-3 cnt">
                <div className="col kc1">
                    {/* <img src="E:/web dev projects/E_Commerce/Picsart_23-05-09_12-32-31-466.jpg" alt="contact_image_loading error" className="rounded float-start" /> */}
                    <img
                        src="\image\contact-us.jpg"
                        alt="contactus"
                        style={{ width: "80%", height: "80%", display: 'flex', padding: '50px 40px 0px 0px' }}

                    />


                </div>
                <div className="col kc borderB">
                    <h1>We are happy to help you out!</h1>
                    <p className="text-justify mt-2">
                        Any query product feel free to contact us, we are avaiable 24X7!

                    </p>
                    <p className="mt-3">
                        <BiMailSend /> : keshavchaudhary23132@gmail.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall /> : 012-3456789
                    </p>
                    <p className="mt-3">
                        <BiSupport /> : 1800-0000-0000 (toll free)
                    </p>

                </div>
            </div>
        </Layout>
    );
}

export default Contact;
