'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

export default function AdminDashboard({ initialData }) {
    const [items, setItems] = useState(initialData);
    const [newItem, setNewItem] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editingValue, setEditingValue] = useState("");

    const addItem = async () => {
        if (!newItem) return;
        const res = await fetch("/api/items", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: newItem }),
        });
        const newData = await res.json();
        setItems([...items, newData]);
        setNewItem("");
    };

    const deleteItem = async (id) => {
        await fetch(`/api/items/${id}`, { method: "DELETE" });
        setItems(items.filter(item => item.id !== id));
    };

    const updateItem = async () => {
        if (!editingValue) return; 
        const res = await fetch(`/api/items/${editingId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: editingValue }),
        });
        const updatedItem = await res.json();
        setItems(items.map(item => (item.id === editingId ? updatedItem : item)));
        setEditingId(null);
        setEditingValue("");
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Links</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.url}</TableCell>
                            <TableCell>
                                <Button className="mr-2" onClick={() => deleteItem(item.id)}>Delete</Button>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button onClick={() => { setEditingId(item.id); setEditingValue(item.name); }}>Edit</Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <Input value={editingValue} onChange={(e) => setEditingValue(e.target.value)} />
                                        <Button onClick={updateItem}>Save</Button>
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="mt-6 flex gap-2">
                <Input value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Enter new item" />
                <Button onClick={addItem}>Add</Button>
            </div>
        </div>
    );
}