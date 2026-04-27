# 配置 Claude Code 底部状态栏

Claude Code 终端底部可以显示自定义状态栏，实时展示模型信息、上下文用量、费用等。

## 快速配置

在 Claude Code 会话中直接输入自然语言即可自动生成：

```
/statusline 显示当前模型名称和上下文使用百分比，带进度条
```

系统会自动生成脚本并写入 `settings.json`，重启后生效。

## 删除状态栏

```
/statusline delete
```

## 手动配置

编辑 `~/.claude/settings.json`，添加 `statusLine` 字段：

```json
{
  "statusLine": {
    "type": "command",
    "command": "bash ~/.claude/statusline.sh",
    "padding": 2,
    "refreshInterval": 5
  }
}
```

| 参数 | 说明 |
|------|------|
| `type` | 固定 `"command"` |
| `command` | 执行的脚本路径或内联命令 |
| `padding` | 水平间距（字符数） |
| `refreshInterval` | 刷新间隔（秒），不设则在每次回复后刷新 |

## 常见展示内容

- 当前模型名称
- 上下文窗口使用量（百分比/进度条）
- 会话累计费用
- 会话持续时长
- Git 分支和状态
- Token 用量
- 后台子 agent 运行数量

## 社区现成方案

| 方案 | 安装命令 |
|------|----------|
| `cc-statusline` | `bunx @say8425/cc-statusline` |
| `claude-status-line` | `deno run jsr:@wyattjoh/claude-status-line` |
| `claude-bar` | `claude-bar` |
| `claude-powerline` | `npx @owloops/claude-powerline` |

## 我的配置

```json
"statusLine": {
  "type": "command",
  "command": "bash ~/.claude/statusline.sh",
  "padding": 0
}
```

> **注意**：`command` 指向的脚本文件（如 `~/.claude/statusline.sh`）必须真实存在，否则状态栏空白。建议用 `/statusline <自然语言描述>` 让系统自动生成。
