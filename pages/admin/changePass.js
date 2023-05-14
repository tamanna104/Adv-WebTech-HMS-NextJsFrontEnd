import Mylayout from "../components/layout"
import Link from "next/link"
export default function ChangePass() {
    return (
      <>
      <Mylayout title = "Reset Password"/>
      <h1 align="center">SignIn</h1><br/><br/>
      <form align="center">
        <fieldset align="center"><br/>
        <label>Password: </label>
        <input type="password" placeholder=""></input><br/><br/>
        <label>New Password : </label>
        <input type="password" placeholder=""></input><br/><br/>
        <label>Confirm Password : </label>
        <input type="password" placeholder=""></input><br/><br/>
        <input type="button" value="change"></input><br/><br/><br/>
        </fieldset>
      </form><br/>
      <p align="center"><Link href="/signin">Back</Link></p>
        
      </>
    )
  }