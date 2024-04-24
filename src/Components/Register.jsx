import React from "react";
import "./sp.css"
export default function Register(){
    return(

        <>
        <h1>Register</h1>
        <div id = "forms">
        <p align="center">Any document for identification can be submitted (in pdf format), including any bills, passport, birth-certificate, etc. your photo must be in pass port size png format.</p>
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
				<td>DOB: <input type="date" name="dob" required /></td>
				<td>Address:<input type="text" maxlength="100" /></td>
			</tr>
			<tr>
				<td>Gender: <input type="radio" id="male" name="gender" value="male" /> <label for="male">Male</label><input type="radio" id="female" name="gender" value="female" /><label for="female">Female</label></td>

			</tr>
			<tr>
				<td>Username: <input type = "text" name = "username" required /> </td>
				<td><label for="course">Choose a course:</label>
                    <select name="course" id="course">
                        <option value="Shapes">Shapes</option>
                        <option value="Areas">Areas</option>
                        <option value="Applications">Applications</option>
                    </select>
                </td>
			</tr>
            <tr>
                <td>Education level: <input type="text" /></td>
                <td>Qualifications: <input type="text" /></td>
            </tr>
            <tr>
                <td>Your photo: <input type="file" required /></td>
                <td>identification-document: <input type="file" required /></td>
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