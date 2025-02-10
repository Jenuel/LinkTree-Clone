import ClientDashboard from './ClientDashboard';

async function getData() {
  const data = [  
    { id: 1, name: "Item 1" , url: "https://www.youtube.com/@gptLearningHub/videos" },
    { id: 2, name: "Item 2", url: "https://www.youtube.com/@gptLearningHub/videos" },
    { id: 3, name: "Item 3", url: "https://www.youtube.com/@gptLearningHub/videos" }
  ];
  return data;
}

export default async function AdminPage() {
  const data = await getData();
  return <ClientDashboard initialData={data} />;
}