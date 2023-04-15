<template>
  <div
    class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-band-gray-1"
  >
    <a :href="url" class="flex items-center h-full text-xl">{{ company }}</a>
    <h2 class="flex items-center h-full ml-8">Developed by {{ author }}</h2>
    <nav class="h-full ml-12">
      <ul class="flex h-full p-0 m-0 list-none">
        <li
          v-for="menuItem in menuItems"
          :key="menuItem"
          class="h-full ml-9 first:ml-0"
          data-test="main-nav-list-item"
        >
          <a href="" class="items-center h-full py-2.5">{{ menuItem }}</a>
        </li>
      </ul>
    </nav>
    <div class="flex item-center h-full ml-auto">
      <profile-image v-if="isLoggedIn" data-test="profile-image" />
      <ActionButton
        v-else
        text="random"
        type="primary"
        data-test="login-button"
        @:click="loginUser"
      />
    </div>
  </div>
</template>
<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
export default {
  /*giving name to component*/
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      company: "Ne",
      author: "Aaditya",
      url: "https://careers.google.com",
      menuItems: [
        "Teams",
        "Location",
        "Life at Ne",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
