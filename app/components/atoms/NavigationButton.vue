<script setup lang="ts">
defineOptions({
  name: "CustomNavigationButton",
});

interface ButtonProps {
  click?: () => void;
  selected?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  click: () => {},
  selected: false,
  disabled: false,
});

const handleClick = () => {
  if (props.disabled) return;
  props.click?.();
};
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :class="['navigation-button', selected ? `navigation-button--selected`: ""]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<style
  scoped
  lang="scss"
  src="@assets/scss/components/UI/Buttons/CustomNavigationButton.scss"
/>
