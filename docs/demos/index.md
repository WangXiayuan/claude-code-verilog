# 动画演示

交互式波形动画，直观理解数字 IC 设计中的关键概念。

## Clock Gate 毛刺问题

通过并排对比，直观展示锁存器方案如何消除门控时钟的毛刺。

- **简单 AND 门控**：EN 使能变化时产生毛刺，导致错误时钟脉冲
- **锁存 + AND 门控**：锁存器在时钟低电平期间保持 EN 稳定，输出干净门控时钟

[查看演示](https://wangxiayuan.github.io/claude-code-verilog/clock_gate_demo.html)
