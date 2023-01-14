import React from "react";
import './Contact.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai"
import {BiPhoneCall, BiInfoCircle} from "react-icons/bi"

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <Breadcrumb title={"Contact Us"} />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11085.974192366957!2d106.67719812010617!3d10.766695833251005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIFThu7Egbmhpw6puIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1673510573465!5m2!1svi!2s"
                width="600"
                height="450"
                className="border-0 w-100"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
                <div className="contact-inner-wrapper d-flex justify-content-between">
                    <div>
                        <h3 className="contact-title mb-4">Contact</h3>
                        <form action="" className="d-flex flex-column gap-15">
                            <div>
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div>
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div>
                                <input type="tel" className="form-control" placeholder="Mobile phone"/>
                            </div>
                            <div>
                                <textarea name="" id="" cols="30" rows="10" className="w-100 form-control" placeholder="Comment"></textarea>
                            </div>
                            <div>
                                <button className="button border-0">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h3 className="contact-title mb-4">Get in touch with</h3>
                        <div>
                            <ul className="ps-0">
                                <li className="mb-3 d-flex gap-15 align-items-center">
                                    <AiOutlineHome className="fs-5"/>
                                    <address className="mb-0">
                                        741 Hung Vuong, huyen Di Linh, tinh Lam Dong
                                    </address>
                                </li>
                                <li className="mb-3 d-flex gap-15 align-items-center">
                                    <BiPhoneCall className="fs-5"/>
                                    <a href="">0933804785</a>
                                </li>
                                <li className="mb-3 d-flex gap-15 align-items-center">
                                    <AiOutlineMail className="fs-5"/>
                                    <a href="">buivanduynhat@gmail.com</a>
                                </li>
                                <li className="mb-3 d-flex gap-15 align-items-center">
                                    <BiInfoCircle className="fs-5"/>
                                    <p className="mb-0">Monday - Friday 10AM - 21PM</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
