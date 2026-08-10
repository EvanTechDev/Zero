'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { ShowcaseSection, ShowcaseTile } from './showcase-section';

const schema = z.object({
  displayName: z.string().min(2, 'Must be at least 2 characters'),
});

export function FormDemo() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { displayName: '' },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    toast.success(`Saved display name: ${values.displayName}`);
  }

  return (
    <ShowcaseSection
      id="form"
      title="Form (react-hook-form + zod)"
      description="form.tsx"
    >
      <ShowcaseTile label="Validated form" className="max-w-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-4">
            <FormField
              control={form.control}
              name="displayName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Display name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} />
                  </FormControl>
                  <FormDescription>Shown to other Zero users.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="self-start">
              Save
            </Button>
          </form>
        </Form>
      </ShowcaseTile>
    </ShowcaseSection>
  );
}
