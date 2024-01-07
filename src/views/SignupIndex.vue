<template>
  <div class="bg-background">
    <main
      class="h-[calc(100vh-88px)] lg:flex md:h-[calc(100vh-120px)] overflow-y-auto"
    >
      <div
        class="fixed top-[120px] left-0 h-full w-1/2 bg-cover bg-bottom bg-none lg:bg-[url('@/assets/img/pc/register.png')]"
      ></div>

      <div
        class="container lg:mb-24 lg:w-1/2 lg:flex lg:justify-center lg:fixed lg:top-[120px] lg:right-0 overflow-y-auto h-[calc(100vh-120px)]"
      >
        <div class="w-full lg:w-1/2">
          <!-- 標題 -->
          <div class="mb-4">
            <span class="text-primary-100 text-sm lg:text-base font-bold"
              >享樂酒店，誠摯歡迎</span
            >
            <h1 class="text-3xl text-white">立即註冊</h1>
          </div>
          <!-- Step -->
          <div class="mb-10 py-4 flex">
            <div>
              <span
                class="text-white text-sm lg:text-base font-bold bg-primary-100 rounded-full w-8 h-8 mx-auto flex items-center justify-center"
              >
                <!-- TODO: check icon 更改 -->
                {{ step === 1 ? '1' : '✓' }}
              </span>
              <span class="text-white text-sm lg:text-base font-bold"
                >輸入信箱及密碼</span
              >
            </div>
            <div
              class="flex-1 border-[1px] border-neutral-60 rounded-[10px] h-[1px] my-auto mx-2"
            ></div>
            <div>
              <span
                class="rounded-full w-8 h-8 mx-auto flex items-center justify-center font-bold"
                :class="step2Class"
              >
                2
              </span>
              <span
                class="text-sm lg:text-base font-bold"
                :class="step === 2 ? 'text-white' : 'text-neutral-60'"
              >
                填寫基本資料
              </span>
            </div>
          </div>
          <!-- form -->
          <form>
            <!-- Step 1 -->
            <div v-if="step === 1">
              <div class="mb-4">
                <label
                  for="email"
                  class="text-white text-sm lg:text-base font-bold block mb-2"
                  >電子信箱</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="hello@exsample.com"
                  class="w-full p-4 text-sm lg:text-base border border-gray-300 rounded-md"
                />
              </div>

              <div class="mb-4">
                <label
                  for="password"
                  class="text-white text-sm lg:text-base font-bold block mb-2"
                  >密碼</label
                >
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="請輸入密碼"
                  class="w-full p-4 text-sm lg:text-base border border-gray-300 rounded-lg"
                />
              </div>

              <div class="mb-4">
                <label
                  for="checkPassword"
                  class="text-white text-sm lg:text-base font-bold block mb-2"
                  >確認密碼</label
                >
                <input
                  type="password"
                  id="checkPassword"
                  name="checkPassword"
                  placeholder="請再輸入一次密碼"
                  class="w-full p-4 text-sm border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <!-- Step 2 -->
            <div v-else>
              <div class="mb-4">
                <label
                  for="name"
                  class="text-white text-sm lg:text-base font-bold block mb-2"
                  >姓名</label
                >
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="請輸入姓名"
                  class="w-full p-4 text-sm border border-gray-300 rounded-md"
                />
              </div>
              <div class="mb-4">
                <label
                  for="phone"
                  class="text-white text-sm lg:text-base font-bold block mb-2"
                  >手機號碼</label
                >
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="請輸入手機號碼"
                  class="w-full p-4 text-sm border border-gray-300 rounded-md"
                />
              </div>
              <!-- TODO: 使用日曆套件 -->
              <div class="mb-4">
                <label
                  for="birthday"
                  class="text-white text-sm lg:text-base font-bold block mb-2"
                  >生日</label
                >
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  placeholder="請輸入生日"
                  class="w-full p-4 text-sm border border-gray-300 rounded-md"
                />
              </div>

              <div class="mb-4">
                <label
                  for="address"
                  class="text-white text-sm lg:text-base font-bold block mb-2"
                  >地址</label
                >
                <div class="flex mb-4">
                  <select
                    name="city"
                    id="city"
                    class="w-full p-4 text-sm border border-gray-300 rounded-md me-2"
                  >
                    <option value="台北市">台北市</option>
                    <option value="新北市">新北市</option>
                    <option value="桃園市">桃園市</option>
                    <option value="台中市">台中市</option>
                    <option value="台南市">台南市</option>
                    <option value="高雄市">高雄市</option>
                  </select>
                  <select
                    name="area"
                    id="area"
                    class="w-full p-4 text-sm border border-gray-300 rounded-md"
                  >
                    <option value="中正區">中正區</option>
                    <option value="大同區">大同區</option>
                    <option value="中山區">中山區</option>
                    <option value="松山區">松山區</option>
                    <option value="大安區">大安區</option>
                    <option value="萬華區">萬華區</option>
                    <option value="信義區">信義區</option>
                    <option value="士林區">士林區</option>
                    <option value="北投區">北投區</option>
                    <option value="內湖區">內湖區</option>
                    <option value="南港區">南港區</option>
                    <option value="文山區">文山區</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="請輸入詳細地址"
                  class="w-full p-4 text-sm lg:text-base border border-gray-300 rounded-md"
                />
              </div>

              <!-- TODO: 客製 checkbox -->
              <div>
                <input type="checkbox" id="agree" name="agree" />
                <label
                  for="agree"
                  class="text-white text-sm lg:text-base font-bold ms-2"
                >
                  我已閱讀並同意本網站個資使用規範
                </label>
              </div>
            </div>

            <div class="mt-10">
              <button
                type="button"
                class="w-full font-bold py-4 rounded-lg hover:bg-primary-120 hover:text-white transition duration-300"
                :class="buttonClass"
                @click="handleClick"
              >
                {{ step === 1 ? '下一步' : '完成註冊' }}
              </button>
            </div>
          </form>

          <div class="mt-4">
            <span class="text-white text-sm">已經有會員了嗎？</span>
            <router-link
              to="/login"
              class="text-primary-100 text-sm underline ms-2"
              >立即登入</router-link
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const step = ref(1);

/* 按鈕事件 */
const handleClick = () => {
  if (step.value === 1) {
    step.value = 2;
  } else {
    register();
  }
};

/* 完成註冊 */
const register = () => {
  console.log('註冊完成');
};

/* Step2 狀態樣式 */
const step2Class = computed(() => {
  return {
    'text-neutral-60': step.value === 1,
    'border-neutral-60': step.value === 1,
    'border-[1px]': step.value === 1,
    'text-white': step.value === 2,
    'bg-primary-100': step.value === 2,
  };
});

const buttonClass = computed(() => {
  return {
    'bg-neutral-40': step.value === 1,
    'bg-primary-120': step.value === 2,
    'text-neutral-60': step.value === 1,
    'text-white': step.value === 2,
  };
});
</script>

<style scoped></style>
