import ClientDashboard from './ClientDashboard';

async function getData() {
  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" }
  ];
  return data;
}

export default async function AdminPage() {
  const data = await getData();
  return <ClientDashboard initialData={data} />;
}