import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";    
import { sendEmail } from "@/helper/mailer";

export async function POST(request: NextRequest) {
    try {
        // Ensure the database is connected
        await connect();

        const reqBody = await request.json();
        const {username, email, password} = reqBody;
        if (!username) {
            return NextResponse.json({ error: "User Name is required" }, { status: 400 });
        }


        // Cleanup users with null or empty username
        await User.deleteMany({ username: null });
        await User.deleteMany({ username: '' });

        // Check if user already exists
        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({ error: "User  already exists" }, { status: 400 });
        }

        // Hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create new user with additional fields
        const newUser  = new User({
            username,
            email,
            password: hashedPassword,
           

        });

        const savedUser  = await newUser.save();

        // Send verification email
        await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

        return NextResponse.json({
            message: "User  created successfully",
            success: true,
            savedUser
        });

    } catch (error: any) {
        console.error('Error in user registration:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}