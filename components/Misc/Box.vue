<template>
    <a :key="event._id" :href="event._path"
        class="flex flex-col gap-4 p-4 items-center bg-center bg-no-repeat w-full lg:max-w-xl bg-white shadow-xl bg-contain transition duration-500 ease-in-out transform hover:-translate-y-1"
        data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="260">
        <div class="uppercase text-black font-semibold text-center text-xs sm:text-sm md:text-lg mt-16">
            {{ event.title }}
        </div>
        <div class="text-xs sm:text-sm md:text-lg text-red-900 text-justify mt-4">
            {{ event.description }}
        </div>
    </a>
</template>
<script setup lang="ts">
const { event } = defineProps<{ event: { _id: string, _path: string, title: string, description: string } }>()
</script>