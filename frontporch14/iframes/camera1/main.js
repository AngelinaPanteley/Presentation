/**
 * Shader Programming: A hands-on course
 * Spinning Red Cube
 *
 * Copyright (c) 2013 Nathan Whitehead.
 * Distributed under the MIT License.
 * https://opensource.org/licenses/MIT
 */


  var clock, camera, scene, mesh, cube,
      material, light, renderer;

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setSize(640, 480);
  renderer.setClearColor(0x808080, 1.0);
  document.body.appendChild(renderer.domElement);


  cube = new THREE.CubeGeometry(500, 500, 500);

  material = new THREE.MeshLambertMaterial({
    color: 0xff0000
  });

  mesh = new THREE.Mesh(cube, material);

  scene.add(mesh);


  clock = new THREE.Clock();


  camera = new THREE.PerspectiveCamera(75, 4/3, 1, 10000);

  camera.position.y = 800;

  camera.position.x = Math.cos(45) * 1000;

  camera.position.z = Math.sin(45) * 1000;

  renderer.render(scene, camera);

 // camera.lookAt(scene.position);

/*
  light = new THREE.PointLight(0xffffff);
  light.position.set(400, 600, 400);
  scene.add(light);

  var render = function() {
    // Rotate the camera
    var t = clock.getElapsedTime();
    camera.position.x = Math.cos(t) * 1000;
    camera.position.z = Math.sin(t) * 1000;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  };

  var loop = function() {
    render();
    requestAnimationFrame(loop,
                          renderer.domElement);
  };
  loop();


*/
