class MyScene {
    constructor() {
      this.sceneRoot = new THREE.Group();
      let object = new THREE.Object3D();
      let geometry = new THREE.SphereGeometry(0.5, 15, 15, Math.PI);
      let texture = THREE.ImageUtils.loadTexture("js-aruco2/samples/debug-posit/textures/earth.jpg");
      let material = new THREE.MeshBasicMaterial( {map: texture} );
      let mesh = new THREE.Mesh(geometry, material);
      object.add(mesh);
      this.object = object;
      this.sceneRoot.add(object);

    }
    step(dt) {
      this.object.rotation.z += dt/2000;
    }
  }