# My Homepage - 现代化个人主页

一个基于 Vue 3 + Vite + Tailwind CSS 构建的现代化单页应用，采用全屏滚动设计和毛玻璃效果，提供流畅的用户体验。
![shortcut.png](shortcut.png)

## ✨ 特性

- 🚀 **极速开发** - 基于 Vite 构建，支持热模块替换（HMR）
- 🎨 **现代设计** - 采用 Tailwind CSS，毛玻璃效果和渐变动画
- 📱 **响应式布局** - 完美适配桌面端和移动端设备
- 🎯 **整页滚动** - 使用 CSS Scroll Snap 实现平滑的全屏滚动体验
- 🌈 **动态背景** - 支持页面切换时的渐隐渐出过渡效果
- 🧩 **组件化** - 模块化组件设计，易于维护和扩展
- ⚡ **高性能** - 优化的渲染性能和动画效果

## 🛠️ 技术栈

### 核心框架
- **Vue 3.5+** - 渐进式 JavaScript 框架，使用 Composition API
- **Vue Router 5.0+** - 官方路由管理器
- **Vite 8.0+** - 下一代前端构建工具

### 样式方案
- **Tailwind CSS 3.4+** - 实用优先的 CSS 框架
- **PostCSS** - CSS 后处理器
- **Autoprefixer** - CSS 浏览器前缀自动添加

## 🚀 快速开始

### 环境要求

- Node.js >= 16.x
- npm >= 8.x 或 yarn >= 1.22.x

### 安装依赖
```bash
npm install
```
### 开发模式

启动本地开发服务器（支持热更新）：

```bash
npm run dev
```

访问 http://localhost:5173 查看应用

### 生产构建

构建生产版本：
```bash
npm run build
```

## 📖 核心功能说明

### 1. 整页滚动系统

- 使用 CSS `scroll-snap` 属性实现强制分页滚动
- 支持鼠标滚轮、触摸滑动和点击指示器导航
- 防抖处理确保流畅的滚动体验
- 右侧圆点指示器显示当前位置

### 2. 动态背景切换

- 不同页面可配置不同的背景（图片或渐变）
- 页面切换时自动执行渐隐渐出动画
- 背景层独立于内容层，使用固定定位

### 3. 顶部导航栏

- 滚动时自动显示毛玻璃效果背景
- 支持下拉菜单展示子导航项
- 响应式设计，移动端自适应
- 平滑的悬停和过渡动画

### 4. 首页分屏内容

| 屏序 | 组件 | 内容说明 |
|------|------|----------|
| 第1屏 | HeroSection | 主标题、描述、核心指标、CTA按钮 |
| 第2屏 | FeatureSection | 功能特性卡片展示 |
| 第3屏 | StatsSection | 数据统计和图表 |
| 第4屏 | TestimonialSection | 用户评价和案例 |
| 第5屏 | CtaSection | 行动号召区域 |
| 第6屏 | SiteFooter | 联系信息和二维码 |

## 🎨 自定义配置

### 修改主题色

编辑 `tailwind.config.js`：
```javascript
theme: {
    extend: {
        colors: {
            primary: "#7c3aed", // 主色调（紫色）
            secondary: "#06b6d4", // 辅助色（青色）
            dark: "#0b1020", // 深色背景
        }
    }
}
```
### 更换背景图片

在 `Home.vue` 中修改 `backgroundConfig` 数组：

```javascript
const backgroundConfig = [
    {type: 'image', src: '/img/your-bg-1.jpg', alt: '背景1'},
    {type: 'default'}, // 使用默认渐变背景 
// ...
]
```

### 添加新页面

1. 在 `src/views/` 创建新页面组件
2. 在 `src/router/index.js` 添加路由配置
3. 如需加入滚动系统，在 `Home.vue` 中添加新的 `<section>`

## 🔧 开发规范

### 组件命名
- 使用 PascalCase 命名（如 `SiteHeader.vue`）
- 组件文件名与组件名保持一致

### 样式编写
- 优先使用 Tailwind 工具类
- 复杂样式使用 `<style scoped>` 局部样式
- 遵循 BEM 命名规范（如需自定义类名）

### 路由管理
- 非首页路由建议使用懒加载
- 路由路径使用小写加连字符格式