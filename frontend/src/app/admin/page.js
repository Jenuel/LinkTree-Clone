import AdminDashboard from './AdminDashboard';

async function getData() {
  const profile = [
    {
      "username": "john_doe",
      "display_name": "John Doe",
      "bio": "Web Developer | Open Source Enthusiast",
      "avatar": "https://example.com/avatar.jpg"
    }
  ]
  const links = [
    {
      "title": "My Portfolio",
      "url": "https://johndoe.dev"
    },
    {
      "title": "GitHub",
      "url": "https://github.com/johndoe"
    },
    {
      "title": "LinkedIn",
      "url": "https://linkedin.com/in/johndoe"
    },
    {
      "title": "Twitter",
      "url": "https://twitter.com/johndoe"
    },
    {
      "title": "YouTube Channel",
      "url": "https://youtube.com/@johndoe"
    }
  ]
  return { profile, links };
}

export default async function AdminPage() {
  const data = await getData();
  return <AdminDashboard links={links} prof={profile} />;
}