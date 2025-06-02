import React from 'react';
import { cn } from '@/lib/utils';
import PostCard, { PostProps } from './PostCard';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Image as ImageIcon, Video, Edit3, List, Tag, MoreHorizontal } from 'lucide-react'; // Renamed Image to ImageIcon to avoid conflict

const CreatePost: React.FC = () => {
  return (
    <Card className="mb-6 shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-center space-x-3 mb-4">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/40?u=OlennaMason" alt="Olenna Mason" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <Input 
            placeholder="What's on your mind, Olenna?"
            className="flex-grow rounded-full bg-gray-100 dark:bg-gray-700 border-transparent hover:bg-gray-200 focus:bg-white dark:focus:bg-gray-600 h-10"
          />
        </div>
        <div className="flex justify-around pt-2 border-t border-border">
          <Button variant="ghost" className="text-secondary-text hover:bg-gray-100 dark:hover:bg-gray-700 flex-1 rounded-md">
            <Edit3 className="h-5 w-5 text-blue-500 mr-2" /> Make Post
          </Button>
          <Button variant="ghost" className="text-secondary-text hover:bg-gray-100 dark:hover:bg-gray-700 flex-1 rounded-md">
            <ImageIcon className="h-5 w-5 text-green-500 mr-2" /> Photo/Video
          </Button>
          <Button variant="ghost" className="text-secondary-text hover:bg-gray-100 dark:hover:bg-gray-700 flex-1 rounded-md">
            <Video className="h-5 w-5 text-red-500 mr-2" /> Live Video
          </Button>
        </div>
        {/* Hidden options, could be revealed on input focus or in a modal */}
        {/* 
        <div className="flex justify-around pt-2 mt-2 border-t border-border">
          <Button variant="ghost" size="sm" className="text-secondary-text"><List className="h-4 w-4 mr-1" /> List</Button>
          <Button variant="ghost" size="sm" className="text-secondary-text"><ImageIcon className="h-4 w-4 mr-1" /> Photo/Video</Button>
          <Button variant="ghost" size="sm" className="text-secondary-text"><Tag className="h-4 w-4 mr-1" /> Tag Friends</Button>
          <Button variant="ghost" size="icon" className="text-secondary-text"><MoreHorizontal className="h-4 w-4" /></Button>
        </div>
        */}
      </CardContent>
    </Card>
  );
};

const ContentFeed: React.FC = () => {
  const postsData: PostProps[] = [
    {
      id: '1',
      user: {
        name: 'Julia Fillory',
        avatarUrl: 'https://i.pravatar.cc/40?u=JuliaFillory',
        profileUrl: '#',
      },
      timestamp: '2 hrs ago',
      privacy: 'public' as const,
      content: 'Checking out some new stores downtown!',
      media: {
        type: 'map' as const,
        source: '', // Placeholder, actual map rendering is complex
        alt: 'Map of Raleigh, North Carolina',
      },
      location: {
        name: 'Raleigh, North Carolina',
        details: 'City - United States',
      },
      socialContext: 'Bryan Durand and 2 others have been here',
      likes: 156,
      comments: 23,
      shares: 12,
    },
    {
      id: '2',
      user: {
        name: 'John Doe',
        avatarUrl: 'https://i.pravatar.cc/40?u=JohnDoe',
        profileUrl: '#',
      },
      timestamp: '5 hrs ago',
      privacy: 'friends' as const,
      content: 'Had a great time at the beach today! The weather was perfect. ☀️🌊',
      media: {
        type: 'image' as const,
        source: 'https://picsum.photos/seed/beachday/600/400',
        alt: 'Sunny beach with waves',
      },
      likes: 289,
      comments: 45,
      shares: 30,
    },
    {
      id: '3',
      user: {
        name: 'Jane Smith',
        avatarUrl: 'https://i.pravatar.cc/40?u=JaneSmith',
        profileUrl: '#',
      },
      timestamp: '1 day ago',
      privacy: 'public' as const,
      content: 'Just launched my new project! Check it out: myawesomeproject.com. Feedback appreciated! #coding #webdev',
      likes: 532,
      comments: 112,
      shares: 78,
    },
  ];

  return (
    <div className={cn('flex flex-col gap-6 w-full max-w-xl mx-auto')}> 
      <CreatePost />
      {postsData.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default ContentFeed;
