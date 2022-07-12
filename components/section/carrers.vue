<template>
  <div>
    <div
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 class="text-3xl font-semibold">
              {{ nameCareer.name }}
            </h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              v-on:click="$emit('close-modal')">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                X
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <p class="font-bold">About</p>
            <p class="my-4 text-slate-500 text-lg leading-relaxed">
              {{ nameCareer.description }}
            </p>
            <div class="flex  justify-between items-center h-full w-full">
              <div class="border-r-2">
                <p class="font-bold">My Job</p>
                <ul v-for="item in nameCareer.job" :key="nameCareer.name"
                    class="my-4 list-disc text-slate-500 text-lg leading-relaxed w-[380px]">
                  <li>{{ item }}</li>
                </ul>
              </div>

              <img class="h-[240px] overflow-hidden" :src="`asset/career/${nameCareer.image}`" />
            </div>


          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button" v-on:click="$emit('close-modal')">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="opacity-10 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
export default {
  props: {
    nameCareer: Object
  }
}
</script>
