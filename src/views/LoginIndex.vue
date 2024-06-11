<template>
  <div class="bg-background">
    <!-- <main class="h-[calc(100vh-88px)] lg:flex md:h-[calc(100vh-120px)]"> -->
    <main class="h-screen lg:flex">
      <!-- <div
        class="h-[54px] bg-cover bg-no-repeat bg-[url('@/assets/img/mobile/line.png')]"
      ></div> -->
      <!-- <img src="@/assets/img/mobile/line.png" alt="" /> -->
      <div
        class="w-1/2 bg-cover bg-center bg-[url('@/assets/img/pc/register.png')]"
      ></div>
      <div class="container lg:w-1/2 lg:flex lg:items-center lg:justify-center">
        <div class="w-full lg:w-1/2">
          <div class="mb-10">
            <span class="text-primary-100 text-sm font-bold">
              享樂酒店，誠摯歡迎
            </span>
            <h1 class="text-3xl text-white">立即開始旅程</h1>
          </div>

          <form>
            <div class="mb-4">
              <label for="email" class="text-white block mb-2">電子信箱</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="請輸入電子信箱"
                class="w-full p-4 text-sm border border-gray-300 rounded-md"
                v-model="formField.email"
              />
            </div>
            <div class="mb-4">
              <label for="password" class="text-white block mb-2">密碼</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="請輸入密碼"
                class="w-full p-4 text-sm border border-gray-300 rounded-lg"
                v-model="formField.password"
              />
            </div>
            <div class="flex">
              <div>
                <!-- TODO: 客製 checkbox 顏色 -->
                <input
                  type="checkbox"
                  name="memoryAccount"
                  id="memoryAccount"
                  class="rounded-lg"
                />
                <label for="memoryAccount" class="text-white text-sm ms-2"
                  >記住帳號</label
                >
              </div>
              <div class="ms-auto">
                <a href="#" class="text-primary-100 text-sm underline"
                  >忘記密碼?</a
                >
              </div>
            </div>
            <div class="mt-10">
              <button
                type="button"
                class="w-full bg-neutral-40 text-neutral-60 font-bold py-4 rounded-lg hover:bg-primary-120 hover:text-white transition duration-300"
                @click.prevent="login"
              >
                會員登入
              </button>
            </div>
          </form>

          <div class="mt-4">
            <span class="text-white text-sm">沒有會員嗎？</span>
            <router-link
              to="/signup"
              class="text-primary-100 text-sm underline ms-2"
            >
              前往註冊
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive, inject } from 'vue';
import * as alert from '@/utilities/sweetAlert2';
// import Swal from 'sweetalert2';

const axios: any = inject('axios');
const Swal: any = inject('$swal');

interface LoginForm {
  email: string;
  password: string;
}

const formField = reactive<LoginForm>({
  email: '',
  password: '',
});

const login = async () => {
  // alert.deleteAlert({ title: '是否刪除?', handleConfirm: deleteData });
  // try {
  //   const response = await axios.post('user/login', formField);
  //   console.log(response);
  // } catch (error) {
  //   console.error(error);
  // }
};

const deleteData = (): void => {
  console.log('刪除成功');
};
</script>

<style scoped></style>
