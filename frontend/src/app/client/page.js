import ClientDashboard from './ClientDashboard';
import axios from 'axios';

async function getData() {
  const profile = [
    {
      "username": "john_doe",
      "display_name": "John Doe",
      "bio": "Web Developer | Open Source Enthusiast",
      "avatar": "https://example.com/avatar.jpg"
    }
  ]
  try {
    const response = await axios.get('http://localhost:3000/api/links/65fcb8e2a72c3e001b5a1234');
    const links = response.data;  
    return { profile, links };
  } catch (error) {
    console.error("Error fetching links:", error);
  }
  return { profile, links };
}

export default async function ClientPage() {
  const { profile, links } = await getData();
  return <ClientDashboard links={links} prof={profile} />;
}