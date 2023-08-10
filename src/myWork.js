import './normalize.css';
import './style.css';
import data from './data.json';

class MyWork {
    constructor() {
        this.dataset = data
    }

    async loadImages() {
        // import all images from project-screenshots folder
        const images = require.context('./project-screenshots', true)

        // function completing image path
        const imagePath = (name) => images(name, true)

        // insert each image to the DOM
        const tiles = document.querySelectorAll('.project-screenshot')
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].srcset = `${imagePath(`./${this.dataset.data[i].screenshot}.png`)} 600w`
        }
    }
}

export {MyWork}

/*
<div class="tile">
    <img
        src="#"
        sizes="
        (max-width: 48em) min(calc(100vw - 2rem), 600px),
        320px
        "
        alt="Screenshot of project Memory Game"
        class="project-screenshot"
    />
    <div class="project-info">
        <h3>
        <a href="https://rick-and-morty-memory.vercel.app/">Memory Game</a>
        </h3>
        <a href="https://github.com/tkonzok/odin-memory-card"
        ><img src="#" alt="GitHub icon" width="32px" class="github"
        /></a>
        <a href="https://rick-and-morty-memory.vercel.app/"
        ><img
            src="#"
            alt="Icon of opening in new tab"
            width="32px"
            class="open"
        /></a>
        <p class="project-description">
        React project on days 38 - 39 of
        <a
            href="https://theodinproject.com/lessons/node-path-react-new-memory-card"
            ><u>'The Odin Project' web development course</u></a
        >
        .
        <ul><b>Main focus:</b>
            <li>Second React project (how to use effect)</li>
        </ul>
        </p>
    </div>
</div>
*/