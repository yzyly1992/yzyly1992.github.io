import articles from '../scripts/articles.js'
export default {
    name: 'Work',
    data() {
        return {
            articleList: articles
        }
    },
    methods: {
        filterArticles(category) {
            if (category === 'all') {
                this.articleList = articles
            } else {
                this.articleList = articles.filter(article => article.tag.includes(category))
            }
        }
    },
    template: `
    <main id="app">
        <div class="category-container">
            <a @click="filterArticles('all')">All</a>
            <a @click="filterArticles('frontend')">Front-end</a>
            <a @click="filterArticles('backend')">Back-end</a> 
            <a @click="filterArticles('fullstack')">Fullstack</a>
            <a @click="filterArticles('ai')">AI/ML</a>               
            <a @click="filterArticles('cv')">Computer Vision</a>              
            <a @click="filterArticles('devops')">DevOps</a>
            <a @click="filterArticles('ar')">AR/VR</a>
        </div>
        <div class="grid">
            <!-- ADD EACH PROJECT HERE. START WITH <ARTICLE> END WITH </ARTICLE> -->
            <!-- IMAGE WIDTH AT MOST 1000PX, BETTER WITHIN 50KB -->
            <article v-for="(article, index) in articleList" :key="index">
                <router-link :to="'work/' + article.alt">
                    <div>
                        <img :src="article.image" :alt="article.alt">
                    </div>
                    <div>
                        <p>{{ article.title }} <span>@ {{ article.technology }}</span></p>
                        <em>{{ article.date }}</em>
                    </div>
                </router-link>
            </article>
        </div>
    </main>
    `
}