import { BarChart, Users, FileText, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const sidebarItems = [
    { icon: BarChart, label: 'Content', id: 'content' },
]

interface SidebarProps {
    setCurrentPage: (page: string) => void
    currentPage: string
}

export default function Sidebar({ setCurrentPage, currentPage }: SidebarProps) {
    return (
        <aside className="hidden w-64 flex-col bg-gray-800 text-white md:flex">
            <nav className="flex-1 space-y-2 p-4">
                {sidebarItems.map((item) => (
                    <Button
                        key={item.id}
                        variant="ghost"
                        className={cn(
                            'w-full justify-start',
                            currentPage === item.id && 'bg-gray-700 hover:bg-gray-700'
                        )}
                        onClick={() => setCurrentPage(item.id)}
                    >
                        <item.icon className="mr-2 h-5 w-5" />
                        {item.label}
                    </Button>
                ))}
            </nav>
        </aside>
    )
}

