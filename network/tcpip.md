# TCP/IP协议族（互联网协议，Internet Protocol Suite，IPS）

互联网协议（英语：Internet Protocol Suite，缩写IPS）是一个网络通信模型，以及一整个网络传输协议家族，为互联网的基础通信架构。它常被通称为TCP/IP协议族（英语：TCP/IP Protocol Suite，或TCP/IP Protocols），简称TCP/IP。因为该协议家族的两个核心协议：TCP（传输控制协议）和IP（网际协议），为该家族中最早通过的标准。由于在网络通讯协议普遍采用分层的结构，当多个层次的协议共同工作时，类似计算机科学中的堆栈，因此又被称为TCP/IP协议栈（英语：TCP/IP Protocol Stack） 。这些协议最早发源于美国国防部（缩写为DoD）的ARPA网项目，因此也被称作DoD模型（DoD Model）。这个协议族由互联网工程任务组负责维护。

TCP/IP提供点对点的链接机制，将数据应该如何封装、定址、传输、路由以及在目的地如何接收，都加以标准化。它将软件通信过程抽象化为四个抽象层，采取协议堆栈的方式，分别实现出不同通信协议。协议族下的各种协议，依其功能不同，被分别归属到这四个层次结构之中，常被视为是简化的七层OSI模型。


1983年1月1日，在因特网的前身（ARPA网）中，TCP/IP取代旧的网络控制协议（NCP，Network Control Protocol），从而成为今天的互联网的基石。最早的TCP/IP由文顿·瑟夫和罗伯特·卡恩两位开发，慢慢地通过竞争战胜其他一些网络协议的方案，比如国际标准化组织ISO的OSI模型。TCP/IP的蓬勃发展发生在1990年代中期。当时一些重要而可靠的工具的出世，例如页面描述语言HTML和浏览器Mosaic，促成了互联网应用的飞速发展。 随着互联网的发展，目前流行的IPv4协议已经接近它的功能上限。IPv4最致命的两个缺陷在于：

地址只有32位，IP地址空间有限；
不支持服务质量（Quality of Service，QoS）的想法，无法管理带宽和优先级，故而不能很好的支持现今越来越多实时的语音和视频应用。因此IPv6浮出水面，用以取代IPv4。

TCP/IP成功的另一个因素在于对为数众多的低层协议的支持。这些低层协议对应OSI模型中的第一层（物理层）和第二层（数据链路层）。每层的所有协议几乎都有一半数量支持TCP/IP，例如：以太网（Ethernet）、令牌环（Token Ring）、光纤数据分布接口（FDDI）、点对点协议（PPP）、X.25、帧中继（Frame Relay）、ATM、Sonet、SDH等。


开发过程
在构建阿帕网先驱之后，DARPA开始其他数据传输技术的研究。NCP诞生后两年，1972年，罗伯特·卡恩（Robert E. Kahn）被DARPA的信息技术处理办公室雇佣，在那里他研究卫星数据包网络和地面无线数据包网络，并且意识到能够在它们之间沟通的价值。在1973年春天，已有的ARPANET网络控制程序（NCP）协议的开发者文顿·瑟夫（Vinton Cerf）加入到卡恩为ARPANET设计下一代协议而开发开放互连模型的工作中。到了1973年夏天，卡恩和瑟夫很快开发出一个基本的改进形式，其中的网络协议之间的差异通过使用一个公用互联网协议而隐藏起来，且可靠性由主机保证而不是ARPANET那样由网络保证。瑟夫称赞了Hubert Zimmerman和Louis Pouzin（CYCLADES网络的设计者）在这个设计上发挥重要影响。

由于网络的作用减少到最小的程度，更有可能将任何网络连接到一起，而不用管它们不同的特点，这样能解决卡恩最初的问题。一个流行的说法提到瑟夫和卡恩工作的最终产品TCP/IP将在运行“两个罐子和一根弦”上，实际上它已经用在信鸽上。一个称为网关（后来改为路由器以免与网关混淆）的计算机为每个网络提供一个接口并且在它们之间来回传输数据包。这个设计思想更细的形式由瑟夫在斯坦福的网络研究组的1973年–1974年期间开发出来。处于同一时期诞生PARC通用包协议组的施乐PARC早期网络研究工作也有着重要的技术影响；人们在两者之间摇摆不定。DARPA于是与BBN、斯坦福和伦敦大学签署协议开发不同硬件平台上协议的运行版本。有四个版本被开发出来——TCP v1、TCP v2、在1978年春天分成TCP v3和IP v3的版本，后来就是稳定的TCP/IP v4——目前因特网仍然使用的标准协议。

