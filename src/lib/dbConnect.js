import mongoose from "mongoose"

let isConnect = false

export default async function dbConnect() {
    try {
        if (!isConnect) {
            await mongoose.connect("mongodb://localhost:27017/Next_CRUD_APP")
            console.log("Database is connected")
            isConnect = true
        }
    } catch (error) {
        console.log(error)

    }
}






// MongoDB always connects on 27017 port