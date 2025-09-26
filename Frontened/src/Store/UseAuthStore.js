import {create} from "zustand";
import {axiosInstance} from "../lib/axios"
const useAuthStore = create((set)=>({
 authUser:null,
 isCheckingAuth:true,

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


export default useAuthStore;