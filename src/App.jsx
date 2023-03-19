import React, {useState, useEffect} from 'react'
import * as THREE from "three";
import gsap from "gsap";
import Projects from "./Projects"
import Work from "./Work";
import Skills from "./Skills";
import { useRef } from 'react';
import Footer from './Footer';
import "./App.css"
import WorkMain from './WorkMain';
import Certifications from './Certifications';
import Education from './Education';

let starGeometry = undefined;
let stars = undefined;
let frame = 0,
  velocity = 1;
let starsClicked = false;

function rgbToPercentage({r, g, b}) {
  return {
    r: r/255,
    g: g/255,
    b: b/255
  }
}

const INITIAL_COLORS = {r: 35, g: 181, b: 225}
const initialColorPercentages = rgbToPercentage({...INITIAL_COLORS});

function jaggedPlane(planeMesh) {
  let planeVertices = planeMesh.geometry.attributes.position.array;
  const randomValues = [];
  for (let i = 0; i < planeVertices.length; ++i) {
    if (i % 3 == 0) {
      const x = planeVertices[i];
      const y = planeVertices[i + 1];
      const z = planeVertices[i + 2];

      planeVertices[i] = x + (Math.random() - 0.5) * 0.25;
      planeVertices[i + 1] = y + (Math.random() - 0.5) * 0.25;
      planeVertices[i + 2] = z + (Math.random() - 0.5) * 0.5;
    }

    randomValues.push(Math.random() * Math.PI * 2);
  }

  planeMesh.geometry.attributes.position.randomValues = randomValues;
  planeMesh.geometry.attributes.position.originalPosition =
    planeMesh.geometry.attributes.position.array;

  const colors = [];
  for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++) {
    colors.push(initialColorPercentages.r, initialColorPercentages.g, initialColorPercentages.b);
  }

  planeMesh.geometry.setAttribute(
    "color",
    new THREE.BufferAttribute(new Float32Array(colors), 3)
  );
}

function generatePlane(localPlaneMesh) {
  localPlaneMesh.geometry.dispose();
  localPlaneMesh.geometry = new THREE.PlaneGeometry(22, 12, 20, 15);
  jaggedPlane(localPlaneMesh);
}

function getStars() {
  starGeometry = new THREE.BufferGeometry();
  const numStars = 4000;
  let vertices = [];
  for (let i = 0; i < numStars; i++) {
    vertices.push(
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300
    );
  }
  starGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(vertices), 3)
  );
  const starTexture = new THREE.TextureLoader().load("star.png");
  const starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.7,
    map: starTexture,
  });
  return new THREE.Points(starGeometry, starMaterial);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showStars(camera, scene) {
  // Set new camera position and rotation
  gsap.to(camera.position, { z: 2, y: -3, duration: 1.75 });
  gsap.to(camera.rotation, { x: 1.75, duration: 1.5 });

  const duration = 0.15;
  gsap.timeline({repeat: 2, repeatDelay: 0})
      .to("#bannerContent", {x: 1, y: 1, rotate: 0, duration: duration})
      .to("#bannerContent", {x: getRandomInt(-5,5), y: getRandomInt(-5,5), rotate: getRandomInt(-2, 0), duration: duration})
      .to("#bannerContent", {x:  getRandomInt(-5,5), y: getRandomInt(-5,5), rotate: getRandomInt(0, 2), duration: duration})
      .to("#bannerContent", {x: getRandomInt(-5,5), y: getRandomInt(-5,5), rotate: getRandomInt(-1, 1), duration: duration})
      .to("#bannerContent", {x: getRandomInt(-5,5), y:  getRandomInt(-5,5), rotate: getRandomInt(0, 1), duration: duration})
      .to("#bannerContent", {x:  getRandomInt(-5,5), y: getRandomInt(-5,5), rotate: getRandomInt(-2, 0), duration: duration})
      .to("#bannerContent", {x:  getRandomInt(-5,5), y: getRandomInt(-5,5), rotate: getRandomInt(-1, 1), duration: duration})
      .to("#bannerContent", {x: getRandomInt(-5,5), y: getRandomInt(-5,5), rotate: getRandomInt(-2, 0), duration: duration})
      .to("#bannerContent", {x:  getRandomInt(-5,5), y: getRandomInt(-5,5), rotate: getRandomInt(0, 2), duration: duration})
      .to("#bannerContent", {x: getRandomInt(-5,5), y: getRandomInt(-5,5), rotate: getRandomInt(-1, 1), duration: duration})
      .to("#bannerContent", {x: getRandomInt(-5,5), y:  getRandomInt(-5,5), rotate: getRandomInt(-2, 0), duration: duration})
      .to("#bannerContent", {x: 0, y: 0, rotate: 0, duration: duration});

  starsClicked = true;
  // Add stars
  stars = getStars();
  scene.add(stars);
}

