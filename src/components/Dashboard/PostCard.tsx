import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Globe,
  Users2,
  MoreHorizontal,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  MapPin,
  Image as ImageIcon // Renamed Image to ImageIcon
} from 'lucide-react';

interface User {
  name: string;
  avatarUrl: string;
  profileUrl: string;
}

interface Media {
  type: 'image' | 'video' | 'map';
  source: string;
  alt: string;
}

interface LocationInfo {
  name: string;
  details?: string;
}

export interface PostProps {
  id: string;
  user: User;
  timestamp: string;
  privacy: 'public' | 'friends' | 'only_me';
  content: string;
  media?: Media;
  location?: LocationInfo;
  socialContext?: string;
  likes: number;
  comments: number;
  shares: number;
  className?: string;
}

const PostCard: React.FC<PostProps> = ({
  user,
  timestamp,
  privacy,
  content,
  media,
  location,
  socialContext,
  likes,
  comments,
  shares,
  className,
}) => {
  const PrivacyIcon = privacy === 'public' ? Globe : Users2;

  return (
    <Card className={cn('w-full shadow-sm', className)}>
      <CardHeader className="p-4">
        <div className="flex items-start space-x-3">
          <a href={user.profileUrl}>
            <Avatar>
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          </a>
          <div className="flex-grow">
            <a href={user.profileUrl} className="font-semibold text-primary-text hover:underline">
              {user.name}
            </a>
            {location && media?.type === 'map' && (
                <span className="text-sm text-secondary-text"> is in <a href="#" className="font-medium text-primary-text hover:underline">{location.name}</a></span>
            )}
            <div className="flex items-center space-x-1 text-xs text-secondary-text">
              <span>{timestamp}</span>
              <span>·</span>
              <PrivacyIcon className="h-3 w-3" />
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-secondary-text">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Save post</DropdownMenuItem>
              <DropdownMenuItem>Hide post</DropdownMenuItem>
              <DropdownMenuItem>Report post</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="px-4 pb-0 pt-0">
        <p className="text-primary-text mb-2 whitespace-pre-wrap">{content}</p>
        {media && media.type === 'image' && (
          <div className="my-2 -mx-4"> {/* Negative margin to make image flush with card borders if desired */} 
            <img src={media.source} alt={media.alt} className="w-full h-auto max-h-[500px] object-cover" />
          </div>
        )}
        {media && media.type === 'map' && location && (
          <div className="my-2 -mx-4 relative">
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              {/* Placeholder for map image. In a real app, this would be an embedded map or map tile image. */}
              <MapPin className="h-16 w-16 text-gray-400 dark:text-gray-500" /> 
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-3 absolute bottom-0 left-0 right-0">
                <h4 className="font-semibold text-primary-text">{location.name}</h4>
                {location.details && <p className="text-sm text-secondary-text">{location.details}</p>}
                {socialContext && <p className="text-xs text-secondary-text mt-1">{socialContext}</p>}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 flex flex-col items-stretch">
        {(likes > 0 || comments > 0 || shares > 0) && (
          <div className="flex justify-between items-center text-sm text-secondary-text mb-2 pt-2 border-t border-border">
            <span>{likes > 0 ? `${likes} Likes` : ''}</span>
            <div className="space-x-2">
              <span>{comments > 0 ? `${comments} Comments` : ''}</span>
              <span>{shares > 0 ? `${shares} Shares` : ''}</span>
            </div>
          </div>
        )}
        <div className="flex justify-around items-center pt-2 border-t border-border">
          <Button variant="ghost" className="text-secondary-text hover:bg-gray-100 dark:hover:bg-gray-700 flex-1">
            <ThumbsUp className="h-5 w-5 mr-1.5" /> Like
          </Button>
          <Button variant="ghost" className="text-secondary-text hover:bg-gray-100 dark:hover:bg-gray-700 flex-1">
            <MessageSquare className="h-5 w-5 mr-1.5" /> Comment
          </Button>
          <Button variant="ghost" className="text-secondary-text hover:bg-gray-100 dark:hover:bg-gray-700 flex-1">
            <Share2 className="h-5 w-5 mr-1.5" /> Share
          </Button>
          {media?.type === 'map' && (
             <Button variant="ghost" className="text-secondary-text hover:bg-gray-100 dark:hover:bg-gray-700 flex-1">
                <Bookmark className="h-5 w-5 mr-1.5" /> Save
             </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
