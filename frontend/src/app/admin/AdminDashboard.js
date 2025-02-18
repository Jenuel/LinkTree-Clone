'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import axios from "axios";

export default function AdminDashboard({ links, prof }) {
    const user = prof[0];
    const [items, setItems] = useState(links);
    const [newTitle, setNewTitle] = useState("");
    const [newUrl, setNewUrl] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editingTitle, setEditingTitle] = useState("");
    const [editingUrl, setEditingUrl] = useState("");

    const addItem = async () => {
        if (!newTitle || !newUrl) return;
    
        try {
            const response = await axios.post('https://example.com/api/data', {
                key1: newTitle,
                key2: newUrl
            });
    
            const newData = response.data;
            setItems([...items, newData]);
    
            setNewTitle("");
            setNewUrl("");
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const deleteItem = async (id) => {
        try {
            console.log('Deleting item with id:', id);
            await axios.delete(`http://localhost:3000/api/links/${id}`);
            setItems(items.filter((item) => item._id !== id));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const updateItem = async () => {
        if (!editingTitle || !editingUrl) return;

        try {
            const response = await axios.put(`http://localhost:3000/api/links/${editingId}`, {
                key1: editingTitle,
                key2: editingUrl
            });

            const updatedItem = response.data;
            setItems(items.map((item) => (item._id === editingId ? updatedItem : item)));

            setEditingId(null);
            setEditingTitle("");
            setEditingUrl("");
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <div className="flex justify-between my-4">
                <div className="flex flex-row items-center">
                    <Avatar>
                        <AvatarImage src={user.avatar} alt="profile pic" />
                        <AvatarFallback>{user.display_name[0]}</AvatarFallback>
                    </Avatar>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="link">{user.display_name}</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogTitle>Profile Information</DialogTitle>
                            <p>Name: {user.display_name}</p>
                            <p>Bio: {user.bio}</p>
                        </DialogContent>
                    </Dialog>
                </div>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="w-full max-w-xs">Add Link</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogTitle>Add Link</DialogTitle>
                        <Label>Title of the URL</Label>
                        <Input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                        <Label>Link of the URL</Label>
                        <Input value={newUrl} onChange={(e) => setNewUrl(e.target.value)} />
                        <Button onClick={addItem}>Add Link</Button>
                    </DialogContent>
                </Dialog>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Links</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item._id}>
                            <TableCell>{item.title}</TableCell>
                            <TableCell>{item.url}</TableCell>
                            <TableCell>
                                <Button className="mr-2" onClick={() => deleteItem(item._id)}>
                                    Delete
                                </Button>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button
                                            onClick={() => {
                                                setEditingId(item._id);
                                                setEditingTitle(item.title);
                                                setEditingUrl(item.url);
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogTitle>Edit Item</DialogTitle>
                                        <Label>Title of the URL</Label>
                                        <Input
                                            value={editingTitle}
                                            onChange={(e) => setEditingTitle(e.target.value)}
                                        />
                                        <Label>Link of the URL</Label>
                                        <Input
                                            value={editingUrl}
                                            onChange={(e) => setEditingUrl(e.target.value)}
                                        />
                                        <Button onClick={updateItem}>Save</Button>
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
