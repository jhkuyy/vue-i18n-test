<template>
  <div class="HelloWorld">
    <SegmentedControl
      :items="[
        { name: 'RU', value: 'ru-RU' },
        { name: 'EN', value: 'en-US' }
      ]"
      :value="locale"
      @change="setLocale"
    />
  </div>
</template>

<script>
import { useI18nLocale } from "./hooks";
import { SegmentedControl } from "./components";

export default {
  components: {
    SegmentedControl
  },

  setup() {
    const [locale, setLocale] = useI18nLocale();

    return { locale, setLocale };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.HelloWorld
  min-height: 100vh
  display: grid
  place-items: center
</style>
