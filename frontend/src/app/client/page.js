import ClientDashboard from './ClientDashboard';

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

export default async function ClientPage() {
  const { profile, links } = await getData();
  return <ClientDashboard links={links} prof={profile} />;
}