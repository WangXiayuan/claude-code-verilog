# Claude Code 常用命令速查

记录日常使用中高频的 Claude Code 命令及场景说明。

## 基础命令

| 命令 | 说明 |
|------|------|
| `claude` | 启动 Claude Code 交互会话 |
| `claude "帮我做XXX"` | 直接传入需求，非交互模式 |
| `claude --version` | 查看版本号 |
| `claude --help` | 查看所有可用命令 |
| `Ctrl + C` | 中断当前生成或退出会话 |
| `exit` | 退出会话 |

## 会话内命令

| 命令 | 说明 |
|------|------|
| `/help` | 查看帮助信息 |
| `/clear` | 清除当前会话上下文 |
| `/compact` | 压缩会话内存，释放上下文窗口 |
| `/config` | 打开或修改配置 |
| `/init` | 为当前项目生成 CLAUDE.md |
| `/review` | 审查当前分支的未提交变更 |
| `/cost` | 查看当前会话消耗的 token |
| `/mcp` | 管理 MCP 服务器连接 |
| `/memory` | 查看已保存的记忆 |
| `/undo` | 撤销上一步操作 |

## 文件操作

| 操作 | 说明 |
|------|------|
| `@filename.v` | 引用项目中的文件，让 Claude 直接读取 |
| 拖拽文件到终端 | 等同于 @ 引用文件 |
| `/add-dir` | 将整个目录加入上下文 |

## Verilog 开发常用组合

```powershell
# 非交互模式：直接让 Claude 生成模块
claude "写一个 4bit 同步计数器，含 enable 和 reset，生成 counter.v"

# 引用已有文件并修改
claude "参考 @alu.v 的接口风格，写一个乘法器模块"

# 让 Claude 帮你跑仿真
claude "用 iverilog 编译 @rtl/counter.v 和 @tb/tb_counter.v，运行仿真并分析输出"
```

## 技巧备忘

- **附加文件**：需求中写明文件路径，Claude Code 会自动读取并理解上下文
- **分步建模**：复杂模块不要一次写完，先让 Claude 列方案，确认后再逐模块实现
- **编译/仿真一体化**：告诉 Claude 用 `iverilog` + `vvp` 跑仿真，出错信息直接贴回让它修
