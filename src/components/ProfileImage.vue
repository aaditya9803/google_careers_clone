<template>
  <img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>
<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://yt3.ggpht.com/yti/AHXOFjVqqjK148cPh-CESjTbCHhUpNmF7IHGCTyJ9RSOtmI=s88-c-k-c0x00ffffff-no-rj-mo",
    };
  },
};
</script>
