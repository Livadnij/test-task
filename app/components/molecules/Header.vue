<script setup lang="ts">
import NavigationButtonVue from "../atoms/NavigationButton.vue";
import Logo from "@assets/images/logo.svg";
import {
  faHome,
  faGraduationCap,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

const router = useRouter();
const goHome = () => router.push("/");
const goTutors = () => router.push("/tutors");

interface ButtonOption {
  text: string;
  icon: IconDefinition;
  route: string;
  onClick: () => void;
}

const buttonOptions: ButtonOption[] = [
  {
    text: "Home",
    icon: faHome,
    route: "/",
    onClick: goHome,
  },
  {
    text: "Tutors",
    icon: faGraduationCap,
    route: "/tutors",
    onClick: goTutors,
  },
];
</script>

<template>
  <header class="layout-header">
    <img :src="Logo" alt="App icon" />
    <div class="button-group">
      <NavigationButtonVue
        v-for="option in buttonOptions"
        :variant="'navigation'"
        :click="option.onClick"
        :text="option.text"
        :icon="option.icon"
        :route="option.route"
      />
    </div>
  </header>
</template>

<style
  scoped
  lang="scss"
  src="@assets/scss/components/UI/Headers/CustomHeader.scss"
/>
