'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/ui/page-header';
import { ShowcaseSection, ShowcaseTile } from './showcase-section';
import { ChevronsUpDown } from 'lucide-react';

export function LayoutDemo() {
  return (
    <ShowcaseSection
      id="layout"
      title="Layout & navigation"
      description="accordion.tsx · tabs.tsx · collapsible.tsx · separator.tsx · scroll-area.tsx · resizable.tsx · page-header.tsx"
    >
      <ShowcaseTile label="Page header" className="w-full max-w-xl">
        <PageHeader title="Inbox" description="All your messages in one place" className="w-full" />
      </ShowcaseTile>

      <ShowcaseTile label="Accordion" className="max-w-sm">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Zero?</AccordionTrigger>
            <AccordionContent>An open-source email client built for speed.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it free?</AccordionTrigger>
            <AccordionContent>Yes, Zero is fully open source.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </ShowcaseTile>

      <ShowcaseTile label="Tabs" className="max-w-sm">
        <Tabs defaultValue="inbox" className="w-full">
          <TabsList>
            <TabsTrigger value="inbox">Inbox</TabsTrigger>
            <TabsTrigger value="sent">Sent</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
          </TabsList>
          <TabsContent value="inbox" className="text-sm text-muted-foreground">
            42 unread messages
          </TabsContent>
          <TabsContent value="sent" className="text-sm text-muted-foreground">
            128 sent messages
          </TabsContent>
          <TabsContent value="drafts" className="text-sm text-muted-foreground">
            3 drafts
          </TabsContent>
        </Tabs>
      </ShowcaseTile>

      <ShowcaseTile label="Collapsible" className="max-w-sm">
        <Collapsible className="w-full">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="flex w-full items-center justify-between">
              Advanced filters
              <ChevronsUpDown className="size-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2 text-sm text-muted-foreground">
            Filter by sender, date range, and label.
          </CollapsibleContent>
        </Collapsible>
      </ShowcaseTile>

      <ShowcaseTile label="Separator">
        <div className="flex w-full flex-col gap-3">
          <span className="text-sm">Above</span>
          <Separator />
          <span className="text-sm">Below</span>
        </div>
      </ShowcaseTile>

      <ShowcaseTile label="Scroll area" className="max-w-xs">
        <ScrollArea className="h-32 w-full rounded-md border border-border p-3">
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <span key={`scroll-message-${n}`}>Message #{n}</span>
            ))}
          </div>
        </ScrollArea>
      </ShowcaseTile>

      <ShowcaseTile label="Resizable panels" className="w-full max-w-xl">
        <ResizablePanelGroup direction="horizontal" className="h-32 w-full rounded-md border border-border">
          <ResizablePanel defaultSize={40} className="flex items-center justify-center text-sm text-muted-foreground">
            Folders
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={60} className="flex items-center justify-center text-sm text-muted-foreground">
            Message list
          </ResizablePanel>
        </ResizablePanelGroup>
      </ShowcaseTile>
    </ShowcaseSection>
  );
}
