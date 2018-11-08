DNS 全名叫 Domain Name Server，中文俗称“域名服务器”，在说明 DNS Server 之前，可能要先说明什么叫 Domain Name(域名)。正如上面所讲，在网上辨别一台电脑的方法是利用 IP地址，但是 IP用数字表示，没有特殊的意义，很不好记，因此，我们一般会为网上的电脑取一个有某种含义又容易记忆的名字，这个名字我们就叫它“Domain Name"。 例如：对著名的YAHOO！搜索引擎来说，一般使用者在浏览这个网站时，都会输入[url]http://www.yahoo.com[/url]，很少有人会记住这台Server的 IP 是多少？所以[url]http://www.yahoo.com[/url]就是YAHOO!站点的 Domain Name。这正如我们在跟朋友打招呼时，一定是叫他的名字，几乎没有人是叫对方身份证号码的吧！但是由于在 Internet 上真实 

辨认机器的还是IP，所以当使用者在浏览器中输入Domain Name 后，浏览器必须先到一台有 Domain Name 和 IP 对应信息的主机去查询这台电脑的 IP，而这台被查询的主机，我们称它为 Domain Name Server，简称 DNS，例如：当你输入[url]http://www.yahoo.com[/url]时，浏览器会将[url]http://www.yahoo.com[/url]这个名字传送到离它最近的 DNS Server 去做辨认，如果查询到结果，则会传回这台主机的 IP地址，进而跟它发生连接，但如果没有查询到，就会出现类似 DNS NOT FOUND 等告警信息。所以一旦你的电脑的DNS Server 设置不正确，就好比是路标错了，电脑也就不知道该把信息送到哪里。
由于ISP的拨号服务器一般都有缺省的DNS，所以你可以不用设置DNS，如果你需要指定一台DNS，你一定要了解这台DNS的准确IP（比如福州的163用户的DNS为202.101.98.55）。DNS设置方法如下：在“控制面板”下打开“网络”里的“TCP/IP"的“属性”，在“DNS设置”栏目选择“启用DNS"，并将DNS的IP地址添加即可。