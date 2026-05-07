# 动画演示

交互式可视化，直观理解数字 IC 设计中的关键概念。

## Clock Gate 毛刺问题

通过并排波形对比，直观展示锁存器方案如何消除门控时钟的毛刺。

- **简单 AND 门控**：EN 使能变化时产生毛刺，导致错误时钟脉冲
- **锁存 + AND 门控**：锁存器在时钟低电平期间保持 EN 稳定，输出干净门控时钟

<a href="https://wangxiayuan.github.io/claude-code-verilog/clock_gate_demo.html" target="_blank">查看演示</a>

## 桶形移位器 (Barrel Shifter)

展示基于 MUX 的多级移位网络结构，数据流经 3 级 MUX 完成任意位数的移位。

- **8 位输入** × **3 级 MUX**（×1, ×2, ×4） = 任意 0~7 位单周期移位
- 支持左移 / 右移、逻辑填充 / 算术符号扩展 / 循环移位

<a href="https://wangxiayuan.github.io/claude-code-verilog/barrel_shifter_demo.html" target="_blank">查看演示</a>
