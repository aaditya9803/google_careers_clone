<template>
  <button :class="{ primary: primary }" @:click="handleClick">
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "ActionButton",
  props: ["text"],
  /* methods: {
    handleClick(event) {
      console.log(event);
    }, */
  data() {
    return {
      primary: true,
    };
  },
};
</script>
<style scoped>
button {
  @apply px-5 py-3 font-medium rounded;
}
.primary {
  @apply text-white bg-brand-blue-1 hover:shadow-blue;
}
</style>
