'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { ShowcaseSection, ShowcaseTile } from './showcase-section';

export function OverlaysDemo() {
  return (
    <ShowcaseSection
      id="overlays"
      title="Overlays & menus"
      description="dialog.tsx · sheet.tsx · drawer.tsx · popover.tsx · tooltip.tsx · dropdown-menu.tsx · context-menu.tsx · command.tsx"
    >
      <ShowcaseTile label="Dialog">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete thread?</DialogTitle>
              <DialogDescription>This action cannot be undone.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button variant="destructive">Delete</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ShowcaseTile>

      <ShowcaseTile label="Sheet">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Thread details</SheetTitle>
              <SheetDescription>Quick preview panel.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </ShowcaseTile>

      <ShowcaseTile label="Drawer">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Move to folder</DrawerTitle>
              <DrawerDescription>Choose a destination folder.</DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </ShowcaseTile>

      <ShowcaseTile label="Popover">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent className="text-sm">Quick actions live here.</PopoverContent>
        </Popover>
      </ShowcaseTile>

      <ShowcaseTile label="Tooltip">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>Archive thread</TooltipContent>
        </Tooltip>
      </ShowcaseTile>

      <ShowcaseTile label="Dropdown menu">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Reply</DropdownMenuItem>
            <DropdownMenuItem>Forward</DropdownMenuItem>
            <DropdownMenuItem>Archive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ShowcaseTile>

      <ShowcaseTile label="Context menu">
        <ContextMenu>
          <ContextMenuTrigger className="flex h-16 w-full items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Mark as read</ContextMenuItem>
            <ContextMenuItem>Snooze</ContextMenuItem>
            <ContextMenuItem>Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </ShowcaseTile>

      <ShowcaseTile label="Command" className="max-w-xs">
        <Command className="w-full rounded-md border border-border">
          <CommandInput placeholder="Search commands..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Actions">
              <CommandItem>Compose email</CommandItem>
              <CommandItem>Search mail</CommandItem>
              <CommandItem>Go to settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </ShowcaseTile>
    </ShowcaseSection>
  );
}
