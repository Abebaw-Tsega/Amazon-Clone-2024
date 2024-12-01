import React from 'react'
import classes from './Signup.module.css'
import LayOut from '../../LayOut/LayOut'
import { Link } from 'react-router-dom'

function Auth() {
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
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button className= {classes.login_signInButton} >Sign In</button>
        </form>

        <p>By signing-in you agree to Amazon's Fack Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

        <button className= {classes.login_createButton} >Create your Amazon Account</button>
      </div>



    </section>

  )
}

export default Auth;