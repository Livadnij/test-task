<script setup lang="ts">
defineOptions({
  name: "CustomButton",
});

interface ButtonProps {
  variant?: "primary" | "secondary";
  click?: () => void;
  selected?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
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
    :class="['custom-button', `custom-button--${variant}`]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<style
  scoped
  lang="scss"
  src="@assets/scss/components/UI/Buttons/CustomButton.scss"
/>
