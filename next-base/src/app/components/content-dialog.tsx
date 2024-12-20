'use client'
import { Button } from "@/components/ui/button"
import { PlusCircle } from 'lucide-react'
import {Dialog,DialogTrigger,DialogContent,DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {useState} from "react";


export function ContentDialog() {

    const [openDialog,setOpenDialog] = useState(true)

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
                {/*<AddItemForm onSubmit={addItem} />*/}
            </DialogContent>
        </Dialog>
    )
}

