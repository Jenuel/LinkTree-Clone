import ItemCard from "../admin/Items";
import RegistrationButton from "./RegistrationButton";

export default async function ClientPage() {
  try {
    // const res = await fetch('http://localhost:4000');
    // if (!res.ok) throw new Error('Failed to fetch products');

    // const products = await res.json();
    // const links 

    return (
      <div>
      <h1>User</h1>
      <div className="content">
        {links.map((item) => (
            <ItemCard key={item.id} data={item} />
        ))}
      </div>
      </div>
    );
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
}
