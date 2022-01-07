// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import BirdLayout from './BirdLayout.vue'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that injects the slots
  Layout: BirdLayout
}