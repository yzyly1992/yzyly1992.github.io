<script setup>
import { computed, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, Layers, FileText, Globe } from '@lucide/vue';
import projectsData from '@/data/projects.json';

const route = useRoute();
const router = useRouter();

const currentProjectId = computed(() => route.params.id);

const projectIndex = computed(() => {
  return projectsData.findIndex(p => p.id === currentProjectId.value);
});

const project = computed(() => {
  return projectsData[projectIndex.value] || null;
});

const prevProject = computed(() => {
  if (projectIndex.value > 0) {
    return projectsData[projectIndex.value - 1];
  }
  return null;
});

const nextProject = computed(() => {
  if (projectIndex.value >= 0 && projectIndex.value < projectsData.length - 1) {
    return projectsData[projectIndex.value + 1];
  }
  return null;
});

// Update document title
watchEffect(() => {
  if (project.value) {
    document.title = `${project.value.title} | David Yang`;
  } else {
    document.title = 'Project Details | David Yang';
  }
});
</script>

<template>
  <div v-if="project" class="project-view section-wrapper">
    <div class="container project-container">
      <!-- Breadcrumb / Back button -->
      <div class="project-nav-bar">
        <router-link to="/work" class="back-link">
          <ArrowLeft :size="18" /> Back to Selected Work
        </router-link>
      </div>

      <!-- Project Hero Header -->
      <header class="project-header">
        <div class="project-meta-top">
          <span class="meta-tag">{{ project.technology }}</span>
          <span class="meta-date">
            <Calendar :size="14" /> {{ project.date }}
          </span>
        </div>

        <h1 class="project-main-title">{{ project.fullTitle }}</h1>

        <!-- External Links Bar -->
        <div v-if="project.links && project.links.length > 0" class="project-links-bar">
          <a
            v-for="link in project.links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary btn-sm"
          >
            {{ link.title }} <ExternalLink :size="15" />
          </a>
        </div>
      </header>

      <!-- Project Content Layout -->
      <div class="project-layout">
        <!-- Main Content (HTML) -->
        <article class="project-main">
          <div class="project-prose" v-html="project.contentHtml"></div>
        </article>

        <!-- Sidebar Metadata Card -->
        <aside class="project-sidebar">
          <div class="sidebar-card glass">
            <h4 class="sidebar-title">Project Overview</h4>
            
            <div class="sidebar-group">
              <span class="sidebar-label">Timeline</span>
              <span class="sidebar-value">{{ project.date }}</span>
            </div>

            <div class="sidebar-group">
              <span class="sidebar-label">Primary Technology</span>
              <span class="sidebar-value">{{ project.technology }}</span>
            </div>

            <div class="sidebar-group">
              <span class="sidebar-label">Category</span>
              <span class="sidebar-value text-capitalize">{{ project.category }}</span>
            </div>

            <div class="sidebar-group">
              <span class="sidebar-label">Tech Stack &amp; Tags</span>
              <div class="sidebar-tags">
                <span 
                  v-for="tag in (project.displayTags || project.tags)" 
                  :key="tag" 
                  class="badge"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <div v-if="project.links && project.links.length > 0" class="sidebar-group">
              <span class="sidebar-label">Official Links</span>
              <div class="sidebar-links-list">
                <a
                  v-for="link in project.links"
                  :key="link.url"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="sidebar-link-item"
                >
                  <Globe :size="14" /> {{ link.title }}
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <!-- Bottom Pager (Prev / Next Project) -->
      <nav class="project-pager" aria-label="Project pagination">
        <router-link 
          v-if="prevProject" 
          :to="'/work/' + prevProject.id" 
          class="pager-card pager-prev"
        >
          <span class="pager-direction"><ArrowLeft :size="16" /> Previous Project</span>
          <span class="pager-title">{{ prevProject.title }}</span>
        </router-link>
        <div v-else class="pager-placeholder"></div>

        <router-link 
          v-if="nextProject" 
          :to="'/work/' + nextProject.id" 
          class="pager-card pager-next"
        >
          <span class="pager-direction">Next Project <ArrowRight :size="16" /></span>
          <span class="pager-title">{{ nextProject.title }}</span>
        </router-link>
        <div v-else class="pager-placeholder"></div>
      </nav>
    </div>
  </div>

  <!-- Fallback: Project Not Found -->
  <div v-else class="section-wrapper not-found-project">
    <div class="container text-center">
      <h2>Project Not Found</h2>
      <p style="margin: 1rem 0 2rem;">The project you are looking for does not exist or has moved.</p>
      <router-link to="/work" class="btn btn-primary">
        Browse All Projects
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.project-container {
  max-width: 1040px;
}

.project-nav-bar {
  margin-bottom: 2rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-muted);
  transition: all var(--transition-fast);
}

.back-link:hover {
  color: var(--accent-primary);
  transform: translateX(-3px);
}

.project-header {
  padding-bottom: 2.5rem;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid var(--border-subtle);
}

.project-meta-top {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.meta-tag {
  font-size: 0.82rem;
  font-weight: 600;
  font-family: var(--font-mono);
  color: var(--accent-primary);
  background-color: var(--bg-accent-subtle);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
}

.meta-date {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.project-main-title {
  font-size: clamp(2.1rem, 3.8vw, 3rem);
  font-weight: 800;
  line-height: 1.22;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.project-links-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.project-layout {
  display: grid;
  grid-template-columns: 1fr 310px;
  gap: 3.5rem;
  align-items: start;
}

.project-main {
  min-width: 0;
}

/* Sidebar */
.project-sidebar {
  position: sticky;
  top: calc(var(--header-height) + 2rem);
}

.sidebar-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.sidebar-title {
  font-size: 1.1rem;
  font-weight: 700;
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 0.75rem;
}

.sidebar-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.sidebar-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}

.sidebar-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}

.sidebar-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.25rem;
}

.sidebar-links-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.35rem;
}

.sidebar-link-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  color: var(--accent-primary);
  font-weight: 500;
  word-break: break-all;
}

.sidebar-link-item:hover {
  text-decoration: underline;
}

.text-capitalize {
  text-transform: capitalize;
}

/* Bottom Pager */
.project-pager {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid var(--border-subtle);
}

.pager-card {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  text-decoration: none;
  transition: all var(--transition-fast);
}

.pager-card:hover {
  border-color: var(--accent-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.pager-prev {
  align-items: flex-start;
  text-align: left;
}

.pager-next {
  align-items: flex-end;
  text-align: right;
}

.pager-direction {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent-primary);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 0.4rem;
}

.pager-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
}

.pager-placeholder {
  visibility: hidden;
}

.not-found-project {
  text-align: center;
  padding: 6rem 1rem;
}

@media (max-width: 900px) {
  .project-layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .project-sidebar {
    position: static;
  }
}

@media (max-width: 600px) {
  .project-pager {
    grid-template-columns: 1fr;
  }
  .pager-next {
    align-items: flex-start;
    text-align: left;
  }
}
</style>
