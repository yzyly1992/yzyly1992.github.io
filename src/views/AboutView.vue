<script setup>
import { Briefcase, GraduationCap, Award, MapPin, Calendar, Download, ExternalLink, Sparkles, BookOpen } from '@lucide/vue';
import profileData from '@/data/profile.json';
</script>

<template>
  <div class="about-view section-wrapper">
    <div class="container about-container">
      <!-- Profile Header / Bio Section -->
      <section class="bio-section">
        <div class="bio-grid">
          <div class="bio-avatar-card glass">
            <div class="avatar-ring">
              <img :src="profileData.avatar" alt="David Yang" class="avatar-img" />
            </div>
            <div class="avatar-meta">
              <h3 class="meta-name">{{ profileData.name }}</h3>
              <p class="meta-title">{{ profileData.currentRole.title }}</p>
              <p class="meta-company">{{ profileData.currentRole.company }}</p>
              <div class="meta-loc">
                <MapPin :size="14" /> {{ profileData.location }}
              </div>
            </div>
          </div>

          <div class="bio-text-card">
            <span class="section-tag">About Me</span>
            <h1 class="bio-title">Bridging Systems Engineering, Computer Vision &amp; Spatial Design</h1>
            
            <p class="bio-lead">
              {{ profileData.bio }}
            </p>

            <p class="bio-sub">
              My engineering philosophy revolves around <strong>resilience, scalability, and precision</strong>. From architecting fault-tolerant log transport pipelines capable of handling enterprise data volume to crafting deep learning computer vision algorithms for wildfire prevention, I enjoy solving problems at the confluence of mathematics, cloud architecture, and intuitive design.
            </p>

            <div class="bio-actions">
              <router-link to="/contact" class="btn btn-primary">
                Get in Touch
              </router-link>
              <router-link to="/work" class="btn btn-secondary">
                View Portfolio
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Timeline Section -->
      <section class="section-block">
        <div class="section-header">
          <span class="section-tag">Career Journey</span>
          <h2 class="section-title">Professional Experience</h2>
          <p class="section-subtitle">
            A track record of engineering impact across Big Tech, fast-paced startups, and academic research.
          </p>
        </div>

        <div class="timeline">
          <div 
            v-for="(job, index) in profileData.experience" 
            :key="index" 
            class="timeline-item"
            :class="{ 'current-job': job.current }"
          >
            <div class="timeline-dot-wrap">
              <span class="timeline-dot"></span>
              <span v-if="job.current" class="timeline-pulse"></span>
            </div>

            <div class="timeline-card glass">
              <div class="job-header">
                <div>
                  <h3 class="job-role">{{ job.role }}</h3>
                  <h4 class="job-company">
                    {{ job.company }}
                    <span v-if="job.current" class="current-badge">Current Role</span>
                  </h4>
                </div>
                <div class="job-meta">
                  <span class="job-period"><Calendar :size="14" /> {{ job.period }}</span>
                  <span class="job-loc"><MapPin :size="14" /> {{ job.location }}</span>
                </div>
              </div>

              <p class="job-desc">{{ job.description }}</p>

              <div class="job-tech">
                <span v-for="tech in job.technologies" :key="tech" class="badge">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Peer-Reviewed Publications Section -->
      <section class="section-block">
        <div class="section-header">
          <span class="section-tag">Scientific Research</span>
          <h2 class="section-title">Peer-Reviewed Publications</h2>
          <p class="section-subtitle">
            First-author and collaborative publications in computer vision, UAV remote sensing, and wildfire risk assessment ({{ profileData.stats.citations }} citations across {{ profileData.stats.papers }} papers).
          </p>
        </div>

        <div class="publications-list">
          <div 
            v-for="(pub, index) in profileData.publications" 
            :key="index"
            class="pub-card glass"
          >
            <div class="pub-header">
              <div class="pub-badges">
                <span class="pub-year">{{ pub.year }}</span>
                <span class="pub-venue">{{ pub.venue }}</span>
                <span v-if="pub.citations > 0" class="pub-citations">
                  Cited by {{ pub.citations }}
                </span>
              </div>
            </div>

            <h3 class="pub-title">
              <a :href="pub.link" target="_blank" rel="noopener noreferrer">
                {{ pub.title }}
              </a>
            </h3>

            <p class="pub-authors">{{ pub.authors }}</p>

            <div class="pub-actions">
              <a :href="pub.link" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                View Paper <ExternalLink :size="14" />
              </a>
              <router-link v-if="pub.projectId" :to="'/work/' + pub.projectId" class="btn btn-secondary btn-sm pub-case-study">
                Project Case Study &rarr;
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- Education & Research Honors Section -->
      <section class="section-block">
        <div class="section-header">
          <span class="section-tag">Academic Background</span>
          <h2 class="section-title">Education &amp; Honors</h2>
          <p class="section-subtitle">
            Rigorous foundation in computer science, research methodology, and spatial systems.
          </p>
        </div>

        <div class="education-grid">
          <div 
            v-for="(edu, index) in profileData.education" 
            :key="index" 
            class="education-card"
          >
            <div class="edu-top">
              <div class="edu-icon-wrap">
                <GraduationCap :size="24" />
              </div>
              <span v-if="edu.gpa" class="gpa-pill">GPA: {{ edu.gpa }}</span>
            </div>

            <h3 class="edu-degree">{{ edu.degree }}</h3>
            <h4 class="edu-school">{{ edu.institution }}</h4>
            <p class="edu-meta">{{ edu.period }} &bull; {{ edu.location }}</p>

            <div v-if="edu.honors && edu.honors.length > 0" class="edu-honors">
              <h5 class="honors-title">Honors &amp; Appointments</h5>
              <ul class="honors-list">
                <li v-for="honor in edu.honors" :key="honor">
                  {{ honor }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Categorized Tech Stack Matrix -->
      <section class="section-block">
        <div class="section-header">
          <span class="section-tag">Competencies</span>
          <h2 class="section-title">Technical Skill Matrix</h2>
          <p class="section-subtitle">
            Tools, languages, and distributed frameworks utilized in daily engineering and research.
          </p>
        </div>

        <div class="skills-grid">
          <div 
            v-for="cat in profileData.skillCategories" 
            :key="cat.category" 
            class="skill-category-card"
          >
            <h3 class="category-heading">{{ cat.category }}</h3>
            <div class="skills-wrap">
              <span v-for="skill in cat.skills" :key="skill" class="skill-pill">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  max-width: 1040px;
}

