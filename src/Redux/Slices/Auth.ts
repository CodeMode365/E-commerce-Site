import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

type iData = {
    User_name?: string | undefined,
    email: string | undefined,
    password: string | undefined
    loginStatus?: boolean
}

const initialData: iData = {
    User_name: undefined,
    email: undefined,
    password: undefined,
    loginStatus: false
}

const allUsers: iData[] = JSON.parse(localStorage.getItem("Users") as string) as [] | []


const authSlice = createSlice({
    name: 'auth',
    initialState: initialData,
    reducers: {
        singIn: (state: iData, actions: PayloadAction<iData>) => {
            const { email, password } = actions.payload
            if (!email || !password) {
                throw new Error("Credentials Error")
            }
            const findUser = allUsers.find(user => user.email === email)
            if (findUser) {
                console.log("userfound")
                if (findUser.password === password) {
                    Swal.fire({title:"Login Successful", icon:"success"})
                    return { User_name: findUser.User_name, email: findUser.email, password: findUser.password, loginStatus: true }
                }
            }
            else {
                Swal.fire({ title: "User not Registered", icon: "warning" })
            }
        },
        signUp: (state: iData, actions: PayloadAction<iData>) => {
            const { email, password, User_name } = actions.payload
            try {
                const newUser: iData = {
                    User_name, email, password
                }
                let updatedUsers: iData[] = []
                if (allUsers) {
                    const findEmail = allUsers.find(user => user.email === email)
                    if (findEmail) {
                        Swal.fire({ title: "Email Alread Used", icon: "error" })
                        return state
                    }
                    updatedUsers = [...allUsers, newUser]
                }
                else { updatedUsers = [newUser] }
                localStorage.setItem("Users", JSON.stringify(updatedUsers))
                Swal.fire({ title: "Registration Success", icon: "success" })
                state.loginStatus = true
                return state
            } catch (error) {
                console.log("registration Error", error)
            }
        }

    }
})


export const { signUp, singIn } = authSlice.actions
export default authSlice.reducer