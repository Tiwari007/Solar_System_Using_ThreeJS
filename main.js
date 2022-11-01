import './style.css'
import * as THREE from 'three';
import { MeshBasicMaterial, RingGeometry, SphereGeometry } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


// we always need three things from three.js 
// 1 - scene
// 2 - camera
// 3 - rendered


// SCENE
const scene = new THREE.Scene();


// CAMERA
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight , 0.1, 3000);


// RENDERER (where we have to render, we also have to set the setPixelRatio, setSize)
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("bg")
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);



// As we know our camera currently is on center of our webpage. so let's move towards z axis
camera.position.set(-300, 0, 400)


// know we are all done lets render our scene and camera to our background.
renderer.render(scene, camera);





// Now let's try to add space 
const spaceTexture = new THREE.TextureLoader().load('./Media/galaxy.jpg')
scene.background = spaceTexture;

// Let's generate random starts on our scene at random position
function addStar(){
  const geometry =  new THREE.SphereGeometry(0.25);
  const material = new THREE.MeshStandardMaterial({color: "white"})
  const star = new THREE.Mesh(geometry, material);


  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(3000))
  
  star.position.set(x, y, z);
  scene.add(star);
}

for(let i =0; i< 10000 ; i++){
  addStar()
}
// Array(200).fill().forEach(addStar)


// NOW ITS TIME TO ADD SOME OBJECT TO OUR SCENE


// let's create a SUN Texture and SUN object first
const sunTexture = new THREE.TextureLoader().load('./Media/sun.jpg')
const sun = new THREE.Mesh(
  new SphereGeometry(200),
  new MeshBasicMaterial({map: sunTexture})
)
sun.position.set(500, 0, -80)
scene.add(sun);

// let's create a Mercury Texture and Mercury object first
const mercuryTexture = new THREE.TextureLoader().load('./Media/mercury.jpg')
const mercury = new THREE.Mesh(
  new SphereGeometry(60),
  new MeshBasicMaterial({map: mercuryTexture})
)
mercury.position.set(150, 0, -80)
scene.add(mercury);


// let's create a Venus Texture and Venus object first
const venusTexture = new THREE.TextureLoader().load('./Media/venus.jpg')
const venus = new THREE.Mesh(
  new SphereGeometry(50),
  new MeshBasicMaterial({map: venusTexture})
)
venus.position.set(0, 0, -80)
scene.add(venus);

// let's create a Earth Texture and Earth object first
const earthTexture = new THREE.TextureLoader().load('./Media/earth.jpg')
const earth = new THREE.Mesh(
  new SphereGeometry(80),
  new MeshBasicMaterial({map: earthTexture})
)
earth.position.set(-150, 0, -80)
scene.add(earth);

// let's create a Mars Texture and Mars object first
const marsTexture = new THREE.TextureLoader().load('./Media/mars.jpg')
const mars = new THREE.Mesh(
  new SphereGeometry(70),
  new MeshBasicMaterial({map: marsTexture})
)
mars.position.set(-380, 0, -80)
scene.add(mars);

// let's create a Jupiter Texture and Jupiter object first
const jupiterTexture = new THREE.TextureLoader().load('./Media/jupiter.jpg')
const jupiter = new THREE.Mesh(
  new SphereGeometry(150),
  new MeshBasicMaterial({map: jupiterTexture})
)
jupiter.position.set(-720, 0, -80)
scene.add(jupiter);





// let's create a Saturn Texture and Saturn object first
const saturnTexture = new THREE.TextureLoader().load('./Media/saturn.jpg')
const saturn = new THREE.Mesh(
  new SphereGeometry(130),
  new MeshBasicMaterial({map: saturnTexture})
)
saturn.position.set(-1350, 0, -80)
scene.add(saturn);


// NOW LET'S CREATE A SATURN RING
const saturnRingTexture = new THREE.TextureLoader().load('./Media/saturn_ring.png')
const saturnRing = new THREE.Mesh(
  new THREE.TorusGeometry( 200, 15.7226, 30, 200 ),
  new MeshBasicMaterial({map: saturnRingTexture})
)
saturnRing.position.set(-1350, 0, -80)
scene.add(saturnRing);





// let's create a Uranus Texture and Uranus object first
const uranusTexture = new THREE.TextureLoader().load('./Media/uranus.jpg')
const uranus = new THREE.Mesh(
  new SphereGeometry(70),
  new MeshBasicMaterial({map: uranusTexture})
)
uranus.position.set(-1720, 0, -80)
scene.add(uranus);

// let's create a Neptune Texture and Neptune object first
const neptuneTexture = new THREE.TextureLoader().load('./Media/neptune.jpg')
const neptune = new THREE.Mesh(
  new SphereGeometry(80),
  new MeshBasicMaterial({map: neptuneTexture})
)
neptune.position.set(-2250, 0, -80)
scene.add(neptune);




// Now Let's add light to see our object (its better to use ambidient light. 
// if you not not considering from any particular position)

const ambidientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambidientLight)

//*********  FOR rendering again and again create a callback function at last named animate *********// 

// NOW LET'S USE SOME CONTROLLER SO WE CAN INTERECT WITH SCENE (ORBITALCONTROLS)

const controls = new OrbitControls(camera, renderer.domElement)






















// we have to render function again and again for rendering object. so let's create a function for helping out
// renderer.render(scene, camera);

function animate(){
  requestAnimationFrame(animate)


  // for animate our object as frame changes
  sun.rotation.x += 0.005;
  sun.rotation.y += 0.0009;
  sun.rotation.z += 0.0009;

  mercury.rotation.x += 0.005;
  mercury.rotation.y += 0.0009;
  mercury.rotation.z += 0.0009;

  venus.rotation.x += 0.005;
  venus.rotation.y += 0.0009;
  venus.rotation.z += 0.0009;

  earth.rotation.x += 0.005;
  earth.rotation.y += 0.0009;
  earth.rotation.z += 0.0009;

  mars.rotation.x += 0.005;
  mars.rotation.y += 0.0009;
  mars.rotation.z += 0.0009;

  jupiter.rotation.x += 0.005;
  jupiter.rotation.y += 0.0009;
  jupiter.rotation.z += 0.0009;

  saturn.rotation.x += 0.005;
  saturn.rotation.y += 0.0009;
  saturn.rotation.z += 0.0009;

  uranus.rotation.x += 0.005;
  uranus.rotation.y += 0.0009;
  uranus.rotation.z += 0.0009;

  neptune.rotation.x += 0.005;
  neptune.rotation.y += 0.0009;
  neptune.rotation.z += 0.0009;

  saturnRing.rotation.x += 0.05;
  saturnRing.rotation.y += 0.009;
  saturnRing.rotation.z += 0.009;

  

  // avatar.rotation.x += 0.003;
  // avatar.rotation.y += 0.004;
  // avatar.rotation.z += 0.007;

  renderer.render(scene, camera);
}

animate();



