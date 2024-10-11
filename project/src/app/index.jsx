import { useState , useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from '../components/common/Header'
import { loginAPI } from '../core/services/api/auth'

const  App = async () =>  {
  const [count, setCount] = useState(0)

  const loginUser = async () => {
    const userObj = {
      phoneOrGmail: "masg1377@gmail.com",
      password: "123456",
      rememberMe: true
    };

    const user = await loginAPI(userObj);

    console.log(user);
  };

  useEffect(() => {
    loginUser();
  }, []);

  return (
    <>
    
    </>
  )
}

export default App