1975年，两个网络之间的TCP/IP通信在斯坦福和伦敦大学（UCL）之间进行测试。1977年11月，三个网络之间的TCP/IP测试在美国、英国和挪威之间进行。在1978年到1983年间，其他一些TCP/IP原型在多个研究中心之间开发出来。ARPANET完全转换到TCP/IP在1983年1月1日发生。1984年，美国国防部将TCP/IP作为所有计算机网络的标准。1985年，因特网架构理事会举行一个三天有250家厂商代表参加的关于计算产业使用TCP/IP的工作会议，帮助协议的推广并且引领它日渐增长的商业应用。

2005年9月9日卡恩和瑟夫由于他们对于美国文化做出的卓越贡献被授予总统自由勋章。

TCP/IP协议栈组成
整个通信网络的任务，可以划分成不同的功能区块，即所谓的层级（layer）。用于互联网的协议可以比照TCP/IP参考模型进行分类。TCP/IP协议栈起始于第三层协议IP（网际协议）。所有这些协议都在相应的RFC文档中讨论及标准化。重要的协议在相应的RFC文档中均标记状态：“必须”（required），“推荐”（recommended），“可选”（selective）。其他的协议还可能有“试验”（experimental）或“历史”（historic）的状态。”

必须协议
所有的TCP/IP应用都必须实现IP和ICMP。对于一个路由器（router）而言，有这两个协议就可以运作，虽然从应用的角度来看，这样一个路由器意义不大。实际的路由器一般还需要运行许多“推荐”使用的协议，以及一些其他的协议。 几乎所有连接到互联网上的计算机上都存在的IPv4协议出生在1981年，今天的版本和最早的版本并没有多少改变。升级版IPv6的工作始于1995年，目的在于取代IPv4。ICMP协议主要用于收集有关网络的信息查找错误等工作。

范例：不同计算机运行的不同协议
一个简单的路由器上可能会实现ARP，IP，ICMP，UDP，SNMP，RIP。
WWW用户端使用ARP，IP，ICMP，UDP，TCP，DNS，HTTP，FTP。
一台用户计算机上还会运行如TELNET，SMTP，POP3，SNMP，ECHO，DHCP，SSH，NNTP。
无盘设备可能会在固件，比如ROM中实现ARP，IP，ICMP，UDP，BOOTP，TFTP（均为面向数据包的协议，实现起来相对简单）。


TCP/IP参考模型
TCP/IP参考模型是一个抽象的分层模型，这个模型中，所有的TCP/IP系列网络协议都被归类到4个抽象的"层"中。每一抽象层创建在低一层提供的服务上，并且为高一层提供服务。 完成一些特定的任务需要众多的协议协同工作，这些协议分布在参考模型的不同层中的，因此有时称它们为一个协议栈。
TCP/IP参考模型为TCP/IP协议栈订身制作。
其中IP协议只关心如何使得数据能够跨越本地网络边界的问题，而不关心如何利用传输媒体，数据如何传输。整个TCP/IP协议栈则负责解决数据如何通过许许多多个点对点通路（一个点对点通路，也称为一"跳", 1 hop）顺利传输，由此不同的网络成员能够在许多"跳"的基础上创建相互的数据通路。 如想分析更普遍的网络通信问题，ISO的OSI模型也能起更好的帮助作用。
因特网协议族是一组实现支持因特网和大多数商业网络运行的协议栈的网络传输协议。它有时也被称为TCP/IP协议组，这个名称来源于其中两个最重要的协议：传输控制协议（TCP）和因特网协议（IP），它们也是最先定义的两个协议。 同许多其他协议一样网络传输协议也可以看作一个多层组合，每层解决数据传输中的一组问题并且向使用这些低层服务的高层提供定义好的服务。高层逻辑上与用户更为接近，所处理数据更为抽象，它们依赖于低层将数据转换成最终能够进行实体控制的形式。 网络传输协议能够大致匹配到一些厂商喜欢使用的固定7层的OSI模型。然而这些层并非都能够很好地与基于ip的网络对应（根据应用的设计和支持网络的不同它们确实是涉及到不同的层）并且一些人认为试图将因特网协议组对应到OSI会带来混淆而不是有所帮助。

