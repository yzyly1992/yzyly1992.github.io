export default {
    template: `
    <!-- main section -->
    <main>
        <article>
            <h1>Mini-Twitter System</h1>
            <br>
            <em>David Yang / 2023 May</em>
            <br>
            <br>
            <div class="tag-container">
                <a>Distributed Systems</a>
                <a>Cloud Computating</a>
                <a>AWS</a>
                <a>SpringBoot</a>
                <a>Redis</a>
                <a>DynamoDB</a>
            </div>
            <br>
            <p>
                Welcome to the Mini-Twitter project, where we embark on designing and developing a cutting-edge, highly scalable system to offer a range of essential services, including post tweet, read feed, and user-following features. Our primary goal is to create an efficient system that can handle a massive user base while ensuring seamless user experiences.
            </p>
            <br>
            <p>
                In this exciting venture, we will delve into the world of cache and non-cache strategies, meticulously experimenting and testing their impact on system performance. By doing so, we aim to gain valuable insights into the trade-offs involved and optimize the overall system to deliver lightning-fast response times and impeccable reliability.
            </p>
            <br>
            <h3>Server Implementation</h3>
            <ul>
                <li><strong>AWS Serverless Application Model (SAM) </strong>quickly deploys Spring Boot applications to API Gateway and Lambda.</li>
                <li><strong>Spring Boot Container </strong>manages DB connections, Redis connections and singletons in services, ensuring optimal performance and resource utilization. 
                </li>
                <li><strong>Redis </strong>plays a pivotal role in our system as a key-value memory store, supporting various data types, including List. This feature-rich memory store enhances data access speeds and enables smooth handling of complex data structures. </li>
                <li><strong>DynamoDB CRUD Repositories </strong>and DTOs(Data Transfer Objects) make DB  operations straightforward and efficient.</li>
            </ul>
            <br>
            <div>
                <figure>
                    <img src="https://i.ibb.co/bKqjBZf/twitter-1.png" alt="twitter-1">
                    <figcaption>Fig.1 - Original Architecture Design</figcaption>
                </figure>
                <br>
                <figure>
                    <img src="https://i.ibb.co/BV8qtxv/twitter-2.jpg" alt="twitter-2">
                    <figcaption>Fig.2 - Bottleneck Analysis</figcaption>
                </figure>
            </div>
            <br>
            <em>*Note: This is a group project collaborated with my teammates Lin Li and Fangxiao Guo.</em>
            <br>
            <br>
            <br>
            <div class="link-button">
                <button onclick="window.open('https://www.youtube.com/watch?v=o65StNRWQ-s','_blank')">Demo Video ↗</button>
                <button onclick="window.open('https://docs.google.com/presentation/d/14qx6x6lAGSQmnp1ZgZ3EjCV2xmG4W1kuNmMmrIbf_PI/edit#slide=id.p','_blank')">Presentation ↗</button>
                <button onclick="window.open('https://github.com/yzyly1992/mini-twitter','_blank')">Github ↗</button>
            </div>
        </article>
    </main>
`
};