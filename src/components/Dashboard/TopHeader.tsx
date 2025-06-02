import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Facebook,
  Search,
  Home,
  UserPlus,
  Users2,
  MessageCircle,
  Bell,
  HelpCircle,
  ChevronDown,
  Settings,
  LogOut
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  const user = {
    name: 'Olenna',
    avatarUrl: 'https://i.pravatar.cc/40?u=OlennaMason',
  };

  const navLinks = [
    { label: 'Home', icon: Home, href: '#', isActive: true },
    { label: 'Find Friends', icon: UserPlus, href: '#' },
  ];

  const actionIcons = [
    { label: 'Friend Requests', icon: Users2, href: '#', notificationCount: 8 },
    { label: 'Messenger', icon: MessageCircle, href: '#', notificationCount: 0 }, // Example: No new messages
    { label: 'Notifications', icon: Bell, href: '#', notificationCount: 36 },
  ];

  return (
    <header className={cn('flex items-center justify-between h-14 px-6 bg-card border-b border-border fixed top-0 left-0 right-0 z-50', className)}>
      {/* Left Section: Logo and Search */} 
      <div className="flex items-center space-x-2">
        <a href="#" aria-label="Facebook home">
          <Facebook className="h-10 w-10 text-primary" fill="currentColor" />
        </a>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            type="search" 
            placeholder="Search Facebook" 
            className="pl-10 pr-4 py-2 h-10 w-60 rounded-full bg-gray-100 dark:bg-gray-700 border-transparent focus:bg-white dark:focus:bg-gray-600 focus:border-primary"
          />
        </div>
      </div>

      {/* Center Section: Navigation Links */} 
      <nav className="flex items-center space-x-2">
        {navLinks.map((link) => (
          <Button 
            key={link.label} 
            variant="ghost" 
            asChild 
            className={cn(
              'h-full px-6 text-secondary-text hover:bg-gray-100 dark:hover:bg-gray-700',
              link.isActive && 'text-primary border-b-2 border-primary rounded-none'
            )}
          >
            <a href={link.href} aria-label={link.label} className="flex items-center">
              <link.icon className={cn('h-6 w-6', link.isActive ? 'text-primary' : 'text-secondary-text')} />
            </a>
          </Button>
        ))}
      </nav>

      {/* Right Section: User Profile and Actions */} 
      <div className="flex items-center space-x-2">
        <Button variant="ghost" className="rounded-full px-3 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-700">
          <Avatar className="h-7 w-7 mr-2">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-semibold text-primary-text dark:text-white">{user.name}</span>
        </Button>

        {actionIcons.map((action) => (
          <Button key={action.label} variant="ghost" size="icon" asChild className="relative bg-gray-200 dark:bg-gray-700 rounded-full w-10 h-10 hover:bg-gray-300 dark:hover:bg-gray-600">
            <a href={action.href} aria-label={action.label}>
              <action.icon className="h-5 w-5 text-primary-text dark:text-white" />
              {action.notificationCount > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] px-1 text-xs rounded-full">
                  {action.notificationCount}
                </Badge>
              )}
            </a>
          </Button>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="bg-gray-200 dark:bg-gray-700 rounded-full w-10 h-10 hover:bg-gray-300 dark:hover:bg-gray-600">
              <ChevronDown className="h-5 w-5 text-primary-text dark:text-white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-60">
            <DropdownMenuLabel className="flex items-center space-x-2 p-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold text-primary-text dark:text-white">{user.name} Mason</p>
                <p className="text-xs text-secondary-text">See your profile</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings & Privacy</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help & Support</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
