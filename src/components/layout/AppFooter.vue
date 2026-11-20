<script setup>
import { Mail, ArrowUp } from '@lucide/vue';
import IconGithub from '@/components/icons/IconGithub.vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import profileData from '@/data/profile.json';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <footer class="app-footer">
    <div class="container footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <router-link to="/" class="footer-logo">
            David<span class="brand-accent">.</span>
          </router-link>
          <p class="footer-tagline">
            Software Development Engineer @ AWS &bull; AI / Computer Vision Researcher
          </p>
        </div>

        <div class="footer-socials">
          <a :href="profileData.contact.github" target="_blank" rel="noopener noreferrer" class="social-icon" title="GitHub">
            <IconGithub :size="18" />
          </a>
          <a :href="profileData.contact.linkedin" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn">
            <IconLinkedin :size="18" />
          </a>
          <a :href="'mailto:' + profileData.contact.email" class="social-icon" title="Email">
            <Mail :size="18" />
          </a>
          <button @click="scrollToTop" class="back-to-top" title="Back to top">
            <ArrowUp :size="18" />
          </button>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          &copy; {{ new Date().getFullYear() }} Zhiyuan (David) Yang. All rights reserved.
        </p>
        <p class="footer-credits">
          Engineered with Vue 3 &amp; Vite &bull; Hosted on GitHub Pages
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  margin-top: auto;
  border-top: 1px solid var(--border-subtle);
  background-color: var(--bg-surface);
  padding: 3.5rem 0 2rem;
  transition: background-color var(--transition-normal);
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.footer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-subtle);
}

.footer-logo {
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-primary);
}

.brand-accent {
  color: var(--accent-primary);
}

.footer-tagline {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-top: 0.35rem;
}

.footer-socials {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.social-icon, .back-to-top {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: var(--radius-md);
  background-color: var(--bg-base);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.social-icon:hover, .back-to-top:hover {
  background-color: var(--bg-surface-hover);
  color: var(--accent-primary);
  border-color: var(--border-strong);
  transform: translateY(-2px);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

@media (max-width: 640px) {
  .footer-top, .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
