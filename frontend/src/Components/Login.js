import React from 'react'
import { useState } from 'react';
function Login() {
    let [user, change] = useState("");
    let name;
       const handleInput=(e)=>{
console.log(e);
name=e.target.name;
console.log(name);
change("name");
       }
    return (
        <div>
            <form method="post">
                <input name="name" placeholder="Enter your fitrst name" value={user}  onChange={handleInput} >
                     
                </input>
                <button >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Login
