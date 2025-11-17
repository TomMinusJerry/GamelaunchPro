'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, FileText, Presentation, Key, BookOpen, HeadphonesIcon } from 'lucide-react'

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'PRDs', href: '/prd', icon: FileText },
  { name: 'Slideshows', href: '/slideshows', icon: Presentation },
  { name: 'API Keys', href: '/api-keys', icon: Key },
  { name: 'Courses', href: '/courses', icon: BookOpen },
  { name: 'Customer Support', href: '/support', icon: HeadphonesIcon },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r bg-muted/40">
      <div className="flex h-14 items-center border-b px-6">
        <h1 className="text-xl font-bold">GameLaunch Pro</h1>
      </div>
      <nav className="space-y-1 p-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              pathname.startsWith(item.href)
                ? 'bg-muted text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
