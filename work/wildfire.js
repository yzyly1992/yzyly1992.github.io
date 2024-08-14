export default {
    template: `
    <!-- main section -->
    <main>
        <article>
            <h1>Forest Fire Risk Assessment with Deep Learning Methods and UAV Imagery</h1>
            <br>
            <em>David Yang / 2023 June</em>
            <br>
            <br>
            <div class="tag-container">
                <a>Research</a>
                <a>Computer Vision</a>
                <a>Object Detection</a>
                <a>YOLO</a>
                <a>UAV</a>
                <a>Mapping</a>
            </div>
            <br>
            <p>"Canada is having its worst fire season in modern history. The fires have burnt more than 20 million acres, casting hazardous smoke over parts of the U.S. and stretching Canadian firefighting resources thin." <a href="https://www.npr.org/2023/07/11/1187105458/this-is-canadas-worst-fire-season-in-modern-history-but-its-not-new">[NPR]</a></p>
            <br>
            <p>Once a fire starts, it becomes extremely challenging to extinguish. The most efficient approach to minimizing losses is by preventing fires from occurring in the first place. Unfortunately, existing systems lack the capability to accurately predict fires. Moreover, traditional monitoring methods have limitations in terms of coverage range, cost, and maintenance.</p>
            <br>
            <p>To address these challenges, this research proposes an innovative end-to-end forest fire risk assessment system that combines the YOLOv8 object detection algorithm, UAV imagery, and visualization techniques. This system effectively assesses the risk of forest fires and presents the information in a user-friendly manner for a wider audience.</p>
            <br>
            <figure>
                <img src="https://i.ibb.co/f0vrnXg/fire-1.jpg" alt="fire-1" style="max-width: 20rem;">
                <figcaption>Fig.1 - Original UAV Image of Forest Trees</figcaption>
            </figure>
            <br>
            <figure>
                <img src="https://i.ibb.co/KGgmzYY/fire-2.jpg" alt="fire-2" style="max-width: 20rem;">
                <figcaption>Fig.2 - Prediction Results of Tree Types by YOLOv8</figcaption>
            </figure>
            <br>
            <figure>
                <img src="https://i.ibb.co/QCgx930/fire-3.jpg" alt="fire-3" style="max-width: 20rem;">
                <figcaption>Fig.3 - Visualization Results of Fire Risk by Merging and Coloring Techniques</figcaption>
            </figure>
            <br>
            <em>*Note: This research project is leaded by Prof. Michal Aibin and Prof. Lino Coria Mendoza from Northeastern University, and supported by TransCanada and Spexi Geospatial.</em>
            <br>
            <br>
            <br>
            <div class="link-button">
                <button onclick="window.open('https://www.mdpi.com/2504-446X/8/2/39','_blank')">Published Paper (MDPI 2024) ↗</button>
            </div>
        </article>
    </main>
`
};