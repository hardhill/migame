<template>
  <component :is="layout+'-layout'" v-if="layout"/>
  <router-view v-else/>
</template>
<script>
  import { computed, defineComponent } from 'vue';
  import MainLayout from '@/layouts/MainLayout.vue'
  import AuthLayout from '@/layouts/AuthLayout.vue'

  import { useRoute } from 'vue-router';

  export default defineComponent({

    components: {
      MainLayout,
      AuthLayout
    },
    setup(){
      const route = useRoute()
      const layout = computed(()=>route.meta.layout)
      return {layout}
    }
  })
</script>
<style lang="scss">

</style>
