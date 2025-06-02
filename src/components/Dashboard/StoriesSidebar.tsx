import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Archive, Settings as SettingsIcon } from 'lucide-react'; // Renamed Settings to SettingsIcon
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface StoryItemProps {
  id: string;
  userName: string;
  userAvatarUrl: string;
  storyImageUrl: string;
  isViewed?: boolean;
}

const StoryItem: React.FC<StoryItemProps> = ({ userName, userAvatarUrl, storyImageUrl, isViewed }) => {
  return (
    <div className="relative w-28 h-48 rounded-lg overflow-hidden cursor-pointer group flex-shrink-0">
      <img src={storyImageUrl} alt={`${userName}'s story`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <img 
        src={userAvatarUrl} 
        alt={userName} 
        className={cn(
          'absolute top-2 left-2 h-8 w-8 rounded-full border-2 object-cover',
          isViewed ? 'border-gray-400' : 'border-blue-500'
        )} 
      />
      <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold truncate">{userName}</p>
    </div>
  );
};

const StoriesSidebar: React.FC = () => {
  const storiesData: StoryItemProps[] = [
    { id: '1', userName: 'Alice Wonderland', userAvatarUrl: 'https://i.pravatar.cc/40?u=Alice', storyImageUrl: 'https://picsum.photos/seed/story1/200/300', isViewed: false },
    { id: '2', userName: 'Bob The Builder', userAvatarUrl: 'https://i.pravatar.cc/40?u=Bob', storyImageUrl: 'https://picsum.photos/seed/story2/200/300', isViewed: true },
    { id: '3', userName: 'Charlie Chaplin', userAvatarUrl: 'https://i.pravatar.cc/40?u=Charlie', storyImageUrl: 'https://picsum.photos/seed/story3/200/300', isViewed: false },
    { id: '4', userName: 'Diana Prince', userAvatarUrl: 'https://i.pravatar.cc/40?u=Diana', storyImageUrl: 'https://picsum.photos/seed/story4/200/300', isViewed: false },
    { id: '5', userName: 'Edward Scissorhands', userAvatarUrl: 'https://i.pravatar.cc/40?u=Edward', storyImageUrl: 'https://picsum.photos/seed/story5/200/300', isViewed: true },
  ];

  return (
    <div className="py-4 space-y-4">
      <div className="flex justify-between items-center px-1">
        <h2 className="text-lg font-semibold text-primary-text">Stories</h2>
        <div className="space-x-2">
          <Button variant="ghost" size="sm" className="text-xs text-secondary-text hover:bg-gray-100 dark:hover:bg-gray-700">
            <Archive className="h-4 w-4 mr-1" /> Archive
          </Button>
          <Button variant="ghost" size="sm" className="text-xs text-secondary-text hover:bg-gray-100 dark:hover:bg-gray-700">
            <SettingsIcon className="h-4 w-4 mr-1" /> Settings
          </Button>
        </div>
      </div>

      <Card className="overflow-hidden shadow-none border-none bg-transparent">
        <CardContent className="p-0">
          <div className="flex flex-col items-center justify-center h-48 w-full bg-muted rounded-lg relative cursor-pointer group">
            <img 
                src="https://i.pravatar.cc/150?u=OlennaMasonStory" 
                alt="Olenna Mason - Add Story" 
                className="w-full h-3/4 object-cover rounded-t-lg"
            />
            <div className="absolute top-28 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full p-1.5 border-4 border-card group-hover:bg-blue-600">
                 <PlusCircle className="h-6 w-6" />
            </div>
            <div className="w-full h-1/4 flex items-center justify-center bg-card rounded-b-lg">
                <p className="text-sm font-medium text-primary-text">Add to Your Story</p>
            </div>
            {/* Original layout based on image interpretation 
            <div className="bg-primary text-primary-foreground rounded-full p-2 mb-2 group-hover:bg-blue-600">
              <PlusCircle className="h-6 w-6" />
            </div>
            <p className="text-sm font-semibold text-primary-text">Add to Your Story</p>
            <p className="text-xs text-secondary-text text-center mt-1 px-2">Share a photo, video or write something</p>
            */}
          </div>
        </CardContent>
      </Card>

      {storiesData.length > 0 && (
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-3 pb-3">
            {storiesData.map(story => (
              <StoryItem key={story.id} {...story} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      )}
    </div>
  );
};

export default StoriesSidebar;
