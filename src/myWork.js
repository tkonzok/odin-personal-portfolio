import './normalize.css';
import './style.css';
import data from './data.json';
import Github from './github-original.svg';
import Open from './open-in-new.svg';

class MyWork {
    constructor() {
        this.dataset = data
    }

    buildDom() {
        const gridContainter = document.querySelector('.grid-container')
        for (let i=0; i<this.dataset.data.length; i++) {
            const tile = document.createElement('div');
            tile.classList.add('tile')
            gridContainter.appendChild(tile)

            const imageLink = document.createElement('a')
            imageLink.classList.add('project-screenshot-link')
            tile.appendChild(imageLink);

            const image = document.createElement('img');
            image.classList.add('project-screenshot')
            image.src = '#';
            image.sizes = '(max-width: 48em) min(calc(100vw - 2rem), 600px), 320px';
            imageLink.appendChild(image);

            const info = document.createElement('div');
            info.classList.add('project-info');
            tile.appendChild(info);
        }
    }

    async loadInfos() {
        const infoDivs = document.querySelectorAll('.project-info')
        for (let i = 0; i < infoDivs.length; i++) {
            const title = document.createElement('h3');
            infoDivs[i].appendChild(title);

            const titleName = document.createElement('a');
            titleName.href = this.dataset.data[i].livePreview;
            titleName.textContent = this.dataset.data[i].title;
            title.appendChild(titleName);

            const github = document.createElement('a');
            github.href = this.dataset.data[i].github;
            infoDivs[i].appendChild(github);

            const githubImg = document.createElement('img');
            githubImg.classList.add('github');
            githubImg.src = '#';
            githubImg.alt = 'GitHub Icon';
            githubImg.width = '32';
            github.appendChild(githubImg);

            const livePreview = document.createElement('a');
            livePreview.href = this.dataset.data[i].livePreview;
            infoDivs[i].appendChild(livePreview);

            const openPreviewImg = document.createElement('img');
            openPreviewImg.classList.add('open');
            openPreviewImg.src = '#';
            openPreviewImg.alt = 'Icon of opening in new tab';
            openPreviewImg.width = '32';
            livePreview.appendChild(openPreviewImg);

            const description = document.createElement('p');
            description.classList.add('project-description');
            description.innerHTML = this.dataset.data[i].description
            infoDivs[i].appendChild(description)
        }
    }

    async loadImages() {
        // import all images from project-screenshots folder
        const images = require.context('./project-screenshots', true)

        // function completing image path
        const imagePath = (name) => images(name, true)

        // insert each image to the DOM
        const tiles = document.querySelectorAll('.project-screenshot')
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].srcset = `${imagePath(`./${this.dataset.data[i].screenshot}.png`)} 600w`;
            tiles[i].alt = `Screenshot of project ${this.dataset.data[i].title}`;
        }

        const tilesLink = document.querySelectorAll('.project-screenshot-link')
        for (let i = 0; i < tiles.length; i++) {
            tilesLink[i].href = this.dataset.data[i].livePreview;
        }

        const githubImg = document.querySelectorAll('.github')
        for (const img of githubImg) {
            img.src = Github
        }

        const openImg = document.querySelectorAll('.open')
        for (const img of openImg) {
            img.src = Open
        }
    }
}

export {MyWork}