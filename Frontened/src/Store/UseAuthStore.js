import {create} from "zustand";

const useAuthStore = create((set)=>({
  AuthStore:{name:'prajwal',Id:1,Play:"mov"
  },
  isLoading:true,

login:()=>{
  console.log("HI YOU LOGGED IN");
  }
}))


export default useAuthStore;