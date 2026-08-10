import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BimiAvatar } from '@/components/ui/bimi-avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { ShowcaseSection, ShowcaseTile } from './showcase-section';

export function BadgesAvatarsDemo() {
  return (
    <ShowcaseSection
      id="badges-avatars"
      title="Badge / Avatar / Skeleton"
      description="badge.tsx · avatar.tsx · bimi-avatar.tsx · skeleton.tsx"
    >
      <ShowcaseTile label="Badge variants">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </ShowcaseTile>

      <ShowcaseTile label="Avatar">
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User avatar" />
          <AvatarFallback>ZR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>V0</AvatarFallback>
        </Avatar>
      </ShowcaseTile>

      <ShowcaseTile label="Bimi avatar (sender logo)">
        <BimiAvatar email="founders@vercel.com" name="Vercel" />
        <BimiAvatar email="hello@example.com" name="Example" />
      </ShowcaseTile>

      <ShowcaseTile label="Skeleton">
        <div className="flex items-center gap-3">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
      </ShowcaseTile>
    </ShowcaseSection>
  );
}
