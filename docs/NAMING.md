# Vane 命名规范

- 产品名称与界面文案：`Vane`。
- 文件、目录、包名和协议命名空间：`vane`，例如 `vane-console.tsx`、`@vane/connector`、`vane.snapshot`。
- React 组件与类型中的产品名称：`Vane`，例如 `VaneConsole`、`useVaneWallet`。
- 环境变量前缀：`VANE_`。
- 钱包会话 Cookie：`vane_session`。
- REST 计费元数据字段：`vane`。
- 本机连接器命令：`vane-connector`。
- 默认数据库与 Docker Compose 项目名：`vane`。

仅维护上述规范名称。部署使用当前配置和迁移目录初始化数据库，不提供旧命名的配置读取、协议别名或迁移记录转换。
