// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const queryResult = await db.collection('question').where({
    id: event.qid
  })
  .get()

  if(queryResult.errMsg == 'collection.get:ok'){
    return {
      errcode:0,
      errmsg:"OK",
      data:queryResult.data[0],
    }
  }else{
    return {
      errcode:1,
      errmsg:queryResult.errMsg,
    }
  }
}