因特网协议栈中的层
人们已经进行一些讨论关于如何将TCP/IP参考模型映射到OSI模型。由于TCP/IP和OSI模型组不能精确地匹配，还没有一个完全正确的答案。 另外，OSI模型下层还不具备能够真正占据真正层的位置的能力；在传输层和网络层之间还需要另外一个层（网络互连层）。特定网络类型专用的一些协议应该运行在网络层上，但是却运行在基本的硬件帧交换上。类似协议的例子有地址解析协议和生成树协议（用来保持冗余网桥的空闲状态直到真正需要它们）。然而，它们是本地协议并且在网络互连功能下面运行。不可否认，将两个组（更不用说它们只是运行在如ICMP等不同的互连网络协议上的逻辑上的网络层的一部分）整个放在同一层会引起混淆，但是OSI模型还没有复杂到能够做更好的工作。 下面的图表试图显示不同的TCP/IP和其他的协议在最初OSI模型中的位置：

* 7应用层application layer 例如HTTP、SMTP、SNMP、FTP、Telnet、SIP、SSH、NFS、RTSP、XMPP、Whois、ENRP
* 6	表示层presentation layer	例如XDR、ASN.1、SMB、AFP、NCP
* 5	会话层session layer	例如ASAP、SSH、ISO 8327 / CCITT X.225、RPC、NetBIOS、ASP、IGMP、Winsock、BSD sockets
* 4	传输层transport layer	例如TCP、UDP、TLS、RTP、SCTP、SPX、ATP、IL
* 3	网络层network layer	例如IP、ICMP、IPX、BGP、OSPF、RIP、IGRP、EIGRP、ARP、RARP、X.25
* 2	数据链路层data link layer	例如以太网、令牌环、HDLC、帧中继、ISDN、ATM、IEEE 802.11、FDDI、PPP
* 1	物理层physical layer	例如线路、无线电、光纤

通常人们认为OSI模型的最上面三层（应用层、表示层和会话层）在TCP/IP组中是一个应用层。由于TCP/IP有一个相对较弱的会话层，由TCP和RTP下的打开和关闭连接组成，并且在TCP和UDP下的各种应用提供不同的端口号，这些功能能够被单个的应用程序（或者那些应用程序所使用的库）增加。与此相似的是，IP是按照将它下面的网络当作一个黑盒子的思想设计的，这样在讨论TCP/IP的时候就可以把它当作一个独立的层。

* 4	应用层application layer	例如HTTP、FTP、DNS（如BGP和RIP这样的路由协议，尽管由于各种各样的原因它们分别运行在TCP和UDP上，仍然可以将它们看作网络层的一部分）
* 3	传输层transport layer	例如TCP、UDP、RTP、SCTP（如OSPF这样的路由协议，尽管运行在IP上也可以看作是网络层的一部分）
* 2	网络互连层internet layer	对于TCP/IP来说这是因特网协议（IP）（如ICMP和IGMP这样的必须协议尽管运行在IP上，也仍然可以看作是网络互连层的一部分；ARP不运行在IP上）
* 1	网络接口层link layer	例如以太网、Wi-Fi、MPLS等。


应用层
该层包括所有和应用程序协同工作，利用基础网络交换应用程序专用的数据的协议。 应用层是大多数普通与网络相关的程序为了通过网络与其他程序通信所使用的层。这个层的处理过程是应用特有的；数据从网络相关的程序以这种应用内部使用的格式进行传送，然后被编码成标准协议的格式。

一些特定的程序被认为运行在这个层上。它们提供服务直接支持用户应用。这些程序和它们对应的协议包括HTTP（万维网服务）、FTP（文件传输）、SMTP（电子邮件）、SSH（安全远程登陆）、DNS（名称<-> IP地址寻找）以及许多其他协议。 一旦从应用程序来的数据被编码成一个标准的应用层协议，它将被传送到IP栈的下一层。

