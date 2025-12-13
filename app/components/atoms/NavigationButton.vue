<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { type IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
defineOptions({
  name: 'CustomNavigationButton',
})

interface ButtonProps {
  text: string;
  route: string;
  icon?: IconDefinition | null;
  selected?: boolean;
  disabled?: boolean;
  click?: () => void;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  selected: false,
  disabled: false,
  click: () => {},
  icon: null,
})

const url = useRoute()
const isCurrentPage = computed(() => url.path === props.route)

const handleClick = () => {
  if (props.disabled) return
  props.click?.()
}
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
    <FontAwesomeIcon
      v-if="icon"
      :icon="icon"
    />
    <span class="navigation-button__text">{{ text }}</span>
  </button>
</template>

<style
  scoped
  lang="scss"
  src="@assets/scss/components/UI/Buttons/CustomNavigationButton.scss"
/>
