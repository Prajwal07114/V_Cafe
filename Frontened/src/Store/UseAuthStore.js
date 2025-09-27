import {create} from "zustand";
import {axiosInstance} from "../lib/axios"
import toast from "react-toast"
const useAuthStore = create((set)=>({
 authUser:null,
 isCheckingAuth:true,
 isSigningUp:false,

checkAuth :async()=>{
try {
  const res = await axiosInstance.get("/auth/check")
  set({authUser:res.data})
} catch (error) {
  console.log("Error is Introduced",error);
  set({authUser:null})
}
finally {
  set({isCheckingAuth:false})
}
}
}))

Signup : async (data)=>{
  try {
    const res = await axiosInstance.post("auth/signup")
    set ({authUser:res.data})
    toast.success("Account created Successfully")
  } catch (error) {
    toast.error(error.response.data.message);
  }
  finally{
    set({isSigningUp:false})
  }
}
export default useAuthStore;