<template>
  <div class="bg-background">
    <main
      class="h-[calc(100vh-88px)] mt-[120px] lg:flex md:h-[calc(100vh-120px)] overflow-y-auto"
    >
      <div
        class="fixed top-[120px] left-0 h-full w-1/2 bg-cover bg-bottom hidden lg:block lg:bg-[url('@/assets/img/pc/register.png')]"
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
                  v-model="userInfo.email"
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
                  v-model="userInfo.password"
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
                  v-model="userInfo.checkPassword"
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
                  v-model="userInfo.name"
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
                  v-model="userInfo.phone"
                />
              </div>

              <div class="mb-4">
                <label
                  for="birthday"
                  class="text-white text-sm lg:text-base font-bold block mb-2"
                  >生日</label
                >
                <div class="grid grid-cols-3 gap-2">
                  <select
                    name="selectYear"
                    id="selectYear"
                    class="p-4 text-sm border border-gray-300 rounded-md me-2"
                    v-model="userBirthday.year"
                  >
                    <option value="" selected disabled>年</option>
                    <option
                      v-for="year in yearOptions"
                      :value="year"
                      :key="year"
                    >
                      {{ year }}
                    </option>
                  </select>

                  <select
                    name="selectMonth"
                    id="selectMonth"
                    class="p-4 text-sm border border-gray-300 rounded-md me-2"
                    v-model="userBirthday.month"
                  >
                    <option value="" selected disabled>月</option>
                    <option v-for="month in 12" :value="month" :key="month">
                      {{ month }}
                    </option>
                  </select>

                  <select
                    name="selectDay"
                    id="selectDay"
                    class="p-4 text-sm border border-gray-300 rounded-md"
                    v-model="userBirthday.day"
                  >
                    <option value="" selected disabled>日</option>
                    <option v-for="day in 31" :value="day" :key="day">
                      {{ day }}
                    </option>
                  </select>
                </div>
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
                    v-model="userInfo.address.city"
                  >
                    <option value="" selected disabled>請選擇縣市</option>
                    <option v-for="city in cities" :key="city" :value="city">
                      {{ city }}
                    </option>
                  </select>
                  <select
                    name="area"
                    id="area"
                    class="w-full p-4 text-sm border border-gray-300 rounded-md"
                    v-model="userInfo.address.country"
                  >
                    <option value="" selected disabled>請選擇鄉鎮區</option>
                    <option
                      v-for="country in countryOptions"
                      :value="country"
                      :key="country"
                    >
                      {{ country }}
                    </option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="請輸入詳細地址"
                  class="w-full p-4 text-sm lg:text-base border border-gray-300 rounded-md"
                  v-model="userInfo.address.detail"
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
import { ref, reactive, computed, onMounted, watchEffect, inject } from 'vue';
import { ZipCodeMap } from '@/utilities/TwZipcode';
import App from '@/App.vue';

const axios: any = inject('axios');
const step = ref(1);

/**
 * 按鈕事件
 * @returns void
 */
const handleClick = (): void => {
  if (step.value === 1) {
    step.value = 2;
  } else {
    register();
  }
};

/* 使用者資訊 */
interface UserInfo {
  name: string;
  email: string;
  password: string;
  checkPassword: string;
  phone: string;
  birthday: string;
  address: {
    zipcode: number | undefined;
    detail: string;
    city: string;
    country: string;
  };
}
const userInfo: UserInfo = reactive({
  name: '',
  email: '',
  password: '',
  checkPassword: '',
  phone: '',
  birthday: '',
  address: {
    zipcode: undefined,
    detail: '',
    city: '',
    country: '',
  },
});

/**
 * Step2 狀態樣式
 * @returns object
 */
const step2Class = computed(() => {
  return {
    'text-neutral-60': step.value === 1,
    'border-neutral-60': step.value === 1,
    'border-[1px]': step.value === 1,
    'text-white': step.value === 2,
    'bg-primary-100': step.value === 2,
  };
});

/**
 * 按鈕樣式
 * @returns object
 */
const buttonClass = computed(() => {
  return {
    'bg-neutral-40': step.value === 1,
    'bg-primary-120': step.value === 2,
    'text-neutral-60': step.value === 1,
    'text-white': step.value === 2,
  };
});

/**
 * 生日年份選項
 * @returns number[]
 */
const generateYearOptions = (): number[] => {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let i = currentYear; i >= currentYear - 100; i--) {
    years.push(i);
  }

  return years;
};
const yearOptions = ref(generateYearOptions());

interface Birthday {
  year: string;
  month: string;
  day: string;
}
const userBirthday: Birthday = reactive({
  year: '',
  month: '',
  day: '',
});

/**
 * 縣市列表選項，取自 ZipCodeMap，並只包含獨立的城市名稱。
 * @returns string[]
 */
const cities = [
  ...new Set(ZipCodeMap.map((item: { city: string }) => item.city)),
];

/**
 * 鄉鎮市列表選項，取自 ZipCodeMap，並只包含指定城市的鄉鎮市名稱。
 * @returns string[]
 */
const countries = (city: string): string[] => {
  return ZipCodeMap.filter((item) => item.city === city).map(
    (item) => item.county
  );
};
const countryOptions = ref<string[]>();

/**
 * 監聽縣市變動，更新鄉鎮市選項
 */
watchEffect(() => {
  countryOptions.value = countries(userInfo.address.city);
});

/**
 * 完成註冊
 * @returns void
 */
const register = async (): Promise<void> => {
  try {
    const res = await axios.post('user/signup', {
      ...userInfo,
      birthday: `${userBirthday.year}/${userBirthday.month}/${userBirthday.day}`,
    });
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  generateYearOptions();
});
</script>
