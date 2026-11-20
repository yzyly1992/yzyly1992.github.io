<script setup>
import { ArrowLeft, Home } from '@lucide/vue';
</script>

<template>
  <div class="not-found-view section-wrapper">
    <div class="container text-center">
      <span class="error-code">404</span>
      <h1 class="page-title">Page Not Found</h1>
      <p class="page-desc">
        The page you are looking for doesn't exist, has been removed, or was relocated.
      </p>
      <div class="actions">
        <router-link to="/" class="btn btn-primary">
          <Home :size="18" /> Back to Home
        </router-link>
        <router-link to="/work" class="btn btn-secondary">
          Browse Projects
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found-view {
  padding: 6rem 0;
}

.text-center {
  text-align: center;
}

.error-code {
  font-family: var(--font-mono);
  font-size: clamp(4rem, 10vw, 7rem);
  font-weight: 800;
  line-height: 1;
  color: var(--accent-primary);
  display: block;
  margin-bottom: 1rem;
  opacity: 0.85;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.page-desc {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 480px;
  margin: 0 auto 2rem;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
