<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>·{{count}}·</div>
    <div>
      <p @click="count = count - 1">-</p>
      <p @click="count = count + 1">+</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      count: 1
    }
  },
  mounted() {
    console.log('hello,everyone!🙋')
  }
}
</script>
