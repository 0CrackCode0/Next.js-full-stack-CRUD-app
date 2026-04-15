import { NextResponse } from "next/server"
import Employee from "@/models/Employee"
import dbConnect from "@/lib/dbConnect"

dbConnect()


export async function PUT(request, { params }) {
    try {
        const _id = await params
        let data = await Employee.findOne({ _id: _id })
        if (data) {
            let inputData = await request.json()
            data.name = inputData.name
            data.email = inputData.email
            data.phone = inputData.phone
            data.designation = inputData.designation
            data.salary = inputData.salary
            data.city = inputData.city
            data.state = inputData.state
            await data.save()
            return NextResponse.json({
                result: "Done",
                data: data
            })
        }
        else {
            return NextResponse.json({
                result: "Fail",
                reason: "Record Not Found"
            })
        }
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            result: "Fail",
            reason: "Internal Server Error"
        })

    }

}

export async function GET(request, { params }) {
    try {
        const _id = await params
        let data = await Employee.findOne({ _id: _id })
        if (data) {
            return NextResponse.json({
                result: "Done",
                data: data
            })
        }
        else {
            return NextResponse.json({
                result: "Fail",
                reason: "Record Not Found"
            })
        }
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            result: "Fail",
            reason: "Internal Server Error"
        })

    }

}

export async function DELETE(request, { params }) {
    try {
        let _id = await params
        let data = await Employee.findOne({ _id: _id })
        if (data) {
            await data.deleteOne()
            return NextResponse.json({
                result: "Done"
            })
        }
        else {
            return NextResponse.json({
                result: "Fail",
                reason: "Record Not Found"
            })
        }
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            result: "Fail",
            reason: "Internal Server Error"
        })

    }

}