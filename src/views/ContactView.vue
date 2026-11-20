<script setup>
import { ref } from 'vue';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, BookOpen, Send } from '@lucide/vue';
import IconGithub from '@/components/icons/IconGithub.vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import profileData from '@/data/profile.json';

const copied = ref(false);

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profileData.contact.email);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2500);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};
</script>

<template>
  <div class="contact-view section-wrapper">
    <div class="container contact-container">
      <div class="contact-header text-center">
        <span class="section-tag">Reach Out</span>
        <h1 class="page-title">Let's Connect &amp; Collaborate</h1>
        <p class="page-subtitle">
          Whether you want to discuss cloud infrastructure, computer vision research, or potential technical partnerships, I'd love to hear from you.
        </p>
      </div>

      <div class="contact-grid">
        <!-- Main Direct Contact Card -->
        <div class="contact-card primary-card glass">
          <div class="card-icon-header">
            <div class="icon-circle">
              <Mail :size="24" />
            </div>
            <span class="online-status">
              <span class="status-dot"></span> Fast Response
            </span>
          </div>

          <h3 class="contact-channel-title">Direct Email</h3>
          <p class="contact-channel-desc">
            The best way to reach me directly for technical or professional discussions.
          </p>

          <div class="email-copy-box">
            <span class="email-text">{{ profileData.contact.email }}</span>
            <button 
              @click="copyEmail" 
              class="copy-btn" 
              :title="copied ? 'Copied to clipboard' : 'Copy email address'"
            >
              <Check v-if="copied" :size="16" class="text-success" />
              <Copy v-else :size="16" />
              <span class="btn-label">{{ copied ? 'Copied!' : 'Copy' }}</span>
            </button>
          </div>

          <div class="contact-actions">
            <a :href="'mailto:' + profileData.contact.email" class="btn btn-primary" style="width: 100%;">
              <Send :size="16" /> Open Mail Client
            </a>
          </div>
        </div>

        <!-- Location & Phone Card -->
        <div class="contact-card info-card">
          <h3 class="card-title">Location &amp; Contact</h3>
          
          <div class="info-list">
            <div class="info-item">
              <div class="info-icon">
                <MapPin :size="20" />
              </div>
              <div>
                <span class="info-label">Base Location</span>
                <span class="info-value">{{ profileData.location }}</span>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <Phone :size="20" />
              </div>
              <div>
                <span class="info-label">Phone</span>
                <span class="info-value">{{ profileData.contact.phone }}</span>
              </div>
            </div>
          </div>

          <div class="current-org-strip">
            <span class="org-label">Current Organization</span>
            <span class="org-name">Amazon Web Services (AWS)</span>
            <span class="org-role">Software Development Engineer</span>
          </div>
        </div>
      </div>

      <!-- Social & Academic Profiles -->
      <div class="socials-section">
        <h3 class="socials-title">Profiles &amp; Repositories</h3>
        <div class="social-cards-grid">
          <a :href="profileData.contact.linkedin" target="_blank" rel="noopener noreferrer" class="social-card">
            <div class="social-icon-box">
              <IconLinkedin :size="22" />
            </div>
            <div class="social-card-info">
              <h4 class="social-name">LinkedIn</h4>
              <p class="social-handle">/in/david-zhiyuan-yang</p>
            </div>
            <ExternalLink :size="16" class="ext-icon" />
          </a>

          <a :href="profileData.contact.github" target="_blank" rel="noopener noreferrer" class="social-card">
            <div class="social-icon-box">
              <IconGithub :size="22" />
            </div>
            <div class="social-card-info">
              <h4 class="social-name">GitHub</h4>
              <p class="social-handle">@yzyly1992 (24+ repos)</p>
            </div>
            <ExternalLink :size="16" class="ext-icon" />
          </a>

          <a :href="profileData.contact.scholar" target="_blank" rel="noopener noreferrer" class="social-card">
            <div class="social-icon-box">
              <BookOpen :size="22" />
            </div>
            <div class="social-card-info">
              <h4 class="social-name">Research Publications</h4>
              <p class="social-handle">MDPI &bull; IEEE &bull; Computer Vision</p>
            </div>
            <ExternalLink :size="16" class="ext-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  max-width: 900px;
}

.contact-header {
  margin-bottom: 3.5rem;
}

.text-center {
  text-align: center;
}

.page-title {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 700;
  margin-bottom: 0.85rem;
}

.page-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 620px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
  margin-bottom: 4rem;
}

.contact-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 2.25rem 2rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
}

.card-icon-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.icon-circle {
  width: 3.25rem;
  height: 3.25rem;
  border-radius: var(--radius-md);
  background-color: var(--bg-accent-subtle);
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.online-status {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-success);
  background-color: var(--color-success-bg);
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
}

.status-dot {
  width: 6px;
  height: 6px;
  background-color: var(--color-success);
  border-radius: 50%;
}

.contact-channel-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.contact-channel-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.75rem;
}

.email-copy-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  background-color: var(--bg-base);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 0.6rem 0.85rem;
  margin-bottom: 1.75rem;
}

.email-text {
  font-family: var(--font-mono);
  font-size: 0.92rem;
  color: var(--text-primary);
  font-weight: 500;
  word-break: break-all;
}

.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  flex-shrink: 0;
}

.copy-btn:hover {
  background: var(--bg-surface-hover);
  color: var(--accent-primary);
  border-color: var(--border-strong);
}

.text-success {
  color: var(--color-success);
}

.info-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.info-icon {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: var(--radius-md);
  background-color: var(--bg-base);
  border: 1px solid var(--border-subtle);
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-label {
  display: block;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.info-value {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.current-org-strip {
  padding: 1.25rem;
  background-color: var(--bg-base);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.org-label {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

.org-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--accent-primary);
}

.org-role {
  font-size: 0.88rem;
  color: var(--text-secondary);
}

/* Social Cards */
.socials-section {
  padding-top: 2rem;
  border-top: 1px solid var(--border-subtle);
}

.socials-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
}

.social-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
}

.social-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.social-card:hover {
  transform: translateY(-2px);
  border-color: var(--accent-primary);
  box-shadow: var(--shadow-md);
}

.social-icon-box {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: var(--radius-md);
  background-color: var(--bg-accent-subtle);
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.social-card-info {
  flex: 1;
}

.social-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.15rem;
}

.social-handle {
  font-size: 0.82rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.ext-icon {
  color: var(--text-muted);
  transition: transform var(--transition-fast);
}

.social-card:hover .ext-icon {
  color: var(--accent-primary);
  transform: translate(2px, -2px);
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
