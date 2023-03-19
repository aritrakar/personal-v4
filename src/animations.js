import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

const raycaster = new THREE.Raycaster();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(7);
document.body.appendChild(renderer.domElement);

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
    colors.push(0, 0.19, 0.4);
  }

  planeMesh.geometry.setAttribute(
    "color",
    new THREE.BufferAttribute(new Float32Array(colors), 3)
  );
}

function generatePlane() {
  planeMesh.geometry.dispose();
  planeMesh.geometry = new THREE.PlaneGeometry(22, 12, 20, 15);

  jaggedPlane(planeMesh);
}

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
generatePlane();

// Controls
// const controls = new OrbitControls(camera, renderer.domElement);

// For raycaster
const mouse = { x: undefined, y: undefined };

window.addEventListener("mousemove", (event) => {
  // Normalize mouse coordinates
  mouse.x = (event.clientX / innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / innerHeight) * 2 + 1;
});

// Sun
function getSun() {
  const sunGeometry = new THREE.SphereGeometry(3.5);
  const sunTexture = new THREE.TextureLoader().load("sunTexture.jpg");
  const sunMaterial = new THREE.MeshStandardMaterial({
    // color: 0xf5bc6c,
    map: sunTexture,
    emissive: 0xf5bc6c,
    emissiveIntensity: 0.7,
  });
  const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
  sunMesh.position.set(
    planeMesh.position.x,
    planeMesh.position.y + 20,
    planeMesh.position.z + 10
  );
  // sunMesh.rotateOnAxis(new THREE.Vector3(0, 0, 7).normalize(), 0.005);
  return sunMesh;
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

// View work button
document.getElementById("work").addEventListener("mousedown", () => {
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

  // Add sun
  sun = getSun();
  // scene.add(sun);
});

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);

  if (workClicked) {
    // sun.rotateOnAxis(new THREE.Vector3(0, 0, 7).normalize(), 0.001);

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

      const initialColor = { r: 0, g: 0.19, b: 0.4 };
      const hoverColor = { r: 0.1, g: 0.5, b: 1 };
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
