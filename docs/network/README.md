
# 网络

计算机网络的构成：两台或多台主机host（也称为端end)，和他们之间的连接（通信链路和分组交换机）。

* 通信链路（communication link）（公路）
  * 物理媒体
    * 同轴电缆
    * 铜线
    * 光纤
    * 无线电频谱
  * 传输速率 比特/秒（bit/s或bps）
* 分组交换机（packet switch）（立交桥）
  * 目标：转发packet
  * 设备
    * 路由器router，常用于核心网
    * 链路层交换机link-layer switch，常用于接入网

端到端发送数据时：

* 发送端将数据分段，并为每段加上首部字节，形成的信息包叫做分组（packet）；
* 到达目的端后再装配成初始数据。
* 一个packet从发送端到接收端经历的一系列链路和分组交换机称为路径（route或path）