// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const queryResult = await db.collection('answer')
    .doc(wxContext.OPENID)
    .set({
      data: event.objAnswer,
    })

    if(queryResult.errMsg == 'document.set:ok'){
      return {
        errcode:0,
        errmsg:"OK",
        data:queryResult.stats,
      }
    }else{
      return {
        errcode:1,
        errmsg:queryResult.errMsg,
      }
    }
}