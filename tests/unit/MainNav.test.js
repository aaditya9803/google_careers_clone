import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

// describe("MainNav", () => {
//   it("displays company name", async () => {
//     const wrapper = mount(MainNav);
//     await wrapper.setData({
//       company: "Ne Corp",
//     });
//     expect(wrapper.text()).toMatch("Developed by Aaditya");
//   });
// });

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Developed by Aaditya");
  });
});

it("displays menu items for navigation", () => {
  const wrapper = mount(MainNav);
  const navigationMenuItems = wrapper.findAll(
    "[data-test='main-nav-list-item']"
  );
  const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
  expect(navigationMenuTexts).toEqual([
    "Teams",
    "Location",
    "Life at Ne",
    "How we hire",
    "Students",
    "Jobs",
  ]);
});

describe("when user is logged out", () => {
  it("prompts user to sign in", () => {
    const wrapper = mount(MainNav, {
      data() {
        return {
          isLoggedIn: false,
        };
      },
    });
    const loginButton = wrapper.findComponent({ name: "ActionButton" });
    const profileImage = wrapper.findComponent({ name: "ProfileImage" });
    expect(loginButton.exists()).toBe(true);
    expect(profileImage.exists()).toBe(false);
  });
});

describe("when user logs in", () => {
  it("displays user profile pic", async () => {
    const wrapper = mount(MainNav);
    var profileImage = wrapper.find("[data-tests='profile-image']");
    expect(profileImage.exists()).toBe(false);

    const loginButton = wrapper.find("[data-test='login-button']");
    await loginButton.trigger("click");

    profileImage = wrapper.find("[data-test='profile-image']");
    expect(loginButton.exists()).toBe(true);
  });
});
