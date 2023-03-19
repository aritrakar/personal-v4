import React, {useEffect} from "react";
import * as THREE from "three";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Projects from "./Projects"
import Work from "./Work";
import Skills from "./Skills";

let starGeometry = undefined;
let workClicked = false;
let stars = undefined;
let frame = 0,
  velocity = 1;

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
    colors.push(0, 0.65, 0.8); // 0, 0.19, 0.4
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

function showStars(camera, scene) {
  // Set new camera position and rotation
  gsap.to(camera.position, { z: 2, y: -3, duration: 1.75 });
  gsap.to(camera.rotation, { x: 1.75, duration: 1.5 });
  gsap.to(document.getElementById("text"), {
    opacity: 0,
    display: "none",
    duration: 1.75,
  });

  gsap.to(document.getElementById("media-buttons"), {
    position: "fixed",
    bottom: "2rem",
    duration: 2,
  });

  workClicked = true;
  // Add stars
  stars = getStars();
  scene.add(stars);
}

// Controls
// const controls = new OrbitControls(camera, renderer.domElement);

// For raycaster
const mouse = { x: undefined, y: undefined };
window.addEventListener("mousemove", (event) => {
  if (scrollY <= (innerHeight - event.clientY)) {
    // Normalize mouse coordinates
    mouse.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / innerHeight) * 2 + 1;
  } else {
    mouse.x = 0;
    mouse.y = 0;
  }
});


let camera = undefined, raycaster = undefined, scene = undefined;
export default function Home() {
  useEffect(() => {
    raycaster = new THREE.Raycaster();
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const myCanvas = document.getElementById("canvas1");
    console.log("myCanvas: ", myCanvas)
    const renderer = new THREE.WebGLRenderer({canvas: myCanvas});
    // const renderer = new THREE.WebGLRenderer(); // For some reason I don't need canvas1???

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(6.8);
    document.body.appendChild(renderer.domElement);

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, -1, 1);
    scene.add(light);

    // Back light
    const backLight = new THREE.DirectionalLight(0xffffff, 1);
    backLight.position.set(0, 0, -1);
    scene.add(backLight);

    // Plane
    const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10);
    const planeMaterial = new THREE.MeshPhongMaterial({
      // color: 0xff0000,
      side: THREE.DoubleSide,
      flatShading: THREE.FlatShading,
      vertexColors: true,
    });
    const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    scene.add(planeMesh);
    generatePlane(planeMesh);

    const  animate = () => {
      window.requestAnimationFrame(animate);
    
      if(renderer && scene && camera)
        renderer.render(scene, camera);
    
      if (workClicked) {    
        let { array } = stars.geometry.getAttribute("position");
    
        if (velocity <= 31) {
          if (1 <= velocity && velocity < 3) velocity *= 1.0015;
          else if (3 <= velocity && velocity < 7) velocity *= 1.05;
          else if (7 <= velocity && velocity <= 30) velocity *= 2;
    
          for (let i = 1; i < array.length; i += 3) {
            if (velocity < 20) array[i] -= velocity;
            if (array[i] < -200) array[i] = 400;
          }
          gsap.to(camera.position, { z: 6, duration: 3 }); //
        } else {
          for (let i = 1; i < array.length; i += 3) {
            array[i] -= 0.01;
            if (array[i] < -200) array[i] = 400;
          }
          scene.remove(planeMesh);
        }
        stars.geometry.attributes.position.needsUpdate = true;
    
        // camera.rotation.y -= 0.00005;
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
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(planeMesh);
        if (intersects.length > 0) {
          const { color } = intersects[0].object.geometry.attributes;
    
          color.needsUpdate = true;
    
          // const initialColor = { r: 0, g: 0.19, b: 0.4 };
          const initialColor = { r: 0, g: 0.65, b: 0.8 };
          const hoverColor = { r: 0.4, g: 0.8, b: 0.95 };
          gsap.to(hoverColor, {
            r: initialColor.r,
            g: initialColor.g,
            b: initialColor.b,
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
  }, []);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const myCanvas = document.getElementById("canvas2");
    console.log("myCanvas3: ", myCanvas)
    const renderer = new THREE.WebGLRenderer({canvas: myCanvas});
    // const renderer = new THREE.WebGLRenderer(); // For some reason I don't need canvas1???

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(6.8);
    document.body.appendChild(renderer.domElement);

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, -1, 1);
    scene.add(light);

    const animateFooter = () => {
      // window.requestAnimationFrame(animateFooter);
      
      };

    animateFooter();
  }, []);


  return (
    <div id="content" className="absolute z-1 flex flex-col justify-center w-[100%] h-[100%]">
      <div id="text" className="text-gray-100 text-center">
        <h1 className="text-6xl font-space-mono uppercase tracking-wide m-auto">
          Aritra Kar
        </h1>
        <br />
        <h3 className="text-xl font-mono">
          Computer Science | University of Waterloo
        </h3>
        <br />
        <div>
          <button
            id="work"
            className="border px-4 py-2 mx-3 rounded-lg text-sm font-space-mono uppercase hover:bg-white hover:text-gray-800 duration-200 inline-block"
            // onClick={() => {console.log("workClicked: ", workClicked); showStars(camera, scene);}}
            onClick={() => {
              document.getElementById("work").scrollIntoView({behavior: 'smooth', block: 'start'})
            }}
          >
            Work
          </button>
          
          <button
            id="projects"
            className="border px-4 py-2 mx-3 rounded-lg text-sm font-space-mono uppercase hover:bg-white hover:text-gray-800 duration-200 inline-block"
            onClick={() => {
              // gsap.to(window, {duration: 2, scrollTo: "#projectContent"})
              document.getElementById("projectContent").scrollIntoView({behavior: 'smooth', block: 'start'})
            }}
          >
            Projects
          </button>

          <button
            id="resume"
            className="border px-4 py-2 mx-3 rounded-lg text-sm font-space-mono uppercase hover:bg-white hover:text-gray-800 duration-200 inline-block"

          >
            <a href="https://drive.google.com/file/d/1NeG6aCahaDHB8k4PxtL3J9LChNhYKjO7/view" className="m-0">Resume</a>
          </button>
        </div>
      </div>

      <div id="media-buttons" className="flex mt-[-2rem] justify-center">
        <a
          id="linkedin"
          href="https://www.linkedin.com/in/aritra-kar"
          target="_blank"
          className="hover:bg-[#2872a3]"
        >
          <img src="./linkedin-24.png" alt="LinkedIn" />
        </a>
        <a
          id="github"
          href="https://www.github.com/aritrakar"
          target="_blank"
          type="noopener noreferrer"
        >
          <img src="./github-24.png" alt="Github" />
        </a>
        <a
          id="mail"
          href="https://mail.google.com/mail/?view=cm%26fs=1%26to=a8kar@uwaterloo.ca"
          target="_blank"
          type="noopener noreferrer"
        >
          @
        </a>
        <a
          id="facebook"
          href="https://www.facebook.com/profile.php?id=100014012589848"
          target="_blank"
          type="noopener noreferrer"
        >
          <img src="./facebook-24.png" alt="Facebook" />
        </a>
        <a
          id="instagram"
          href="https://www.instagram.com/aritrakar28/"
          target="_blank"
          type="noopener noreferrer"
        >
          <img src="./instagram-24.png" alt="Instagram" />
        </a>
      </div>

      <Work />
      <Projects />
      <Skills />
    </div>
  );
}
