<template>
  <div class="SegmentedControl">
    <div
      :class="[
        'SegmentedControl-Item',
        item.value === value && 'SegmentedControl-Item_selected'
      ]"
      v-for="item in items"
      :key="item.value"
      @click="$emit('change', item.value)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // {name, value}
    items: Array,
    value: String,
  },
};
</script>

<style lang="sass">
.SegmentedControl
  overflow: hidden
  border-radius: 4px
  background-color: #fff
  display: flex

  &-Item
    height: 24px
    font-size: 14px
    display: flex
    align-items: center
    justify-content: center
    padding: 0 10px
    cursor: pointer
    font-weight: 500
    letter-spacing: 1px

    &_selected
      background: #007fff
      color: white
</style>
