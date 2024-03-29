export default {
    template: `
    <!-- main section -->
    <main>
        <article>
            <h1>AR Image Tracking System</h1>
            <br>
            <em>David Yang / 2023 April</em>
            <br>
            <br>
            <div class="tag-container">
                <a>Computer Vision</a>
                <a>Keypoint Detection</a>
                <a>Keypoint Matching</a>
                <a>AR</a>
                <a>Image Tracking</a>
            </div>
            <br>
            <p>
                Augmented Reality (AR) is an innovative technology capable of superimposing virtual information onto the real-world environment, offering immense potential and value across various industries and in our daily lives. Despite its promise, AR's widespread adoption remains in its early stages due to hardware limitations and the complexity of improving algorithms. This paper delves into a critical component of AR image tracking—the keypoint detection algorithm. This algorithm marks the initial and vital step in AR applications. As image tracking operates in real-time and real-world scenarios, the algorithms must exhibit exceptional qualities, including high speed, accuracy, and resilience to variations and noise.
            </p>
            <br>
            <p>
                Our study examines both traditional handcrafted keypoint detection algorithms, such as SIFT, SURF, ORB, and cutting-edge deep learning algorithms like SuperPoint, in the context of AR image tracking scenarios. By conducting rigorous tests and comparisons, we aim to identify the strengths and weaknesses of each approach. Additionally, we will address the best practices when implementing AR image tracking using keypoint detection algorithms.
            </p>
            <br>
            <h3>Architecture</h3>
            <br>
            <div>
            <figure>
                <img src="https://i.ibb.co/8YstPjp/ar-image-track-1.png" alt="ar-image-track-1">
                <figcaption>Fig.1 - AR Image Tracking Pipeline Design</figcaption>
            </figure>
            <br>
            <figure>
                <img src="https://i.ibb.co/4fNYyrG/ar-image-track-2.png" alt="ar-image-track-2">
                <figcaption>Fig.2 - Improved Tracking Pipeline</figcaption>
            </figure>
            </div>
            <br>
            <br>
            <h3>Result</h3>
            <br>
            <table>
                <caption>Keypoint Detection Algorithms Comparison</caption>
                <tr>
                    <th>Detector</th>
                    <th>Speed(FPS)</th>
                    <th>Detection Rate</th>
                    <th>Detection Quality</th>
                </tr>
                <tr>
                    <td>SIFT</td>
                    <td>15.4</td>
                    <td>684/705</td>
                    <td>Good</td>
                </tr>
                <tr>
                    <td>SURF(minHessian=400)</td>
                    <td>19.0</td>
                    <td>401/705</td>
                    <td>OK</td>
                </tr>
                <tr>
                    <td>ORB(nfeature=2000)</td>
                    <td>23.4</td>
                    <td>273/705</td>
                    <td>Poor</td>
                </tr>
                <tr>
                    <td>SuperPoint(CPU)</td>
                    <td>1.7</td>
                    <td>643/705</td>
                    <td>Good</td>
                </tr>
            </table>
            <br>
            <table>
                <caption>Improved Tracking Pipeline Result</caption>
                <tr>
                    <th>Image Tracking Pipeline</th>
                    <th>Speed(FPS)</th>
                    <th>Detection Rate</th>
                    <th>Detection Quality</th>
                </tr>
                <tr>
                    <td>Original Pipeline with SIFT</td>
                    <td>15.4</td>
                    <td>684/705</td>
                    <td>Good</td>
                </tr>
                <tr>
                    <td>Improved Pipeline with SIFT</td>
                    <td>33.7</td>
                    <td>705/705</td>
                    <td>Good</td>
                </tr>
            </table>
            <br>
            <br>
            <em>*Note: This is an individual research project.</em>
            <br>
            <br>
            <br>
            <div class="link-button">
                <button onclick="window.open('https://youtu.be/4bwdhYC6M6k','_blank')">Demo Video-1 ↗</button>
                <button onclick="window.open('https://youtu.be/qJnT8BSD8mA','_blank')">Demo Video-2 ↗</button>
                <button onclick="window.open('https://docs.google.com/presentation/d/16Ub37KeAaehhQH53XyZkw7uagLL1TJbw9qT8_dZ5MHw/edit?usp=sharing','_blank')">Presentation ↗</button>
            </div>
        </article>
    </main>
`
};