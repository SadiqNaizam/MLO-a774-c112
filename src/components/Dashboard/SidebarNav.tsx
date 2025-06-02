import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Newspaper,
  MessageCircle,
  PlaySquare,
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  Users,
  ListChecks,
  Gift,
  ChevronDown,
  Settings,
  ShieldQuestion,
  LogOut,
  Megaphone,
  ChevronRight
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href?: string;
  isActive?: boolean;
  isSectionTitle?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  avatarSrc?: string;
  avatarFallback?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  label,
  href = '#',
  isActive = false,
  isSectionTitle = false,
  children,
  onClick,
  avatarSrc,
  avatarFallback
}) => {
  const commonClasses = 'flex items-center space-x-3 px-3 py-2.5 text-sm font-medium rounded-md';
  if (isSectionTitle) {
    return <h3 className="px-3 pt-4 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">{label}</h3>;
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        commonClasses,
        isActive
          ? 'bg-gray-200 text-primary-text dark:bg-gray-700 dark:text-white'
          : 'text-secondary-text hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300',
        avatarSrc ? 'font-semibold' : ''
      )}
    >
      {avatarSrc && (
        <Avatar className="h-7 w-7">
          <AvatarImage src={avatarSrc} alt={label} />
          <AvatarFallback>{avatarFallback || label.charAt(0)}</AvatarFallback>
        </Avatar>
      )}
      {Icon && !avatarSrc && <Icon className={cn('h-5 w-5', isActive ? 'text-accent-blue' : 'text-secondary-text')} />}
      <span>{label}</span>
      {children && <ChevronRight className="ml-auto h-4 w-4 text-gray-400" />}
    </a>
  );
};

const SidebarNav: React.FC = () => {
  const [showMoreExplore, setShowMoreExplore] = React.useState(false);

  const mainNavItems = [
    { icon: Newspaper, label: 'News Feed', isActive: true },
    { icon: MessageCircle, label: 'Messenger' },
    { icon: PlaySquare, label: 'Watch' },
    { icon: Store, label: 'Marketplace' },
  ];

  const shortcutsItems = [
    { icon: Gamepad2, label: 'FarmVille 2' },
    // Add more shortcuts here
  ];

  const exploreItems = [
    { icon: CalendarDays, label: 'Events' },
    { icon: Flag, label: 'Pages' },
    { icon: Users, label: 'Groups' },
    { icon: ListChecks, label: 'Friend Lists' },
    { icon: Gift, label: 'Fundraisers' },
    { icon: Settings, label: 'Settings', isHidden: !showMoreExplore },
    { icon: ShieldQuestion, label: 'Help & Support', isHidden: !showMoreExplore },
    { icon: LogOut, label: 'Logout', isHidden: !showMoreExplore },
  ];

  const createItems = [
    { label: 'Ad', href: '#' },
    { label: 'Page', href: '#' },
    { label: 'Group', href: '#' },
    { label: 'Event', href: '#' },
    { label: 'Fundraiser', href: '#' },
  ];

  return (
    <nav className="flex flex-col h-full overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
      <div className="mb-4">
        <NavItem 
          avatarSrc="https://i.pravatar.cc/40?u=OlennaMason" 
          avatarFallback="OM" 
          label="Olenna Mason" 
          href="#" 
        />
      </div>
      
      {mainNavItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}

      <NavItem label="Shortcuts" isSectionTitle />
      {shortcutsItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}

      <NavItem label="Explore" isSectionTitle />
      {exploreItems.filter(item => !item.isHidden).map((item) => (
        <NavItem key={item.label} {...item} />
      ))}
      <button 
        onClick={() => setShowMoreExplore(!showMoreExplore)}
        className="flex items-center space-x-3 px-3 py-2.5 text-sm font-medium rounded-md text-secondary-text hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
      >
        <ChevronDown className={cn('h-5 w-5 text-secondary-text transition-transform', showMoreExplore && 'rotate-180')} />
        <span>{showMoreExplore ? 'See Less' : 'See More...'}</span>
      </button>

      <NavItem label="Create" isSectionTitle />
      <div className="px-3 space-y-1">
        {createItems.map((item) => (
          <a 
            key={item.label} 
            href={item.href} 
            className="text-sm text-accent-blue hover:underline"
          >
            {item.label}
          </a>
        )).reduce((prev, curr, idx) => [
          prev, 
          idx > 0 && <span key={`sep-${idx}`} className="text-sm text-gray-400 mx-1">·</span>, 
          curr
        ])}
      </div>
      
      <div className="mt-auto px-3 pt-6 pb-2 text-xs text-gray-400 space-x-2">
        <a href="#" className="hover:underline">Privacy</a>
        <span>·</span>
        <a href="#" className="hover:underline">Terms</a>
        <span>·</span>
        <a href="#" className="hover:underline">Advertising</a>
        <span>·</span>
        <a href="#" className="hover:underline">Ad Choices</a>
        <span>·</span>
        <a href="#" className="hover:underline">Cookies</a>
        <span>·</span>
        <a href="#" className="hover:underline">More</a>
        <p className="mt-1">Meta &copy; {new Date().getFullYear()}</p>
      </div>
    </nav>
  );
};

export default SidebarNav;
