import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";
import GlobalFooter from "../../components/GlobalFooter";
import headerBg from "../../assets/headerBg.jpg";


/**
 * 主页
 */
export default () => {
  return (
    <View className="indexPage">
      <View className="at-article__h1 title">MBTI性格测试</View>
      <View className="at-article__h2 subTitle">
        只需两分钟，得到准确性格分析
      </View>
      <AtButton
        type="primary"
        circle
        className="enterBtn"
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/doQuestion/index",
          });
        }}
      >
        开始测试
      </AtButton>
      <Image className="headerBg" src={headerBg} />
      <GlobalFooter />
    </View>
  );
};
