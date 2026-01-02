const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: bg });
renderer.setSize(innerWidth, innerHeight);

const geometry = new THREE.PlaneGeometry(80, 80, 60, 60);
const material = new THREE.MeshStandardMaterial({
  color: 0x556b2f,
  wireframe: true
});
const mountain = new THREE.Mesh(geometry, material);
mountain.rotation.x = -Math.PI / 2;
scene.add(mountain);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 10, 10);
scene.add(light);

camera.position.z = 12;

function animate() {
  mountain.rotation.z += 0.0006;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
