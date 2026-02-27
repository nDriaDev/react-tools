<template>
  <div ref="containerRef" class="react-demo-wrapper">
    <div v-if="error" class="react-demo-error">
      <p>⚠️ Demo non available: {{ error }}</p>
    </div>
    <div v-else-if="!ready" class="react-demo-loading">
      <span>Loading demo…</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'

const props = defineProps<{
  component: any
}>()

const containerRef = ref<HTMLDivElement | null>(null)
const error        = ref<string | null>(null)
const ready        = ref(false)

let reactRoot: any = null

async function mount(Comp: any) {
  // Only browser
  if (typeof window === 'undefined' || !containerRef.value) return

  // Unmount previous root
  if (reactRoot) {
    try { reactRoot.unmount() } catch (_) {}
    reactRoot = null
  }

  if (!Comp) return

  try {
    const [{ createRoot }, React] = await Promise.all([
      import('react-dom/client'),
      import('react'),
    ])

    const element = React.createElement(Comp)

    reactRoot = createRoot(containerRef.value)
    reactRoot.render(element)
    ready.value = true
  } catch (err: any) {
    error.value = err?.message ?? String(err)
    console.error('[ReactWrapper] errore mount:', err)
  }
}

watch(
  () => props.component,
  (newComp) => {
    error.value = null
    ready.value = false
    mount(newComp)
  },
  { immediate: true },
)

onUnmounted(() => {
  if (reactRoot) {
    try { reactRoot.unmount() } catch (_) {}
    reactRoot = null
  }
})
</script>

<style scoped>
.react-demo-wrapper {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 24px;
  margin: 16px 0;
  min-height: 60px;
  background-image: radial-gradient(#444242 1px, #2a2b33 0);
  background-position-y: 50%;
  background-size: 8px 8px;
}

.react-demo-loading {
  color: var(--vp-c-text-2);
  font-size: 0.9em;
  text-align: center;
  padding: 12px 0;
}

.react-demo-error {
  color: var(--vp-c-danger-1, #e53e3e);
  font-size: 0.875em;
  padding: 8px 0;
}
</style>