.bio-section {
  margin-bottom: 5rem;
}

.bio-grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 3.5rem;
  align-items: start;
}

.bio-avatar-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 2.25rem 1.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: var(--shadow-md);
}

.avatar-ring {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, var(--accent-primary), #8b5cf6);
  margin-bottom: 1.5rem;
}

.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background-color: var(--bg-surface);
}

.meta-name {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.meta-title {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--accent-primary);
}

.meta-company {
  font-size: 0.88rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.meta-loc {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.82rem;
  color: var(--text-muted);
}

.bio-title {
  font-size: clamp(1.85rem, 3.2vw, 2.5rem);
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 1.5rem;
}

.bio-lead {
  font-size: 1.15rem;
  color: var(--text-primary);
  line-height: 1.75;
  margin-bottom: 1.25rem;
}

.bio-sub {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 2rem;
}

.bio-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.section-block {
  margin-bottom: 5.5rem;
}

/* Publications */
.publications-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.pub-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 1.75rem 2rem;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast);
}

.pub-card:hover {
  border-color: var(--border-accent);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.pub-badges {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 0.85rem;
}

.pub-year {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-full);
  background-color: var(--bg-accent-subtle);
  color: var(--accent-primary);
}

.pub-venue {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-primary);
}

.pub-citations {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.15rem 0.55rem;
  border-radius: var(--radius-full);
  background-color: var(--color-success-bg);
  color: var(--color-success);
}

.pub-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.pub-title a:hover {
  color: var(--accent-primary);
}

.pub-authors {
  font-size: 0.92rem;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.pub-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.pub-case-study {
  color: var(--accent-primary);
}

/* Timeline */
.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-left: 1rem;
  border-left: 2px solid var(--border-subtle);
  padding-left: 2rem;
}

.timeline-item {
  position: relative;
}

.timeline-dot-wrap {
  position: absolute;
  top: 1.5rem;
  left: calc(-2rem - 9px);
  width: 16px;
  height: 16px;
}

.timeline-dot {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--bg-surface);
  border: 3px solid var(--border-strong);
  transition: all var(--transition-fast);
}

.current-job .timeline-dot {
  border-color: var(--color-success);
  background-color: var(--color-success);
}

.timeline-pulse {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--color-success);
  opacity: 0.4;
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2.2);
    opacity: 0;
  }
}

.timeline-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast);
}

.timeline-card:hover {
  border-color: var(--border-accent);
  box-shadow: var(--shadow-md);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.job-role {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
}

.job-company {
  font-size: 1.02rem;
  color: var(--accent-primary);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 0.2rem;
}

.current-badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.55rem;
  border-radius: var(--radius-full);
  background-color: var(--color-success-bg);
  color: var(--color-success);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.job-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  font-size: 0.82rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.job-period, .job-loc {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.job-desc {
  font-size: 0.98rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 1.25rem;
}

.job-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

/* Education Grid */
.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 2rem;
}

.education-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-fast);
}

.education-card:hover {
  border-color: var(--border-accent);
  box-shadow: var(--shadow-md);
}

.edu-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.edu-icon-wrap {
  width: 3rem;
  height: 3rem;
  border-radius: var(--radius-md);
  background-color: var(--bg-accent-subtle);
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.gpa-pill {
  font-size: 0.8rem;
  font-weight: 700;
  font-family: var(--font-mono);
  color: var(--accent-primary);
  background-color: var(--bg-accent-subtle);
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
}

.edu-degree {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
}

.edu-school {
  font-size: 1rem;
  color: var(--accent-primary);
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.edu-meta {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
  margin-bottom: 1.5rem;
}

.edu-honors {
  margin-top: auto;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-subtle);
}

.honors-title {
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.honors-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.honors-list li {
  font-size: 0.88rem;
  color: var(--text-secondary);
  position: relative;
  padding-left: 1.1rem;
}

.honors-list li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent-primary);
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.skill-category-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  box-shadow: var(--shadow-sm);
}

.category-heading {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 0.5rem;
}

.skills-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.skill-pill {
  font-size: 0.82rem;
  font-family: var(--font-mono);
  padding: 0.3rem 0.65rem;
  border-radius: var(--radius-sm);
  background-color: var(--bg-surface-hover);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  transition: all var(--transition-fast);
}

.skill-pill:hover {
  background-color: var(--bg-accent-subtle);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

@media (max-width: 900px) {
  .bio-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .job-header {
    flex-direction: column;
  }
  .job-meta {
    align-items: flex-start;
  }
}
</style>
