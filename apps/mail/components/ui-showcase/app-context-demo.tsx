import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShowcaseSection } from './showcase-section';
import { Badge } from '@/components/ui/badge';

const appOnlyComponents = [
  {
    file: 'app-sidebar.tsx',
    title: 'App Sidebar',
    description: '邮箱主应用的完整侧边栏，组合了账号、连接、标签、账单等多个真实数据源。',
  },
  {
    file: 'ai-sidebar.tsx',
    title: 'AI Sidebar',
    description: 'AI 聊天侧边栏，依赖搜索状态、标签数据与全屏上下文，需在收件箱内使用。',
  },
  {
    file: 'nav-main.tsx',
    title: 'Nav Main',
    description: '主导航列表，依赖当前连接账号与实时标签统计数据。',
  },
  {
    file: 'nav-user.tsx',
    title: 'Nav User',
    description: '用户账户菜单，绑定当前登录账号、账单信息与多账号切换。',
  },
  {
    file: 'sidebar-labels.tsx',
    title: 'Sidebar Labels',
    description: '文件夹统计标签，需要真实的邮件统计与当前连接数据。',
  },
  {
    file: 'recursive-folder.tsx',
    title: 'Recursive Folder',
    description: '递归展开的文件夹/标签树，依赖标签搜索接口返回的真实层级数据。',
  },
  {
    file: 'recipient-autosuggest.tsx',
    title: 'Recipient Autosuggest',
    description: '收件人自动补全输入框，依赖联系人搜索接口的防抖查询。',
  },
  {
    file: 'pricing-dialog.tsx',
    title: 'Pricing Dialog',
    description: '订阅升级弹窗，依赖账单 Hook 中的真实计划与用量数据。',
  },
  {
    file: 'prompts-dialog.tsx',
    title: 'Prompts Dialog',
    description: 'AI 提示词管理弹窗，读写用户的真实提示词数据。',
  },
  {
    file: 'settings-content.tsx',
    title: 'Settings Layout Content',
    description: '设置页整体外壳，内部组合了 App Sidebar 与滚动区域，属于页面级布局。',
  },
];

export function AppContextDemo() {
  return (
    <ShowcaseSection
      id="app-context"
      title="依赖应用上下文的组件"
      description="以下组件深度依赖登录态、账号连接或后端实时数据，脱离真实收件箱环境直接渲染容易报错或展示无意义的空状态，因此这里仅做说明，不做单独实时演示。"
      componentNames={appOnlyComponents.map((c) => c.file)}
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {appOnlyComponents.map((item) => (
          <Card key={item.file} className="border-border/70 bg-background/50">
            <CardHeader className="gap-1.5 pb-2">
              <div className="flex items-center justify-between gap-2">
                <CardTitle className="text-sm">{item.title}</CardTitle>
                <Badge variant="outline" className="text-muted-foreground font-mono text-[10px]">
                  {item.file}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xs leading-relaxed">
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </ShowcaseSection>
  );
}
