"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function AddPage() {
    let router = useRouter()
    let [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        designation: "",
        salary: "",
        city: "",
        state: "",
    })
    function getInputData(e) {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    async function postData(e) {
        e.preventDefault()
        let response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/employee`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ ...data })
        })
        response = await response.json()
        if (response.result === "Done")
            router.push("/")
        else {
            alert("Something went wrong")
        }}

        return (
            <div className="container my-3">
                <h5 className='text-center bg-primary p-2 text-light'>Create Employee Record</h5>
                <form onSubmit={postData}>
                    <div className="row">
                        <div className="col-12 mb-3">
                            <label>Name*</label>
                            <input type="text" name="name" onChange={getInputData} placeholder='Enter Full Name' required className='form-control border-primary' />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Email Address*</label>
                            <input type="email" name="email" onChange={getInputData} placeholder='Enter email' required className='form-control border-primary' />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Phone Number*</label>
                            <input type="number" name="phone" onChange={getInputData} placeholder='Enter Phone' required className='form-control border-primary' />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Designation*</label>
                            <input type="text" name="designation" onChange={getInputData} placeholder='Enter Designation' required className='form-control border-primary' />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Salary*</label>
                            <input type="number" name="salary" onChange={getInputData} placeholder='Enter Salary' required className='form-control border-primary' />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>City*</label>
                            <input type="text" name="city" onChange={getInputData} placeholder='Enter City' className='form-control border-primary' />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>State*</label>
                            <input type="text" name="state" onChange={getInputData} placeholder='Enter State' className='form-control border-primary' />
                        </div>
                        <div className="col-12">
                            <button type='submit' className='btn btn-primary w-100'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
