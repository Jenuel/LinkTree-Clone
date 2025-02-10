'use client';

import Link from 'next/link';
import { Card, CardHeader, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ClientDashboard({ initialData }) {
  const user = initialData[0]; // Assuming there's only one user object

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mt-10 space-y-6">
        
        <div className="flex flex-col items-center text-center space-y-2">
          <Avatar>
            <AvatarImage src={user.profile.avatar} alt="profile pic" />
            <AvatarFallback>{user.profile.display_name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold">{user.profile.display_name}</h2>
            <p className="text-gray-500">{user.profile.bio}</p>
          </div>
        </div>

        {user.links.map((link, index) => (
          <Link href={link.url} key={index}>
            <Card className="cursor-pointer hover:bg-gray-100 transition-all">
              <CardHeader>
                <CardDescription>{link.title}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
