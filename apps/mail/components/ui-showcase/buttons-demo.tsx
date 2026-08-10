import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Spinner } from '@/components/ui/spinner';
import { ShowcaseSection, ShowcaseTile } from './showcase-section';
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Mail } from 'lucide-react';

export function ButtonsDemo() {
  return (
    <ShowcaseSection
      id="buttons"
      title="Button / Toggle / Spinner"
      description="button.tsx · toggle.tsx · toggle-group.tsx · spinner.tsx"
    >
      <ShowcaseTile label="Button variants">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </ShowcaseTile>

      <ShowcaseTile label="Button sizes">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon" aria-label="Send email">
          <Mail />
        </Button>
      </ShowcaseTile>

      <ShowcaseTile label="Button states">
        <Button disabled>Disabled</Button>
        <Button disabled>
          <Spinner className="size-4" />
          Loading
        </Button>
      </ShowcaseTile>

      <ShowcaseTile label="Toggle">
        <Toggle aria-label="Toggle bold">
          <Bold />
        </Toggle>
        <Toggle aria-label="Toggle italic" defaultPressed>
          <Italic />
        </Toggle>
      </ShowcaseTile>

      <ShowcaseTile label="Toggle group">
        <ToggleGroup type="single" defaultValue="left">
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeft />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenter />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRight />
          </ToggleGroupItem>
        </ToggleGroup>
      </ShowcaseTile>

      <ShowcaseTile label="Spinner">
        <Spinner className="size-4" />
        <Spinner className="size-6" />
        <Spinner className="size-8" />
      </ShowcaseTile>
    </ShowcaseSection>
  );
}
