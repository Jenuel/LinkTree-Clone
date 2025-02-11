import ClientDashboard from './ClientDashboard';

async function getData() {
  const data = [  
    {
      "profile": {
        "username": "john_doe",
        "display_name": "John Doe",
        "bio": "Web Developer | Open Source Enthusiast",
        "avatar": "https://example.com/avatar.jpg"
      },
      "links": [
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
    }
  ];
  return data;
}

export default async function ClientPage() {
  const data = await getData();
  return <ClientDashboard initialData={data} />;
}