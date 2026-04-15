"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function HomePage() {
  let [data, setData] = useState([])


  async function deleteRecord(_id) {
    if (window.confirm("Decided to delete this record?")) {
      let response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/employee/${_id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ ...data })
      })
      response = await response.json()
      if (response.result === "Done")
        setData(data.filter(x => x._id !== _id))
      else
        alert(response.reason)
    }
  }


  useEffect(() => {
    (async () => {
      let response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/employee`, {
        method: "GET",
        headers: {
          "content-type": "application/json"
        },
      })
      response = await response.json()
      if (response.result === "Done")
        setData(response.data)
      else
        alert(response.reason)
    })()
  }, [])
  return (
    <div className="container my-3">
      <h5 className='text-center bg-primary p-2 text-light'>Employee Record</h5>
      <div className="table-responsive">
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Ctiy</th>
              <th>State</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => {
              return <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.designation}</td>
                <td>{item.salary}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td><Link href={`/update/${item._id}`} className='btn btn-primary' ><i className="bi bi-pencil-square"></i></Link></td>
                <td><button onClick={() => deleteRecord(item._id)} className='btn btn-primary'><i className="bi bi-eraser"></i></button></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}