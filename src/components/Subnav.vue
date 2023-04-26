<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-blue-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobsResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>
          <span class="text-brand-green-1">123</span>
          jobs available
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Subnav_1",
  data() {
    return {
      onJobResultsPage: true,
    };
  },
};
</script>
