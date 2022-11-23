import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

    const [username, setUsername] = useState("");
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault()
        if (username.trim() === "") {
            return;
        }
        navigate("/topics")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                <button type='submit'>click</button>
            </form>
        </>
    )
}

export default Home