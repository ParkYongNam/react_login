import React, { useRef, useState } from 'react'
import './App.css'
function App() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [emailinfo, emailupdate] = useState("");
    const [pwinfo, pwinfoupdate] = useState("");

    const submitClick = () => {
        alert(`아이디는 ${emailinfo}이고 패스워드는 ${pwinfo}로 기입하셨습니다.`)
    }


    return (
        <div className='form_member'>
            <form action="#none">
                <h2>User Login</h2>
                <ul>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label><br />
                        <input type="text" required name='email'
                            value={emailinfo} ref={emailRef}
                            onChange={(e) => {
                                emailupdate(e.target.value);
                                console.log(emailRef.current.value)
                            }} />
                    </li>
                    <li>
                        <label htmlFor="password">
                            Password
                        </label><br />
                        <input type="password" name='password' value={pwinfo} required ref={passwordRef} onChange={(e) => { pwinfoupdate(e.target.value) }} />
                    </li>
                </ul>
                <button type='submit' onClick={submitClick}>submit</button>
            </form>
        </div>
    )
}

export default App