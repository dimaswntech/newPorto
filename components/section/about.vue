<template>
  <div>
    <div
      class="overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-[800px] my-6 mx-auto max-w-3xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div
            class="flex items-center justify-between bg-slate-400 p-2 border-b border-solid border-slate-200 rounded-t">
            <h3 class="text-base text-white font-base">
              New Window
            </h3>
            <div class="flex space-x-1.5" @click="$emit('close-modal')">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-circle-fill"
                   viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-circle-fill"
                   viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-circle-fill"
                   viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8"/>
              </svg>
            </div>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <p class="font-bold">About Me</p>
            <div class="flex  justify-between items-center h-full w-full">
              <div class="text-slate-500">
                <p class="font-semibold">Name : Dimas Wahyu Notonagoro</p>
                <p class="font-semibold">Born : Semarang, Indonesia</p>
                <p class="font-semibold">Age : 22</p>
              </div>
              <img class="h-[250px]" src="asset/career/me.png"/>
            </div>
            <p class="my-4 text-slate-500 text-lg leading-relaxed">
              Graduated from STIKUBANK University in Informatics Engineering Department. Active in student
              organizational activities. Have internship experience as an IT staff at PT Perkebunan Nusantara IX and
              work experience as Frontend Engineer at PT Setiap Hari Dipakai. Interest in web development and tech. Have
              a big desire to be a Full Stack Developer.
            </p>


          </div>
          <!--footer-->
          <!--          <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">-->
          <!--            <button-->
          <!--              class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"-->
          <!--              type="button" v-on:click="$emit('close-modal')">-->
          <!--              Close-->
          <!--            </button>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
    <div class="opacity-10 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
export default {}
</script>
