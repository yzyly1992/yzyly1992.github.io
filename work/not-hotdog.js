export default {
    template: `
    <!-- main section -->
    <main>
        <article>
            <h1>Not Hotdog App - Hotdog Identifier</h1>
            <br>
            <em>David Yang / 2022 December</em>
            <br>
            <br>
            <div class="tag-container">
                <a>Computer Vision</a>
                <a>Object Detection</a>
                <a>ResNet</a>
                <a>YOLO</a>
                <a>Flask</a>
                <a>Pytorch</a>
                <a>WebApp</a>
            </div>
            <br>
            <p>
                Not Hog Dog Project is inspired by the great HBO show Silicon Valley. In one of the episodes, Jian-Yang was tasked to build an app that’d use AI to recognize food pictures and correctly label them. On the demo day, the app seemed to begin working perfectly without a glitch and labeled a newly-taken picture as “hot dog”. But as other types of food pictures were attempted, the app was only able to label the rest of them as “not hot dog”...
            </p>
            <br>
            <p>
                The objective of this project is to create an application identical to the one demonstrated in the show. Our approach involves several key steps:
            </p>
            <div>
                <ul>
                    <li><strong>Model Training: </strong>We will commence by training two Convolutional Neural Network (CNN) models, YOLOv5 and ResNet152 using a carefully curated Hotdog dataset. This dataset will serve as the foundation for teaching the models to recognize and differentiate hotdog images accurately.</li>
                    <li><strong>Model Deployment: </strong>Once the CNN models are trained, we will select the best-performing model and deploy it on a server. This step ensures that the model's capabilities are accessible over the internet and can be utilized by the web app.</li>
                    <li><strong>Web App Development: </strong>The next phase involves building a user-friendly web application that connects to the server. This web app will allow users to upload images or use their camera to capture pictures. The uploaded images will then be processed by the deployed model to determine whether they contain hotdogs or not.</li>
                </ul>
            </div>
            <br>
            <div>
            <figure>
                <img src="https://i.ibb.co/f0GWP3R/hotdog.jpg" alt="hotdog" style="max-width: 20rem;">
                <figcaption>Fig.1 - Not Hotdog Web App Interface</figcaption>
            </figure>
            <br>
            <figure>
                <img src="https://i.ibb.co/s2LXrZQ/hotdog.webp" alt="hotdog-2" style="max-width: 20rem;">
                <figcaption>Fig.2 - Hotdog Image Detection Result</figcaption>
            </figure>
            </div>
            <br>
            <br>
            <h3>Test Result</h3>
            <br>
            <table>
                <caption>CNN Model Comparison</caption>
                <tr>
                    <th>Metric</th>
                    <th>ResNet152</th>
                    <th>YOLOv5</th>
                </tr>
                <tr>
                    <td>Accuracy</td>
                    <td>85.36%</td>
                    <td>97.6%</td>
                </tr>
                <tr>
                    <td>True Positive Rate</td>
                    <td>90.16%</td>
                    <td>98.4%</td>
                </tr>
                <tr>
                    <td>False Positive Rate</td>
                    <td>19.3%</td>
                    <td>3.2%</td>
                </tr>
            </table>
            <br>
            <br>
            <em>*Note: This is a group project collaborated with my teammates Xiaofeng Yue and Jiaqing Liu.</em>
            <br>
            <br>
            <br>
            <div class="link-button">
                <button onclick="window.open('https://youtu.be/vIci3C4JkL0','_blank')">Silicon Valley ↗</button>
                <button onclick="window.open('https://docs.google.com/document/d/1bwH0irzHQc309bgvoTuRzuzDEq23_xpi8qjWt7IZ5ro/edit?usp=sharing','_blank')">Report ↗</button>
                <button onclick="window.open('https://github.com/yzyly1992/Not-Hot-Dog-Web-App','_blank')">Github ↗</button>
            </div>
        </article>
    </main>
`
};