在传输层，应用程序最常用的是TCP或者UDP，并且服务器应用程序经常与一个公开的端口号相联系。服务器应用程序的端口由互联网号码分配局（IANA）正式地分配，但是现今一些新协议的开发者经常选择它们自己的端口号。由于在同一个系统上很少超过少数几个的服务器应用，端口冲突引起的问题很少。应用软件通常也允许用户强制性地指定端口号作为运行参数。

链接外部的客户端程序通常使用系统分配的一个随机端口号。监听一个端口并且通过服务器将那个端口发送到应用的另外一个副本以创建对等链接（如IRC上的dcc文件传输）的应用也可以使用一个随机端口，但是应用程序通常允许定义一个特定的端口范围的规范以允许端口能够通过实现网络地址转换（NAT）的路由器映射到内部。

每一个应用层（TCP/IP参考模型的最高层）协议一般都会使用到两个传输层协议之一： 面向连接的TCP传输控制协议和无连接的包传输的UDP用户数据报文协议。 常用的应用层协议有：

运行在TCP协议上的协议：
* HTTP（Hypertext Transfer Protocol，超文本传输协议），主要用于普通浏览。
* HTTPS（Hypertext Transfer Protocol over Secure Socket Layer, or HTTP over SSL，安全超文本传输协议）,HTTP协议的安全版本。
* FTP（File Transfer Protocol，文件传输协议），由名知义，用于文件传输。
* POP3（Post Office Protocol, version 3，邮局协议），收邮件用。
* SMTP（Simple Mail Transfer Protocol，简单邮件传输协议），用来发送电子邮件。
* TELNET（Teletype over the Network，网络电传），通过一个终端（terminal）登陆到网络。
* SSH（Secure Shell，用于替代安全性差的TELNET），用于加密安全登陆用。

运行在UDP协议上的协议：
* BOOTP（Boot Protocol，启动协议），应用于无盘设备。
* NTP（Network Time Protocol，网络时间协议），用于网络同步。
* DHCP（Dynamic Host Configuration Protocol，动态主机配置协议），动态配置IP地址。

其他：
* DNS（Domain Name Service，域名服务），用于完成地址查找，邮件转发等工作（运行在TCP和UDP协议上）。
* ECHO（Echo Protocol，回绕协议），用于查错及测量应答时间（运行在TCP和UDP协议上）。
* SNMP（Simple Network Management Protocol，简单网络管理协议），用于网络信息的收集和网络管理。
* ARP（Address Resolution Protocol，地址解析协议），用于动态解析以太网硬件的地址。


传输层
传输层（transport layer）的协议，能够解决诸如端到端可靠性（“数据是否已经到达目的地？”）和保证数据按照正确的顺序到达这样的问题。在TCP/IP协议组中，传输协议也包括所给数据应该送给哪个应用程序。 在TCP/IP协议组中技术上位于这个层的动态路由协议通常被认为是网络层的一部分；一个例子就是OSPF（IP协议89）。 TCP（IP协议6）是一个“可靠的”、面向链接的传输机制，它提供一种可靠的字节流保证数据完整、无损并且按顺序到达。TCP尽量连续不断地测试网络的负载并且控制发送数据的速度以避免网络过载。另外，TCP试图将数据按照规定的顺序发送。这是它与UDP不同之处，这在实时数据流或者路由高网络层丢失率应用的时候可能成为一个缺陷。 较新的SCTP也是一个“可靠的”、面向链接的传输机制。它是面向纪录而不是面向字节的，它在一个单独的链接上提供通过多路复用提供的多个子流。它也提供多路自寻址支持，其中链接终端能够被多个IP地址表示（代表多个实体接口），这样的话即使其中一个连接失败了也不中断。它最初是为电话应用开发的（在IP上传输SS7），但是也可以用于其他的应用。 UDP（IP协议号17）是一个无链接的数据报协议。它是一个“尽力传递”（best effort）或者说“不可靠”协议——不是因为它特别不可靠，而是因为它不检查数据包是否已经到达目的地，并且不保证它们按顺序到达。如果一个应用程序需要这些特性，那它必须自行检测和判断，或者使用TCP协议。 UDP的典型性应用是如流媒体（音频和视频等）这样按时到达比可靠性更重要的应用，或者如DNS查找这样的简单查询／响应应用，如果创建可靠的链接所作的额外工作将是不成比例地大。 DCCP目前正由IEFT开发。它提供TCP流动控制语义，但对于用户来说保留UDP的数据报服务模型。 TCP和UDP都用来支持一些高层的应用。任何给定网络地址的应用通过它们的TCP或者UDP端口号区分。根据惯例使一些大众所知的端口与特定的应用相联系。 RTP是为如音频和视频流这样的实时数据设计的数据报协议。RTP是使用UDP包格式作为基础的会话层，然而据说它位于因特网协议栈的传输层。

