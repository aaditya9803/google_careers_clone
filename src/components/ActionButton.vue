<template>
  <button :class="buttonClass">
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
      width: 10,
      height: 5,
      area: 50,
    };
  },
  computed: {
    butoonClass() {
      return {
        primary: this.primary,
      };
    },
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
.secondary {
  @apply text-brand-green-1 bg-brand-green-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
