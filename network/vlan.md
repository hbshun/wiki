# 虚拟局域网 Virtual LAN(VLAN)

VLAN是一种建构于局域网交换技术（LAN Switch）的网络管理的技术，网管人员可以借此透过控制交换机有效分派出入局域网的数据包到正确的出入端口，达到对不同实体局域网中的设备进行逻辑分群（Grouping）管理，并降低局域网内大量数据流通时，因无用数据包过多导致拥塞的问题，以及提升局域网的信息安全保障。

概述
为实现交换机以太网络的广播隔离，一种理想的解决方案就是采用虚拟局域网技术。这种对连接到第2层交换机端口的网络用户的逻辑分段技术实现非常灵活，它可以不受用户物理位置限制，根据用户需求进行VLAN划分；可在一个交换机上实现，也可跨交换机实现；可以根据网络用户的位置、作用、部门或根据使用的应用程序、上层协议或者以太网连接端口硬件地址来进行划分。

一个VLAN相当于OSI模型第2层的广播域，它能将广播控制在一个VLAN内部。而不同VLAN之间或VLAN与LAN / WAN的数据通信必须通过第3层（网络层）完成。否则，即便是同一交换机上的连接端口，假如它们不处于同一个VLAN，正常情况下也无法进行数据通信，特例是由于某著名厂商生产的交换机带有VLAN穿越漏洞，外来数据包以广播进到该交换机时，它仍然会流入所有连至交换机上的计算机，而导致信息可能外泄的潜藏风险。

为了解决上述信息安全议题，1995年IEEE 802委员会发表了802.1Q VLAN技术的实现标准与讯框结构，希望能透过设置逻辑地址（TPID、TCI），对实体局域网区隔成独立虚拟网段，以规范数据包广播时的最大范围。

## VLAN的作用

* 广播控制
* 带宽利用
* 降低延迟
* 安全性（非设计作用，本身功能所附加出的）


## VLAN的运作原理与实现方式

### 物理层（physical layer）
直接以交换机上的端口做为划分VLAN的基础。这个方式的优点是简单与直观，因此，运用这种设置VLAN的情况十分普遍。但因为是物理层的设置，所以比较适合在规模不大的组织。

### 数据链接层（data link layer）
以每台主机的MAC地址做为划分VLAN的基础。方法是先创建一个比较复杂的数据库，通常为某网络设备的MAC地址与VLAN的映射关系数据库。当该网络设备连接到端口后，交换机会向VMPS（VLAN管理策略服务器）来请求这个数据库。找到相应映射关系，完成端口到VLAN的分配。

这个方式的优点是即使计算机在实体上的位置不同，也不影响VLAN的运作。但缺点是网管人员必须在交换机中设置组织内每一台设备MAC地址与VLAN间的映射关系数据库。因此，这种设置策略的管理复杂度会随着越来越多的设备、与实体位置的群落、和不同工作任务需要而增加。

### 网络层（network layer）
以每台设备的IP地址做为划分VLAN的基础，以子网视为VLAN设置的依据。

这个方式的优点是当网管人员已经将内部网段做好规划与分配的情况下，将可大辐降低网管人员规划并设置VLANs架构的复杂度。但缺点是原本传统交换机不需要对讯框作任何处理，但在这个机制下，交换机不但必须剖析讯框（Frame），还必须进一步取出Source IP与Destination IP进行比对，连带降低交换机接收与分派数据包的效率。
