import React from "react";
import "./sp.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Sign Up</h1>
      <div id="forms">
        <form onSubmit={navigate("/")}>
          <table cellSpacing="10">
            <tr>
              <td>
                First name:{" "}
                <input type="text" pattern="[A-Za-z]+" name="firstname" required />
              </td>
              <td>
                Last name:{" "}
                <input type="text" pattern="[A-Za-z]+" name="lastname" required />
              </td>
            </tr>
            <tr>
              <td>
                Email:{" "}
                <input type="email" name="email" required />
              </td>
              <td>
                Phone No:{" "}
                <input
                  type="tel"
                  name="phone_no"
                  maxLength="10"
                  minLength="10"
                  pattern="[0-9]{10}"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                DOB:{" "}
                <input type="date" name="dob" required />
              </td>
              <td>
                Address:<input type="text" name="address" maxLength="100" />
              </td>
            </tr>
            <tr>
              <td>
                Gender:{" "}
                <input type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                />
                <label htmlFor="female">Female</label>
              </td>
            </tr>
            <tr>
              <td>
                Username:{" "}
                <input
                  type="text"
                  name="username"
                  pattern="[A-Za-z0-9_]+"
                  title="Please enter only alphanumeric characters or underscores"
                  required
                />
              </td>
              <td>
                Password:{" "}
                <input type="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$"
                  title="Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character" 
                  name="password" required />
              </td>
            </tr>
            <tr>
              <td>
                Do you like shapes?{" "}
                <input type="checkbox" name="likeShapes" defaultChecked />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <a href="/">
                  <div className="buttons">Back</div>
                </a>
              </td>
              <td>
                <input type="submit" className="buttons" />
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
}
