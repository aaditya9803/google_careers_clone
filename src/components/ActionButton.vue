<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>
<style scoped>
button {
  @apply px-5 py-3 rounded hover:shadow-blue;
}
.primary {
  @apply text-white bg-brand-blue-1 hover:shadow-blue;
}
.secondary {
  @apply bg-brand-blue-1 bg-transparent bg-brand-blue-2 hover:text-white;
}
</style>
