import React from "react";
import "./sp.css";

export default function SignUp(){
    return(
        <>
            <h1>Sign Up</h1>
            <div id = "forms">
                <form method="POST">
                    <table cellspacing="10">
                        <tr>
                            <td>First name: <input type="text" name="firstname" required /> </td>
                            <td>Last name: <input type="text" name="lastname" required /> </td>
                        </tr>
                        <tr>
                            <td>Email: <input type = "email" name="email" required /> </td>
                            <td>Phone No: <input type="tel" name="phone_no" maxlength="10" minlength="10" /> </td>
                        </tr>
                        <tr>
                            <td>DOB: <input type="date" name="dob" required /> </td>
                            <td>Address:<input type="text" maxlength="100" /> </td>
                        </tr>
                        <tr>
                            <td>Gender: <input type="radio" id="male" name="gender" value="male" /> <label for="male">Male</label><input type="radio" id="female" name="gender" value="female" /><label for="female">Female</label></td>

                        </tr>
                        <tr>
                            <td>Username: <input type = "text" name = "username" required /> </td>
                            <td>Password: <input type = "password" name = "password" required /> </td>
                        </tr>
                        <tr>
                            <td>Do you like shapes? <input type = "checkbox" checked /><br /></td>
                        </tr>
                        <tr>
                            <td><a href = "/"><div class="buttons">Back</div></a></td>
                            <td><a href = "/"><input type = "submit" class = "buttons" /></a></td>
                        </tr>
                    </table>
                </form>
            </div>
        </>
    )
}