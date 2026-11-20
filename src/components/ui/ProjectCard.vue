<script setup>
import { ArrowUpRight } from '@lucide/vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

const getCategoryLabel = (cat) => {
  const map = {
    ai: 'AI & ML',
    cv: 'Computer Vision',
    fullstack: 'Full Stack',
    frontend: 'Front-end',
    backend: 'Back-end',
    ar: 'AR / VR'
  };
  return map[cat] || 'Project';
};
</script>

<template>
  <router-link :to="'/work/' + project.id" class="project-card">
    <div class="card-image-wrap">
      <img 
        :src="project.coverImage" 
        :alt="project.title" 
        loading="lazy" 
        class="card-image"
      />
      <div class="image-overlay">
        <span class="view-btn">
          View Case Study <ArrowUpRight :size="16" />
        </span>
      </div>
      <span class="category-badge">{{ getCategoryLabel(project.category) }}</span>
    </div>

    <div class="card-content">
      <div class="card-meta">
        <span class="card-tech">{{ project.technology }}</span>
        <span class="card-date">{{ project.date }}</span>
      </div>

      <h3 class="card-title">{{ project.title }}</h3>
      
      <p class="card-summary">{{ project.summary }}</p>

      <div class="card-tags">
        <span 
          v-for="tag in (project.displayTags || []).slice(0, 3)" 
          :key="tag" 
          class="tech-tag"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  text-decoration: none;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-accent);
  box-shadow: var(--shadow-hover);
}

.card-image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background-color: var(--bg-surface-hover);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .card-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  backdrop-filter: blur(2px);
  transition: opacity var(--transition-normal);
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.view-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 1rem;
  background: #ffffff;
  color: #0f172a;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transform: translateY(4px);
  transition: transform var(--transition-fast);
}

.project-card:hover .view-btn {
  transform: translateY(0);
}

.category-badge {
  position: absolute;
  top: 0.85rem;
  left: 0.85rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
  background: rgba(15, 23, 42, 0.75);
  color: #ffffff;
  backdrop-filter: blur(8px);
  z-index: 2;
}

.card-content {
  padding: 1.35rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
  margin-bottom: 0.5rem;
}

.card-tech {
  color: var(--accent-primary);
  font-weight: 600;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  color: var(--text-primary);
  line-height: 1.3;
  transition: color var(--transition-fast);
}

.project-card:hover .card-title {
  color: var(--accent-primary);
}

.card-summary {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.55;
  margin-bottom: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
}

.tech-tag {
  font-size: 0.75rem;
  padding: 0.2rem 0.55rem;
  border-radius: var(--radius-sm);
  background-color: var(--bg-surface-hover);
  color: var(--text-muted);
  border: 1px solid var(--border-subtle);
}
</style>
