<script setup>
import { computed } from 'vue';
import { ArrowRight, Sparkles, Terminal, Cpu, Cloud, Award, ExternalLink } from '@lucide/vue';
import ProjectCard from '@/components/ui/ProjectCard.vue';
import projectsData from '@/data/projects.json';
import profileData from '@/data/profile.json';

const featuredProjects = computed(() => {
  return projectsData.filter(p => p.featured).slice(0, 4);
});
</script>

<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-badge animate-fade-in">
            <span class="badge-dot"></span>
            <span>Software Dev Engineer @ AWS</span>
          </div>

          <h1 class="hero-title animate-fade-in">
            Architecting Distributed Cloud Systems &amp;
            <span class="gradient-text">Computer Vision AI</span>
          </h1>

          <p class="hero-description animate-fade-in">
            Hi, I'm <strong>David (Zhiyuan) Yang</strong>. Based in Vancouver, I engineer scalable, fault-tolerant infrastructure at <strong>AWS</strong> and research applied computer vision and generative AI. With a background spanning computer science and spatial design, I bridge deep technical rigor with human-centered product innovation.
          </p>

          <div class="hero-actions animate-fade-in">
            <router-link to="/work" class="btn btn-primary">
              Explore Selected Work <ArrowRight :size="18" />
            </router-link>
            <router-link to="/about" class="btn btn-secondary">
              About My Journey
            </router-link>
          </div>
        </div>

        <!-- Hero Stats Card / Profile Visual -->
        <div class="hero-card-wrap animate-fade-in">
          <div class="profile-card glass">
            <div class="avatar-wrap">
              <img :src="profileData.avatar" alt="David Yang" class="profile-avatar" />
              <div class="status-indicator" title="Available for collaborative discussions"></div>
            </div>
            
            <div class="profile-info">
              <h3 class="profile-name">{{ profileData.name }}</h3>
              <p class="profile-role">Software Dev Engineer &bull; AWS</p>
              <p class="profile-location">{{ profileData.location }}</p>
            </div>

            <div class="quick-stats">
              <div class="stat-item">
                <span class="stat-number">{{ profileData.stats.gpa }}</span>
                <span class="stat-label">MS CS GPA</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">{{ profileData.stats.papers }}</span>
                <span class="stat-label">Papers</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">{{ profileData.stats.citations }}</span>
                <span class="stat-label">Citations</span>
              </div>
            </div>

            <div class="card-footer-cta">
              <router-link to="/contact" class="btn btn-secondary btn-sm" style="width: 100%;">
                Get In Touch
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Highlights / Credibility Bar -->
    <section class="highlights-section">
      <div class="container">
        <div class="highlights-grid">
          <div class="highlight-item">
            <Cloud class="highlight-icon" :size="24" />
            <div>
              <h4 class="highlight-title">AWS Infrastructure</h4>
              <p class="highlight-desc">High-volume log delivery, fault-tolerant retry/redrive architecture.</p>
            </div>
          </div>

          <div class="highlight-item">
            <Cpu class="highlight-icon" :size="24" />
            <div>
              <h4 class="highlight-title">AI &amp; Computer Vision</h4>
              <p class="highlight-desc">YOLOv8 UAV aerial detection, Swin Transformer &amp; Diffusion GenAI.</p>
            </div>
          </div>

          <div class="highlight-item">
            <Award class="highlight-icon" :size="24" />
            <div>
              <h4 class="highlight-title">Academic Excellence</h4>
              <p class="highlight-desc">4.0 GPA MS CS @ Northeastern, Outstanding Research Award &amp; MDPI author.</p>
            </div>
          </div>

          <div class="highlight-item">
            <Terminal class="highlight-icon" :size="24" />
            <div>
              <h4 class="highlight-title">Design &amp; Founder</h4>
              <p class="highlight-desc">Ex-Co-founder BugTech AR, Master of Landscape Architecture from RISD.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="section-wrapper featured-section">
      <div class="container">
        <div class="section-header featured-header">
          <div>
            <span class="section-tag">Featured Case Studies</span>
            <h2 class="section-title">Selected Highlights</h2>
            <p class="section-subtitle">A curated snapshot of high-impact engineering and research endeavors.</p>
          </div>
          <router-link to="/work" class="btn btn-secondary">
            View All {{ projectsData.length }} Projects <ArrowRight :size="16" />
          </router-link>
        </div>

        <div class="projects-grid">
          <ProjectCard 
            v-for="project in featuredProjects" 
            :key="project.id" 
            :project="project" 
          />
        </div>
      </div>
    </section>

    <!-- Core Domains Section -->
    <section class="section-wrapper domains-section">
      <div class="container">
        <div class="section-header" style="text-align: center; max-width: 700px; margin-left: auto; margin-right: auto;">
          <span class="section-tag">Core Capabilities</span>
          <h2 class="section-title">Technical Domains</h2>
          <p class="section-subtitle">Bridging backend distributed scale, state-of-the-art vision models, and refined product craft.</p>
        </div>

        <div class="domains-grid">
          <div class="domain-card">
            <div class="domain-icon-box">
              <Cloud :size="28" />
            </div>
            <h3 class="domain-title">Distributed Systems &amp; Cloud</h3>
            <p class="domain-text">
              Designing resilient, SLA-compliant backend systems on AWS. Experience handling high-throughput log ingestion, asynchronous queuing with SQS, and serverless compute pipelines.
            </p>
            <div class="domain-tags">
              <span>AWS</span>
              <span>Java</span>
              <span>SQS</span>
              <span>DynamoDB</span>
              <span>Docker</span>
              <span>Kafka / MQs</span>
            </div>
          </div>

          <div class="domain-card">
            <div class="domain-icon-box">
              <Cpu :size="28" />
            </div>
            <h3 class="domain-title">Computer Vision &amp; AI</h3>
            <p class="domain-text">
              Formulating computer vision and deep learning pipelines. Researching wildfire risk evaluation with UAV imagery (YOLOv8), satellite forest mapping, and multimodal generative diffusion models.
            </p>
            <div class="domain-tags">
              <span>PyTorch</span>
              <span>OpenCV</span>
              <span>YOLOv8</span>
              <span>Vision Transformers</span>
              <span>GenAI / Diffusion</span>
            </div>
          </div>

          <div class="domain-card">
            <div class="domain-icon-box">
              <Terminal :size="28" />
            </div>
            <h3 class="domain-title">Full-Stack &amp; Product Engineering</h3>
            <p class="domain-text">
              Building responsive, high-performance web and mobile products. Leveraging modern frameworks like Next.js, Vue 3, React Native, and SvelteKit to deliver fluid interactive experiences.
            </p>
            <div class="domain-tags">
              <span>Vue 3 / Vite</span>
              <span>React / Next.js</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>Python / Flask</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Reach-out Banner -->
    <section class="section-wrapper cta-section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <h2 class="cta-title">Interested in collaborating or discussing engineering?</h2>
            <p class="cta-subtitle">
              Whether you'd like to talk distributed systems, machine learning research, or explore exciting opportunities, my inbox is always open.
            </p>
          </div>
          <div class="cta-actions">
            <router-link to="/contact" class="btn btn-primary">
              Let's Connect <ArrowRight :size="18" />
            </router-link>
            <a :href="'mailto:' + profileData.contact.email" class="btn btn-secondary">
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  padding: 5rem 0 4rem;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  align-items: center;
  gap: 3.5rem;
}