网络互连层
TCP/IP协议族中的网络互连层（internet layer）在OSI模型中叫做网络层（network layer）。

正如最初所定义的，网络层解决在一个单一网络上传输数据包的问题。类似的协议有X.25和ARPANET的Host/IMP Protocol。 随着因特网思想的出现，在这个层上添加附加的功能，也就是将数据从源网络传输到目的网络。这就牵涉到在网络组成的网上选择路径将数据包传输，也就是因特网。 在因特网协议组中，IP完成数据从源发送到目的的基本任务。IP能够承载多种不同的高层协议的数据；这些协议使用一个唯一的IP协议号进行标识。ICMP和IGMP分别是1和2。 一些IP承载的协议，如ICMP（用来发送关于IP发送的诊断信息）和IGMP（用来管理多播数据），它们位于IP层之上但是完成网络层的功能，这表明因特网和OSI模型之间的不兼容性。所有的路由协议，如BGP、OSPF、和RIP实际上也是网络层的一部分，尽管它们似乎应该属于更高的协议栈。

网络接口层
网络接口层实际上并不是因特网协议组中的一部分，但是它是数据包从一个设备的网络层传输到另外一个设备的网络层的方法。这个过程能够在网卡的软件驱动程序中控制，也可以在韧体或者专用芯片中控制。这将完成如添加报头准备发送、通过实体介质实际发送这样一些数据链路功能。另一端，链路层将完成数据帧接收、去除报头并且将接收到的包传到网络层。 然而，链路层并不经常这样简单。它也可能是一个虚拟专有网络（VPN）或者隧道，在这里从网络层来的包使用隧道协议和其他（或者同样的）协议组发送而不是发送到实体的接口上。VPN和信道通常预先建好，并且它们有一些直接发送到实体接口所没有的特殊特点（例如，它可以加密经过它的数据）。由于现在链路“层”是一个完整的网络，这种协议组的递归使用可能引起混淆。但是它是一个实现常见复杂功能的一个优秀方法。（尽管需要注意预防一个已经封装并且经隧道发送下去的数据包进行再次地封装和发送）。

IP网络如何并吞竞争的网络
在长期的发展过程中，IP逐渐取代其他网络。这里是一个简单的解释。IP传输通用数据。数据能够用于任何目的，并且能够很轻易地取代以前由专有数据网络传输的数据。下面是一个普通的过程：

一个用于特定目的所开发出来的网络。如果它顺利工作，用户将能使用它。
为了提供便利的IP服务，经常用于访问电子邮件或者聊天，通常以某种方式通过专有网络隧道实现。隧道方式最初可能非常没有效率，因为电子邮件和聊天只需要很低的带宽。
通过一点点的投资IP基础设施逐渐在专有数据网络周边出现。
用IP取代专有服务的需求出现，经常是一个用户要求。
IP替代品过程遍布整个因特网，这使IP替代品比最初的专有网络更加有价值（由于网络效应）。
专有网络受到压制。许多用户开始维护使用IP替代品的复制品。
IP包的间接开销很小，少于1%，这样在成本上非常有竞争性。人们开发一种能够将IP带到专有网络上的大部分用户的不昂贵的传输介质。
大多数用户为了削减开销，专有网络被取消。
实现
KA9Q PPJ
lwIP
如今，大多数商业操作系统包括TCP/IP栈并且缺省安装它们，对于大多数用户来说，没有必要去探求它们如何实现。TCP/IP包含在所有的商业Unix和Linux发布包中，同样也包含在Mac OS X和微软视窗和视窗服务器版本中。
