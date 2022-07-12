<template>
  <div class="relative px-2 bg-[#242424] min-h-screen overflow-auto font-poppins">
    <div @click="$router.push('/')" class="absolute right-5 bottom-5 h-[100px] cursor-pointer">
      <img class="h-[100px]" src="asset/section-one/circle2.png"/>
    </div>
    <img class="absolute top-[308px] left-[120px] h-[40px]" src="asset/section-one/hcircle1.png"/>
    <img class="absolute top-[108px] left-[320px] h-[40px]" src="asset/section-one/circle1.png"/>
    <div class="z-50 absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2">
      <div class="mb-6 flex justify-center">
        <span class="text-white text-[45px]">My Certification Progress 📜</span>
      </div>
      <div  class="flex flex-row justify-center items-center space-x-10 h-full w-full">
        <div @click="openModal(item)" v-for="item in certifs" :key="certifs.name" class="transition ease-in-out delay-450 hover:bg-slate-300 item w-[240px] h-[350px] cursor-pointer">
          <div class="-translate-y-5">
            <img class="h-[240px]" :src="`asset/certif/${item.no}.png`" />
          </div>
          <div class="flex items-center">
            <p class="font-light ">{{item.no}}</p>
            <img class="ml-1.5 h-0.5 w-[100px]" src="asset/certif/line.png"/>
          </div>
            <p class="mt-3">{{item.name}}</p>
          <div class="flex justify-between">
            <p class="text-sm font-light">Certification</p>
            <p class="text-sm font-light">{{item.date}}</p>
          </div>

        </div>
      </div>


      <div class="mt-10 flex flex-row justify-center items-center space-x-10 h-full w-full">
        <div v-for="item in noCertifs" :key="noCertifs.name" class="item w-[240px] h-[350px] cursor-wait">
          <div class="-translate-y-5">
            <img class="h-[240px]" :src="`asset/certif/${item.no}.png`" />
          </div>
          <div class="flex items-center">
            <p class="font-light ">{{item.no}}</p>
            <img class="ml-1.5 h-0.5 w-[100px]" src="asset/certif/line.png"/>
          </div>
          <p class="mt-3">{{item.name}}</p>
          <div class="flex justify-between">
            <p class="text-sm font-light">Certification</p>
            <p class="text-sm font-light text-red-700">{{item.date}}</p>
          </div>
        </div>
      </div>
    </div>
<!--<button @click="openModal">sikdgsdf</button>-->
    <s-certif  v-show="showModal" @close-modal="showModal = false" :nameStack="dataStack"></s-certif>
  </div>
</template>

<script lang="ts">
export { default } from './certification.controller'
</script>
