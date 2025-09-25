import React from 'react'
import useAuthStore from '../Store/UseAuthStore';

function LoginPage() {
    const {AuthStore,isLoading}=useAuthStore();
    console.log(AuthStore);
      console.log(isLoading);

  return (
    <div>
      Hello Login's here
    
    </div>
  )
}

export default LoginPage