// For raycaster
const mouse = { x: undefined, y: undefined };
window.addEventListener("mousemove", (event) => {
    // Normalize mouse coordinates
    mouse.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.y = -((event.clientY + scrollY) / innerHeight) * 2 + 1;
});

// For torus animation
const cursor = {x: undefined, y: undefined};
window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / window.innerWidth - 0.5;
  cursor.y = event.clientY / window.innerHeight - 0.5;
})


// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

let bannerCamera = undefined, bannerScene = undefined;

function App() {
  const size = useWindowSize();
  useEffect(() => {
    const raycaster = new THREE.Raycaster();
    bannerScene = new THREE.Scene();
    bannerCamera = new THREE.PerspectiveCamera(
      75,
      (size.width && size.height) ? size.width / size.height : window.innerWidth / window.innerHeight,
      // window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const myCanvas = document.getElementById("canvas1");
    const renderer = new THREE.WebGLRenderer({canvas: myCanvas});

    renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.setSize(window.innerWidth, window.innerHeight);
    if (size.width && size.height)
      renderer.setSize(size.width, size.height);
    else
      renderer.setSize(window.innerWidth, window.innerHeight);
    // bannerCamera.position.setZ(6.8);
    bannerCamera.position.setZ(6.5);
    document.body.appendChild(renderer.domElement);

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, -1, 1);
    bannerScene.add(light);

    // Back light
    const backLight = new THREE.DirectionalLight(0xffffff, 1);
    backLight.position.set(0, 0, -1);
    bannerScene.add(backLight);

    // Plane
    const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10);
    const planeMaterial = new THREE.MeshPhongMaterial({
      // color: 0xff0000,
      side: THREE.DoubleSide,
      flatShading: THREE.FlatShading,
      vertexColors: true,
    });
    const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    bannerScene.add(planeMesh);
    generatePlane(planeMesh);

    const animate = () => {
      window.requestAnimationFrame(animate);
    
      if(renderer && bannerScene && bannerCamera)
        renderer.render(bannerScene, bannerCamera);
    
      if (starsClicked) {    
        let { array } = stars.geometry.getAttribute("position");
    
        if (velocity <= 31) {
          if (1 <= velocity && velocity < 3) velocity *= 1.0015;
          else if (3 <= velocity && velocity < 7) velocity *= 1.05;
          else if (7 <= velocity && velocity <= 30) velocity *= 2;
    
          for (let i = 1; i < array.length; i += 3) {
            if (velocity < 20) array[i] -= velocity;
            if (array[i] < -200) array[i] = 400;
          }
          gsap.to(bannerCamera.position, { z: 6, duration: 3 }); //
        } else {
          for (let i = 1; i < array.length; i += 3) {
            array[i] -= 0.01;
            if (array[i] < -200) array[i] = 400;
          }
          bannerScene.remove(planeMesh);
        }
        stars.geometry.attributes.position.needsUpdate = true;
    
        bannerCamera.rotation.y -= 0.0001; //  0.00005
      } else {
        frame += 0.01;
        // Constantly changing background
        const { array, originalPosition, randomValues } =
          planeMesh.geometry.attributes.position;
        for (let i = 0; i < array.length; i += 3) {
          array[i] =
            originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.001;
          array[i + 1] =
            originalPosition[i + 1] + Math.cos(frame + randomValues[i]) * 0.0001;
          array[i + 2] =
            originalPosition[i + 2] + Math.cos(frame + randomValues[i]) * 0.0005;
        }
    
        planeMesh.geometry.attributes.position.needsUpdate = true;
    
        // Highlight on hover effect
        raycaster.setFromCamera(mouse, bannerCamera);
        const intersects = raycaster.intersectObject(planeMesh);
        if (intersects.length > 0) {
          const { color } = intersects[0].object.geometry.attributes;
    
          color.needsUpdate = true;
    
          const hoverColor =  rgbToPercentage({r:30, g:215, b:248});
          gsap.to(hoverColor, {
            r: initialColorPercentages.r,
            g: initialColorPercentages.g,
            b: initialColorPercentages.b,
            onUpdate: () => {
              // vertex 1
              color.setX(intersects[0].face.a, hoverColor.r);
              color.setY(intersects[0].face.a, hoverColor.g);
              color.setZ(intersects[0].face.a, hoverColor.b);
    
              // vertex 2
              color.setX(intersects[0].face.b, hoverColor.r);
              color.setY(intersects[0].face.b, hoverColor.g);
              color.setZ(intersects[0].face.b, hoverColor.b);
    
              // vertex 3
              color.setX(intersects[0].face.c, hoverColor.r);
              color.setY(intersects[0].face.c, hoverColor.g);
              color.setZ(intersects[0].face.c, hoverColor.b);
            },
          });
        }
      }
    }

    animate();
  }, [size.width, size.height]);

  // useEffect(() => {
  //     const scene = new THREE.Scene();
  //     const camera = new THREE.PerspectiveCamera(
  //     75,
  //     1,
  //     0.1,
  //     1000
  //     );
  //     const myCanvas = document.getElementById("canvas2");
  //     console.log("myCanvas2: ", myCanvas)

  //     const renderer = new THREE.WebGLRenderer({canvas: myCanvas});
  //     renderer.setPixelRatio(window.devicePixelRatio);
  //     renderer.setSize(Math.floor(window.innerWidth * 0.15), Math.floor(window.innerWidth * 0.15));

  //     camera.position.setZ(2);
  //     document.body.appendChild(renderer.domElement);

  //     const am = new THREE.AmbientLight(0xff0000, 1)
  //     const light = new THREE.DirectionalLight(0xffffff, 1);
  //     light.position.set(0, 1, 0);
  //     scene.add(am);
  //     scene.add(light);

  //     const textureLoader = new THREE.TextureLoader();
  //     const texture = textureLoader.load("matcap.png")

  //     const geometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 22);
  //     // const material = new THREE.MeshBasicMaterial({color: 0xffff00});
  //     const material = new THREE.MeshMatcapMaterial({matcap: texture});
  //     const torusKnot = new THREE.Mesh(geometry, material);
  //     scene.add(torusKnot);

  //   const animateTorus = () => {
  //     window.requestAnimationFrame(animateTorus);
  //     torusKnot.rotation.y -= 0.007;
  //     const cameraX = cursor.x - 1;
  //     const cameraY = cursor.y;

  //     // camera.position.x += (cameraX - camera.position.x) / 10;
  //     camera.position.x = cameraX / 10;
  //     camera.position.y = -cameraY / 10;
      
  //     if(renderer && scene && camera)
  //       renderer.render(scene, camera);
  //   }

  // animateTorus();
  // }, []);

  const toElement = (elementRef) => {
    if(!elementRef) return
   // Get element coords from Ref
   const element =
     elementRef.current.getBoundingClientRect().top + window.scrollY

   window.scroll({
     top: element,
     behavior: "smooth"
   })
 }

 const [isHovering, setIsHovering] = useState(false);

  const workRef = useRef(null);
  const projectRef = useRef(null);

  return (
    <div className="text-center">
      {/* <canvas id="canvas1" className='top-0 left-0 z-0 bg-red-500' width={window.innerWidth} height={window.innerHeight}></canvas> */}
      <div id="content" className="z-10 m-auto w-[100%] flex flex-col items-center">
        <div id="banner" className="absolute z-20 top-[30%]">
          <canvas id="canvas1" className='top-0 left-0 z-0 absolute' width={size.width ?? window.innerWidth} height={size.height ?? window.innerHeight}></canvas>
          <div id="bannerContent">
            <div id="text" className="text-gray-100 text-center">
              <h1 className="text-6xl font-space-mono uppercase tracking-wide m-auto">
                Aritra Kar
              </h1>
              <br />
              <h3 className="text-xl font-mono">
                CS + AI + Statistics | University of Waterloo
              </h3>
              <br />
              <div className='my-2'>
                <button
                  id="work"
                  className="border px-4 py-2 mx-3 rounded-lg text-sm font-space-mono uppercase hover:bg-white hover:text-gray-800 duration-200 inline-block"
                  onClick={() => {
                    toElement(workRef);
                    // document.querySelector("#work").scrollIntoView({behavior: 'smooth'})
                  }}
                >
                  Work
                </button>
                
                <button
                  id="projects"
                  className="border px-4 py-2 mx-3 rounded-lg text-sm font-space-mono uppercase hover:bg-white hover:text-gray-800 duration-200 inline-block"
                  onClick={() => {
                    toElement(projectRef);
                    // document.getElementById("projectContent").scrollIntoView({behavior: 'smooth', block: 'start'})
                  }}
                >
                  Projects
                </button>

                

                <a href="https://drive.google.com/file/d/1wcBEG2iU3kBMFXN7WkO2-7ws5qnqLa6w/view?usp=share_link" target="_blank" type="noopener noreferrer" className="border px-4 py-2 mx-3 rounded-lg text-sm font-space-mono uppercase hover:bg-white hover:text-gray-800 duration-200 inline-block">Resume</a>
              </div>
            </div>

            <div id="media-buttons" className="flex items-center mt-[2rem] justify-between">
              <a
                id="linkedin"
                href="https://www.linkedin.com/in/aritra-kar"
                target="_blank"
                className="mx-[4rem] hover:scale-[1.1] hover:duration-75 hover:hue-rotate-180"
              >
                <img src="./linkedin-24.png" alt="LinkedIn" />
              </a>
              <a
                id="github"
                href="https://www.github.com/aritrakar"
                target="_blank"
                type="noopener noreferrer"
                className="mx-[4rem] hover:scale-[1.1]"
              >
                <img src="./github-24.png" alt="Github" />
              </a>
              <a
                id="mail"
                href="https://mail.google.com/mail/?view=cm%26fs=1%26to=a8kar@uwaterloo.ca"
                target="_blank"
                type="noopener noreferrer"
                className="text-white mx-[4rem] hover:scale-[1.1]"
              >
                @
              </a>
              <a
                id="facebook"
                href="https://www.facebook.com/profile.php?id=100014012589848"
                target="_blank"
                type="noopener noreferrer"
                className="mx-[4rem] hover:scale-[1.1]"
              >
                <img src="./facebook-24.png" alt="Facebook" />
              </a>
              <a
                id="instagram"
                href="https://www.instagram.com/aritrakar28/"
                target="_blank"
                type="noopener noreferrer"
                className="mx-[4rem] hover:scale-[1.1]"
              >
                <img src="./instagram-24.png" alt="Instagram" />
              </a>
            </div>

            <button
                className="px-4 py-2 mt-[2rem] rounded-lg text-sm font-space-mono uppercase hover:bg-white hover:text-gray-800 duration-200 inline-block"
                onClick={() => {
                  !starsClicked ? showStars(bannerCamera, bannerScene): location.reload();}}
              >
                  ✨
            </button>
          </div>
        </div>

        <div className="absolute top-[100%]">
          <div ref={workRef} className="flex justify-center">
            {/* <Work /> */}
            <WorkMain />
            <div className="w-[40vw]">
              <Skills />
              <Education />
            </div>
          </div>
          <div ref={projectRef}>
            <Projects />
          </div>
          {/* <Skills /> */}
          <Certifications />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
