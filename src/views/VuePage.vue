<template>
    <div>
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script >
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default {
    name: 'VuePage',
    components: {
        HelloWorld
    }
}
</script>
