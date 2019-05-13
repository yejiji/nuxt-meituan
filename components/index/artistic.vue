<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd
        :class="{active:kind==='all'}"
        kind="all"
        keyword="景点">全部</dd>
      <dd
        :class="{active:kind==='part'}"
        kind="part"
        keyword="美食">约会聚餐</dd>
      <dd
        :class="{active:kind==='spa'}"
        kind="spa"
        keyword="丽人">丽人SPA</dd>
      <dd
        :class="{active:kind==='movie'}"
        kind="movie"
        keyword="电影">电影演出</dd>
      <dd
        :class="{active:kind==='travel'}"
        kind="travel"
        keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li
        v-for="item in cur"
        :key="item.title">
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="never">
          <img
            :src="item.img"
            class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos"><span>{{ item.pos }}</span></li>
            <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data: () => {
    return {
      kind: 'all',
      list: {
        all: [{
            title:'海底捞火锅（万行爱琴海店）',
            pos:'双人套餐，提供免费WiFi',
            price:Math.ceil(Math.random() * 400),
            img:'//p0.meituan.net/msmerchant/054b5de0ba0b50c18a620cc37482129a45739.jpg@460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'景点'
        },{
            title:'必胜客（胜利路万达店）',
            pos:'【周三特价】新奥尔良风情烤肉比萨（普装铁盘）1份',
            price:Math.ceil(Math.random() * 400),
            img:'//p0.meituan.net/msmerchant/df8ed3cc84b4de5321fff48c9c352b83789724.jpg@460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'景点'
        },{
            title:'黑龙新村东北风味主题餐厅',
            pos:'超值双人午餐，包间免费',
            price:Math.ceil(Math.random() * 400),
            img:'//p1.meituan.net/msmerchant/99937af5279077ee95e6fc3e12927486226370.jpg@460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'景点'
        },{
            title:'ascissors一知剪刀（天府店）',
            pos:'ascissors一知剪刀（天府店）',
            price:Math.ceil(Math.random() * 400),
            img:'//p1.meituan.net/wedding/b16824c0630da8592fd884dcf7bbb0f8106551.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'景点'
        },{
            title:'佐冷馋.串串里（开发区店）',
            pos:'火锅串串三人餐，提供免费WiFi',
            price:Math.ceil(Math.random() * 400),
            img:'//p0.meituan.net/msmerchant/c66c78ac873b77ef7a11038c9d1bc730347305.jpg@460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'景点'
        }],
        part: [{
            title:'必胜客（胜利路万达店）',
            pos:'【周三特价】新奥尔良风情烤肉比萨（普装铁盘）1份',
            price:Math.ceil(Math.random() * 400),
            img:'//p0.meituan.net/msmerchant/df8ed3cc84b4de5321fff48c9c352b83789724.jpg@460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'美食'
        },{
            title:'重庆崽儿火锅（开发区万达店）',
            pos:'超值双人午餐，包间免费',
            price:Math.ceil(Math.random() * 400),
            img:'//p1.meituan.net/msmerchant/860fb51c638dc504d2304ccd93de3b5c120251.jpg@460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'美食'
        },{
            title:'ascissors一知剪刀（天府店）',
            pos:'ascissors一知剪刀（天府店）',
            price:Math.ceil(Math.random() * 400),
            img:'//p1.meituan.net/wedding/b16824c0630da8592fd884dcf7bbb0f8106551.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'美食'
        },{
            title:'Baby Face西餐厅（幸福店）',
            pos:'双人套餐，提供免费WiFi',
            price:Math.ceil(Math.random() * 400),
            img:'//p0.meituan.net/msmerchant/193519032b9dac95a272ac218dfcd18550109.jpg@460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'美食'
        }],
        spa: [{
            title:'悦 TIME hair salon（万行爱琴海店）',
            pos:'悦 TIME hair salon',
            price:Math.ceil(Math.random() * 400),
            img:'//p1.meituan.net/merchantpic/92f33ea4859509a4e8157ec17bf8d6b4965169.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'丽人'
        },{
            title:'名门润秀（万达店）',
            pos:'名门润秀（万达店）',
            price:Math.ceil(Math.random() * 400),
            img:'//p0.meituan.net/merchantpic/1b5463ed8000506e2ba1708af2919e7b530460.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'丽人'
        },{
            title:'子曰造型（建设路店）',
            pos:'子曰造型（建设路店）',
            price:Math.ceil(Math.random() * 400),
            img:'//p0.meituan.net/wedding/06e1d784a5c6f0a1d254a7cd7fa20e68490722.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'丽人'
        },{
            title:'木色发型工作室',
            pos:'木色发型工作室',
            price:Math.ceil(Math.random() * 400),
            img:'//p1.meituan.net/merchantpic/39ff199102d16582ea3f087eb2f5cb9b1562132.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'丽人'
        }],
        movie: [{
            title:'皇冠电影城',
            pos:'皇冠电影城',
            price:Math.ceil(Math.random() * 400),
            img:'//p0.meituan.net/deal/201301/25/104755_6146920.jpg@460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'电影'
        },{
            title:'幸福蓝海国际影城(烟台大悦城IMAX店)',
            pos:'自费购买,可停车,有情侣座,儿童票,有WIFI,IMAX厅,巨幕厅,RealD 6FL厅',
            price:Math.ceil(Math.random() * 400),
            img:'//p0.meituan.net/deal/__46838826__1566534.jpg@460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'电影'
        },{
            title:'东方电影城(开发区店)',
            pos:'东方电影城(开发区店)',
            price:Math.ceil(Math.random() * 400),
            img:'//p1.meituan.net/deal/201206/28/5_0628113930.JPG@460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'电影'
        },{
            title:'CGV影城(海港路店)',
            pos:'免押金,有情侣座,儿童票,60帧厅',
            price:Math.ceil(Math.random() * 400),
            img:'//p0.meituan.net/deal/__10488022__6379078.jpg@460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'电影'
        },{
            title:'海底捞鲁信影城(弘阳生活店)火锅（万行爱琴海店）',
            pos:'免押金,可停车,儿童票,有WIFI,杜比全景声厅,60帧厅',
            price:Math.ceil(Math.random() * 400),
            img:'//p0.meituan.net/deal/da187ca87279d995bff3745300debd3343097.jpg@460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'电影'
        }],
        travel: [{
            title:'烟台金海岸希尔顿酒店',
            pos:'酒店套餐',
            price:Math.ceil(Math.random() * 400),
            img:'//p1.meituan.net/tdchotel/02857f3dfbd402cd4f6226a9805dfea2438368.jpg@460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'旅游'
        },{
            title:'烟台百纳瑞汀酒店',
            pos:'双人套餐，提供免费WiFi',
            price:Math.ceil(Math.random() * 400),
            img:'//p0.meituan.net/tdchotel/596bd4335591eda39351ae93b8dd59b48113875.jpg@460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'旅游'
        },{
            title:'烟台万达文华酒店',
            pos:'双人套餐，提供免费WiFi',
            price:Math.ceil(Math.random() * 400),
            img:'//p0.meituan.net/dnaimgdark/32d50c1b375b7c8da168c892e31371b43852871.jpg@460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'旅游'
        },{
            title:'烟台铂悦戴斯酒店',
            pos:'双人套餐，提供免费WiFi',
            price:Math.ceil(Math.random() * 400),
            img:'//p1.meituan.net/tdchotel/a2c2187ae41ddb3b28c4bad0472c7e08408335.jpg@460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'旅游'
        },{
            title:'烟台百纳瑞汀花园酒店',
            pos:'双人套餐，提供免费WiFi',
            price:Math.ceil(Math.random() * 400),
            img:'//p0.meituan.net/tdchotel/a757993d20d64257c9226cf3f009de2c321118.jpg@460w_260h_1e_1c',
            url:'//https://github.com/yejiji',
            keyword:'旅游'
        }]
      }
    }
  },
  computed: {
    cur: function () {
      return this.list[this.kind]
    }
  },
  async mounted(){
    // let self=this;
    // let {status,data:{count,pois}}=await self.$axios.get('/search/resultsByKeywords',{
    //   params:{
    //     keyword:'景点',
    //     city:self.$store.state.geo.position.city
    //   }
    // })
    // if(status===200&&count>0){
    //   let r= pois.filter(item=>item.photos.length).map(item=>{
    //     return {
    //       title:item.name,
    //       pos:item.type.split(';')[0],
    //       price:item.biz_ext.cost||'暂无',
    //       img:item.photos[0].url,
    //       url:'//abc.com'
    //     }
    //   })
    //   self.list[self.kind]=r.slice(0,9)
    // }else{
    //   self.list[self.kind]=[]
    // }
  },
  methods: {
    over: async function (e) {
      let dom = e.target
      let tag = dom.tagName.toLowerCase()
      let self = this
      if (tag === 'dd') {
        this.kind = dom.getAttribute('kind')
        let keyword = dom.getAttribute('keyword')
        // let {status,data:{count,pois}}=await self.$axios.get('/search/resultsByKeywords',{
        //   params:{
        //     keyword,
        //     city:self.$store.state.geo.position.city
        //   }
        // })
        // if(status===200&&count>0){
        //   let r= pois.filter(item=>item.photos.length).map(item=>{
        //     return {
        //       title:item.name,
        //       pos:item.type.split(';')[0],
        //       price:item.biz_ext.cost||'暂无',
        //       img:item.photos[0].url,
        //       url:'//abc.com'
        //     }
        //   })
        //   self.list[self.kind]=r.slice(0,9)
        // }else{
        //   self.list[self.kind]=[]
        // }
      }
    }
  },

}
</script>
<style lang="scss">
    @import "@/assets/css/index/artistic.scss";
</style>
