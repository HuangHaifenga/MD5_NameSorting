<template>
     <div>
          <div class="box" v-focus>
               <!-- <font-awesome-icon icon="fab fa-d-and-d" class="fab" /> -->
               <font-awesome-icon icon="fab fa-the-red-yeti" class="fab" />
          </div>
          <!-- <input type="text" v-model="text" /> -->
          <!-- <input type="password" v-model="password" /> -->
          <!-- <button @click="fun(text)">提交</button> -->
     </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import md5 from "js-md5";
import md516 from "../hooks/md5";
import Pinyin from 'js-pinyin'
const originData = ['上饶', '上海', '深圳', '广州', '武汉', '十堰', '天津', '北京']
const password = ref();
const text = ref();
const fun = (text) => {
     console.log('%c [ text ]-22', 'font-size:13px; background:pink; color:#bf2c9f;', text)
     // Pinyin.setOptions({ checkPolyphone: false, charCase: 0 });
     // const Initial = Pinyin.getFullChars(text).slice(0, 1)
     // alert(Initial)

     // 转换为16位
     // const sixteenBitMd5 = md5(text).substring(8, 24);
     // console.log('%c [ sixteenBitMd5 ]-25', 'font-size:13px; background:pink; color:#bf2c9f;', sixteenBitMd5)
};

function sortByFirstLetter(origin) {

     // 将目标数据进行排序
     origin = origin.sort((pre, next) => Pinyin.getFullChars(pre).localeCompare(Pinyin.getFullChars(next)))
     const newArr = []
     origin.map(item => {
          // 取首字母
          const key = Pinyin.getFullChars(item).charAt(0)
          const index = newArr.findIndex((subItem) => {

               subItem.key === key
          })
          if (index < 0) {
               newArr.push({
                    key: key,
                    list: [item]
               })
          } else {
               newArr[index].list.push(item)
          }
     })
     return newArr
}






console.log(sortByFirstLetter(originData))

</script>

<style scoped>
.box {
     z-index: 999;
     pointer-events: all;
     border: 1px solid red;
     width: 50rem;
     height: 10rem;
     margin: 0 auto;
     font-size: 120px;
     text-align: center;

     i {
          font-size: 80px;

     }
}
</style>
