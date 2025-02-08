import { useRouter } from "next/router";
import RegistrationButton from "./RegistrationButton";

export default async function LoginPage() {
  try {
    // const res = await fetch('http://localhost:4000');
    // if (!res.ok) throw new Error('Failed to fetch products');

    // const products = await res.json();

    const router = useRouter()

    const handleSubmit = async (event) => {
      event.preeventDefault();
      const formData = new FormData(event.target)
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
       <h1>Login</h1>
       <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
       </form>
       <p className="filler">Don't have an account?</p>
       <RegistrationButton/>
      </div>
    );
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
}
