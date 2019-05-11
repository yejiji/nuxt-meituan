import Router from 'koa-router';
import axios from './utils/axios'
import Province from '../dbs/models/province'
import Menu from '../dbs/models/menu'
let router = new Router({prefix: '/geo'})


router.get('/getposition', async (ctx) => {
    let {
      status,
      data: {
        province,
        city
      }
    } = await axios.get(`https://restapi.amap.com/v3/ip?ip=114.247.50.2&output=json&key=3b5e3323784003ad725213641ad44749`)
    if (status === 200) {
      ctx.body = {
        province,
        city
      }
    } else {
      ctx.body = {
        province: '',
        city: ''
      }
    }
    //  let res;
  
    //   await axios.get('https://restapi.amap.com/v3/ip?ip=114.247.50.2&output=json&key=3b5e3323784003ad725213641ad44749', {
    //     params: {
          
    //     }
    //   })
    //   .then((response)=>{
    //     res = response.data;
    //   })

    //   if (res.status === '1') {
    //     ctx.body = {
    //       province:res.province,
    //       city:res.city
    //     }
    //   } else {
    //     ctx.body = {
    //       province: '',
    //       city: ''
    //     }
    //   }

  })

  router.get('/province', async (ctx) => {
    let province = await Province.find()
    ctx.body = {
      province: province.map(item => {
        return {
          id: item.id,
          name: item.value[0]
        }
      })
    }

  })

  router.get('/getmenu', async (ctx) => {
    const result = await Menu.findOne()
    ctx.body = {
      menu: result.menu
    }

  })

  export default router;