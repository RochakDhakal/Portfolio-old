import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contact from "../../../assets/Contact.jpg";

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

  useEffect(() => {
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
    <div className="bg-dark p-5 mt-5">
      <div className="display-4 text-center text-warning p-5">Contact Me</div>
      <div className="card bg-secondary p-2">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={contact} className="img-fluid rounded" alt="Contact" />
          </div>
          <div className="col-md-6">
            <h5 className="card-title text-center display-5 text-warning p-5">
              Fill in Your Details
            </h5>
            <div className="card-body d-flex justify-content-end align-items-end flex-column w-100">
              <form ref={form} onSubmit={sendEmail} className="w-100">
                {/* First Name and Last Name */}
                <div className="d-flex col-md-12 row m-0">
                  <div className="col-md-6 p-2 fs-4">
                    <input
                      type="text"
                      autoComplete="off"
                      name="first_name"
                      placeholder="First Name"
                      value={fname}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      className="col-md-12"
                    />
                    {fnameErr && (
                      <div className="text-danger d-flex justify-content-end align-items-end">
                        {fnameErr}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6 p-2 fs-4">
                    <input
                      type="text"
                      autoComplete="off"
                      name="last_name"
                      placeholder="Last Name"
                      value={lname}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      className="col-md-12"
                    />
                    {lnameErr && (
                      <div className="text-danger d-flex justify-content-end align-items-end">
                        {lnameErr}
                      </div>
                    )}
                  </div>
                </div>
                {/* Email */}
                <div className="p-2 fs-4">
                  <input
                    type="email"
                    autoComplete="off"
                    name="user_email"
                    placeholder="Email"
                    value={mail}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className="col-md-12"
                  />
                  {mailErr && (
                    <div className="text-danger d-flex justify-content-end align-items-end">
                      {mailErr}
                    </div>
                  )}
                </div>
                <div className="p-2 fs-4">
                  <input
                    type="text"
                    autoComplete="off"
                    name="user_number"
                    placeholder="Phone Number"
                    value={num}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className="col-md-12"
                  />
                  {numErr && (
                    <div className="text-danger d-flex justify-content-end align-items-end">
                      {numErr}
                    </div>
                  )}
                </div>
                {/* Message */}
                <div className="p-2 fs-4">
                  <textarea
                    name="message"
                    value={msg}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className="col-md-12 p-2"
                    placeholder="Enter Your Message"
                    rows="4"
                  />
                  {msgErr && (
                    <div className="text-danger d-flex justify-content-end align-items-end">
                      {msgErr}
                    </div>
                  )}
                </div>

                <div className="p-2 fs-4 d-flex justify-content-end align-items-end">
                  <input
                    type="submit"
                    value="Send"
                    style={{ fontWeight: "bold" }}
                    className="display-6 text-muted p-2 "
                    disabled={isDisabled}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
