import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserPlus, X, Users } from 'lucide-react';

interface GroupSuggestion {
  id: string;
  name: string;
  memberCount: number;
  coverImageUrl: string;
  category?: string;
  mutualFriends?: number;
  groupAvatars?: string[];
}

interface SuggestedGroupCardProps extends GroupSuggestion {
  onJoin: (id: string) => void;
  onDismiss: (id: string) => void;
}

const SuggestedGroupCard: React.FC<SuggestedGroupCardProps> = ({
  id,
  name,
  memberCount,
  coverImageUrl,
  category,
  groupAvatars,
  onJoin,
  onDismiss,
}) => {
  return (
    <Card className="overflow-hidden shadow-sm relative">
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute top-1 right-1 h-6 w-6 rounded-full bg-black/30 hover:bg-black/50 text-white z-10"
        onClick={() => onDismiss(id)}
        aria-label="Dismiss suggestion"
      >
        <X className="h-4 w-4" />
      </Button>
      <CardHeader className="p-0 relative h-24"> {/* Adjusted height for cover image */}
        <img src={coverImageUrl} alt={`${name} cover`} className="w-full h-full object-cover" />
        {groupAvatars && groupAvatars.length > 0 && (
          <div className="absolute bottom-2 left-2 flex -space-x-2">
            {groupAvatars.slice(0, 5).map((avatarUrl, index) => (
              <Avatar key={index} className="h-6 w-6 border-2 border-card">
                <AvatarImage src={avatarUrl} />
                <AvatarFallback>{index + 1}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent className="p-3">
        <h3 className="font-semibold text-sm text-primary-text hover:underline cursor-pointer truncate" title={name}>{name}</h3>
        {category && <p className="text-xs text-secondary-text mb-1">{category}</p>}
        <p className="text-xs text-secondary-text flex items-center">
          <Users className="h-3 w-3 mr-1" />
          {memberCount.toLocaleString()} members
        </p>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <Button variant="outline" size="sm" className="w-full text-primary hover:bg-secondary" onClick={() => onJoin(id)}>
          <UserPlus className="h-4 w-4 mr-1.5" /> Join Group
        </Button>
      </CardFooter>
    </Card>
  );
};

const SuggestedGroups: React.FC = () => {
  const [groups, setGroups] = React.useState<GroupSuggestion[]>([
    {
      id: '1',
      name: 'Mad Men (MADdicts)',
      memberCount: 6195,
      coverImageUrl: 'https://picsum.photos/seed/madmen/300/100',
      category: 'TV Show Fan Club',
      groupAvatars: [
        'https://i.pravatar.cc/24?u=member1',
        'https://i.pravatar.cc/24?u=member2',
        'https://i.pravatar.cc/24?u=member3',
        'https://i.pravatar.cc/24?u=member4',
        'https://i.pravatar.cc/24?u=member5',
        'https://i.pravatar.cc/24?u=member6',
      ]
    },
    {
      id: '2',
      name: 'Dexter Morgan Fans World',
      memberCount: 6984,
      coverImageUrl: 'https://picsum.photos/seed/dexter/300/100',
      category: 'TV Show Fan Club',
      groupAvatars: [
        'https://i.pravatar.cc/24?u=memberA',
        'https://i.pravatar.cc/24?u=memberB',
        'https://i.pravatar.cc/24?u=memberC',
      ]
    },
    {
      id: '3',
      name: 'React Developers Community',
      memberCount: 125032,
      coverImageUrl: 'https://picsum.photos/seed/reactdev/300/100',
      category: 'Technology',
      groupAvatars: [
        'https://i.pravatar.cc/24?u=dev1',
        'https://i.pravatar.cc/24?u=dev2',
      ]
    },
  ]);

  const handleJoinGroup = (id: string) => {
    console.log(`Joined group ${id}`);
    // Potentially update UI or make API call
  };

  const handleDismissGroup = (id: string) => {
    setGroups(prevGroups => prevGroups.filter(group => group.id !== id));
  };

  return (
    <div className="py-4 space-y-3">
      <div className="flex justify-between items-center px-1">
        <h2 className="text-md font-semibold text-primary-text">Suggested Groups</h2>
        <Button variant="link" size="sm" className="text-xs text-accent-blue p-0 h-auto">
          See All
        </Button>
      </div>
      <div className="space-y-3">
        {groups.map((group) => (
          <SuggestedGroupCard 
            key={group.id} 
            {...group} 
            onJoin={handleJoinGroup} 
            onDismiss={handleDismissGroup} 
          />
        ))}
      </div>
    </div>
  );
};

export default SuggestedGroups;
