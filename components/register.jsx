'use client'

import { React, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { auth } from '../firebase/firebase'
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

const provider = new GoogleAuthProvider()
const RegisterForm = () => {
  // defining states for every possible changes that can happen in the app
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [name, setName] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  /// function to handle the sign up process
  const signUpHandler = async () => {
    if (!email || !password || !name) return alert('Please fill all the fields')
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      console.log(user)
      await updateProfile(auth.currentUser, {
        displayName: name,
      })
    } catch (error) {
      console.log(error)
    }
  }
  /// function to handle the google sign in process
  const googleSignIn = async () => {
   await signInWithPopup(auth, provider)

  }

  return (
    <main className="flex lg:h-[100vh]">
      <div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start">
        <div className="p-8 w-[600px]">
          <h1 className="text-4xl font-semibold">Sign Up</h1>
          <p className="mt-6 ml-1">
            Already have an account ?
            <span className="underline hover:text-blue-400 cursor-pointer">
              Login
            </span>
          </p>

          <div
            onClick={googleSignIn}
            className="bg-black/[0.05] text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group"
          >
            <FcGoogle size={22} />
            <span className="font-medium text-black group-hover:text-white">
              Login with Google
            </span>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Name</label>
              <input
                type="text"
                placeholder="Alina Tester"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Email</label>
              <input
                type="email"
                placeholder="alina@tester.com"
                required
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Password</label>
              <input
                type="password"
                placeholder="********"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={signUpHandler}
              className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div
        className="w-[100%]  bg-slate-400 bg-cover bg-right-top hidden lg:block"
        style={{
          backgroundImage: "url('/login-banner.png')",
          height: '80vh',
          width: '100%',
        }}
      ></div>
    </main>
  )
}

export default RegisterForm
