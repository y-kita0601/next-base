import {SimpleTable} from "@/app/components/base/simple-table";
import {Button} from "@/components/ui/button";
import {ContentDialog} from "@/app/components/content-dialog";


export default async function Contents() {
    const users  = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
        { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Manager' },
    ]

    const response = await fetch('http://localhost:3000/api/contents');
    const notes = await response.json();


    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">コンテンツ</h2>
            <div className="flex justify-between">
                <Button>コンテンツ追加</Button>
            </div>
            <SimpleTable users={users}/>
            <ContentDialog />
        </div>
    )
}

