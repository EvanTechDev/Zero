import { BadgesAvatarsDemo } from '@/components/ui-showcase/badges-avatars-demo';
import { AppContextDemo } from '@/components/ui-showcase/app-context-demo';
import { OverlaysDemo } from '@/components/ui-showcase/overlays-demo';
import { FeedbackDemo } from '@/components/ui-showcase/feedback-demo';
import { SidebarDemo } from '@/components/ui-showcase/sidebar-demo';
import { ButtonsDemo } from '@/components/ui-showcase/buttons-demo';
import { LayoutDemo } from '@/components/ui-showcase/layout-demo';
import { TooltipProvider } from '@/components/ui/tooltip';
import { FormDemo } from '@/components/ui-showcase/form-demo';
import { DataDemo } from '@/components/ui-showcase/data-demo';
import { MiscDemo } from '@/components/ui-showcase/misc-demo';
import {
  FormControlsDemo,
} from '@/components/ui-showcase/form-controls-demo';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

const jumpLinks = [
  { id: 'buttons', label: '按钮与切换' },
  { id: 'badges-avatars', label: '徽章与头像' },
  { id: 'form-controls', label: '表单控件' },
  { id: 'form', label: '表单验证' },
  { id: 'overlays', label: '弹出层' },
  { id: 'feedback', label: '状态反馈' },
  { id: 'layout', label: '导航布局' },
  { id: 'data', label: '数据展示' },
  { id: 'sidebar', label: '侧边栏' },
  { id: 'misc', label: '装饰效果' },
  { id: 'app-context', label: '应用专属' },
];

export default function UiShowcasePage() {
  return (
    <TooltipProvider>
      <div className="bg-background text-foreground min-h-screen w-full">
        <header className="border-border/70 bg-background/95 sticky top-0 z-20 border-b backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <h1 className="font-sans text-lg font-semibold tracking-tight">
                  Zero 组件展示台
                </h1>
                <p className="text-muted-foreground text-xs">
                  apps/mail/components/ui 目录下全部组件的统一样式预览
                </p>
              </div>
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  返回首页
                </Button>
              </Link>
            </div>
            <nav className="horizontal-fade-mask -mx-1 flex gap-1.5 pb-1">
              {jumpLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-muted-foreground hover:bg-accent hover:text-accent-foreground shrink-0 rounded-full border border-transparent px-3 py-1.5 text-xs font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6">
          <ButtonsDemo />
          <BadgesAvatarsDemo />
          <FormControlsDemo />
          <FormDemo />
          <OverlaysDemo />
          <FeedbackDemo />
          <LayoutDemo />
          <DataDemo />
          <SidebarDemo />
          <MiscDemo />
          <AppContextDemo />
        </main>

        <footer className="border-border/70 border-t py-8">
          <p className="text-muted-foreground mx-auto max-w-6xl px-4 text-center text-xs sm:px-6">
            共展示 apps/mail/components/ui 目录下的 57 个组件文件，其余组件也在页面上以说明卡片列出。
          </p>
        </footer>
      </div>
    </TooltipProvider>
  );
}
