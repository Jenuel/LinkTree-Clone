import AdminDashboard from './AdminDashboard';

async function getData() {
  const data = [
    {
      "id": 1,
      "title": "My Portfolio",
      "url": "https://johndoe.dev"
    },
    {
      "id": 2,
      "title": "GitHub",
      "url": "https://github.com/johndoe"
    },
    {
      "id": 3,
      "title": "LinkedIn",
      "url": "https://linkedin.com/in/johndoe"
    },
    {
      "id": 4,
      "title": "Twitter",
      "url": "https://twitter.com/johndoe"
    },
    {
      "id": 5,
      "title": "YouTube Channel",
      "url": "https://youtube.com/@johndoe"
    }
  ];
  
  return data;
}

export default async function AdminPage() {
  const data = await getData();
  return <AdminDashboard initialData={data} />;
}