<template>
  <div class="relative px-2 bg-[#242424] min-h-screen overflow-auto font-poppins">
    <div @click="$router.push('/')" class="absolute left-5 bottom-5 h-[100px] cursor-pointer">
      <img class="h-[100px]" src="asset/section-one/circle2.png"/>
    </div>
    <img class="absolute top-[388px] left-[700px] h-[40px]" src="asset/section-one/hcircle1.png"/>
    <img class="absolute top-[508px] left-[320px] h-[40px]" src="asset/section-one/line1.png"/>
    <img class="absolute top-[108px] right-[620px] h-[40px]" src="asset/section-one/circle1.png"/>
    <img class="absolute rotate-90 bottom-0 left-[620px] h-[100px]" src="asset/section-one/dots.png"/>
    <img class="absolute rotate-90 top-[90px] right-[120px] h-[100px]" src="asset/section-one/network.png"/>
    <img class="absolute rotate-180 top-0 left-0 h-[200px]" src="asset/section-one/town.png"/>
    <img class="absolute right-0 bottom-0 h-[400px]" src="asset/career/back.png"/>
    <img class="absolute right-0 bottom-0 h-[700px]" src="asset/career/people.png"/>
    <div class="z-50 absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2">
      <div class="mb-6 flex justify-center">
        <span class="text-white text-[55px]">My Recent Career Journey 👨‍💻</span>
      </div>
      <div  class="flex flex-wrap justify-center space-x-10 items-center h-full w-full">
        <div @click="openModal(item)" v-for="item in careers" :key="careers.name" class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group cursor-pointer">
          <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease text-2xl">{{item.name}}</span>
        </div>
      </div>
    </div>
    <s-carrers v-show="showModal" @close-modal="showModal = false" :nameCareer="dataCareer"></s-carrers>
  </div>
</template>

<script lang="ts">
export { default } from './career.controller'
</script>
