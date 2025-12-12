<script setup lang="ts">
import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
defineOptions({
  name: "CustomNavigationButton",
});

interface ButtonProps {
  click?: () => void;
  selected?: boolean;
  disabled?: boolean;
  text: string;
  icon?: IconDefinition;
  route: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  click: () => {},
  selected: false,
  disabled: false,
});

const route = useRoute();
const isCurrentPage = computed(() => route.path === props.route);

const handleClick = () => {
  if (props.disabled) return;
  props.click?.();
};
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :class="[
      'navigation-button',
      isCurrentPage ? 'navigation-button--selected' : '',
    ]"
    @click="handleClick"
  >
    <FontAwesomeIcon v-if="icon" :icon="icon" />
    <span class="navigation-button--text">{{ text }}</span>
  </button>
</template>

<style
  scoped
  lang="scss"
  src="@assets/scss/components/UI/Buttons/CustomNavigationButton.scss"
/>
