import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";
import { MdReportGmailerrorred } from "react-icons/md";
import { message } from "antd";
// import { Fade } from "react-awesome-reveal";
// import mail from "../assets/mail.png";

export const ContactMe = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  useEffect(() => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    setValidEmail(emailRegex);
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oh16ycv",
        "template_3pbj5wo",
        form.current,
        "4RySP3leNDrIcQU4v"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex h-[900px] w-[90%] justify-center items-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col text-white  bg-[#2d283e]  shadow-2xl w-[30%] h-[500px] justify-center items-center rounded-md rounded-r-none hover:border hover:border-[#802bb1]  "
      >
        <h1 className="text-[20px] text-[#802bb1] ml-[-100px]  font-[600]">
          Send me a message
        </h1>

        <input
          type="text"
          autoComplete="off"
          name="user_name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" border-l-0 placeholder-white text-white border-r-0 border-t-0 pb-0 mb-0  w-[80%] h-[50px] text-[16px] border-[1px]  outline-0 bg-[#2d283e] active:bg-[#2d283e] hover:bg-[#2d283e] "
        />

        <input
          type="email"
          autoComplete="off"
          name="user_email"
          placeholder="Email"
          className="border-l-0 border-r-0 placeholder-white border-t-0  pb-0 mb-1 w-[80%]  h-[50px] text-[16px] bg-[#2d283e] border-[1px] outline-0 active:bg-[#2d283e] hover:bg-[#2d283e]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        <div className="h-[20px] flex flex-col justify-center w-[80%] ">
          <span
            className={email && !validEmail && !emailFocus ? "flex" : "hidden"}
          >
            <Fade>
              <div className="text-orange-600 mt-2 mr-1 text-[12px]">
                <MdReportGmailerrorred />
              </div>

              <p className="invalid text-orange-600 text-[12px] mb-2 mt-1">
                Please, enter a valid Email
              </p>
            </Fade>
          </span>
        </div>

        <textarea
          name="message"
          autoComplete="off"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          className="border-l-0 placeholder-white border-r-0 border-t-0 w-[80%] bg-[#2d283e] text-[16px]  border-[1px]  outline-0 active:bg-[#2d283e] hover:bg-[#2d283e]"
        />
        <div className="w-[80%] whitespace-nowrap">
          <button
            className=" w-[40%] text-center h-[55px] mt-5  "
            type="submit"
            disabled={!validEmail || !name}
          >
            <p
              className={
                !validEmail || !name || !message ? "disabled" : "enabled"
              }
            >
              Send Message
            </p>
          </button>
        </div>
      </form>
      <div className="h-[500px] flex flex-col shadow-2xl  rounded-md  rounded-l-none w-[30%] bg-white">
        <header className="text-start ml-[30px] mt-12 mb-4">
          <h1 className="text-[24px] text-gray-600  ">Contact Me</h1>
          <Fade>
            <p className="text-[14px] font-[600] text-[#802bb1]  ">
              Please leave a message
            </p>
          </Fade>
        </header>
        <main className="flex flex-col  justify-center items-start h-[300px]">
          <section className="w-[90%] flex justify-center align-middle  ">
            <div className="rounded-full h-12 w-12 border-[1px] border-purple-200 flex items-center justify-center mr-6 cursor-pointer  active:bg-[#6408f947] bg-white  ">
              <MdLocationPin className="text-black text-[20px]" />
            </div>
            <p className="text-[14px] font-[700] w-[200px]">
              Address:
              <span className="font-[600] ml-1 text-gray-600">
                Metro homes Ajah, Lagos Nigeria.
              </span>
            </p>
          </section>
          <section className="w-[90%] flex justify-center items-center mb-2 ">
            <div className="rounded-full h-12 w-12 border-[1px] border-purple-200  flex items-center justify-center mr-6 cursor-pointer  active:bg-[#6408f947] bg-white  ">
              <BsTelephoneFill className="text-black text-[17px]" />
            </div>
            <p className="text-[14px] font-[700] w-[200px]  ">
              Phone:
              <span className="text-gray-600 ml-1 font-[600] text-[14px]">
                + 234 908 056 6253
              </span>
            </p>
          </section>
          <section className="w-[90%] flex justify-center mb-2 items-center ">
            <div className="rounded-full h-12 w-12 border-[1px] border-purple-200  flex items-center justify-center mr-6 cursor-pointer  active:bg-[#6408f947] bg-white  ">
              <RiSendPlaneFill className="text-black text-[20px]" />
            </div>
            <p className="text-[14px] font-[700] w-[200px]">
              Email:
              <span className="font-[600] ml-1  text-gray-600">
                olorunsolavictorp@gmail.com
              </span>
            </p>
          </section>
          <section className="w-[90%] flex justify-center items-center mb-2 ">
            <div className="rounded-full h-12 w-12 border-[1px] border-purple-200  flex items-center justify-center mr-6 cursor-pointer  active:bg-[#6408f947] bg-white  ">
              <BiWorld className="text-black text-[20px]" />
            </div>
            <p className="text-[14px] w-[200px] font-[700]">
              Website:
              <span className="text-gray-600 font-[600] ml-1">
                yoursite.com
              </span>
            </p>
          </section>
          <section className="w-[90%] flex justify-center items-center mb-2 ">
            <div className="rounded-full h-12 w-12 border-[1px] border-purple-200 flex items-center justify-center mr-6 cursor-pointer  active:bg-[#6408f947] bg-white  ">
              <AiOutlineGithub className="text-black text-[20px]" />
            </div>
            <p className="text-[14px] w-[200px] font-[700]">
              GitHub:
              <span className="text-gray-600 font-[600] ml-1">
                yourgithub.com
              </span>
            </p>
          </section>

          {/* <section className="w-[90%]">
            <p className="text-[16px]">Phone: + 1235 2355 98</p>
          </section>
          <section className="w-[90%]">
            <p className="text-[16px]">Email: info@yoursite.com</p>
          </section>
          <section className="w-[90%]">
            <p className="text-[16px]">Website: yoursite.com</p>
          </section>
          <section className="w-[90%]">
            <p className="text-[16px]">GitHub: yourgithub.com</p>
          </section> */}
        </main>
      </div>
    </div>
  );
};
