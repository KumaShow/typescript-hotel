<template>
  <section
    class="h-screen bg-[url('@/assets/img/mobile/banner.png')] md:bg-[url('@/assets/img/pc/banner.png')] bg-cover bg-center flex items-center justify-between after:bg-black after:content('') after:absolute after:inset-0 after:opacity-60 after:z-0')"
  >
    <div class="container z-10 md:flex justify-between">
      <div class="text-center md:text-start mb-10 md:mb-0 md:w-1/3">
        <h1 class="text-2xl md:text-4xl text-primary-100">
          享樂酒店<br />
          <span class="text-base md:text-xl">Enjoyment Luxury Hotel</span>
        </h1>
        <div
          class="h-[83px] w-[2px] mx-auto md:m-0 mt-5 md:h-[2px] md:w-full md:mt-10 bg-gradient-to-b from-[#BE9C7C] to-white md:bg-gradient-to-r"
        ></div>
      </div>

      <!-- TODO: 背景漸層 -->
      <div class="text-white border-t-[1px] border-r-[1px] rounded-[40px]">
        <div class="mb-10">
          <h2 class="text-5xl md:text-display mb-6">高雄<br />豪華住宿之選</h2>
          <span class="text-base md:text-3xl">
            我們致力於為您提供無與倫比的奢華體驗與優質服務
          </span>
        </div>
        <button
          class="group bg-white hover:bg-primary-100 p-5 text-black hover:text-white w-full rounded-lg font-bold relative"
        >
          立即訂房
          <span
            class="h-[1px] w-[20%] bg-black group-hover:bg-white inline-block align-middle absolute right-0 top-1/2 transform translate-y-[-50%] translate-x-[-50%]"
          ></span>
        </button>
      </div>
    </div>
  </section>

  <!-- 最新消息 -->
  <section class="container my-20 md:my-[120px] md:flex">
    <div class="lg:grid lg:grid-cols-12 gap-6">
      <div class="col-span-2 mb-10 lg:mb-0">
        <h2 class="text-5xl text-primary-100 mb-6 md:mb-10">最新<br />消息</h2>
        <div
          class="h-[2px] rounded-sm w-40 bg-gradient-to-r from-[#BE9C7C] to-white"
        ></div>
      </div>

      <ul class="col-span-10">
        <li
          class="md:flex gap-6 mb-10"
          v-for="(news, idx) in newsList"
          :key="idx"
        >
          <div class="mb-6 md:w-5/12">
            <img
              class="object-cover rounded-lg md:h-[300px] md:w-[474px] mx-auto"
              :src="news.image"
              :alt="news.title"
            />
          </div>
          <div class="md:w-7/12 flex flex-col justify-center">
            <h3 class="text-2xl mb-2 md:mb-6">{{ news.title }}</h3>
            <p class="text-neutral-80">
              {{ news.description }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <!-- 關於我們 -->
  <section class="bg-background pt-20 md:py-[120px] relative">
    <div class="w-[100px] md:w-[200px] absolute -top-10 left-6 md:-top-[18%]">
      <img src="@/assets/img/mobile/dot.png" alt="" />
    </div>
    <div
      class="bg-center bg-no-repeat bg-cover bg-[url('@/assets/img/mobile/about.png')] md:bg-[url('@/assets/img/pc/about.png')]"
    >
      <div class="p-6 text-white relative h-[87vh] md:h-[60vh]">
        <!-- TODO: 背景模糊 -->
        <div class="container md:flex">
          <div
            class="absolute top-[12%] left-[10%] right-[5%] md:top-[5%] md:w-9/12 md:relative p-6 lg:p-20 border-white border-[1px] rounded-[40px] rounded-br-none bg-gradient-to-b from-[#140F0ACC] to-[rgba(190,156,124,0.8)]"
          >
            <div class="flex items-center mb-10">
              <h2 class="text-5xl me-10">關於<br />我們</h2>
              <div class="h-[2px] grow md:grow-0 md:w-40 bg-white"></div>
            </div>

            <p class="mb-4">
              享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。<br />
              我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
            </p>

            <p class="mb-4">
              我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。<br />
              我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
            </p>

            <p class="mb-4">
              在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
            </p>

            <p>
              享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TODO: 查看房間 -->
  <section class="bg-background py-20 md:py-[120px] relative">
    <div class="container md:ml-0 md:pl-0">
      <swiper-container>
        <template v-for="slide in roomList" :key="slide.image">
          <swiper-slide>
            <div class="md:flex md:flex-row-reverse">
              <div class="md:absolute left-0">
                <img :src="slide.image" :alt="slide.title" />
              </div>
              <div class="md:1/2">
                <div class="text-white mt-5 md:mt-6">
                  <h3 class="text-4xl">{{ slide.title }}</h3>
                  <p class="mt-4">{{ slide.description }}</p>
                  <p class="text-3xl mt-7 md:mt-10">{{ slide.price }}</p>
                </div>
                <div class="mt-7 md:mt-10">
                  <button
                    type="button"
                    class="text-black font-bold bg-white rounded-lg p-5 md:p-10 w-full hover:bg-primary-100 hover:text-white"
                  >
                    查看更多
                  </button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </template>
      </swiper-container>
    </div>
  </section>

  <!-- 佳餚美饌 -->
  <section class="py-20 md:py-[120px] relative">
    <img
      src="@/assets/img/pc/line.png"
      alt=""
      class="absolute top-14 left-0 xl:w-40 h-[103%] hidden xl:block"
    />
    <div class="container">
      <div class="flex items-center mb-10 md:mb-20">
        <h2 class="text-5xl text-primary-100 me-10">佳餚<br />美饌</h2>
        <div
          class="h-[2px] rounded-sm w-40 bg-gradient-to-r from-[#BE9C7C] to-white"
        ></div>
      </div>

      <swiper-container
        :slides-per-view="3.5"
        :space-between="24"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
        :breakpoints="{
          320: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }"
      >
        <template v-for="food in foodList" :key="food.title">
          <swiper-slide
            class="w-4/12 h-[600px] relative rounded-lg overflow-hidden"
          >
            <picture>
              <source media="(min-width: 768px)" :srcset="food.imagePc" />
              <img
                :src="food.imageMobile"
                :alt="food.title"
                class="h-full w-full object-cover"
              />
            </picture>

            <div
              class="absolute bottom-0 w-full text-white p-6 bg-gradient-to-t from-background to-white"
            >
              <div class="flex items-center mb-6 font-bold">
                <h5 class="me-auto text-xl">{{ food.title }}</h5>
                <span class="me-4">{{ food.day }}</span>
                <span>{{ food.time }}</span>
              </div>
              <p class="text-start">
                {{ food.description }}
              </p>
            </div>
          </swiper-slide>
        </template>
      </swiper-container>
    </div>
  </section>

  <!-- 交通方式 -->
  <section class="py-20 md:py-[120px] bg-background text-white">
    <div class="container">
      <div class="">
        <div class="flex items-center mb-10 md:mb-20">
          <h2 class="text-5xl text-primary-100 me-10">交通<br />方式</h2>
          <div
            class="h-[2px] rounded-sm w-40 bg-gradient-to-r from-[#BE9C7C] to-white"
          ></div>
        </div>

        <p class="font-bold mb-4">{{ contact.address }}</p>

        <picture class="w-full">
          <source media="(min-width: 768px)" srcset="@/assets/img/pc/map.png" />
          <img
            src="@/assets/img/mobile/map.png"
            alt="地圖"
            class="h-full w-full object-cover"
          />
        </picture>

        <ul class="mt-6 flex flex-col md:flex-row gap-6">
          <template v-for="item in traffic.infos" :key="item">
            <li>
              <app-icon
                :icon="item.icon"
                class="text-[#BE9C7C] mb-2 w-12 h-12 md:w-20 md:h-20"
              />
              <h3 class="mb-2 font-bold md:mb-4">{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </section>

  <!-- 裝飾圖 -->
  <div class="bg-background">
    <picture>
      <source
        media="(min-width: 768px)"
        srcset="@/assets/img/pc/line2.png"
        sizes="裝飾線"
      />
      <img src="@/assets/img/mobile/line.png" alt="裝飾線" />
    </picture>
  </div>

  <!-- Footer -->
  <footer class="bg-background py-20 md:pt-20 md:pb-[120px] text-white">
    <div class="container">
      <div class="md:flex justify-between">
        <div class="mb-10 md:mb-0">
          <img
            src="@/assets/img/pc/logo.png"
            alt="享樂酒店 Logo"
            class="w-48 mb-10"
          />
          <ul class="flex gap-x-4">
            <li class="border rounded-full">
              <a href="" class="p-2 block" @click.prevent>
                <app-icon icon="jam:line" width="24" height="24" />
              </a>
            </li>
            <li class="border rounded-full">
              <a href="" class="p-2 block" @click.prevent>
                <app-icon icon="mingcute:ins-line" width="24" height="24" />
              </a>
            </li>
          </ul>
        </div>

        <ul
          class="md:flex md:flex-col md:flex-wrap md:gap-x-20 md:gap-y-10 md:max-h-[200px] w-96 overflow-hidden"
        >
          <template v-for="(item, index) in contact.infos" :key="item.title">
            <li :class="getItemClass(index)" class="">
              <p class="font-bold">{{ item.title }}</p>
              <a :href="item.href">{{ item.text }}</a>
            </li>
          </template>
        </ul>
      </div>

      <div class="mt-20 md:flex md:justify-between">
        <p>{{ contact.address }}</p>
        <p class="mt-4 md:mt-0">{{ contact.copyRight }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import newsImg1 from '@/assets/img/mobile/news1.png';
import newsImg2 from '@/assets/img/mobile/news2.png';
import newsImg3 from '@/assets/img/mobile/news3.png';
import roomImg1 from '@/assets/img/mobile/room1.png';
import roomImg2 from '@/assets/img/mobile/room2-1.png';
import roomImg3 from '@/assets/img/mobile/room3-1.png';
import foodImgPc1 from '@/assets/img/pc/food1.png';
import foodImgMobile1 from '@/assets/img/mobile/food1.png';
import foodImgPc2 from '@/assets/img/pc/food2.png';
import foodImgMobile2 from '@/assets/img/mobile/food2.png';
import foodImgPc3 from '@/assets/img/pc/food3.png';
import foodImgMobile3 from '@/assets/img/mobile/food3.png';
import foodImgPc4 from '@/assets/img/pc/food4.png';
import foodImgMobile4 from '@/assets/img/mobile/food4.png';
import foodImgPc5 from '@/assets/img/pc/food5.png';
import foodImgMobile5 from '@/assets/img/mobile/food5.png';

/* 最新消息 List */
const newsList = ref([
  {
    image: newsImg1,
    title: '秋季旅遊，豪華享受方案',
    description:
      '秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。',
  },
  {
    image: newsImg2,
    title: '輕鬆住房專案',
    description:
      '我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。',
  },
  {
    image: newsImg3,
    title: '耶誕快樂，住房送禮',
    description:
      '聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！',
  },
]);

/* Room Swiper Slide List */
const roomList = ref([
  {
    image: roomImg1,
    title: '尊爵雙人房',
    description:
      '享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。',
    price: 10000,
  },
  {
    image: roomImg2,
    title: '豪華套房',
    description: '豪華套房是我們酒店的招牌房型，提供給您最尊貴的住宿體驗。',
    price: 15000,
  },
  {
    image: roomImg3,
    title: '商務單人房',
    description: '商務單人房是為商務旅客量身打造的房型，提供您舒適的住宿環境。',
    price: 8000,
  },
]);

/* 佳餚美饌 List */
const foodList = ref([
  {
    imagePc: foodImgPc1,
    imageMobile: foodImgMobile1,
    title: '海霸',
    day: 'SUN-MON',
    time: '11:00 - 20:30',
    description:
      '以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。',
  },
  {
    imagePc: foodImgPc2,
    imageMobile: foodImgMobile2,
    title: '日食',
    day: 'SUN-MON',
    time: '17:00 - 22:00',
    description:
      '為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。',
  },
  {
    imagePc: foodImgPc3,
    imageMobile: foodImgMobile3,
    title: '山臻',
    day: 'SUN-MON',
    time: '11:30 - 20:30',
    description:
      '帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。',
  },
  {
    imagePc: foodImgPc4,
    imageMobile: foodImgMobile4,
    title: '月永',
    day: 'SUN-MON',
    time: '11:00 - 20:00',
    description:
      '從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。',
  },
  {
    imagePc: foodImgPc5,
    imageMobile: foodImgMobile5,
    title: '天潮',
    day: 'SUN-MON',
    time: '14:00 - 19:30',
    description:
      '我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。',
  },
]);

/* 交通方式 */
const traffic = ref({
  address: '台灣高雄市 No.1 號',
  map: '@/assets/img/mobile/map.png',
  infos: [
    {
      icon: 'mdi:car',
      title: '自行開車',
      description:
        '如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。',
    },
    {
      icon: 'mdi:train',
      title: '高鐵/火車',
      description:
        '如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。',
    },
    {
      icon: 'mdi:car-side',
      title: '禮賓車服務',
      description:
        '承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567',
    },
  ],
});

/* Footer 聯絡資訊 */
const contact = ref({
  address: '77777 台灣桃園市中壢區 No.1 號',
  copyRight: '© 享樂酒店 2023 All Rights Reserved.',
  infos: [
    {
      title: 'TEL',
      href: 'tel:+886-7-1234567',
      text: '+886-7-1234567',
    },
    {
      title: 'FAX',
      href: 'tel:+886-7-1234567',
      text: '+886-7-1234567',
    },
    {
      title: 'MAIL',
      href: 'mailto: enjoy@hotel.com',
      text: 'enjoy@hotel.com',
    },
    {
      title: 'WEB',
      href: 'https://github.com/KumaShow/typescript-hotel',
      text: 'GitHub Repo',
    },
  ],
});

/**
 * 設定聯絡資訊 Class 樣式，最後一項沒有 Margin Bottom
 */
const getItemClass = (index: number) => {
  return {
    'mb-4': index !== contact.value.infos.length - 1,
    'last:mb-0': index === contact.value.infos.length - 1,
  };
};
</script>
