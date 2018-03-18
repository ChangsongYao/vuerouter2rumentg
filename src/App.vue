<template>
  <div id="app" v-cloak>
    <nav class="header">
      <router-link v-for="tag in tags" :to="'/' + encodeURI(tag)">{{tag}}</router-link>
    </nav>
    <div class="content">
      <router-view></router-view>
      <router-view name="advert"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    computed:{
      tags(){
        return this.news.map(n=>n.tag)
          .reduce((na,tag)=>{
            if(na.indexOf(tag)==-1) na.push(tag)
            return na
          },[])
      }
    },
    data: function () {
      return{
        news:[
          {title:'揭装穷不露富官员：骑旧自行车上班家藏2亿现金',tag:'国内'},
          {title:'这些官员因群体性事件被查 有人外逃后回国自首',tag:'国内'},
          {title:'现实版育良书记获刑11年 曾野蛮拆迁惹惊天血案',tag:'国内'},
          {title:'2名省部级老虎同地发迹同日领刑 刑期也差不多',tag:'国内'},
          {title:'媒体发布中印军力对比图:印度好自为之',tag:'国内'},
          {title:'广州涉黑团伙骨干身家千万住豪宅 老大系村书记',tag:'国内'},
          {title:'海南再现捕捞鲸鲨出售:搁浅还活着被强拖上岸',tag:'国内'},
          {title:'印度对中印对峙心存侥幸：稳住就还有机会赢',tag:'国内'},
          {title:'新疆和田原书记张金标被双开 反恐维稳履责不力',tag:'国内'},
          {title:'山东80%公办养老机构将转制 鼓励民间资本参与',tag:'国内'},
          {title:'莫迪终于就洞朗对峙出声 仍企图用谈判蒙混拖延',tag:'国际'},
          {title:'巴基斯坦政府官网遭黑客入侵 播印度国歌',tag:'国际'},
          {title:'装聋作哑？印仍拒绝回应中方已通报修路消息',tag:'国际'},
          {title:'印度经济遭遇雪崩 央行降息至7年来最低',tag:'国际'},
          {title:'美陆军下令停用中国无人机 中企：惊讶失望',tag:'国际'},
          {title:'新型勒索病毒再现互联网 暂无有效破解办法',tag:'国际'},
          {title:'新加坡驱逐华裔教授 称其帮助外国干预本国内政',tag:'国际'},
          {title:'美白宫向联合国递交退出《巴黎协定》意向通知',tag:'国际'},
          {title:'周杰伦昆凌穿情侣装甜蜜现身 结婚后仍像热恋中',tag:'娱乐'},
          {title:'李艺彤对鞠婧祎见死不救？原来真相是这样的...',tag:'娱乐'},
          {title:'哭着喊“开火”！《战狼2》中燃到爆的原型是他',tag:'娱乐'},
          {title:'曝马蓉投资1500万移民澳洲 或将带走2个孩子',tag:'娱乐'},
          {title:'李钟硕为延迟入伍道歉：想做完该做的事',tag:'娱乐'},
          {title:'嘻哈侠终揭面！被欧阳靖选中的吴亦凡满脸微笑',tag:'娱乐'},
          {title:'关之琳：我很强大，但我也有小女生的童真',tag:'娱乐'},
          {title:'李嘉欣一家三口外出游玩 齐秀美腿',tag:'娱乐'},
          {title:'马斯克:期待送宇航员上国际空间站 2100年主宰太阳系',tag:'科技'},
          {title:'快手视频又惹争议，请你对儿童色情说不',tag:'科技'},
          {title:'45万辆太乱了!南京暂停共享单车投放 封杀共享电单车',tag:'科技'},
          {title:'Gartner公布中国新兴技术成熟度曲线 5G技术发展提速',tag:'科技'},
          {title:'人工智能是工业革命的尾声 还是一场新革命的序幕？',tag:'科技'},
          {title:'《科学大家》|当哲学问题遇上意识科学:聊聊"我是谁"',tag:'科技'},
          {title:'华为与微信因用户数据起冲突，这次你支持谁？',tag:'科技'},
          {title:'伽利略比萨斜塔实验真实性存疑：科学故事非事实',tag:'科技'},
          {title:'北京二手房成交继续低迷 有豪宅每周降价300万',tag:'财经'},
          {title:'贾跃亭重庆往事：一系列蹊跷公司 家族获益匪浅',tag:'财经'},
          {title:'央行发文要求2018年6月30日前所有网络支付通过网联',tag:'财经'},
          {title:'次新股疯炒秘密：操盘团队动用300多账户 控资数十亿',tag:'财经'},
          {title:'中化和中国化工两大巨头合并现端倪 进展相对缓慢',tag:'财经'},
          {title:'山西消协曝三大运营商泄露用户信息 短信通道被质疑',tag:'财经'},
          {title:'国内隐形富豪慌了：海外资产要曝光 担忧秋后算账',tag:'财经'},
          {title:'刘强东：最讨厌心灵鸡汤 所有失败最终都是人不行',tag:'财经'},
          {title:'视频-太拼！朱婷倒地救球手腕受伤 表情痛苦被换下',tag:'体育'},
          {title:'“运动账户”即日上线 激励全民运动汗水当钱花',tag:'体育'},
          {title:'塞尔维亚两人上双米哈仅得9分 失误送26分难求胜',tag:'体育'},
          {title:'视频-国际排联主持人比心+秀中文：吃了吗么么哒',tag:'体育'},
          {title:'法拉赫展现惊人爆发力 能否出战5000米成疑',tag:'体育'},
          {title:'刘晓彤：即使输也要有气节 安家杰：女排精神',tag:'体育'},
          {title:'博尔特不满百米预赛成绩 罪魁祸首竟是起跑器？',tag:'体育'},
          {title:'莎娃最新写真性感依旧',tag:'体育'},
          {title:'中国在高原启动一重大工程 复制1962年击败印度之匙',tag:'军事'},
          {title:'军报：中国24小时内6次表态 印再听不懂是智商问题',tag:'军事'},
          {title:'美双航母又要来朝鲜 我军9天内两次黄海大军演回击',tag:'军事'},
          {title:'英称中国改造032潜艇帆罩后部升高 或测试巨浪3导弹',tag:'军事'},
          {title:'港媒称美在南海自由航行无效 未减弱中国对领土主张',tag:'军事'},
          {title:'外媒称中国战机曾遭印战机瞄准 立即反瞄准将其驱离',tag:'军事'},
          {title:'少将：印度支持藏独中国为什么不能支持印各邦独立',tag:'军事'},
          {title:'外媒密集评论中国八一大阅兵：彰显维护和平坚定信心',tag:'军事'},
          {title:'高校新生要求学姐帮背行李 被拒后连吐脏字辱骂',tag:'社会'},
          {title:'公交司机因1元车票与乘客口角 刀刺夫妻1死1伤',tag:'社会'},
          {title:'俩男子持玩具枪抢劫宝马女司机 称不要你命要钱',tag:'社会'},
          {title:'香港将退休男老师向6年级女生示爱:你是我女神',tag:'社会'},
          {title:'网民散布车祸谣言让群众以为政府瞒报 已被拘留',tag:'社会'},
          {title:'夫妻深圳被神秘车辆跟踪别停 交警公布调查结果',tag:'社会'},
          {title:'13岁女孩走失惊动数万网友 自称家中没wifi出走',tag:'社会'},
          {title:'女子与网友见面后江边兜风 结果惨遭对方轮奸',tag:'社会'},
        ]
      }
    }
  }
</script>

<style>
  [v-cloak]{
    height:2px;
    overflow:hidden;
  }
  [v-cloak]:before{
    content:' ';
    display:block;
    border-bottom:2px solid red;
    animation: progress 2s infinite;
  }
  @keyframes progress{
    0%{width:0%}
    100%{width:90%}
  }
  nav.header{
    padding:15px;
    background:#f0f0f0;
  }
  nav.header a{
    text-decoration: none;
    color:black;
    padding:10px 20px;
    text-align:center;
  }
  nav.header .router-link-active{
    color: bold;
    border-bottom: 2px solid red;
  }
  pre{
    font-family:Consolas;
  }
  .content{
    display:flex;
  }
  .news-column{
    padding: 0 10px;
    margin-top:10px;
    flex:1;
  }
  .news-column a{
    line-height:30px;
  }
  .advert{
    width:250px;
    padding: 10px 0;
  }
  .advert img{
    width:100%;
  }

</style>
