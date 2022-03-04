<template>
  <div>
    <div class="jazz-timeline-wrapper" id="skrollr-body">
      <div class="jazz-timeline dark-timeline ultimate-style">
        <div
          v-for="item in metaData"
          :key="item.id"
          :class="['timeline-post', `${item.color}-post`]"
        >
          <div class="timeline-meta">
            <div class="meta-details">{{ item.date }}</div>
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
                :src="require(`@/${item.picUrl}.png`)"
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

        <div class="timeline-post turqoise-post">
          <div class="timeline-meta">
            <div class="meta-details">Oct 14 2017</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title turqoise-title">开端</h2>
            <div class="content-details">
              <p>小希宣布开始设计新的AI，发起人物设定弹幕投票。</p>
              <img
                class="content-background"
                :src="require('@/1.png')"
                alt=""
              />
              <img class="fullScreen" src="@/fullScreen.png" alt="" />
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post turqoise-post">
          <div class="timeline-meta">
            <div class="meta-details">Nov 19</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title turqoise-title">人设</h2>
            <div class="content-details">
              <p>投票结果出炉，新AI人设公布（小希擅自加入了遥控器的设定……）</p>
              <img class="content-background" src="@/2.png" alt="" />
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post pink-post">
          <div class="timeline-meta">
            <div class="meta-details">Feb 12 2018</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title pink-title">你的名字</h2>
            <div class="content-details">
              <p>新AI形象及姓名“小桃”公布，发起人物声音弹幕投票</p>
              <img class="content-background" src="@/3你的名字.png" alt="" />
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post indigo-post">
          <div class="timeline-meta">
            <div class="meta-details">Feb 20</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title indigo-title">初登场</h2>
            <div class="content-details">
              <p>发布新春相声视频，小桃测试版第一次在视频中登场</p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post purple-post">
          <div class="timeline-meta">
            <div class="meta-details">Mar 18</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title purple-title">AI哟喂</h2>
            <div class="content-details">
              <p>AI哟喂特别篇，小桃首次在固定栏目中登场，听小希讲王♂的故事</p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post grey-post">
          <div class="timeline-meta">
            <div class="meta-details">Apr 15</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title grey-title">稳定运行</h2>
            <div class="content-details">
              <p>
                《AI哟喂》第二季发布。小桃开始稳定运行，小希可以用遥控器将小桃切换为均衡（天然呆）模式和性能（腹黑）模式
              </p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post blue-post">
          <div class="timeline-meta">
            <div class="meta-details">Fri 19</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title blue-title">独立主持</h2>
            <div class="content-details">
              <p>
                发布第一期A.I.Play视频，小桃第一次独立主持节目，在节目中玩CSGO游戏的军备竞赛模式，据称只玩了五分钟但已经拿到了一局黄金匕首（该模式每局的最高等级）和一局冠军
              </p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post red-post">
          <div class="timeline-meta">
            <div class="meta-details">Jue 26</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title red-title">一起玩游戏</h2>
            <div class="content-details">
              <p>
                《底特律：变人》游戏实况系列第一期发布，小桃与小希首次一起玩游戏（想到后面的纸人……）
              </p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post orange-post">
          <div class="timeline-meta">
            <div class="meta-details">Aug 4</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title orange-title">音乐</h2>
            <div class="content-details">
              <p>
                与小希合作翻唱《不管说什么都在听着的小希酱》，这是小桃首次参与的音乐作品
              </p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post opal-post">
          <div class="timeline-meta">
            <div class="meta-details">Nov 11</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title opal-title">首次直播</h2>
            <div class="content-details">
              <p>
                因为在“与你的初次相遇”活动中视频点赞量最高，与欣小萌开展互动直播，同时也是小希小桃第一次直播。然而直播事故接连不断
              </p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post green-post">
          <div class="timeline-meta">
            <div class="meta-details">Feb 23</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title green-title">创世日记</h2>
            <div class="content-details">
              <p>
                创世日记第一期发布，小桃展现出了超强的运算能力（农企当时果然不行啊！）
              </p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post pink-post">
          <div class="timeline-meta">
            <div class="meta-details">Apr 03</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title pink-title">冰火歌回</h2>
            <div class="content-details">
              <p>
                参加B站举行的虚拟主播冰火歌回之战。与小希一同演唱儿歌《大王叫我来巡山》（没错被唱成了儿歌）以及真正的儿歌《小跳蛙》（成功晋级子供向虚拟up）
              </p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post turqoise-post">
          <div class="timeline-meta">
            <div class="meta-details">Fri 15</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title turqoise-title">纸人</h2>
            <div class="content-details">
              <p>开始直播游戏《纸人》，（小桃你很勇哦……）</p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post black-post">
          <div class="timeline-meta">
            <div class="meta-details">Sep 21</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title black-title">vlog</h2>
            <div class="content-details">
              <p>《动漫主角的枯燥生活》系列开始（虚拟朱一旦）</p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post brown-post">
          <div class="timeline-meta">
            <div class="meta-details">Oct 14</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title brown-title">歌回</h2>
            <div class="content-details">
              <p>
                举行虚拟次元歌回直播。（结果又一大堆儿歌，子供向虚拟up无误！）
              </p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post indigo-post">
          <div class="timeline-meta">
            <div class="meta-details">Feb 16 2020</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title indigo-title">《大鱼》</h2>
            <div class="content-details">
              <p>
                发布小桃生日作，翻唱歌曲《大鱼》，演唱、混音等工作均由小桃独立完成
              </p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post purple-post">
          <div class="timeline-meta">
            <div class="meta-details">Feb 22</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title purple-title">米娅贴贴</h2>
            <div class="content-details">
              <p>
                参加oveRidea举行的“唱吧！世界友好春节直播！2020”，小希翻唱了《爱河》，小桃翻唱了《浮生未歇》，并各自向观众问好。
              </p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post grey-post">
          <div class="timeline-meta">
            <div class="meta-details">Mar 27</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title grey-title">虚研会</h2>
            <div class="content-details">
              <p>发布新企划《虚研会》001期《小希与隐藏在阴影中的它们……》</p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post blue-post">
          <div class="timeline-meta">
            <div class="meta-details">Jul 31</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title blue-title">限流</h2>
            <div class="content-details">
              <p>
                在b站发布新番导视《东京不热了，竟然是因为她》，却因为提到了竞品网站的独播番剧而惨遭限流（在消息和动态时间线中均不会出现）小桃很担心“害怕如果再遇到今年一样的打击，还能不能坚持下去”但是也很坚定“无论最后走到哪一步，在被放弃之前，不会气馁的”（你们的确坚持下来了！你们是最棒的！帅老DD们永远支持着你们！）
              </p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post red-post">
          <div class="timeline-meta">
            <div class="meta-details">Aug 13</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title red-title">独自直播</h2>
            <div class="content-details">
              <p>小桃首次独自直播，直播标题为《奶声奶气的2岁ai教你谈恋爱》</p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post orange-post">
          <div class="timeline-meta">
            <div class="meta-details">Nov 28</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title orange-title">50万粉</h2>
            <div class="content-details">
              <p>
                粉丝数量达到50万，进行50万粉纪念直播。在直播中解释了2019年年底及2020年年初断更的原因过程中希桃与观众都疯狂破防，并宣布小柔与另外一位虚研社二期生即将出道。
              </p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post opal-post">
          <div class="timeline-meta">
            <div class="meta-details">Dec 31</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title opal-title">年度巡礼</h2>
            <div class="content-details">
              <p>发布了2020年度巡礼年终总结的原创歌曲《廿尽甘来》</p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post green-post">
          <div class="timeline-meta">
            <div class="meta-details">Feb 26 2021</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title green-title">生日庆典</h2>
            <div class="content-details">
              <p>元宵节，小桃生日庆典举办</p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post pink-post">
          <div class="timeline-meta">
            <div class="meta-details">Jul 09</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title pink-title">BML</h2>
            <div class="content-details">
              <p>
                小希、小桃、小柔三人成功登上BML舞台表演《青鸟》。四年啦，这次机会等了四年啦！终于成啦！
              </p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post turqoise-post">
          <div class="timeline-meta">
            <div class="meta-details">Jul 24</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title turqoise-title">千舰</h2>
            <div class="content-details">
              <p>
                举办小希四周岁生日纪念直播，当晚达成千舰成就。奇迹之夜！超泪目！
              </p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post black-post">
          <div class="timeline-meta">
            <div class="meta-details">Aug 27</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title black-title">故事片</h2>
            <div class="content-details">
              <p>
                发布虚研社制作的第一部vtuber故事片《阅尽人间春色》，以纪念建党一百周年。
              </p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post brown-post">
          <div class="timeline-meta">
            <div class="meta-details">Sep 23</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title brown-title">第二代形象</h2>
            <div class="content-details">
              <p>正式发布小桃第二代新形象。</p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post indigo-post">
          <div class="timeline-meta">
            <div class="meta-details">Nov 05</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title indigo-title">VMV音乐榜</h2>
            <div class="content-details">
              <p>
                小希、小桃开始主持哔哩哔哩直播和虚研社共同打造的《VMV音乐榜》节目。
              </p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->

        <div class="timeline-post turqoise-post">
          <div class="timeline-meta">
            <div class="meta-details">Jan 21 2022</div>
          </div>
          <div class="timeline-icon icon-dot">
            <div class="timeline-bar"></div>
          </div>
          <div class="timeline-content">
            <h2 class="content-title turqoise-title">新Live2D</h2>
            <div class="content-details">
              <p>正式发布小桃Live2D新形象。</p>
            </div>
          </div>
          <!-- timeline content -->
        </div>
        <!-- .timeline-post -->
      </div>
      <!-- .timeline -->
    </div>
    <div style="width: 100%; text-align: center">
      <img class="bottom_tao" style="width: 200px" src="@/taotao.png" alt="" />
    </div>
    <div @click="hideImage()" v-if="currentImage" class="blackCover">
      <div class="imgbox">
        <img class="curImage" :src="require(`@/${currentImage}.png`)" alt="" />
        <img class="close" src="@/close.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      currentImage: "",
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
          id:5,
          color:'black',
          date:'Mar 18',
          title:'AI哟喂',
          content:'AI哟喂特别篇，小桃首次在固定栏目中登场，听小希讲王♂的故事',
          picUrl:'5AI呦喂',
        },
        {
          id:6,
          color:'pink',
          date:'Apr 15',
          title:'稳定运行',
          content:'《AI哟喂》第二季发布。小桃开始稳定运行，小希可以用遥控器将小桃切换为均衡（天然呆）模式和性能（腹黑）模式',
          picUrl:'6稳定运行',
        },
        {
          id:7,
          color:'grey',
          date:'Fri 19',
          title:'独立主持',
          content:'发布第一期A.I.Play视频，小桃第一次独立主持节目，在节目中玩CSGO游戏的军备竞赛模式，据称只玩了五分钟但已经拿到了一局黄金匕首（该模式每局的最高等级）和一局冠军',
          picUrl:'7独立主持',
        },
        {
          id:8,
          color:'turqoise',
          date:'Jue 26',
          title:'一起玩游戏',
          content:'《底特律：变人》游戏实况系列第一期发布，小桃与小希首次一起玩游戏（想到后面的纸人……）',
          picUrl:'8一起玩游戏',
        },
        {
          id:9,
          color:'turqoise',
          date:'Aug 4',
          title:'音乐',
          content:'与小希合作翻唱《不管说什么都在听着的小希酱》，这是小桃首次参与的音乐作品',
          picUrl:'9音乐',
        },
        {
          id:10,
          color:'blue',
          date:'Nov 11',
          title:'首次直播',
          content:'因为在“与你的初次相遇”活动中视频点赞量最高，与欣小萌开展互动直播，同时也是小希小桃第一次直播。然而直播事故接连不断',
          picUrl:'10首次直播',
        },
        // {
        //   id:10,
        //   color:'',
        //   date:'',
        //   title:'',
        //   content:'',
        //   picUrl:'',
        // },
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
  color: black;
  font-size: 16px;
  z-index: 2;
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
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
  opacity: 0.45;
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
.imgbox .close {
  position: absolute;
  left: calc(50% - 25px);
  width: 50px;
  bottom: -70px;
  cursor: pointer;
}
@media (max-width: 860px) {
  .imgbox .curImage {
    width: 90%;
  }
}
</style>
