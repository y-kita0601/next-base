import { Bell, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'

export default function Header() {
    return (
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
            <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold">Base Dashboard</span>
                <form className="hidden lg:block">
                    <div className="relative">
                        {/*<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />*/}
                        {/*<Input*/}
                        {/*    type="search"*/}
                        {/*    placeholder="Search..."*/}
                        {/*    className="w-full bg-white pl-8 md:w-[300px]"*/}
                        {/*/>*/}
                    </div>
                </form>
            </div>
            <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                            <img
                                src="/placeholder-user.jpg"
                                alt="User"
                                className="h-8 w-8 rounded-full"
                            />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">John Doe</p>
                                <p className="text-xs leading-none text-muted-foreground">
                                    john.doe@example.com
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}

