import { GetServerSideProps } from 'next';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { Card } from '@/components/ui/card';

export default function Page({data}) {
  return (
    <div>
      <h1>Client</h1>
      <div className="content">
        {data.map((link) => (
          <Card key={link.id}>
            <CardHeader>
              <Avatar>
                <AvatarImage src={link.avatar} fallback={<AvatarFallback>{link.initials}</AvatarFallback>} />
              </Avatar>
              <div>
                <CardTitle>{link.title}</CardTitle>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

//get links
// export async function getServerSideProps() {
//     try {
//       const res = await fetch('http://localhost:3001/api/data');
//       const data = await res.json();
  
//       return { props: { data } };
//     } catch (error) {
//       return { props: { error: "Failed to fetch data" } };
//     }
//   }