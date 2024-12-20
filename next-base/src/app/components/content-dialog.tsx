'use client'
import { Button } from "@/components/ui/button"
import { PlusCircle } from 'lucide-react'
import {Dialog,DialogTrigger,DialogContent,DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {useState} from "react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";


export function ContentDialog() {

    const [openDialog,setOpenDialog] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')

    const onSubmit= (data:any) => {
        console.log(data)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setOpenDialog(false)
        onSubmit({ name, email, role })
    }

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                     コンテンツ追加
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Item</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">タイトル</Label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">コンテンツ</Label>
                        <Input
                            id="text"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full">Add User</Button>
                </form>
                {/*<AddItemForm onSubmit={addItem} />*/}
            </DialogContent>
        </Dialog>
    )
}

