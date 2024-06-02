export default {
    template: `
    <!-- main section -->
    <main>
        <article>
            <h1>Airport Runway Defects Detection</h1>
            <br>
            <em>David Yang / 2023 December</em>
            <br>
            <br>
            <div class="tag-container">
                <a>Airport Runway</a>
                <a>UAV</a>
                <a>Drone Imagery</a>
                <a>Segmentation</a>
                <a>Smoothness Detection</a>
            </div>
            <br>
            <p>
                In the vast and challenging landscapes of northern Canada, where scattered communities heavily rely on air transportation for essential services, remote airports face significant challenges such as limited resources, high operational costs, and logistical difficulties. The traditional manual inspection methods, plagued by infrequency, labor-intensity, and subjectivity, exacerbate these issues. 
            </p>
            <br>
            <p>
                This paper proposes a novel solution utilizing modern technology, particularly drones equipped with advanced sensors and computer vision. The project aims to collect precise baseline data from the 117 remote airports in Canada, 94 of which have gravel runways, to enhance safety and infrastructure longevity. The drones will capture high-resolution imagery, and computer vision analysis will be applied to detect runway defects, vegetation issues, and potential hazards for proactive maintenance, presenting a promising approach to address these longstanding challenges in remote airport management.
            </p>
            <br>
            <figure>
                <img src="https://i.ibb.co/hZcnzFh/runway-demo.webp" alt="runway">
                <figcaption>Fig.1 - Demo Application</figcaption>
            </figure>
            <br>
            <em>*Note: This research project is leaded by Prof. Michal Aibin and Prof. Lino Coria Mendoza from Northeastern University, and supported by TransCanada and Spexi Geospatial.</em>
            <br>
            <br>
            <br>
            <div class="link-button">
                <button onclick="window.open('https://www.mdpi.com/2504-446X/8/6/225','_blank')">Published Paper (MDPI 2024) ↗</button>
            </div>
        </article>
    </main>
`
};