.hero-content {
  display: flex;
  flex-direction: column;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-success-bg);
  border: 1px solid rgba(16, 185, 129, 0.25);
  color: var(--color-success);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-full);
  margin-bottom: 1.5rem;
  width: fit-content;
}

.badge-dot {
  width: 7px;
  height: 7px;
  background-color: var(--color-success);
  border-radius: 50%;
}

.hero-title {
  font-size: clamp(2.4rem, 4.5vw, 3.4rem);
  font-weight: 800;
  line-height: 1.18;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.gradient-text {
  background: linear-gradient(135deg, var(--accent-primary) 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 2rem;
  max-width: 620px;
}

.hero-description strong {
  color: var(--text-primary);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Hero Profile Card */
.hero-card-wrap {
  display: flex;
  justify-content: center;
}

.profile-card {
  width: 100%;
  max-width: 360px;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform var(--transition-normal);
}

.profile-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-accent);
}

.avatar-wrap {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--bg-surface-hover), var(--bg-accent-subtle));
  padding: 4px;
  margin-bottom: 1.25rem;
  border: 2px solid var(--border-accent);
}

.profile-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background-color: var(--bg-surface);
}

.status-indicator {
  position: absolute;
  bottom: 6px;
  right: 6px;
  width: 14px;
  height: 14px;
  background-color: var(--color-success);
  border: 2px solid var(--bg-surface);
  border-radius: 50%;
}

.profile-name {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.profile-role {
  font-size: 0.88rem;
  color: var(--accent-primary);
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.profile-location {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.quick-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  padding: 1rem 0;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  margin-bottom: 1.5rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
  font-family: var(--font-mono);
}

.stat-label {
  font-size: 0.72rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.2rem;
}

.card-footer-cta {
  width: 100%;
}

/* Highlights Section */
.highlights-section {
  padding: 2.5rem 0;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  background-color: var(--bg-surface);
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.75rem;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.highlight-icon {
  color: var(--accent-primary);
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.highlight-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.highlight-desc {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Featured Section */
.featured-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

/* Domains Section */
.domains-section {
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
}

.domains-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.domain-card {
  background-color: var(--bg-base);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-normal);
}

.domain-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-accent);
  box-shadow: var(--shadow-md);
}

.domain-icon-box {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: var(--radius-md);
  background-color: var(--bg-accent-subtle);
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.domain-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.85rem;
}

.domain-text {
  font-size: 0.96rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 1.5rem;
  flex: 1;
}

.domain-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.domain-tags span {
  font-size: 0.75rem;
  font-family: var(--font-mono);
  padding: 0.25rem 0.6rem;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  color: var(--text-muted);
}

/* CTA Card */
.cta-card {
  background: linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-surface-elevated) 100%);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 3.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  flex-wrap: wrap;
  box-shadow: var(--shadow-md);
}

.cta-content {
  max-width: 620px;
}

.cta-title {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.cta-subtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

.cta-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-badge {
    margin-left: auto;
    margin-right: auto;
  }
  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }
  .hero-actions {
    justify-content: center;
  }
  .featured-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
