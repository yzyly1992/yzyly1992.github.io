<script setup>
import { ref, computed } from 'vue';
import { Search, SlidersHorizontal, FolderGit2 } from '@lucide/vue';
import ProjectCard from '@/components/ui/ProjectCard.vue';
import projectsData from '@/data/projects.json';

const activeCategory = ref('all');
const searchQuery = ref('');

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & GenAI' },
  { id: 'cv', label: 'Computer Vision' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Front-end' },
  { id: 'backend', label: 'Back-end & DevOps' },
  { id: 'ar', label: 'AR / VR' }
];

const getCategoryCount = (catId) => {
  if (catId === 'all') return projectsData.length;
  if (catId === 'backend') {
    return projectsData.filter(p => p.category === 'backend' || p.tags.includes('devops') || p.tags.includes('backend')).length;
  }
  return projectsData.filter(p => p.category === catId || p.tags.includes(catId)).length;
};

const filteredProjects = computed(() => {
  let list = projectsData;

  // Filter by category
  if (activeCategory.value !== 'all') {
    if (activeCategory.value === 'backend') {
      list = list.filter(p => p.category === 'backend' || p.tags.includes('devops') || p.tags.includes('backend'));
    } else {
      list = list.filter(p => p.category === activeCategory.value || p.tags.includes(activeCategory.value));
    }
  }

  // Filter by search query
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim();
    list = list.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.technology.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      (p.tags && p.tags.some(t => t.toLowerCase().includes(q))) ||
      (p.displayTags && p.displayTags.some(t => t.toLowerCase().includes(q)))
    );
  }

  return list;
});
</script>

<template>
  <div class="work-view section-wrapper">
    <div class="container">
      <!-- Page Header -->
      <div class="work-header">
        <span class="section-tag">Portfolio Archive</span>
        <h1 class="page-title">Selected Projects &amp; Research</h1>
        <p class="page-subtitle">
          An archive of {{ projectsData.length }} engineering systems, academic research studies, and interactive applications developed across industry, research, and entrepreneurship.
        </p>
      </div>

      <!-- Controls: Category Pills & Search -->
      <div class="work-controls">
        <!-- Category Filter Pills -->
        <div class="category-tabs" role="tablist">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            class="tab-btn"
            :class="{ active: activeCategory === cat.id }"
            role="tab"
            :aria-selected="activeCategory === cat.id"
          >
            {{ cat.label }}
            <span class="tab-count">{{ getCategoryCount(cat.id) }}</span>
          </button>
        </div>

        <!-- Search Input -->
        <div class="search-wrap">
          <Search :size="16" class="search-icon" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search by tech, keyword, model..."
            class="search-input"
          />
          <button 
            v-if="searchQuery" 
            @click="searchQuery = ''" 
            class="clear-btn"
            title="Clear search"
          >
            &times;
          </button>
        </div>
      </div>

      <!-- Project Grid -->
      <div v-if="filteredProjects.length > 0" class="projects-grid">
        <ProjectCard 
          v-for="project in filteredProjects" 
          :key="project.id" 
          :project="project" 
        />
      </div>

      <!-- Empty State -->
      <div v-else class="empty-state">
        <div class="empty-icon-wrap">
          <FolderGit2 :size="40" />
        </div>
        <h3 class="empty-title">No projects found</h3>
        <p class="empty-desc">
          No projects match "{{ searchQuery }}" in this category. Try adjusting your search query or filter.
        </p>
        <button 
          @click="activeCategory = 'all'; searchQuery = ''" 
          class="btn btn-secondary btn-sm"
        >
          Reset Filters
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.work-header {
  margin-bottom: 3rem;
  max-width: 780px;
}

.page-title {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 700;
  margin-bottom: 0.85rem;
}

.page-subtitle {
  font-size: 1.12rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.work-controls {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.category-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-sans);
  font-size: 0.88rem;
  font-weight: 500;
  padding: 0.45rem 0.9rem;
  border-radius: var(--radius-full);
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.tab-btn:hover {
  background-color: var(--bg-surface-hover);
  color: var(--text-primary);
  border-color: var(--border-strong);
}

.tab-btn.active {
  background-color: var(--accent-primary);
  color: #ffffff;
  border-color: var(--accent-primary);
  font-weight: 600;
  box-shadow: 0 4px 12px var(--accent-glow);
}

.tab-count {
  font-size: 0.72rem;
  font-family: var(--font-mono);
  padding: 0.1rem 0.45rem;
  border-radius: var(--radius-full);
  background: rgba(0, 0, 0, 0.08);
}

.tab-btn.active .tab-count {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
}

.search-wrap {
  position: relative;
  max-width: 420px;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 0.65rem 2.25rem 0.65rem 2.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  background-color: var(--bg-surface);
  color: var(--text-primary);
  font-size: 0.92rem;
  font-family: var(--font-sans);
  outline: none;
  transition: all var(--transition-fast);
}

.search-input:focus {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px var(--bg-accent-subtle);
}

.clear-btn {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 1.5rem;
  background-color: var(--bg-surface);
  border: 1px dashed var(--border-strong);
  border-radius: var(--radius-lg);
  margin-top: 1rem;
}

.empty-icon-wrap {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--bg-accent-subtle);
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
}

.empty-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.empty-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  max-width: 450px;
  margin: 0 auto 1.5rem;
}

@media (min-width: 768px) {
  .work-controls {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
