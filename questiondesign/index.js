import { prettyPrintJson } from "pretty-print-json";
import copy from "copy-to-clipboard";
import gotpl from "gotpl";

const regexQuestionSplit = /\n\s*\n/gm;
const regexQuestionRowSplit = /\n/gm;
const regexTitle1 = /(?<index>\d+)[.、][\s]*(?<title>[^\n]*)$/;
const retexTitle2 =
  /(?<index>\d+)[.、][\s]*(?<title>[^\[【]*)[\[【](?<type>\W+)[\]】]$/;
let resultObj = {
  id: 0,
  name: "",
  questions: [],
};
let resultJson = "";

const tpl = `
<div class="question">
  <div class="row">
    问卷ID：<%= id %>
  </div>
  <div class="row">
    问卷名称：<%= name %>
  </div>
  <% for(var i=0, l=questions.length; i<l; ++i){ %>
    <% var item = questions[i]; %>
    <div class="question-wrap">
      <div class="question-title"><%= item.id %>. <%= item.title %>【<%=item.question_type_text %>】</div>
      <% if(item.question_type === 'input'){ %>
        <div class="input">
          <input type="text" name="<%= item.id %>" />
        </div>
      <% }else if(item.question_type === 'radio'){ %>
        <div class="radio">
          <% for(var j=0, k=item.options.length; j<k; ++j){ %>
            <label class="label">
              <input type="radio" name="<%= item.id %>" value="<%= item.options[j].option_id %>" />
              <%= item.options[j].option_id %>.
              <%= item.options[j].option_value %>
            </label>
          <% } %>
        </div>
      <% }else if(item.question_type === 'checkbox'){ %>
        <div class="checkbox">
          <% for(var j=0, k=item.options.length; j<k; ++j){ %>
            <label class="label">
              <input type="checkbox" name="<%= item.id %>" value="<%= item.options[j].option_id %>" />
              <%= item.options[j].option_id %>.
              <%= item.options[j].option_value %>
            </label>
          <% } %>
        </div>
      <% } %>
    </div>
  <% } %>
</div>
`;

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const type_map = {
  填空题: "input",
  单选题: "radio",
  多选题: "checkbox",
};
function getQuestionType(questionType) {
  return type_map[questionType] || "类型错误";
}
function formatQuestion(index, title, typeText, options = null) {
  // console.log(index, title, questionType);
  const questionType = getQuestionType(typeText);
  let question = {
    id: +index,
    title: title,
    question_type: questionType,
    question_type_text: typeText,
  };
  // console.log(options);
  if (options && options.length) {
    let tmpOptions = [];
    options.forEach((item, index) => {
      tmpOptions.push({
        option_id: alphabet[index],
        option_value: item,
      });
    });
    question.options = tmpOptions;
  }
  return question;
}

document.getElementById("btn").addEventListener("click", function () {
  resultObj.id = +document.getElementById("qid").value.trim();
  resultObj.name = document.getElementById("qname").value.trim();

  // 用户输入的字符串
  let text = document.getElementById("text").value;
  // console.log(text);

  // 按空行分割题目
  let questionArr = text.split(regexQuestionSplit);
  // console.log(questionArr);

  let questions = [];
  // 开始对每个题目进行处理
  questionArr.forEach((q) => {
    // 分割每一行
    let rows = q.split(regexQuestionRowSplit);
    // console.log(JSON.stringify(rows));

    // 去掉空行
    rows = rows.filter((item) => item.trim() !== "");
    // console.log(JSON.stringify(rows));

    // 全部去掉前后空格
    rows = rows.reduce((acc, cur) => {
      return [...acc, cur.trim()];
    }, []);
    // console.log(JSON.stringify(rows));

    // 如果是单行，是填空题
    if (rows.length === 1) {
      if (regexTitle1.test(rows[0])) {
        let matches = rows[0].match(regexTitle1);
        // console.log(matches);
        let { index, title } = matches.groups;
        questions.push(formatQuestion(index, title, "填空题"));
      }
    }
    // console.log(questions);

    // 多行，可能是单选或多选
    if (rows.length > 1) {
      // 第一行是标题，其他行是选项
      let [titleRow, ...options] = rows;
      // console.log("titleRow", titleRow);
      // console.log("options", options);

      // 先验证带题目类型的格式
      if (retexTitle2.test(titleRow)) {
        let matches = titleRow.match(retexTitle2);
        //  console.log(matches)
        let { index, title, type } = matches.groups;
        questions.push(formatQuestion(index, title, type, options));
      } else if (regexTitle1.test(titleRow)) {
        // 没有设置类型的，当成单选题
        let matches = titleRow.match(regexTitle1);
        let { index, title } = matches.groups;
        console.log(index, title, options);
        questions.push(formatQuestion(index, title, "单选题", options));
      }
      // console.log(questions);
    }
  });

  resultObj.questions = questions;
  resultJson = JSON.stringify(resultObj);
  console.log(resultObj);
  document.getElementById("json-preview").innerHTML =
    prettyPrintJson.toHtml(resultObj);

  document.getElementById("html-preview").innerHTML = gotpl.render(
    tpl,
    resultObj
  );
});

document.getElementById("copy").onclick = () => {
  copy(resultJson);
  alert("已复制到剪贴板");
};
