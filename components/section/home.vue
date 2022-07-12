<template>
  <div class="px-2 bg-[#242424] min-h-screen">
    <div class="grid overflow-hidden grid-cols-3 grid-rows-3 w-full h-screen">
      <div class="relative row-span-2 row-start-1 col-start-1 min-w-full min-h-full">
        <img class="absolute top-[20px] h-[20px] w-[20px]" src="asset/section-one/star.png"/>
        <img class="absolute top-[50px] left-[60px] h-[20px] w-[20px]" src="asset/section-one/star.png"/>
        <img class="absolute top-[120px] right-[100px] h-[20px] w-[20px]" src="asset/section-one/star.png"/>
        <img class="absolute top-[90px] right-[10px] h-[20px] w-[20px]" src="asset/section-one/star.png"/>
        <img class="absolute top-[562px] left-0 h-[100px]" src="asset/section-one/dots.png"/>
        <img class="absolute top-[308px] right-[120px] h-[40px]" src="asset/section-one/circle1.png"/>
        <img class="absolute top-[108px] left-[100px] h-[70px]" src="asset/section-one/line2.png"/>
      </div>

      <div class="flex flex-col justify-center items-center z-50 row-start-2 col-start-2 min-w-full min-h-full">
        <div class="col-start-4 col-end-9 ">
          <p class="text-white text-center font-bold text-[66px]">Dimas Wahyu Notonagoro</p>
          <p class="mt-4 text-white text-center text-[20px]">I'm a programmer who never stop learning and find
            something 👀.
            Because i'm curious people and i have goal to be Full Stack Developer.</p>
          <div>
            <div class="mt-10 flex justify-center items-center space-x-8">
              <button
                class="text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="$router.push('/certification')"
              >
                Certification
              </button>
              <button
                class="text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="$router.push('/career')">
                Career
              </button>
              <button
                @click="openModal"
                class="text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                About Me
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="row-start-1 row-span-2 col-start-3 min-w-full min-h-full">
        <img class="rotate-90 absolute right-[100px] h-[100px]" src="asset/section-one/dots.png"/>
        <img class="absolute top-[108px] right-[500px] h-[50px]" src="asset/section-one/line1.png"/>
        <img class="absolute top-[228px] right-[140px] h-[70px]" src="asset/section-one/talk.png"/>
      </div>

      <div class=" row-start-3 col-start-1 min-w-full min-h-full">
        <img class="absolute left-0 bottom-0 h-[100px] w-[350px]" src="asset/section-one/home.png"/>
      </div>

      <div class="row-start-3 col-start-3 min-w-full min-h-full">
        <img class="z-40 absolute bottom-[260px] w-[100px]" src="asset/section-one/circle2.png"/>
        <img class="absolute right-0 bottom-0 h-[200px] w-[400px]" src="asset/section-one/town.png"/>
      </div>
    </div>
    <s-about v-show="showModal" @close-modal="showModal = false"></s-about>
  </div>
</template>

<script lang="ts">
export { default } from './home.controller'
</script>

<style scoped>

</style>
