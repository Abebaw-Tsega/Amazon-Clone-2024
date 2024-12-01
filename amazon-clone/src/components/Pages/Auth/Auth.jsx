import React, { useState, useContext } from 'react'
import classes from './Signup.module.css'
import { Link } from 'react-router-dom'
import { auth } from "../../Utility/firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { DataContext } from '../../DataProvider/DataProvider'
import { Type } from '../../Utility/action.type'

function Auth() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);

  console.log(user)

  const authHandler = (e) => {
    e.preventDefault();
    console.log(e.target.name)

    if (e.target.name == "signIn") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

  }


  return (
    <section className={classes.login}>
      <Link>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />
      </Link>


      <div className={classes.login_container}>
        <h1>Sign-in</h1>

        <form action="">

          <div>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" />
          </div>

          <button type="submit" name='signUp' onClick={authHandler} className={classes.login_signInButton} >Sign In</button>
        </form>

        <p>By signing-in you agree to Amazon's Fack Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button type="submit" name='signIn' onClick={authHandler} className={classes.login_createButton} >Create your Amazon Account</button>
      </div>

    </section>
  )
}

export default Auth;