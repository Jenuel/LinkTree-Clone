'use client';
import Link from "next/link";
import { Card, CardHeader } from "@/components/ui/card";

export default function ClientDashboard({ initialData }) {
  
    return (
        <div className="p-6">
            {initialData.map((link) => (
                <Link href={link.url} key={link.id}>
                    <Card>
                        <CardHeader>{link.name}</CardHeader>
                    </Card>
                </Link>
            ))}
        </div>
    );
}