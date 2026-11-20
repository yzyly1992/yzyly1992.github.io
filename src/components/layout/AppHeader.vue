<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Menu, X, Briefcase } from '@lucide/vue';
import ThemeToggle from '@/components/ui/ThemeToggle.vue';

const route = useRoute();
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Close mobile menu on route change
watch(() => route.path, () => {
  closeMobileMenu();
});
</script>

<template>
  <header class="app-header glass">
    <div class="container header-inner">
      <!-- Logo & Status -->
      <div class="brand-group">
        <router-link to="/" class="brand-logo" @click="closeMobileMenu">
          <span class="brand-name">David</span><span class="brand-accent">.</span>
        </router-link>
        
        <div class="status-pill" title="Current Role: Software Dev Engineer at AWS">
          <span class="pulse-dot"></span>
          <span class="status-text">AWS SDE</span>
        </div>
      </div>

      <!-- Desktop Nav -->
      <nav class="desktop-nav">
        <router-link to="/" class="nav-link" active-class="active" exact-active-class="exact-active">
          Home
        </router-link>
        <router-link to="/work" class="nav-link" active-class="active">
          Work
        </router-link>
        <router-link to="/about" class="nav-link" active-class="active">
          About
        </router-link>
        <router-link to="/contact" class="nav-link" active-class="active">
          Contact
        </router-link>
        
        <div class="nav-divider"></div>
        <ThemeToggle />
      </nav>

      <!-- Mobile Actions -->
      <div class="mobile-actions">
        <ThemeToggle />
        <button 
          @click="toggleMobileMenu" 
          class="mobile-menu-btn"
          :aria-label="isMobileMenuOpen ? 'Close Menu' : 'Open Menu'"
        >
          <X v-if="isMobileMenuOpen" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <transition name="drawer">
      <div v-if="isMobileMenuOpen" class="mobile-drawer">
        <div class="container mobile-drawer-inner">
          <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">
            Home
          </router-link>
          <router-link to="/work" class="mobile-nav-link" @click="closeMobileMenu">
            Work
          </router-link>
          <router-link to="/about" class="mobile-nav-link" @click="closeMobileMenu">
            About
          </router-link>
          <router-link to="/contact" class="mobile-nav-link" @click="closeMobileMenu">
            Contact
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  z-index: 100;
  display: flex;
  align-items: center;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-group {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.brand-logo {
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  display: flex;
  align-items: center;
}

.brand-accent {
  color: var(--accent-primary);
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.2rem 0.6rem;
  background-color: var(--color-success-bg);
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-success);
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background-color: var(--color-success);
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 0.45rem 0.9rem;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.nav-link:hover {
  color: var(--text-primary);
  background-color: var(--bg-surface-hover);
}

.nav-link.active,
.nav-link.exact-active {
  color: var(--accent-primary);
  background-color: var(--bg-accent-subtle);
  font-weight: 600;
}

.nav-divider {
  width: 1px;
  height: 1.25rem;
  background-color: var(--border-subtle);
  margin: 0 0.5rem;
}

.mobile-actions {
  display: none;
  align-items: center;
  gap: 0.5rem;
}

.mobile-menu-btn {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  width: 2.25rem;
  height: 2.25rem;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.mobile-drawer {
  position: absolute;
  top: var(--header-height);
  left: 0;
  width: 100%;
  background-color: var(--bg-surface);
  border-bottom: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-lg);
  padding: 1.25rem 0;
}

.mobile-drawer-inner {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-nav-link {
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  color: var(--accent-primary);
  background-color: var(--bg-accent-subtle);
  font-weight: 600;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.25s ease-out;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  .mobile-actions {
    display: flex;
  }
}
</style>
