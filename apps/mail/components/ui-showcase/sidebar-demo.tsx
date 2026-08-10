import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar';
import { SidebarToggle } from '@/components/ui/sidebar-toggle';
import { ShowcaseSection, ShowcaseTile } from './showcase-section';
import { Archive, Inbox, Send, Trash2 } from 'lucide-react';

const items = [
  { title: '收件箱', icon: Inbox },
  { title: '已发送', icon: Send },
  { title: '已归档', icon: Archive },
  { title: '回收站', icon: Trash2 },
];

export function SidebarDemo() {
  return (
    <ShowcaseSection
      id="sidebar"
      title="侧边栏"
      description="sidebar.tsx、sidebar-toggle.tsx —— 可折叠的侧边导航栏骨架（独立 SidebarProvider 演示，与真实应用状态隔离）。"
      componentNames={['sidebar.tsx', 'sidebar-toggle.tsx']}
    >
      <ShowcaseTile label="Sidebar + Sidebar Toggle" className="block">
        <div
          className="border-border relative h-[360px] w-full overflow-hidden rounded-lg border"
          style={{ transform: 'translateZ(0)' }}
        >
          <SidebarProvider
            style={{ '--sidebar-width': '14rem', minHeight: '360px' } as React.CSSProperties}
          >
            <Sidebar collapsible="icon">
              <SidebarHeader>
                <span className="px-2 text-sm font-semibold">Zero</span>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>文件夹</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton>
                            <item.icon />
                            <span>{item.title}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                <span className="text-muted-foreground px-2 text-xs">v1.0.0</span>
              </SidebarFooter>
            </Sidebar>
            <SidebarInset className="bg-background">
              <div className="flex items-center gap-2 border-b p-3">
                <SidebarToggle />
                <span className="text-sm font-medium">收件箱</span>
              </div>
              <div className="text-muted-foreground p-4 text-sm">
                点击左上角图标可折叠 / 展开侧边栏。
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </ShowcaseTile>
    </ShowcaseSection>
  );
}
