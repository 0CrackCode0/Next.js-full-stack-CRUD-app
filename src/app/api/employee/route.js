import Employee from "@/models/Employee";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

dbConnect()

export async function GET() {
    try {
        // let data = await Employee.find().sortBy({_id:-1})// latest first
        // let data = await Employee.find().sortBy({_id:1})// Oldest first
        let data = await Employee.find()
        return NextResponse.json({
            result: "Done",
            data: data
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            result: "Fail",
            reason: "Internal Server Error"
        })

    }

}

export async function POST(request) {
    try {
        let inputData = await request.json()
        let data = new Employee(inputData)
        await data.save()
        return NextResponse.json({
            result: "Done",
            data: data
        })
    } catch (error) {
        return NextResponse.json({
            result: "Fail",
            reason: "Internal Server Error"
        })
    }
}