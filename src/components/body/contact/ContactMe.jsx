import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SvgWavesBottom from "../svg/SvgWavesBottom";

function ContactMe() {
  const [fname, setFname] = useState("");
  const [fnameErr, setFnameErr] = useState("");
  const [lname, setLname] = useState("");
  const [lnameErr, setLnameErr] = useState("");
  const [mail, setMail] = useState("");
  const [mailErr, setMailErr] = useState("");
  const [num, setNum] = useState("");
  const [numErr, setNumErr] = useState("");
  const [msg, setMsg] = useState("");
  const [msgErr, setMsgErr] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const form = useRef();

  const validateInputs = () => {
    let isValid = true;

    if (fname.trim() === "") {
      setFnameErr("First name is required");
      isValid = false;
    } else {
      setFnameErr("");
    }

    if (lname.trim() === "") {
      setLnameErr("Last name is required");
      isValid = false;
    } else {
      setLnameErr("");
    }

    if (mail.trim() === "") {
      setMailErr("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(mail)) {
      setMailErr("Invalid email format");
      isValid = false;
    } else {
      setMailErr("");
    }

    if (num.trim() === "") {
      setNumErr("Phone number is required");
      isValid = false;
    } else if (!/^[+\d]+(?:[\d-.\s()]*)$/.test(num)) {
      setNumErr("Invalid phone number format");
      isValid = false;
    } else {
      setNumErr("");
    }

    if (msg.trim() === "") {
      setMsgErr("Message is required");
      isValid = false;
    } else {
      setMsgErr("");
    }

    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    emailjs
      .sendForm(
        "service_fso7ipt",
        "template_eg0jqgs",
        form.current,
        "yW9sD5wxu_LfCNDnx",
        setIsDisabled(true)
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsDisabled(true);
          alert("Message Has Been Sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Mail To send Message!");
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "first_name":
        setFname(value);
        break;
      case "last_name":
        setLname(value);
        break;
      case "user_email":
        setMail(value);
        break;
      case "user_number":
        setNum(value);
        break;
      case "message":
        setMsg(value);
        break;
      default:
        break;
    }
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "first_name":
        if (value.trim() === "") {
          setFnameErr("First name is required");
        } else {
          setFnameErr("");
        }
        break;
      case "last_name":
        if (value.trim() === "") {
          setLnameErr("Last name is required");
        } else {
          setLnameErr("");
        }
        break;
      case "user_email":
        if (value.trim() === "") {
          setMailErr("Email is required");
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          setMailErr("Invalid email format");
        } else {
          setMailErr("");
        }
        break;
      case "user_number":
        if (value.trim() === "") {
          setNumErr("Phone number is required");
        } else if (!/^[+\d]+(?:[\d-.\s()]*)$/.test(value)) {
          setNumErr("Invalid phone number format");
        } else {
          setNumErr("");
        }
        break;
      case "message":
        if (value.trim() === "") {
          setMsgErr("Message is required");
        } else {
          setMsgErr("");
        }
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    setIsDisabled(
      fname.trim() === "" ||
        lname.trim() === "" ||
        mail.trim() === "" ||
        !/\S+@\S+\.\S+/.test(mail) ||
        num.trim() === "" ||
        !/^[+\d]+(?:[\d-.\s()]*)$/.test(num) ||
        msg.trim() === ""
    );
  }, [fname, lname, mail, num, msg]);

  return (
    <div className="bg-dark d-flex flex-column justify-content-center align-items-center text-light my-5">
      <h1 className="text-warning display-4">Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className="container">
        <div className="row display-4 my-2">
          <label className="col-md-6">First Name</label>
          <input
            type="text"
            autoComplete="off"
            name="first_name"
            placeholder="John Doe"
            value={fname}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className="col-md-6"
          />
        </div>
        {fnameErr && <div className="text-danger">{fnameErr}</div>}
        <div className="row display-4 my-2">
          <label className="col-md-6">Last Name</label>
          <input
            type="text"
            autoComplete="off"
            name="last_name"
            placeholder="Doe"
            value={lname}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className="col-md-6"
          />
        </div>
        {lnameErr && <div className="text-danger">{lnameErr}</div>}
        <div className="row display-4 my-2">
          <label className="col-md-6">Email</label>
          <input
            type="email"
            autoComplete="off"
            name="user_email"
            placeholder="example@mail.com"
            value={mail}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className="col-md-6"
          />
        </div>
        {mailErr && <div className="text-danger">{mailErr}</div>}
        <div className="row display-4 my-2">
          <label className="col-md-6">Phone Number</label>
          <input
            type="text"
            autoComplete="off"
            name="user_number"
            placeholder="+00-1234567890"
            value={num}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className="col-md-6"
          />
        </div>
        {numErr && <div className="text-danger">{numErr}</div>}
        <div className="row display-4 mb-2">
          <label className="col-md-12 text-center p-2">Message</label>
          <textarea
            name="message"
            value={msg}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className="col-md-12"
            placeholder="Enter Your Message"
            style={{zIndex:"1"}}
          />
        </div>
        {msgErr && <div className="text-danger">{msgErr}</div>}
        <div className="d-flex justify-content-center align-item-center pb-5 mx-5">
          <input
            type="submit"
            value="Send"
            style={{ fontWeight: "bold" }}
            className="display-6 text-muted p-2"
            disabled={isDisabled}
          />
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
