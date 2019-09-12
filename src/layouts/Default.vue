<template>
  <div>
    <Navig />
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Navig from '~/components/Navig.vue'
export default {
  components: {Navig}
}
</script>

<style>
</style>
