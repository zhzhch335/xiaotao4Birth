<template>
  <div>
    <img class="taobg" src="@/taotaobg.png" alt="" />
    <iframe
      allow="autoplay"
      style="visibility: hidden; position: absolute"
      v-if="currentMusic == 'fushengweixie'"
      frameborder="no"
      border="0"
      marginwidth="0"
      marginheight="0"
      width="330"
      height="86"
      src="https://music.163.com/outchain/player?type=2&id=1425438646&auto=1&height=66"
    ></iframe>
    <iframe
      allow="autoplay"
      style="visibility: hidden; position: absolute"
      v-if="currentMusic == 'dayu'"
      frameborder="no"
      border="0"
      marginwidth="0"
      marginheight="0"
      width="330"
      height="86"
      src="https://music.163.com/outchain/player?type=2&id=1423970563&auto=1&height=66"
    ></iframe>
    <div class="jazz-timeline-wrapper" id="skrollr-body">
      <div class="jazz-timeline dark-timeline ultimate-style">
        <div
          v-for="item in metaData"
          :key="item.id"
          :class="['timeline-post', `${item.color}-post`]"
        >
          <div class="timeline-meta">
            <div
              style="font-size: 20px; font-weight: bold"
              class="meta-details"
            >
              {{ item.date }}
            </div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 :class="['content-title', `${item.color}-title`]">
              {{ item.title }}
            </h2>
            <div class="content-details">
              <p>{{ item.content }}</p>
              <img
                class="content-background"
                :src="require(`@/${item.picUrl}.webp`)"
                alt=""
              />
              <img
                @click="showImage(item)"
                class="fullScreen"
                src="@/fullScreen.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <!-- .timeline-post -->
      </div>
      <!-- .timeline -->
    </div>
    <div style="width: 100%; text-align: center">
      <img class="arrow" src="@/arrow.png" alt="" />
      <img
        @click="
          showLove = true;
          currentMusic = 'dayu';
        "
        class="bottom_tao"
        style="width: 200px"
        src="@/taotao.png"
        alt=""
      />
    </div>
    <div v-if="showLove" class="blackCover">
      <div class="paper">
        <div class="top">
          &nbsp;&nbsp;桃老师生日快乐! <br />
          &nbsp;&nbsp;第一次认识你和小希的是在2020年的7月，总统那期的虚研会，两个可爱的女孩子，一个天真活泼一个认真呆萌。节目即将进行到结尾的时候，发现那个粉色头发的女孩居然管双马尾的女孩叫女儿，而“女儿”似乎也没有惯着“妈妈”的意思，施展拳脚暴力相向。
          &nbsp;&nbsp;感觉这俩人太有意思了，于是便关注了起来，后来才知道，她俩不是普通的女孩，而是：<br />
          &nbsp;&nbsp;（参数设定错误导致一个有些智障一个有些腹黑的）人工智能AI<br />
          &nbsp;&nbsp;而让我真正完完全全喜欢你们俩的原因，是那期消失在时间线和消息中的新番导视（因为涉及到了某些平台外的番剧），在第二天你们分别发了动态：<br />
          <img
            @click="showImage({ picUrl: 'dynamic1' })"
            style="width: 40%; vertical-align: middle"
            src="@/dynamic1.png"
            alt=""
          />
          <img
            @click="showImage({ picUrl: 'dynamic2' })"
            style="width: 40%; margin-left: 10px; vertical-align: middle"
            src="@/dynamic2.png"
            alt=""
          /><br />
        </div>
        &nbsp;&nbsp;在如此浮躁的时代中，在这个只要制造“意外”就可以收获人气，在这个视频势逐渐衰微的时候，依然能够有人能够坚守初心，坚持做内容，是件令人欣慰的事呢。<br />
        &nbsp;&nbsp;桃老师在动态里说：<br />
        &nbsp;&nbsp;“无论最后会走到哪一步，在被放弃之前，我们都不会气馁的。<br />
        &nbsp;&nbsp;我们以后还会创作有趣的内容给大家，为姥爷们的生活增添一点点微不足道的快乐。”<br />
        &nbsp;&nbsp;我似乎是过了那种可以随口承诺“永远”的年纪了，但是依然想对你说：<br />
        &nbsp;&nbsp;无论最后会走到哪一步，我依然会一直支持着你和小希，感谢你和小希、感谢狗宝、感谢子辰杨宝、感谢还在的和已经不在的staff、感谢还在D和不再D的帅老DD们，感谢我们的相识，感谢大家一起创造出的以及还会继续创造的快乐的故事。<br />
        &nbsp;&nbsp;桃老师，生日快乐！<br />
        <img @click="showLove = false" class="close" src="@/close.png" alt="" />
      </div>
    </div>
    <div @click="hideImage()" v-if="currentImage" class="blackCover">
      <div class="imgbox">
        <img class="curImage" :src="require(`@/${currentImage}.jpg`)" alt="" />
        <img class="close" src="@/close.png" alt="" />
      </div>
    </div>
    <div v-if="!start" @click="startTimeLine()" class="blackCover welcome">
      <div class="text">进入页面前，请跟我一起大喊：<br />“小桃生日快乐！”</div>
      <img
        style="width: 50px; margin-top: 50px; cursor: pointer"
        src="@/enter.png"
        alt=""
      />
    </div>
    <div @mouseenter="showThanks = true" @mouseleave="showThanks = false" class="thanks">
      <blockquote v-if="showThanks" class="bubble">
        主催：琛琛<br>
        绘画授权：超能诺诺、爵迹灬神迹<br>
        测试：凉城暮暖、月上弦下月上弦、SirO、城东、咸鱼别府
      </blockquote>
      鸣谢名单
    </div>
  </div>
