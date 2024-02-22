export default {
    name: 'Home',
    template: `
    <main class="index-intro">
        <section>
            <h1>Hi, I'm David Yang<span></span></h1>
            <h3>Engineer, Researcher, Entrepreneur<span></span></h3>
            <br></br>
            <br></br>
            <div class="link-button">
                <button @click="$router.push('work')">See My Work</button>
                <button @click="$router.push('contact')">Let's Talk</button>
            </div>
        </section>
    </main>
    `
}
