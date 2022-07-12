<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-2 bg-[#242424] font-poppins">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
<!--      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">-->
<!--        <a class="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-[#242424]"-->
<!--           href="#pablo">-->
<!--          DimsDims-->
<!--        </a>-->
<!--        <button-->
<!--          class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"-->
<!--          type="button" v-on:click="toggleNavbar()">-->
<!--          <svg-icon class="w-4 h-5" style="color: black" name="bars-solid" />-->
<!--        </button>-->
<!--      </div>-->
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:justify-center lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ">
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
               href="#pablo">
              <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75"/><span
              class="ml-2 text-[#fef509]">Share</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
               href="#pablo">
              <i class="fab fa-twitter text-lg leading-lg text-white opacity-75"/><span class="ml-2 text-[#fef509]">Tweet</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
               href="#pablo">
              <i class="fab fa-pinterest text-lg leading-lg text-white opacity-75"/><span class="ml-2 text-[#fef509]">Pin</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export {default} from './navbar.controller'
</script>
