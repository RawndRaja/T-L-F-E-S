import {connect} from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";


connect()


export async function POST(request: NextRequest){

    try {
        const reqBody = await request.json()
        const {Email} = reqBody
        const user = await User.findOne({email : Email})

        if (!user){
            return NextResponse.json({error: "No id exists"}, {status: 400})
        }
        const verified = user.isAdmin
        if (verified == true){
            return NextResponse.json({error: "You are Already an admin"}, {status: 400})
        }
        user.isAdmin = true;
         await user.save()


         const response = NextResponse.json({
            message: "This id is now admin",
            success: true
        })
        response.cookies.set("IsAdmin", verified, {
            httpOnly: true, 
            secure: true,
            
        })
        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }


}