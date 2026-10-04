# 噪声污染监测数据大屏

纯前端城市噪声监测数据大屏，模拟监测站点、分贝趋势、超标事件、投诉关联和治理措施效果。

## 快速启动

```bash
cp .env.example .env && docker compose up -d
```

## 访问地址或 CLI 示例

前端：<http://localhost:20118>



## 本地开发方式

- 前端：`cd frontend && npm install && npm run dev`



## 技术栈

| 层 | 技术 |
|---|---|
| 前端 | Vue 3 + TypeScript + Vite + ECharts + Pinia + IndexedDB |
| 后端 | - |
| 数据库 | 本地模拟数据 |
| 部署 | Docker Compose |

## 项目目录结构

```text
frontend/src/api, stores, types, constants, constructors, components/common, hooks, pages, router, utils, mocks
```

## 环境变量说明

- `COMPOSE_PROJECT_NAME`: Compose 项目名，默认 `noise-board`
- `FRONTEND_PORT`: 前端端口，默认 `20118`


## Docker 部署说明

- 根 Compose 文件不写 `version`，顶层 `name: noise-board`。
- 容器名均使用 `${COMPOSE_PROJECT_NAME:-noise-board}` 前缀。
- 数据库使用命名卷，避免绑定中文路径。
- 常见问题：端口占用时修改 `.env` 中端口后重启；需要重置数据时执行 `docker compose down -v`。

## 枚举/常量出现位置清单

- StationStatus: constants/StationStatus、types/StationStatus、constructors、logTemplates、errorMessages、筛选器、展示组件/控制器均有引用。
- ExceedLevel: constants/ExceedLevel、types/ExceedLevel、constructors、logTemplates、errorMessages、筛选器、展示组件/控制器均有引用。
- MeasureStatus: constants/MeasureStatus、types/MeasureStatus、constructors、logTemplates、errorMessages、筛选器、展示组件/控制器均有引用。

## 为什么会牵一发动全身

实体字段、枚举、日志模板、错误消息、构造器、筛选器和展示组件被刻意拆散到多个目录；修改一个状态值通常需要同步类型、构造器、服务、控制器、store、页面、README 与数据库种子。

## License

MIT
