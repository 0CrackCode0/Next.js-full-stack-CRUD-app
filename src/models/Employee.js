import mongoose from "mongoose"

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    designation: {
        type: String
    },
    salary: {
        type: Number
    },
    city: {
        type: String
    },
    state: {
        type: String
    }
})

const Employee = mongoose.models.Employee || mongoose.model("Employee", EmployeeSchema)
export default Employee