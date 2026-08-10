import { TextShimmer } from '@/components/ui/text-shimmer';
import { Envelop } from '@/components/ui/envelop';
import { ShowcaseSection, ShowcaseTile } from './showcase-section';

export function MiscDemo() {
  return (
    <ShowcaseSection
      id="misc"
      title="Misc"
      description="text-shimmer.tsx · envelop.tsx"
    >
      <ShowcaseTile label="Text shimmer">
        <TextShimmer className="text-sm font-medium">Syncing your inbox...</TextShimmer>
      </ShowcaseTile>

      <ShowcaseTile label="Envelop（装饰性信封插画）" className="block">
        <div className="h-[170px] w-[260px] overflow-hidden sm:h-[228px] sm:w-[342px]">
          <div className="origin-top-left scale-[0.57] sm:scale-75">
            <Envelop />
          </div>
        </div>
      </ShowcaseTile>
    </ShowcaseSection>
  );
}
