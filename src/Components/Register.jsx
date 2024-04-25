import React, { useState } from "react";
import "./sp.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_no: "",
    dob: "",
    address: "",
    username: "",
    educationLevel: "",
    qualifications: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation logic here
    navigate("/");
  };

  return (
    <>
      <h1>Register</h1>
      <div id="forms">
        <p align="center">
          Any document for identification can be submitted (in pdf format),
          including any bills, passport, birth-certificate, etc. your photo
          must be in pass port size png format.
        </p>
        <form onSubmit={handleSubmit}>
          <table cellSpacing="10">
            <tr>
              <td>
                First name:{" "}
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  pattern="[A-Za-z]+"
                  title="Please enter only alphabets"
                  required
                />{" "}
              </td>
              <td>
                Last name:{" "}
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  pattern="[A-Za-z]+"
                  title="Please enter only alphabets"
                  required
                />{" "}
              </td>
            </tr>
            <tr>
              <td>
                Email:{" "}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />{" "}
              </td>
              <td>
                Phone No:{" "}
                <input
                  type="tel"
                  name="phone_no"
                  value={formData.phone_no}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  title="Please enter 10 digit phone number"
                  required
                />{" "}
              </td>
            </tr>
            <tr>
              <td>
                DOB:{" "}
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </td>
              <td>
                Address:{" "}
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  maxLength="100"
                />
              </td>
            </tr>
            <tr>
              <td>
                Username:{" "}
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  pattern="[A-Za-z0-9_]+"
                  title="Please enter only alphanumeric characters or underscores"
                  required
                />{" "}
              </td>
              <td>
                <label for="course">Choose a course:</label>
                <select name="course" id="course">
                  <option value="Shapes">Shapes</option>
                  <option value="Areas">Areas</option>
                  <option value="Applications">Applications</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                Education level:{" "}
                <input
                  type="text"
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleChange}
                />
              </td>
              <td>
                Qualifications:{" "}
                <input
                  type="text"
                  name="qualifications"
                  value={formData.qualifications}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                Your photo: <input type="file" required />
              </td>
              <td>
                identification-document: <input type="file" required />
              </td>
            </tr>
            <tr>
              <td>
                <a href="/">
                  <div class="buttons">Back</div>
                </a>
              </td>
              <td>
                <button type="submit" class="buttons">
                  Submit
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
}
