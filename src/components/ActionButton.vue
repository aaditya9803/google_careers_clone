<template>
  <button
    class="px-5 py-3 font-medium text-yellow-400 border-0 rounded bg-brand-blue-1 hover:shadow-blue"
    @:click="handleClick"
  >
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
};
</script>
