import React from "react";
import './sp.css'

export default function SignIn(){
    return(
        <>
            <h1>Sign in</h1>
            <div id = "forms">
                <form method="POST">
                    <table>
                        <tr>
                            <td>Username: <input type = "text" name = "username" required /> </td>
                        </tr>
                        <tr>
                            <td>Password: <input type = "password" name = "password" required /> </td>
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