<script setup>
import { ref, onMounted } from 'vue';
import { Sun, Moon } from '@lucide/vue';

const theme = ref('light');

const applyTheme = (newTheme) => {
  theme.value = newTheme;
  document.documentElement.setAttribute('data-theme', newTheme);
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('david_theme', newTheme);
};

const toggleTheme = () => {
  const nextTheme = theme.value === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
};

onMounted(() => {
  const saved = localStorage.getItem('david_theme');
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }
});
</script>

<template>
  <button
    @click="toggleTheme"
    class="theme-toggle"
    :title="theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
    :aria-label="theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
  >
    <Sun v-if="theme === 'dark'" :size="18" class="theme-icon sun-icon" />
    <Moon v-else :size="18" class="theme-icon moon-icon" />
  </button>
</template>

<style scoped>
.theme-toggle {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  width: 2.25rem;
  height: 2.25rem;
  border-radius: var(--radius-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.theme-toggle:hover {
  background: var(--bg-surface-hover);
  color: var(--accent-primary);
  border-color: var(--border-strong);
  transform: scale(1.05);
}

.theme-icon {
  transition: transform var(--transition-fast);
}

.sun-icon {
  color: #f59e0b;
}

.moon-icon {
  color: var(--text-primary);
}
</style>
