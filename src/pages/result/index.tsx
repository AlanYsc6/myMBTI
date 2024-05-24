import {View,Image} from "@tarojs/components";
import {AtButton} from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";
import GlobalFooter from "../../components/GlobalFooter";
import questionResults from "../../data/question_results.json";
import headerBg from "../../assets/headerBg.jpg";
import {getBestQuestionResult} from "../../utils/bizUtils";
import questions from "../../data/questions.json";
/**
 * 查看结果页面
 */
export default () => {
  //获取答案列表
  const answerList = Taro.getStorageSync("answerList");
  if(!answerList||answerList.length<1){
    Taro.showToast({
      title: "答案为空",
      icon: "error",
      duration: 3000,
    })
  }
  // 获取结果
  const result = getBestQuestionResult(answerList,questions,questionResults)

  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h3 subTitle">{result.resultDesc}</View>
      <AtButton
        type="primary"
        size="normal"
        className="enterBtn"
        circle
        onClick={() => {
          Taro.reLaunch({
            url: "/pages/index/index",
          });
        }}
      >
        返回主页
      </AtButton>
      <Image src={headerBg} style={{ width: "100%" }} mode="aspectFill" />
      <GlobalFooter />
    </View>
  );
};
