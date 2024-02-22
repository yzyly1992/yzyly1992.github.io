export default {
    template: `
    <!-- main section -->
    <main>
        <article>
            <h1>AR Idol - WebAR Development</h1>
            <br>
            <em>David Yang / 2022 May</em>
            <br>
            <br>
            <div class="tag-container">
                <a>Augmented Reality</a>
                <a>Image Tracking</a>
                <a>WebAR</a>
                <a>ThreeJS</a>
                <a>MindAR</a>
                <a>GLTF</a>
                <a>Animation</a>
            </div>
            <br>
            <p>
                The client's requirements for the WebAR app include the following functions:
            </p>
            <ul>
                <li>Detection of a target image to display the idol character in a 3D model.</li>
                <li>Ensuring that the idol model can track and follow the movement of the target image.</li>
                <li>Converting the 3D model from .3ds format to a compatible format for WebAR and adding a waving animation to the model.</li>
                <li>Implementing interactivity, allowing users to touch the model to trigger the waving animation.</li>
                <li>Capture a photo of AR idol when clicking the capture button.</li>
                <li>The captured photo should have an art frame overlaying on the top.</li>
            </ul>
            <br>
            <figure>
                <img src="https://i.ibb.co/0fJw3gx/ar-idol.webp" alt="webar" style="max-width: 20rem;">
                <figcaption>Fig.1 - AR Idol Web App Screenshot on Mobile</figcaption>
            </figure>
            <br>
            <em>*Note: This is a commercial project completed independently.</em>
            <br>
            <br>
            <br>
            <div class="link-button">
                <button onclick="window.open('https://youtube.com/shorts/tWANo72YiYI?feature=share','_blank')">Demo Video ↗</button>
            </div>
        </article>
    </main>
`
};