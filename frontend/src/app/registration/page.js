import { useRouter } from "next/router";
import LoginButton from "./LoginButton";

export default async function RegistrationPage() {

    try {
      // const res = await fetch('http://localhost:4000');
      // if (!res.ok) throw new Error('Failed to fetch products');
  
      // const products = await res.json();
  
      const router = useRouter()
      const handleSubmit = async (event) => {
        event.preeventDefault();
        const formData = new FormData(event.target)
        const firstName = formData.get('firstName')
        const lastName = formData.get('lastName')
        const username = formData.get('username')
        const password = formData.get('password')
  
        try {
          //API CALL
  
          const { token } = response.data;
  
          if (token) {
            localStorage.setItem('token', token)
            router.push('/admin')
          }
        } catch (error) {
          //Handle Errors
        }
      }
      return (
        <div>
         <h1>Registration</h1>
        <form action="/api/login" method="POST">
          <div>
            <label htmlFor="fname">First Name:</label>
            <input type="text" id="fname" name="fname" required />
          </div>
          <div>
            <label htmlFor="lname">Last:</label>
            <input type="text" id="lname" name="lname" required />
          </div>    
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Register</button>
        </form>
        <p className="filler">Already have an account?</p>
        <LoginButton/>
        </div>
      );
    } catch (error) {
      return <div>Error: {error.message}</div>;
    }
  }
  