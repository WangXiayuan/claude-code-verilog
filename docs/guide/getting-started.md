# 快速开始

本指南帮助你从零搭建 Claude Code + Verilog 开发环境。

## 环境要求

- **Claude Code**：通过 npm 安装的命令行 AI 编程助手
- **大模型**：选择模型提供商（Anthropic 官方 / DeepSeek / 其他兼容 Anthropic API 的服务）
- **Verilog 仿真工具**：Icarus Verilog (iverilog) 或 ModelSim/QuestaSim
- **波形查看**：GTKWave（配合 Icarus）
- **可选**：Vivado/Quartus（用于 FPGA 综合）

## 安装 Claude Code CLI

Claude Code 是 Anthropic 的命令行 AI 编程助手，支持在终端中直接协作。

```powershell
# 通过 npm 安装
npm install -g @anthropic-ai/claude-code

# 验证安装
claude --version
```

## 配置大模型（以 DeepSeek 为例）

Claude Code 支持对接第三方模型。以下以 DeepSeek 为例，仅需将 `YOUR API Key` 替换为你的 DeepSeek API Key，然后整段复制到 **PowerShell** 终端执行即可：

```powershell
# 创建配置目录
mkdir -Force $env:USERPROFILE\.claude

# 创建并写入配置文件（一行命令完成）
@'
{
  "primaryApiKey": "sk-dummy-key-placeholder",
  "permissions": {
    "defaultMode": "bypassPermissions"
  },
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "YOUR API Key",
    "ANTHROPIC_BASE_URL": "https://api.deepseek.com/anthropic",
    "ANTHROPIC_MODEL": "deepseek-v4-pro[1m]",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "deepseek-v4-pro[1m]",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "deepseek-v4-pro[1m]",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "deepseek-v4-flash",
    "CLAUDE_CODE_SUBAGENT_MODEL": "deepseek-v4-flash",
    "CLAUDE_CODE_EFFORT_LEVEL": "max"
  }
}
'@ | Out-File -FilePath $env:USERPROFILE\.claude\settings.json -Encoding utf8
```

配置完成后重新启动 Claude Code 即可使用 DeepSeek 模型。

> **关于 `primaryApiKey` 和 `bypassPermissions`**：使用第三方模型时，没有 Anthropic 账号，Claude Code 启动会要求登录。设置 `"primaryApiKey": "sk-dummy-key-placeholder"` 配合 `"defaultMode": "bypassPermissions"` 可以跳过登录步骤，直接进入命令行使用。API 请求实际走的是下方 `env` 中配置的 DeepSeek 服务。

> **提示**：`ANTHROPIC_BASE_URL` 指向兼容 Anthropic API 格式的代理地址。如需使用其他模型提供商（如 OpenAI 兼容接口），替换对应的 `ANTHROPIC_BASE_URL` 和 `ANTHROPIC_MODEL` 即可。

## 安装 Icarus Verilog（开源仿真）

**Windows (MSYS2)**：
```powershell
pacman -S mingw-w64-x86_64-iverilog mingw-w64-x86_64-gtkwave
```

**macOS**：
```powershell
brew install icarus-verilog gtkwave
```

**Linux**：
```powershell
sudo apt install iverilog gtkwave
```

## 验证环境

创建一个简单的测试模块验证环境是否就绪：

```verilog
// hello.v
module hello;
  initial begin
    $display("Hello from Verilog!");
    $finish;
  end
endmodule
```

```powershell
iverilog -o hello.vvp hello.v
vvp hello.vvp
# 应输出: Hello from Verilog!
```

## 第一次在 Claude Code 中编写 Verilog

在 Claude Code 会话中，直接描述需求即可。例如：

> 帮我写一个 4 位计数器模块，带异步复位和使能信号

Claude Code 会生成完整的 `.v` 文件，你可以直接在终端中让它帮你仿真验证。
