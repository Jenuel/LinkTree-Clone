'use client';

import { useState } from "react";
import { Card, CardHeader } from "@/components/ui/card";

export default function ClientDashboard({ initialData }) {
  
    return (
        <div className="p-6">
            {initialData.map((link) => (
                <Card key={link.id} title={link.name} >
                    <CardHeader>{link.name}</CardHeader>
                </Card>
            ))}
        </div>
    );
}