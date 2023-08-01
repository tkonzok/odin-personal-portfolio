import './normalize.css';
import './style.css';
import Github from './github-original.svg';
import Linkedin from './linkedin-plain.svg';
import Xing from './xing.svg';
import Email from './email.svg';
import Phone from './phone.svg';
import Open from './open-in-new.svg';
import ProfilePic01S from './profile-pic-01_320.jpg';
import ProfilePic01M from './profile-pic-01_640.jpg';
import ProfilePic01L from './profile-pic-01_960.jpg';
import ProfilePic02S from './profile-pic-02_320.jpg';
import ProfilePic02M from './profile-pic-02_640.jpg';
import ProfilePic02L from './profile-pic-02_960.jpg';
import Screenshot01 from './project-screenshots/Screenshot_Battleship.png';
import Screenshot02 from './project-screenshots/Screenshot_Weather.png';
import Screenshot03 from './project-screenshots/Screenshot_ToDo.png';
import Screenshot04 from './project-screenshots/Screenshot_Dashboard.png';
import Screenshot05 from './project-screenshots/Screenshot_RPS.png';
import Screenshot06 from './project-screenshots/Screenshot_Tic-Tac-Toe.png';
import Screenshot07 from './project-screenshots/Screenshot_Etch-A-Sketch.png';
import Screenshot08 from './project-screenshots/Screenshot_CV.png';

const profilePic = document.querySelector('.profile-img')
profilePic.srcset = `${ProfilePic01S} 320w, ${ProfilePic01M} 640w, ${ProfilePic01L} 960w`

const contactPic = document.querySelector('.contact-image')
contactPic.srcset = `${ProfilePic02S} 320w, ${ProfilePic02M} 640w, ${ProfilePic02L} 960w`

let screenshots = [Screenshot01, Screenshot02, Screenshot03, Screenshot04, Screenshot05, Screenshot06, Screenshot07, Screenshot08];
const tiles = document.querySelectorAll('.project-screenshot')
for (let i = 0; i < screenshots.length; i++) {
    tiles[i].srcset = `${screenshots[i]} 600w`
}

const linkedinImg = document.querySelectorAll('.linkedin')
for (const img of linkedinImg) {
    img.src = Linkedin
}

const githubImg = document.querySelectorAll('.github')
for (const img of githubImg) {
    img.src = Github
}

const xingImg = document.querySelectorAll('.xing')
for (const img of xingImg) {
    img.src = Xing
}

const emailImg = document.querySelectorAll('.email')
for (const img of emailImg) {
    img.src = Email
}

const phoneImg = document.querySelectorAll('.phone')
for (const img of phoneImg) {
    img.src = Phone
}

const openImg = document.querySelectorAll('.open')
for (const img of openImg) {
    img.src = Open
}