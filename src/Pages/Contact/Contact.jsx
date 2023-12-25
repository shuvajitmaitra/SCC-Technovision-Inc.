import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dti0tno",
        "template_0s6mhzh",
        form.current,
        "qaNQgd8IjlSnrJ2uH"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            toast.success("Email Send 😊");
            e.target.reset();
          }
        },
        (error) => {
          console.log(error.text);
          toast.error("Email send failed 😭");
        }
      );
  };
  return (
    <div id="Contact" className="max-w-screen-xl mx-auto md:p-10 px-3 lg:px-20">
      <h3 className="text-3xl border-b-2 lg:text-6xl font-bold text-white pb-2 mb-20">
        CONTACT ME
      </h3>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full lg:w-1/2 mx-auto bg-slate-700 p-5 lg:p-10 rounded-lg"
      >
        <div className="flex justify-between w-full gap-5 lg:gap-10">
          <input
            type="text"
            name="from_name"
            className="w-full py-3 focus:outline-none px-3 bg-transparent border-2 focus:border-[#08DAFA] placeholder:focus:text-[#08DAFA] rounded  shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-110  "
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="w-full py-3 focus:outline-none px-3 bg-transparent border-2 focus:border-[#08DAFA] placeholder:focus:text-[#08DAFA] rounded shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-110  "

            placeholder="Email"
            name="from_email"
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Write your message"
          required
          className="w-full focus:outline-none mt-5 pb-20 pt-2 px-3 bg-transparent border-2 
          shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-110  
          focus:border-[#08DAFA] placeholder:focus:text-[#08DAFA] rounded"
        />
       <div className="flex justify-center">

       <input
          type="submit"
          value="Send"
          className=" w-1/2 mx-auto shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-110  rounded-full bg-[#08DAFA] hover:bg-[#2ab0c5] text-white  py-3 mt-4"
        />
       </div>
      </form>
    </div>
  );
};
