export default {
    template: `
    <!-- main section -->
    <main>
        <article>
            <h1>Trip Planner - Route Planning Algorithm</h1>
            <br>
            <em>David Yang / 2022 December</em>
            <br>
            <br>
            <div class="tag-container">
                <a>Route Planning</a>
                <a>Search Algorithm</a>
                <a>Dijkstra</a>
                <a>Greedy</a>
                <a>Hill-Climb</a>
                <a>A-star</a>
                <a>CSP</a>
            </div>
            <br>
            <h3>Real Life Problem</h3>
            <br>
            <p>
                My friend Jack is planning a trip to Vancouver for the winter break vacation with his girlfriend. Their flight to YVR is on Saturday night, December 17th. They have already booked a hotel that they believe is cheap, convenient, and of good quality - the Century Plaza Hotel, located in the center of Downtown Vancouver. They decided to rent a car to transition from place to place during the trip to save time and have access to more distant locations. They have selected six places to visit in Vancouver after conducting their research. The six places are as follows:
            </p>
            <ol>
                <li>Granville Island</li>
                <li>Stanley Park</li>
                <li>Lynn Canyon Park</li>
                <li>Queen Elizabeth Park</li>
                <li>Cypress Mountain</li>
                <li>Golden Ears</li>
            </ol>
            <p>
                They need a route plan that can shorten their overall trip time. However, there are certain rules they must follow:
            </p>
            <ol>
                <li>They must stay at the Century Plaza Hotel throughout the entire trip; switching to other hotels is not allowed.</li>
                <li>They want to visit all six places, without missing any or adding extra ones.</li>
                <li>Each place can only be visited once; no repeated visits are allowed.</li>
                <li>Every day's trip must start and end at the hotel.</li>
                <li>They only have 6 hours each day for visiting, as they don't want the trip to be exhausting.</li>
                <li>If the trip of a day takes less than 6 hours and it is not the last day, it will still be counted as a 6-hour trip.</li>
                <li>The last day's trip will be counted with the actual hours spent.</li>
                <li>Currently, they don't need to consider the business hours of each place.</li>
            </ol>
            <p>
                With the above rules in mind, they need to create the best route plan for the whole trip.
            </p>
            <br>
            <h3>Data Preparation</h3>
            <br>
            <p>We collected the transition time data and staying time data from Google Maps App. We then summarized the data in the following chart (A-G represent the six places):</p>
            <table>
                <caption>Visiting Time (Transition Time + Staying Time)</caption>
                <tr>
                    <th>Time (hour)</th>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                    <th>D</th>
                    <th>E</th>
                    <th>F</th>
                    <th>G</th>
                </tr>
                <tr>
                    <td>A</td>
                    <td>-</td>
                    <td>3.25</td>
                    <td>3.1</td>
                    <td>2.5</td>
                    <td>1.3</td>
                    <td>4.6</td>
                    <td>3.4</td>
                </tr>
                <tr>
                    <td>B</td>
                    <td>0.25</td>
                    <td>-</td>
                    <td>3.3</td>
                    <td>2.6</td>
                    <td>1.25</td>
                    <td>4.8</td>
                    <td>3.2</td>
                </tr>
                <tr>
                    <td>C</td>
                    <td>0.2</td>
                    <td>3.4</td>
                    <td>-</td>
                    <td>2.3</td>
                    <td>1.5</td>
                    <td>4.4</td>
                    <td>3.2</td>
                </tr>
                <tr>
                    <td>D</td>
                    <td>0.6</td>
                    <td>3.7</td>
                    <td>3.5</td>
                    <td>-</td>
                    <td>1.6</td>
                    <td>4.5</td>
                    <td>3.1</td>
                </tr>
                <tr>
                    <td>E</td>
                    <td>0.3</td>
                    <td>3.25</td>
                    <td>3.4</td>
                    <td>2.5</td>
                    <td>-</td>
                    <td>4.75</td>
                    <td>3.1</td>
                </tr>
                <tr>
                    <td>F</td>
                    <td>0.8</td>
                    <td>4</td>
                    <td>3.5</td>
                    <td>2.6</td>
                    <td>1.9</td>
                    <td>-</td>
                    <td>3.5</td>
                </tr>
                <tr>
                    <td>G</td>
                    <td>1.2</td>
                    <td>4.2</td>
                    <td>4.2</td>
                    <td>3.0</td>
                    <td>2.1</td>
                    <td>5.3</td>
                    <td>-</td>
                </tr>
            </table>
            <br>
            <figure>
                <img src="https://i.ibb.co/0YFQGNg/trip-plan-gmap-o.webp" alt="trip-planner-2">
                <figcaption>Fig.1 - Collect Transit Data from Google Maps</figcaption>
            </figure>
            <br>
            <h3>Methodology and Result</h3>
            <br>
            <p>
                The algorithms we researched include Brute force (DFS and BFS), Greedy, and Dijkstra, which we learned from CS5800. Additionally, we delved further into some potential Artificial Intelligence Algorithms, including Hill-Climbing Algorithm, Random Restart Hill-Climbing, A-star Algorithm, and Constraint Satisfaction Problem (CSP) Algorithm. All these algorithms can solve this problem successfully. However, their performances vary.
            </p>
            <br>
            <table>
                <caption>Algorithm Comparison</caption>
                <tr>
                    <th>Algorithm</th>
                    <th>Optimal Solution</th>
                    <th>Run Time</th>
                    <th>Implementation Difficulty</th>
                    <th>Time Complexity</th>
                    <th>Space Complexity</th>
                </tr>
                <tr>
                    <td>Brute Force</td>
                    <td>Y</td>
                    <td>48.0</td>
                    <td>Easy</td>
                    <td>O(n!)</td>
                    <td>O(n!)</td>
                </tr>
                <tr>
                    <td>Greedy</td>
                    <td>N</td>
                    <td>0.26</td>
                    <td>Medium</td>
                    <td>O(n<sup>2</sup>)</td>
                    <td>O(n)</td>
                </tr>
                <tr>
                    <td>Dijkstra</td>
                    <td>Y</td>
                    <td>61.5</td>
                    <td>Medium</td>
                    <td>O(b<sup>d</sup>)</td>
                    <td>O(n!)</td>
                </tr>
                <tr>
                    <td>Hill-Climb</td>
                    <td>N</td>
                    <td>2.9</td>
                    <td>Easy</td>
                    <td>O(inf.)</td>
                    <td>O(n)</td>
                </tr>
                <tr>
                    <td>Random Restart</td>
                    <td>N</td>
                    <td>27.7</td>
                    <td>Easy</td>
                    <td>O(inf.)</td>
                    <td>O(n)</td>
                </tr>
                <tr>
                    <td>A-star</td>
                    <td>Y</td>
                    <td>47.8</td>
                    <td>Hard</td>
                    <td>O(b<sup>d</sup>)</td>
                    <td>O(n!)</td>
                </tr>
                <tr>
                    <td>CSP</td>
                    <td>Y</td>
                    <td>N/A</td>
                    <td>Hard</td>
                    <td>N/A</td>
                    <td>N/A</td>
                </tr>
            </table>
            <br>
            <p>
                The Greedy algorithm is the fastest among these 7 algorithms. It can help us obtain a good solution, but not necessarily an optimal one. The Hill-Climbing Algorithm is the second fastest algorithm. It did find the optimal solution for our real-life problem example, but it cannot guarantee to always find the optimal solution. Random Restart Hill-Climbing can improve the solution if the problem is complicated, but it also cannot guarantee to find the optimal solution, even with infinite restarts.
            </p>
            <br>
            <p>
                The main ideas of A-star and Dijkstra are very similar. They both use greedy methods to extend the search and are capable of finding the optimal solution. A-star's performance is better than Dijkstra, while Dijkstra's implementation is slightly simpler than A-star. Breadth-first search and depth-first search are the worst in terms of performance. However, both of them guarantee to find an optimal solution, and DFS has better space complexity than BFS.
            </p>
            <br>
            <br>
            <em>*Note: This is a group project collaborated with my teammates Xilong Cai and Fangxiao Guo.</em>
            <br>
            <br>
            <br>
            <div class="link-button">
                <button onclick="window.open('https://colab.research.google.com/drive/1--7N4hmlBTO9TE9ZROiF-phpM2lB7dw0?usp=sharing','_blank')">Colab ↗</button>
            </div>
        </article>
    </main>
`
};