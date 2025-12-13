<script setup lang="ts">
defineOptions({
  name: 'CustomButton',
})

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  selected?: boolean;
  disabled?: boolean;
  click?: () => void;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  selected: false,
  disabled: false,
  click: () => {},
})

const handleClick = () => {
  if (props.disabled) return
  props.click?.()
}
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
