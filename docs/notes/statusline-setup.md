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

### settings.json

```json
"statusLine": {
  "type": "command",
  "command": "bash ~/.claude/statusline.sh",
  "padding": 0
}
```

### statusline.sh（Bash 桥接脚本）

Claude Code 调用 bash 脚本，bash 再把控制权交给 Python（因为 Claude Code 传参用 stdin JSON，Python 处理更灵活）：

```bash
#!/bin/bash
PYTHON="/c/Users/<你的用户名>/AppData/Local/Programs/Python/Python312/python.exe"
exec "$PYTHON" "$HOME/.claude/statusline.py"
```

> `PYTHON` 路径需改成你本机的 Python 安装路径。

### statusline.py（核心逻辑）

```python
#!/usr/bin/env python3
"""Claude Code Status Line - displays folder, model, and context window usage."""
import json
import os
import sys

try:
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
except Exception:
    pass

try:
    data = json.load(sys.stdin)
except Exception:
    print("")
    sys.exit(0)

model = data.get("model", {}).get("display_name", "unknown")
workspace = data.get("workspace", {})
current_dir = workspace.get("current_dir", "")
folder = os.path.basename(current_dir.rstrip("\\/")) if current_dir else os.path.basename(os.getcwd())

ctx = data.get("context_window", {})
ctx_size = ctx.get("context_window_size") or 0
usage = ctx.get("current_usage") or {}

if ctx_size and usage:
    total = 0
    for k in ("input_tokens", "output_tokens", "cache_creation_input_tokens", "cache_read_input_tokens"):
        total += usage.get(k, 0) or 0
    pct = min(total * 100 // ctx_size, 100) if ctx_size > 0 else 0
    filled = pct // 10
    bar = "#" * filled + "." * (10 - filled)
    print(f"{folder}  |  {model}  |  [{bar}] {pct}%")
else:
    print(f"{folder}  |  {model}")
```

### 效果

状态栏最终显示：

```
claude-code-verilog  |  deepseek-v4-pro[1m]  |  [####......] 42%
```

三部分一目了然：**当前目录** | **模型名称** | **上下文使用进度条**

> **注意**：`command` 指向的脚本文件必须真实存在，否则状态栏空白。