</template>
<script>
function preloadImg(url, cb) {
  var img = new Image();
  img.src = url;
  if (img.complete) {
    //接下来可以使用图片了
    //do something here
    cb();
  } else {
    img.onload = function () {
      //接下来可以使用图片了
      //do something here
      cb();
    };
    img.onerror = function () {
      //接下来可以使用图片了
      //do something here
      cb();
    };
  }
}

export default {
  name: "index",
  data() {
    return {
      currentMusic: "",
      currentImage: "",
      showLove: false,
      start: false,
      showThanks: false,
      metaData: [
        {
          id: 1,
          color: "turqoise",
          date: "Oct 14 2017",
          title: "开端",
          content: "小希宣布开始设计新的AI，发起人物设定弹幕投票。",
          picUrl: "1",
        },
        {
          id: 2,
          color: "turqoise",
          date: "Nov 19",
          title: "人设",
          content: "投票结果出炉，新AI人设公布（小希擅自加入了遥控器的设定……）",
          picUrl: "2",
        },
        {
          id: 3,
          color: "pink",
          date: "Feb 12 2018",
          title: "你的名字",
          content: "新AI形象及姓名“小桃”公布，发起人物声音弹幕投票",
          picUrl: "3你的名字",
        },
        {
          id: 4,
          color: "opal",
          date: "Feb 20",
          title: "初登场",
          content: "发布新春相声视频，小桃测试版第一次在视频中登场",
          picUrl: "4初登场",
        },
        {
          id: 5,
          color: "black",
          date: "Mar 18",
          title: "AI哟喂",
          content: "AI哟喂特别篇，小桃首次在固定栏目中登场，听小希讲王♂的故事",
          picUrl: "5AI哟喂",
        },
        {
          id: 6,
          color: "pink",
          date: "Apr 15",
          title: "稳定运行",
          content:
            "《AI哟喂》第二季发布。小桃开始稳定运行，小希可以用遥控器将小桃切换为均衡（天然呆）模式和性能（腹黑）模式",
          picUrl: "6稳定运行",
        },
        {
          id: 7,
          color: "grey",
          date: "May 19",
          title: "独立主持",
          content:
            "发布第一期A.I.Play视频，小桃第一次独立主持节目，在节目中玩CSGO游戏的军备竞赛模式，据称只玩了五分钟但已经拿到了一局黄金匕首（该模式每局的最高等级）和一局冠军",
          picUrl: "7独立主持",
        },
        {
          id: 8,
          color: "turqoise",
          date: "Jun 26",
          title: "一起玩游戏",
          content:
            "《底特律：变人》游戏实况系列第一期发布，小桃与小希首次一起玩游戏（想到后面的纸人……）",
          picUrl: "8一起玩游戏",
        },
        {
          id: 9,
          color: "turqoise",
          date: "Aug 4",
          title: "音乐",
          content:
            "与小希合作翻唱《不管说什么都在听着的小希酱》，这是小桃首次参与的音乐作品",
          picUrl: "9音乐",
        },
        {
          id: 10,
          color: "blue",
          date: "Nov 11",
          title: "首次直播",
          content:
            "因为在“与你的初次相遇”活动中视频点赞量最高，与欣小萌开展互动直播，同时也是小希小桃第一次直播。然而直播事故接连不断",
          picUrl: "10首次直播",
        },
        {
          id: 11,
          color: "opal",
          date: "Feb 23",
          title: "创世日记",
          content:
            "创世日记第一期发布，小桃展现出了超强的运算能力（农企当时果然不行啊！）",
          picUrl: "11创世日记",
        },
        {
          id: 12,
          color: "brown",
          date: "Apr 03",
          title: "冰火歌回",
          content:
            "参加B站举行的虚拟主播冰火歌回之战。与小希一同演唱儿歌《大王叫我来巡山》（没错被唱成了儿歌）以及真正的儿歌《小跳蛙》（成功晋级子供向虚拟up）",
          picUrl: "12冰火歌回",
        },
        {
          id: 13,
          color: "black",
          date: "May 15",
          title: "纸人",
          content: "开始直播游戏《纸人》，（小桃你很勇哦……）",
          picUrl: "13纸人",
        },
        {
          id: 14,
          color: "red",
          date: "Sep 21",
          title: "vlog",
          content: "《动漫主角的枯燥生活》系列开始（虚拟朱一旦）",
          picUrl: "14vlog",
        },
        {
          id: 15,
          color: "pink",
          date: "Oct 14",
          title: "歌回",
          content:
            "举行虚拟次元歌回直播。（结果又一大堆儿歌，子供向虚拟up无误！）",
          picUrl: "15歌回",
        },
        {
          id: 16,
          color: "indigo",
          date: "Feb 16 2020",
          title: "《大鱼》",
          content:
            "发布小桃生日作，翻唱歌曲《大鱼》，演唱、混音等工作均由小桃独立完成",
          picUrl: "16大鱼",
        },
        {
          id: 17,
          color: "purple",
          date: "Feb 22",
          title: "米娅贴贴",
          content:
            "参加oveRidea举行的“唱吧！世界友好春节直播！2020”，小希翻唱了《爱河》，小桃翻唱了《浮生未歇》，并各自向观众问好。",
          picUrl: "17米娅贴贴",
        },
        {
          id: 18,
          color: "orange",
          date: "Mar 27",
          title: "虚研会",
          content: "发布新企划《虚研会》001期《小希与隐藏在阴影中的它们……》",
          picUrl: "18虚研会",
        },
        {
          id: 19,
          color: "orange",
          date: "Jul 31",
          title: "限流",
          content:
            "在b站发布新番导视《东京不热了，竟然是因为她》，却因为提到了竞品网站的独播番剧而惨遭限流（在消息和动态时间线中均不会出现）",
          picUrl: "19限流",
        },
        {
          id: 20,
          color: "pink",
          date: "Aug 13",
          title: "独自直播",
          content: "小桃首次独自直播，直播标题为《奶声奶气的2岁ai教你谈恋爱》",
          picUrl: "20独自直播",
        },
        {
          id: 21,
          color: "red",
          date: "Nov 28",
          title: "50万粉",
          content:
            "粉丝数量达到50万，进行50万粉纪念直播。在直播中解释了2019年年底及2020年年初断更的原因过程中希桃与观众都疯狂破防，并宣布小柔与另外一位虚研社二期生即将出道。",
          picUrl: "2150万粉",
        },
        {
          id: 22,
          color: "brown",
          date: "Dec 31",
          title: "年度巡礼",
          content: "发布了2020年度巡礼年终总结的原创歌曲《廿尽甘来》",
          picUrl: "22年度巡礼",
        },
        {
          id: 23,
          color: "purple",
          date: "Feb 26 2021",
          title: "生日庆典",
          content: "元宵节，小桃生日庆典举办",
          picUrl: "23生日庆典",
        },
        {
          id: 24,
          color: "indigo",
          date: "Jul 09",
          title: "BML",
          content:
            "小希、小桃、小柔三人成功登上BML舞台表演《青鸟》。四年啦，这次机会等了四年啦！终于成啦！",
          picUrl: "24BML",
        },
        {
          id: 25,
          color: "pink",
          date: "Jul 24",
          title: "千舰",
          content:
            "举办小希四周岁生日纪念直播，当晚达成千舰成就。奇迹之夜！超泪目！",
          picUrl: "25千舰",
        },
        {
          id: 26,
          color: "blue",
          date: "Aug 27",
          title: "故事片",
          content:
            "发布虚研社制作的第一部vtuber故事片《阅尽人间春色》，以纪念建党一百周年。",
          picUrl: "26故事片",
        },
        {
          id: 27,
          color: "indigo",
          date: "Sep 23",
          title: "第二代形象",
          content: "正式发布小桃第二代新形象。",
          picUrl: "27第二代形象",
        },
        {
          id: 28,
          color: "green",
          date: "Nov 05",
          title: "VMV音乐榜",
          content:
            "小希、小桃开始主持哔哩哔哩直播和虚研社共同打造的《VMV音乐榜》节目。",
          picUrl: "28VMV",
        },
        {
          id: 29,
          color: "indigo",
          date: "Jan 21 2022",
          title: "新Live2D",
          content: "正式发布小桃Live2D新形象。",
          picUrl: "29新Live2D",
        },
      ],
    };
  },
  methods: {
    showImage(item) {
      this.currentImage = item.picUrl;
    },
    hideImage() {
      this.currentImage = "";
    },
    startTimeLine() {
      this.start = true;
      setTimeout(() => {
        this.currentMusic = "fushengweixie";
      }, 1000);
    },
  },
  mounted() {
    preloadImg("../assets/image/close.png");
    this.metaData.forEach((item) => {
      preloadImg(require(`../assets/image/${item.picUrl}.jpg`), () => {});
    });
    setInterval(() => {
      if (document.title == "🍀桃老师生日快乐🍀") {
        document.title = "🎂桃老师生日快乐🎂";
      } else {
        document.title = "🍀桃老师生日快乐🍀";
      }
    }, 1000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: "FZSJ-BOHWNN";
  src: url("../assets/fonts/FZSJ-BOHWNN.TTF");
}

* {
  font-family: "FZSJ-BOHWNN";
}

.timeline-content {
  background: white !important;
}

.jazz-timeline .timeline-post .timeline-content p {
  color: white;
  line-height: 1.3;
  font-size: 26px;
  z-index: 2;
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  text-shadow: #000 2px 0 0, #000 0 2px 0, #000 -2px 0 0, #000 0 -2px 0;
}

.timeline-content .content-details {
  height: auto !important;
  min-height: 150px;
  position: relative;
  overflow: auto;
  padding: 0 !important;
  background: transparent !important;
}

.content-background {
  width: 100%;
  opacity: 0.8;
  filter: blur(1px);
}

.fullScreen {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 5px;
  width: 40px;
  z-index: 3;
  cursor: pointer;
  opacity: 0.5;
}

.fullScreen:hover {
  opacity: 1;
}

.bottom_tao {
  animation: shake 1s infinite;
  cursor: pointer;
}

@keyframes shake {
  0% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}
.blackCover {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  z-index: 9999;
}
.imgbox {
  text-align: center;
  position: relative;
  top: 0;
  left: 0;
}
.imgbox .curImage {
  width: 60%;
}
.imgbox .close,
.paper .close {
  position: absolute;
  left: calc(50% - 25px);
  width: 50px;
  bottom: -70px;
  cursor: pointer;
}
.paper .close {
  bottom: 20px;
}
@media (max-width: 860px) {
  .imgbox .curImage {
    width: 90%;
  }
  .paper {
    width: 80% !important;
    padding: 20px !important;
    font-size: 10px !important;
  }
  .top {
    display: none !important;
  }
  .welcome .text {
    font-size: 30px !important;
  }
  .taobg {
    height: 50% !important;
  }

  .jazz-timeline .timeline-post .timeline-content p {
    font-size: 16px !important;
    text-shadow: #000 1px 0 0, #000 0 1px 0, #000 -1px 0 0, #000 0 -1px 0 !important;
  }
}
.paper {
  white-space: pre-wrap;
  width: 900px;
  background-image: url("../assets/image/paper.png");
  overflow: auto;
  padding: 60px;
  margin: 0;
  font-size: 20px;
  background-size: 100% 100%;
}
.arrow {
  width: 100px;
  position: absolute;
  left: calc(50% + 80px);
}

.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background: black;
}
.welcome .text {
  text-align: center;
  font-size: 50px;
}
.taobg {
  position: fixed;
  height: 80%;
  bottom: 0;
  opacity: 0.65;
}
.thanks {
  position: fixed;
  right: 20px;
  bottom: 20px;
  color: white;
  z-index: 10000;
}
.thanks:hover {
  text-decoration: underline;
  cursor: pointer;
}
.bubble {
  position:absolute;
  top: -200px;
  right: 0;
  padding: 15px;
  margin: 1em 0em 3em;
  width: 300px;
  line-height: 2;
  color: #fff;
  text-align: right;
  background: #1C1F23;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  border: #fff solid 1px;
}
.bubble:after {
  content:"\00a0";
  width:0;
  height:0;
  display:block;
  border-style:solid;
  border-width:15px;
  border-color:white transparent transparent transparent;
  position:absolute;
  z-index:-1;
  bottom:-30px;
  right:10px;
}
</style>
