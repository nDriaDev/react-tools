import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ReactWrapper from './ReactWrapper.vue'
import './custom.css'

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.component('ReactWrapper', ReactWrapper)
	},
} satisfies Theme
