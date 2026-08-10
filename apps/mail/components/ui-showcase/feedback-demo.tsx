'use client';

import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ShowcaseSection, ShowcaseTile } from './showcase-section';
import { AlertCircle, Info } from 'lucide-react';

export function FeedbackDemo() {
  return (
    <ShowcaseSection
      id="feedback"
      title="Alerts & toasts"
      description="alert.tsx · toast.tsx (sonner)"
    >
      <ShowcaseTile label="Alert" className="max-w-sm">
        <Alert className="w-full">
          <Info className="size-4" />
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>You have 3 unread messages in Inbox.</AlertDescription>
        </Alert>
      </ShowcaseTile>

      <ShowcaseTile label="Destructive alert" className="max-w-sm">
        <Alert variant="destructive" className="w-full">
          <AlertCircle className="size-4" />
          <AlertTitle>Sync failed</AlertTitle>
          <AlertDescription>We couldn&apos;t sync your mailbox. Try again.</AlertDescription>
        </Alert>
      </ShowcaseTile>

      <ShowcaseTile label="Toast triggers">
        <Button variant="outline" onClick={() => toast('Draft saved')}>
          Default toast
        </Button>
        <Button variant="outline" onClick={() => toast.success('Email sent')}>
          Success toast
        </Button>
        <Button variant="outline" onClick={() => toast.error('Failed to send email')}>
          Error toast
        </Button>
      </ShowcaseTile>
    </ShowcaseSection>
  );
}
