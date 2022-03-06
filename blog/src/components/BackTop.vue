<template>
  <div class="pages-content-scroll">
    <<a-back-top> target=".pages-content-scroll"
                :visibility-height="visibleHeight"
                :right="rightPos"
                :bottom="bottomPos"></a-back-top>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>

</style>
