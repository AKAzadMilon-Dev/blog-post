"use client"

import { useState } from "react"

export default function Contact(){
    const [email, setEmail] = useState('')
    const handleSubmit = async (e)=>{
        e.preventDefault()
        await fetch('/api/contact',{
            method: 'post',
            body: JSON.stringify({email}),
            headers:{
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        })
        console.log('hay')
    }


    return <div>
        <form onSubmit={handleSubmit}>
            <input type="email" required placeholder="enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    </div>
}