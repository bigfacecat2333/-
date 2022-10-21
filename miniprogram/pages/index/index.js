// index.js

const db = wx.cloud.database();

Page({
  data: {
    qid: 1,
    name: "",
    questions: [],
    answers: [],

    openid:null,
  },

  getOpenId(){
    const that = this;
    wx.cloud.callFunction({
      // 云函数名称
      name: 'getOpenId',
      // 传给云函数的参数
      // data: {
      //   a: 1,
      //   b: 2,
      // },
    })
    .then(res => {
      // console.log(res.result)
      that.setData({
        openid:res.result.openid
      })
    })
    .catch(console.error)
  },

  onTextInput(event) {
    // console.log(event)
    const qId = event.target.dataset.qid;
    const qType = event.target.dataset.qtype;
    const text = event.detail.value;

    const newAnswer = {
      "id": qId,
      "question_type": qType,
      "text": text,
    }

    this._addAnswer(newAnswer);
  },

  _addAnswer(newAnswer) {
    let tmpAnswers = this.data.answers;
    const foundIndex = tmpAnswers.findIndex((item) => {
      return item.id == newAnswer.id;
    });

    if (foundIndex !== -1) {
      tmpAnswers.splice(foundIndex, 1, newAnswer);
    } else {
      tmpAnswers = [...tmpAnswers, newAnswer];
    }

    this.setData({
      answers: tmpAnswers,
    })

  },

  onRadioChange(event) {
    // console.log(event)
    const qId = event.target.dataset.qid;
    const qType = event.target.dataset.qtype;
    const optionId = event.detail.value;

    const tmpQ = this.data.questions.find((item) => {
      return item.id == qId;
    })
    // console.log(tmpQ);

    const tmpOption = tmpQ.options.find((item) => {
      return item.option_id == optionId
    })
    // console.log(tmpOption)

    const newAnswer = {
      "id": qId,
      "question_type": qType,
      "options": [{
        "option_id": optionId,
        "option_value": tmpOption.option_value,
      }]
    }

    this._addAnswer(newAnswer);

  },

  onCheckboxChange(event) {
    // console.log(event)
    const qId = event.target.dataset.qid;
    const qType = event.target.dataset.qtype;
    const arrSelectedValue = event.detail.value;


    const tmpQ = this.data.questions.find((item) => {
      return item.id == qId;
    })

    let tmpAnswerOptions = [];
    arrSelectedValue.forEach(optionId => {
      let tmpOption = tmpQ.options.find(item => {
        return item.option_id == optionId;
      })
      if (tmpOption) {
        tmpAnswerOptions.push({
          "option_id": tmpOption.option_id,
          "option_value": tmpOption.option_value,
        })
      }
    })

    tmpAnswerOptions.sort((a, b) => {
      return a.option_id > b.option_id ? 1 : -1;
    })

    const newAnswer = {
      id: qId,
      question_type: qType,
      options: tmpAnswerOptions,
    }

    this._addAnswer(newAnswer)

  },

  getQuestion(qid) {
    const that = this;

    wx.cloud.callFunction({
      name:'getQuestion',
      data:{
        qid:qid
      }
    })
    .then(res=>{
      // console.log(res);
      if(res.result.errcode == 0){
        that.setData({
          name:res.result.data.name,
          questions:res.result.data.questions,
        })
      }else{
        wx.showToast({
          title: '查询题目失败',
          icon:"error",
        })
      }
    })
    .catch(err=>{
      console.error(err);
    })

    // db.collection('question').where({
    //     id: qid
    //   })
    //   .get()
    //   .then(res => {
    //     // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
    //     console.log(res.data)
    //     that.setData({
    //       name: res.data[0].name,
    //       questions: res.data[0].questions,
    //     })
    //   })
    //   .catch(err => {
    //     console.error(err)
    //   })
  },

  // https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/database/add.html
  submitAnswer() {
    const that = this;

    const answers = this.data.answers.sort((a, b) => {
      return a.id - b.id;
    });

    const objAnswer = {
      answers: answers,
    }

    wx.cloud.callFunction({
      name:'submitAnswer',
      data:{
        objAnswer:objAnswer
      }
    })
    .then(res=>{
      console.log(res);
      if(res.result.errcode == 0){
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 2000
        })
      }else{
        wx.showToast({
          title: '保存失败',
          icon: 'error',
          duration: 2000
        })  
      }
    })
    .catch(err=>{
      console.error(err);
    })

    // db.collection('answer')
    //   .doc(that.data.openid)
    //   .set({
    //     data: objAnswer,
    //   })
    //   .then((res)=>{
    //     console.log(res)
    //     if(res.errMsg == "document.set:ok"){
    //       wx.showToast({
    //         title: '保存成功',
    //         icon: 'success',
    //         duration: 2000
    //       })
    //     }else{

    //       wx.showToast({
    //         title: '保存失败',
    //         icon: 'error',
    //         duration: 2000
    //       })          
    //     }
    //   })
    //   .catch(err=>{
    //     console.error(err);

    //     wx.showToast({
    //       title: '保存失败',
    //       icon: 'error',
    //       duration: 2000
    //     })      
    //   })

  },
  
  onLoad() {
    this.getOpenId();
    this.getQuestion(this.data.qid);
  },
});