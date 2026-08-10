'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { PricingSwitch } from '@/components/ui/pricing-switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Progress } from '@/components/ui/progress';
import { ShowcaseSection, ShowcaseTile } from './showcase-section';

export function FormControlsDemo() {
  const [progress] = useState(64);

  return (
    <ShowcaseSection
      id="form-controls"
      title="Form controls"
      description="input.tsx · textarea.tsx · label.tsx · checkbox.tsx · radio-group.tsx · switch.tsx · pricing-switch.tsx · select.tsx · input-otp.tsx · progress.tsx"
    >
      <ShowcaseTile label="Input & Label" className="max-w-xs">
        <div className="flex w-full flex-col gap-1.5">
          <Label htmlFor="showcase-email">Email</Label>
          <Input id="showcase-email" type="email" placeholder="you@example.com" />
        </div>
      </ShowcaseTile>

      <ShowcaseTile label="Textarea" className="max-w-xs">
        <Textarea placeholder="Write a message..." className="w-full" />
      </ShowcaseTile>

      <ShowcaseTile label="Checkbox">
        <div className="flex items-center gap-2">
          <Checkbox id="showcase-checkbox" defaultChecked />
          <Label htmlFor="showcase-checkbox">Accept terms</Label>
        </div>
      </ShowcaseTile>

      <ShowcaseTile label="Radio group">
        <RadioGroup defaultValue="inbox" className="gap-2">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="inbox" id="r-inbox" />
            <Label htmlFor="r-inbox">Inbox</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="sent" id="r-sent" />
            <Label htmlFor="r-sent">Sent</Label>
          </div>
        </RadioGroup>
      </ShowcaseTile>

      <ShowcaseTile label="Switch">
        <div className="flex items-center gap-2">
          <Switch id="showcase-switch" defaultChecked />
          <Label htmlFor="showcase-switch">Notifications</Label>
        </div>
      </ShowcaseTile>

      <ShowcaseTile label="Pricing switch">
        <PricingSwitch />
      </ShowcaseTile>

      <ShowcaseTile label="Select">
        <Select defaultValue="inbox">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Choose folder" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="inbox">Inbox</SelectItem>
            <SelectItem value="sent">Sent</SelectItem>
            <SelectItem value="drafts">Drafts</SelectItem>
            <SelectItem value="trash">Trash</SelectItem>
          </SelectContent>
        </Select>
      </ShowcaseTile>

      <ShowcaseTile label="Input OTP">
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </ShowcaseTile>

      <ShowcaseTile label="Progress" className="max-w-xs">
        <Progress value={progress} className="w-full" />
      </ShowcaseTile>
    </ShowcaseSection>
  );
}
