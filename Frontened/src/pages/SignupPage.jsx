import React, { useState } from 'react'
import { useEffect } from 'react'
import useAuthStore from '../Store/UseAuthStore'
function SignupPage() {
  CONST [formData,setFormData] =useState({fullName:"",email:"",password:""})
  const{Signup,isSigningup}=useAuthStore()
  return (
    <div>
      Welcome to Cafe sign-up To enjoy
    </div>
  )
}

export default SignupPage
