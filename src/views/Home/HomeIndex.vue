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
    <div>
      <h2 class="text-5xl text-primary-100 mb-10 md:columns-2">
        最新<br />消息
      </h2>
      <span
        class="h-[1px] w-[20%] bg-black group-hover:bg-white inline-block align-middle absolute right-0 top-1/2 transform translate-y-[-50%] translate-x-[-50%]"
      ></span>
    </div>

    <ul>
      <li class="md:flex mb-10" v-for="(news, idx) in newsList" :key="idx">
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
  </section>

  <!-- 關於我們 -->
  <section class="bg-background py-20 md:py-[120px] relative">
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
            class="absolute top-[12%] left-[10%] right-[5%] md:top-[5%] md:w-9/12 md:relative p-6 lg:p-20 border-white border-[1px] rounded-[40px] rounded-br-none bg-gradient-to-b from-[#140F0ACC] to-[#BE9C7CCC]"
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

  <!-- 查看房間 -->
  <section class="bg-background py-20 md:py-[120px]"></section>

  <!-- 佳餚美饌 -->
  <section></section>

  <!-- 交通方式 -->
  <section></section>

  <!-- Footer -->
  <footer></footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import newsImg1 from '@/assets/img/mobile/news1.png';
import newsImg2 from '@/assets/img/mobile/news2.png';
import newsImg3 from '@/assets/img/mobile/news3.png';

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
</script>
