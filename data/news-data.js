var posts_content = [
    {
        title: "网络犯罪分子正通过互联网扫描窃取用户在线暴露的虚拟钱包",
        imgSrc: "http://hackernews.cc/wp-content/uploads/2017/04/2017041723-150x113.png",
        content: "HackerNews.cc 11 月 24 日消息，网络安全专家 Didier Stevens 于近期（比特币价格从 7,000 美元升至 8000 美元时）在其蜜罐中发现黑客正进行一项扫描活动，旨在检测在线暴露的比特币钱包后不断提出访问请求，从而试图获取钱包加密货币。这种情况极其罕见，其首次发生于 2013 年比特币价格第一次升涨时期。",
        headImgSrc:"http://hackernews.cc/wp-content/uploads/2017/04/2017041723-150x113.png",
        detail: "HackerNews.cc 11 月 24 日消息，网络安全专家 Didier Stevens 于近期（比特币价格从 7,000 美元升至 8000 美元时）在其蜜罐中发现黑客正进行一项扫描活动，旨在检测在线暴露的比特币钱包后不断提出访问请求，从而试图获取钱包加密货币。这种情况极其罕见，其首次发生于 2013 年比特币价格第一次升涨时期。\n黑客们除了比特币外也会将其他加密货币作为探索目标，比如以太坊（Ethereum）。研究人员 Dimitrios Slamaris 就于近期发现黑客在本地公开的 Ethereum 节点向目标 JSON-RPC 接口发出调用请求，命令系统将用户资金转移至攻击者钱包。随后，网络安全中心 Johannes Ullrich 发现两个 IP 地址通过上述请求扫描用户加密钱包:\n216[.]158[.]238[.]186 – Interserver Inc .(新泽西托管公司)\n46[.]166[.]148[.]120 – NFOrce Entertainment BV(Durch托管公司)\n目前，如果您正在使用/运行 Ethereum 节点，那么请确保该节点未被监听查询，因为此类操作都是非常简单的 HTTP 请求，它们不受同源策略的保护，很容易被黑客利用 Javascript 窃取信息。研究人员提醒用户/管理员尽快在其服务器上禁用 JSON-RPC 接口的入站查询或代理请求，以便系统只筛选已批准的客户设备。\n\n消息来源：securityaffairs.co，译者：青楚\n本文由 HackerNews.cc 翻译整理，封面来源于网络。\n原文链接：http://hackernews.cc/archives/17253",
        postId: 0,
    },
    {
      title: "新勒索软件 Scarab 变种已通过僵尸网络 Necurs 感染全球数百万用户设备",
        imgSrc: "http://hackernews.cc/wp-content/uploads/2017/03/2017322-20-150x113.jpg",
        content: "据外媒 11 月 25 日报道，网络安全公司 F- Secure 和 Forcepoint 研究人员于本周五发现新勒索软件 Scarab 变种正通过僵尸网络 Necurs 向数百万用户发起大规模垃圾邮件活动。目前，黑客仅在短短几个小时内就已发出 1250 万封垃圾邮件。",
        headImgSrc:"http://hackernews.cc/wp-content/uploads/2017/03/2017322-20-150x113.jpg",
        detail: "僵尸网络 Necurs 是全球垃圾邮件最大的 “发送者” 之一，其每月可感染逾 600 万受害主机，并诱导用户打开附件后在线下载恶意软件。此外，Necurs 在过去数月内推动了多款恶意软件的传播，其中包括 Locky、JAFF、GlobeImposter、Dridex 和 Trickbot。\n知情人士透露，勒索软件 Scarab 于今年 6 月由安全专家 Michael Gillespie 率先发现，其代码主要根据勒索软件的开源验证编写而成。调查显示，黑客在此次攻击活动中主要通过租用的僵尸网络将附带 Scarab 的电子邮件伪装成以 Lexmark 、HP 、Canon 、Epson 为主题的扫描档案发送至目标邮箱，并在用户打开后感染受害系统。随后，研究人员发现该电子邮件附带的 7 份 Zip 文件包含一个 Visual Basic 脚本，可充当 dropper 木马感染目标设备。此外，他们还通过 ID- Ransomware 服务针对受害系统进行了一系列检测并清楚的看出 Scarab 每日感染数量。\n近期，研究人员发现黑客所使用的变体还可以利用 “[suupport@protonmail.com]. scarab” 扩展加密目标用户原始文件名后删除文件，从而使其无法自行恢复。如果用户想要还原文件，则需通过邮件恶意软件或 BitMessage 联系 Scarab 幕后黑手支付赎金。\n\n消息来源：securityaffairs.co，译者：青楚\n本文由 HackerNews.cc 翻译整理，封面来源于网络。\n原文链接:http://hackernews.cc/archives/17248",
        postId: 1,
    },
    {
      title: "Imgur 证实：2014 年受黑客攻击，逾 170 万账号信息遭窃",
      imgSrc: "http://hackernews.cc/wp-content/uploads/2017/02/hacking-computer.jpg",
      content: "全球知名图片分享网站 Imgur 近日承认 2014 年受到黑客攻击，170 万包含邮箱地址和密码的账户信息被窃取。Imgur 表示由于网站并不需要用户提交真实姓名、地址或者手机号码，因此被窃取的信息中并不包含私人信息。",
      headImgSrc:"http://hackernews.cc/wp-content/uploads/2017/02/hacking-computer.jpg",
      detail: "全球知名图片分享网站 Imgur 近日承认 2014 年受到黑客攻击，170 万包含邮箱地址和密码的账户信息被窃取。Imgur 表示由于网站并不需要用户提交真实姓名、地址或者手机号码，因此被窃取的信息中并不包含私人信息。\n知情人士透露，在过去的四年时间始终没有引起媒体和用户的注意，直到近期黑客将被窃取的数据发送给 Troy Hunt。Hunt 负责运行和维护数据被窃通知服务 Have I Been Pwned。\n在感恩节当天，他向 Imgur 公司发出提醒。随后公司立即发布公告，要求受影响用户账号尽快重新更改密码。Hunt 表示：“在美国感恩节期间我发现了 Imgur 的账号被窃情况，公司在不到 24 小时内做出快速反应的行为是值得称赞的。”\n\n稿源：cnBeta，封面源自网络；\n原文链接:http://hackernews.cc/archives/17238",
        postId: 2,
    }
  ,
    {
      title: "2017 上半年 DDoS 攻击数量倍增，罪魁祸首竟然是它？",
      imgSrc: "http://hackernews.cc/wp-content/uploads/2016/10/WechatIMG42.jpeg",
      content: "网络安全公司 Corero 于近期发布一份报告，宣称 2017 上半年的 DDoS 攻击数量增加一倍，起因竟是各企业及用户所使用的不安全物联网（IoT）设备。据称，只要用户设备在线联网，其拒绝服务（DDoS）攻击就将存在。倘若企业依赖互联网销售产品或协作，那么 DDoS 攻击不仅仅是一个麻烦，更将影响企业后续发展。",
      headImgSrc: "http://hackernews.cc/wp-content/uploads/2016/10/WechatIMG42.jpeg",
      detail: "在过去数年内，DDoS 攻击的数量在 “猫捉老鼠” 的演变过程中呈缓慢趋势增长，即犯罪分子一旦加强攻击，其网络供应商就会进行弹性防御。然而，此类攻击一般都来自被感染的计算机和服务器组成的僵尸网络。不过，由于在僵尸网络中获取和维护这些系统的成本相对较高，因此在攻击发展的速度方面存在经济限制。\n但是，僵尸网络 Mirai 的开发人员就很 “聪明”， 并未针对安全团队或安全设施开展攻击，而是把重点瞄准数百万家用物联网设备，例如利用网络摄像头与互联网路由器构建僵尸网络开展 DDoS 攻击。由于 Mirai 无需任何安全措施检测，因此它能在肆意感染的同时发起比以往更大的攻击活动。\n根据 Arbor Networks 2016 年年底的报告显示，物联网设备已然成为 DDoS 攻击来源。到目前为止，这些大规模的攻击还未利用反射/放大技术展开。相关数据显示，DDoS 攻击的数量在 2015 年显著上升，其攻击的平均规模和时间也在不断增加。由卡巴斯基 2016 年第四季度 DDoS 情报报告得知，DDoS 攻击持续时间最长为 292 小时（或 12.2 天），明显长于上一季度（ 184 小时或 7.7 天），创下 2016 年的纪录。\n研究人员表示，目标企业现平均每天遭受 8 次 DDoS 攻击，均由不安全物联网设备和 DDoS 出租服务导致。虽然大规模的 DDoS 攻击正得到媒体关注，但这只是攻击的一小部分。然而，最令人感兴趣的是，2017 年第二季度发生的第五次 DDoS 攻击使用了多种媒介进行，旨在规避安全软件检测。目前，只需要每小时 20 美元，任何黑客都可采用僵尸网络针对目标企业发动攻击。此外，网络犯罪分子已经将 DDoS 攻击作为一项有利可图的开发项目，这就意味着拒绝服务攻击的活动仍将继续。\n\n消息来源：securityaffairs.co ，译者：青楚\n本文由 HackerNews.cc 翻译整理，封面来源于网络。\n原文链接:http://hackernews.cc/archives/17238",
      postId: 3,
    },
    {
      title: "Google 可在 Android 用户禁用位置服务时收集设备位置信息",
      imgSrc: "http://hackernews.cc/wp-content/uploads/2017/02/u14610930151789319295fm21gp0-150x112.jpg",
      content: "许多用户意识到智能手机可以跟踪他们的位置，即便用户主动关闭位置服务，没有使用任何应用程序，甚至没有插入运营商 SIM 卡等预防措施，也不能阻止运行 Android 操作系统的手机收集用户位置数据，并在连接到互联网时将其发送回 Google。",
      headImgSrc: "http://hackernews.cc/wp-content/uploads/2017/02/u14610930151789319295fm21gp0-150x112.jpg",
      detail: "许多用户意识到智能手机可以跟踪他们的位置，即便用户主动关闭位置服务，没有使用任何应用程序，甚至没有插入运营商 SIM 卡等预防措施，也不能阻止运行 Android 操作系统的手机收集用户位置数据，并在连接到互联网时将其发送回 Google。\n自 2017 年初以来，Android 手机一直在收集附近蜂窝塔的地址（即使在停用位置服务时），并将这些数据发送回 Google。其结果是，谷歌和其母公司字母公司可以访问有关个人的位置和他们的运动数据，远远超出了消费者的合理隐私期望。Google 现今承认的确存在这种做法。根据谷歌发言人的说法，在过去 11 个月里，谷歌用来管理 Android 手机上推送通知和消息的系统中包含了手机地址。不过，这些信息从未被使用，也没有被储存起来，公司现在正在采取措施，终止这种做法。该公司表示，到 11 月底，Android 手机将不再向 Google 发送手机定位数据，但是，至少作为该特定服务的一部分，消费者无法禁用这一功能。Google 发言人在一封电子邮件中表示：“今年一月，我们开始考虑使用 Cell ID 代码作为进一步提高消息传递速度和性能的额外信号。 但我们从未将 Cell ID 纳入我们的网络同步系统，因此数据立即被丢弃。此外，我们已经更新服务，它不再请求 Cell ID。”\n\n稿源：cnBeta，封面源自网络；\n原文链接:http://hackernews.cc/archives/17128",
      postId: 4,
    },
    {
      title: "韩国多家银行表示：iPhone X 的 Face ID 安全暂无法令人完全信服",
      imgSrc: "http://hackernews.cc/wp-content/uploads/2017/04/Cover040703-210x160.jpeg",
      content: "有别于 Android 平台容易被照片欺骗的情况，苹果在 iPhone X 上装备的 Face ID 面部识别技术装备了卓越的算法配合 True Depth 摄像头，是比指纹解锁更安全的生物识别解决方案。不过，Face ID 并未得到银行业的认同。援引韩国媒体 The Korea Herald 表示，韩国境内的多家银行均表示不完全信任 Face ID。",
      headImgSrc: "http://hackernews.cc/wp-content/uploads/2017/04/Cover040703-210x160.jpeg",
      detail: "有别于 Android 平台容易被照片欺骗的情况，苹果在 iPhone X 上装备的 Face ID 面部识别技术装备了卓越的算法配合 True Depth 摄像头，是比指纹解锁更安全的生物识别解决方案。不过，Face ID 并未得到银行业的认同。援引韩国媒体 The Korea Herald 表示，韩国境内的多家银行均表示不完全信任 Face ID。\n根据报道，包括 Kakao Bank 和 K-Bank 的线上银行和类似于 Kookmin Bank、Shinhan、IBK、Busan 和 NH 等传统商业银行均对 Face ID 不完全信任。一名 Kookmin 银行官员表示：“在推进和部署新技术之前我们需要充足的时间进行安全审查，目前 iPhone X 所提供的面部识别技术并不能提供足够高的安全等级，因此现阶段我们不会部署这项生物技术。”\n\n稿源：cnBeta，封面源自网络；\n原文链接:http://hackernews.cc/archives/17091",
      postId: 5,
    },
    {
      title: "英国专家警示：无人驾驶汽车或将成为黑客下一个目标",
      imgSrc: "http://hackernews.cc/wp-content/uploads/2016/10/WechatIMG29.jpeg",
      content: "英国安全专家发出警告称，从无人驾驶汽车引入英国时起，它们就面临着遭受黑客入侵的危险。提交给英国众议院的证据表明，无人驾驶汽车需要联网，这意味着它们可能成为黑客的目标。埃克塞特大学无人驾驶汽车领域一位保险专家 Matthew Channon 写信给议员警告无人驾驶汽车发生交通事故的危险性。",
      headImgSrc: "http://hackernews.cc/wp-content/uploads/2016/10/WechatIMG29.jpeg",
      detail: "英国安全专家发出警告称，从无人驾驶汽车引入英国时起，它们就面临着遭受黑客入侵的危险。提交给英国众议院的证据表明，无人驾驶汽车需要联网，这意味着它们可能成为黑客的目标。埃克塞特大学无人驾驶汽车领域一位保险专家 Matthew Channon 写信给议员警告无人驾驶汽车发生交通事故的危险性。\n技术专家们也认同，没有驾驶员的联网无人驾驶汽车处于风险中，此前在美国就发生了黑客入侵无人驾驶汽车事件。可能会有恐怖分子欺骗自动驾驶汽车前方没有障碍物并远程关闭它们的刹车系统。在写给议会的信件中，Channon 先生称：“这是尚未被写入法案的一项重大问题，而且可能危及公众安全。考虑到黑客可能同时入侵多辆无人驾驶汽车，这一风险是真实存在的，事实上，由于无人驾驶汽车需要联网的特性，它已经成为黑客的目标。”\n据英国 RAC 研究分析公司的数据，接近三分之二的道路死亡是由驾驶员操作失误或者来不及做出反应造成的，而无人驾驶汽车技术就是为了减少这类交通事故。据专家称，目前部分汽车制造商正计划为家庭汽车创建互联网络，其主要目的也是提升驾驶安全。无人驾驶卡车预计也将在明年上路测试，无人驾驶客车将通过头车无线操控倒车和加速。英国运输部已经委托行业专家进行一项可行性研究，其中就包含了网络攻击的风险。\nChannon 称：“由于无人驾驶汽车将共享信息，如果有一辆汽车遭到入侵，那么其它汽车也可能被入侵。我已经与许多技术专家探讨了黑客入侵的保险成本，我认为这将是一个潜在的问题。黑客能够欺骗无人驾驶汽车使其认定前方的障碍物并不存在，这样它们就不会停车。如果这种情况发生在高速路的快车道上，它就会导致多车连续相撞事故。然而，虽然这类危险发生的可能性并不高，但是会引起人们对恐怖分子入侵无人驾驶汽车的担忧，他们可能将无人驾驶汽车作为攻击武器。\n2015 年有两位美国黑客 Charlie Miller 和 Chris Valasek 宣称成功入侵一辆丰田普锐斯的刹车系统。5 年前，华盛顿大学和加利福尼亚大学圣地亚哥分校的研究人员进行了入侵测试后宣称，有可能让数百万辆使用他们研发的计算机系统的汽车和卡车刹车失灵。英国华威大学的网络安全专家 Hugh Boyes 称：“我们已经投入大量的努力追踪自动驾驶汽车的网络安全问题，但目前的软件和系统具有一定的不可靠性，能够被黑客利用。”理论上来说，黑客已经证实无人驾驶汽车能够被侵入。无人驾驶汽车行业已经尝试降低这种风险，但是我们也无法确保这种情况永远都不会发生。\n汽车制造商已经在研发 5 级全自动驾驶（由无人驾驶系统完成全部驾驶操作）汽车原型。专家们称，理论上这种汽车的传感器能够被入侵，让它们无法探测到前方的障碍物。它们的速度传感器也能够被入侵，让它们突然加速，但是专家认为最可能的是无人驾驶汽车刹车系统被关闭。如果人们忘记进行关键的安全软件升级，也会让无人驾驶汽车更容易受到黑客攻击。\n\n稿源：cnBeta、网易科技，封面源自网络；\n原文链接:http://hackernews.cc/archives/16844",
      postId: 6,
    },
    {
      title: "安全研究：谷歌揭示网络钓鱼威胁要比数据泄露严重得多",
      imgSrc: "http://hackernews.cc/wp-content/uploads/2017/04/2017040826-210x160.png",
      content: "谷歌近期公布了一份长达一年的 Gmail 账户劫持调查的结果，发现网络钓鱼对用户的风险要比数据泄露的风险要大得多，因为他们收集了更多的信息。现在，几乎每周都有新数据泄露事件被发现，如果说受害者在多个网上账户上使用相同的用户名和密码，那么他们的账户很容易就被劫持。",
      headImgSrc: "http://hackernews.cc/wp-content/uploads/2017/04/2017040826-210x160.png",
      detail: "谷歌近期公布了一份长达一年的 Gmail 账户劫持调查的结果，发现网络钓鱼对用户的风险要比数据泄露的风险要大得多，因为他们收集了更多的信息。现在，几乎每周都有新数据泄露事件被发现，如果说受害者在多个网上账户上使用相同的用户名和密码，那么他们的账户很容易就被劫持。\n虽然说数据泄露对互联网用户来说是个坏消息，但谷歌的研究发现，网络钓鱼对其用户来说，要比用户劫持事件的威胁要大得多。为此，谷歌还专门访问了几个私人黑客论坛。而结果显示，目前全球有 19 亿人受到了数据泄露的影响。像一些交友网站的用户，他们的绝大部分的资料都会在一些私人论坛上被交易。尽管数量巨大，但在数据泄露事件中，只有 7％ 的凭据与其目前正在被使用的，数十亿 Gmail 用户使用的密码相匹配，而钓鱼攻击中暴露的凭证中，有四分之一与当前的谷歌密码相匹配。\n研究还发现，网络钓鱼的受害者比随机的谷歌用户更有可能被劫持的机率高 400 倍，而这一数字对于数据泄露的受害者来说是 10 倍。这样的数据都证明了网络钓鱼网站的威胁到底有多大。就拿 Phishing 工具包来说，它包含了用于流行和有价值站点的预先打包的虚假登录页面，如Gmail、Yahoo、Hotmail 和在线银行。他们经常被上载到受损的网站，并自动将捕获的凭证发送到攻击者的帐户中。网络钓鱼套件会产生更高的帐户劫持率，因为它们捕获了谷歌在用户登录时用于风险评估的详细信息，例如受害者的地理位置，秘密问题，电话号码和设备标识符等等。\n研究人员发现，10000 个网络钓鱼工具中有 83％ 会收集受害者的地理位置，18％ 会收集电话号码。相比之下，只有不到 0.1％ 的键盘记录器会收集手机细节和秘密问题。基于最后一次登录的地理位置，有 41％ 的网络钓鱼工具包用户来自尼日利亚，这些工具包用于接收被dao qu 了凭证的 Gmail 帐户。而美国的网络钓鱼攻击工具用户排名第二，占 11％ 。\n研究人员发现，10000 个网络钓鱼工具中有 83％ 会收集受害者的地理位置，18％ 会收集电话号码。相比之下，只有不到 0.1％ 的键盘记录器会收集手机细节和秘密问题。基于最后一次登录的地理位置，有 41％ 的网络钓鱼工具包用户来自尼日利亚，这些工具包用于接收被dao qu 了凭证的 Gmail 帐户。而美国的网络钓鱼攻击工具用户排名第二，占 11％ 。\n此外，他们还发现大多数网络钓鱼受害者来自美国，而大多数键盘记录器的受害者来自巴西。最后研究人员指出，双重因素身份验证可以减轻网络钓鱼的威胁，但是很多人都嫌这样太麻烦，所以他们都不太愿意使用双重验证。\n\n稿源：cnBeta、威锋网，封面源自网络；稿源：cnBeta、网易科技，封面源自网络；\n原文链接:http://hackernews.cc/archives/16776",
      postId: 7,
    },
    {
      title: "移动 Pwn2Own 黑客大会：iPhone 7 等多台旗舰智能机被攻破",
      imgSrc: "http://hackernews.cc/wp-content/uploads/2017/04/微信图片_20170329160210-210x160.png",
      content: "Trend Micro 的年度移动 Pwn2Own 黑客大会于 11 月 2 日在日本东京举行。第一天，安全研究人员研究了攻破 iPhone 7、三星 Galaxy S8、谷歌 Pixel 以及华为 Mate 9 Pro 的方法，最高奖金逾 50 万美元。苹果 iPhone 7，运行最新的 iOS 11.1 系统，被腾讯科恩安全实验室成功突破。腾讯科恩安全实验室首先利用 WiFi bug 攻破设备，并获得 11 万美元奖金和 11 个 Master of Pwn 点数。",
      headImgSrc: "http://hackernews.cc/wp-content/uploads/2017/04/微信图片_20170329160210-210x160.png",
      detail: "Trend Micro 的年度移动 Pwn2Own 黑客大会于 11 月 2 日在日本东京举行。第一天，安全研究人员研究了攻破 iPhone 7、三星 Galaxy S8、谷歌 Pixel 以及华为 Mate 9 Pro 的方法，最高奖金逾 50 万美元。苹果 iPhone 7，运行最新的 iOS 11.1 系统，被腾讯科恩安全实验室成功突破。腾讯科恩安全实验室首先利用 WiFi bug 攻破设备，并获得 11 万美元奖金和 11 个 Master of Pwn 点数。\n随后，团队又使用 Safari 浏览器的 Bug，再次攻破 iPhone 7，并获得了 4.5 万美元奖金和 12 个 Master of Pwn 点数。安全研究人员 Richard Zhu 表示，他可以利用这两个 bug 突破 Safari 浏览器后退出沙盒模式，并在 iPhone 7 上成功运行代码。这个操作为他带来了 2.5 万美元奖金和 10 个 Master of Pwn 点数。\n除了 iPhone 7，研究人员还找到了 Galaxy S8 以及华为 Mate 9 Pro 的漏洞，拿走了 35 万美元奖金。移动 Pwn2Own 大会明天继续，相信安全人员会找到更多的 Bug，拿走更多的奖金。\n\n稿源：cnBeta、MacX，封面源自网络；\n原文链接:http://hackernews.cc/archives/16393",
      postId: 8,
    },
    {
      title: "模糊水印“打码”照片并不安全：法国黑客复原 QR 码后获 1000 美元比特币钱包",
      imgSrc: "http://hackernews.cc/wp-content/uploads/2017/04/2017041723-210x160.png",
      content: "据外媒报道，比特币企业家 Roger Ver 在法国电台接受采访时发布了一份有关比特币钱包的私人密钥和 QR 码作为观众奖品，并表示节目在播出后第一位访问该账户的人员可以转账并保留这笔奖金。当时，Ver 并不知道法国法律禁止电台播放账户私钥和 QR 码。因此，电台在未获取法院权限播出时模糊了 QR 码相关细节。",
      headImgSrc: "http://hackernews.cc/wp-content/uploads/2017/04/2017041723-210x160.png",
      detail: "据外媒报道，比特币企业家 Roger Ver 在法国电台接受采访时发布了一份有关比特币钱包的私人密钥和 QR 码作为观众奖品，并表示节目在播出后第一位访问该账户的人员可以转账并保留这笔奖金。当时，Ver 并不知道法国法律禁止电台播放账户私钥和 QR 码。因此，电台在未获取法院权限播出时模糊了 QR 码相关细节。\n但是，这一消息还是立即引发了法国黑客与比特币爱好者的兴趣，他们开始寻找各种途径还原账户 QR 码，以获取这项观众奖金。不久，两名法国研究人员 Michel Sassano 和 Clement Storck 在率先复原了这个模糊的 QR 码后转走了比特币钱包中的 1000 美元。Michel Sassano 表示，他们共计耗费了 16 个小时对这个模糊的图像进行了逆向工程，并试图将模糊的点与 QR 码的标准格式联系起来，从而恢复了这份模糊的 QR 码图像。\n由此可见，在社交网络上发布模糊的二维码或条形码图片是不安全的，因此研究人员建议用户在分享数据时，应使用完全的颜色块处理敏感细节，从而防止网络犯罪分子利用黑客工具获取其敏感信息。\n\n原文作者：Catalin Cimpanu，译者：青楚\n本文由 HackerNews.cc 翻译整理，封面来源于网络；\n原文链接:http://hackernews.cc/archives/16293",
      postId: 9,
    },
    {
      title: "男子路上捡到 U 盘，竟包含英国女王机场线路图等绝密信息",
      imgSrc: "http://hackernews.cc/wp-content/uploads/2017/04/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20170411105248-1-210x160.png",
      content: "据英国媒体报道，一男子日前在伦敦女王公园路边树叶下发现一 U 盘，里面竟然有英国最大机场希思罗的安全机密文案，其中包括女王及各国政要在机场的安全措施中采取的确切路线。报道称，这严重威胁到国家安全。据悉，机场方面已展开 “非常、非常紧急” 的调查。",
      headImgSrc: "http://hackernews.cc/wp-content/uploads/2017/04/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20170411105248-1-210x160.png",
      detail: "据英国媒体报道，一男子日前在伦敦女王公园路边树叶下发现一 U 盘，里面竟然有英国最大机场希思罗的安全机密文案，其中包括女王及各国政要在机场的安全措施中采取的确切路线。报道称，这严重威胁到国家安全。据悉，机场方面已展开 “非常、非常紧急” 的调查。\n报道指出，男子在图书馆电脑查看该 U 盘内容，惊悉载有 76 个档案，包括地图、影片及文件，全部未经加密处理，亦不需要任何密码。当中包括英女王前往希思路机场的路线及所需保安措施、所有可进出机场禁区的身份证资料及若发生自杀式炸弹或恐袭时的巡逻时间表。\n此外，机场特快线（Heathrow Express）的闭路电视分布图、隧道网及逃生通风井等位置亦一清二楚，还有内阁及外国代表使用机场的路线及保安，及超声波雷达系统的详细资料。有保安消息指出，这些资料恐成为恐怖主义或间谍活动的一大威胁，担心资料在暗网内供人购买。\n\n稿源：搜狐sohu、东方网，封面源自网络；\n原文链接:http://hackernews.cc/archives/16314",
      postId: 10,
    }
]
//模块输出
module.exports = {
    postList: posts_content,
}