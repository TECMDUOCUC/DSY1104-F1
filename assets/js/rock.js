function createRock(container, seed = 1337) {
    // 1. Seeded PRNG
    const rng = () => {
        let t = seed += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 8, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };

    // 2. Setup Scene & Renderer based on container bounds
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 2.5, 5);
    camera.lookAt(0, -1, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // 3. Generate Shell Points & Triangulate
    const numPoints = Math.round(100 + 100 * rng());
    const points = [];

    for (let i = 0; i < numPoints; i++) {
        const r = 0.8 + rng() * 0.6, theta = rng() * Math.PI * 2, phi = rng() * Math.PI;
        const y = r * Math.sin(phi) * Math.sin(theta);
        points.push(new THREE.Vector3(
            r * Math.sin(phi) * Math.cos(theta),
            y < 0 ? 0 : y,
            r * Math.cos(phi)
        ));
    }

    // Flat Base Ring
    for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(a), 0, Math.sin(a)));
    }

    // 4. Mesh & Lighting
    const geometry = new THREE.ConvexGeometry(points);
    geometry.computeVertexNormals();
    const rock = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.8, flatShading: true }));
    scene.add(rock);

    const spotLight = new THREE.SpotLight(0xffffff, 0, 0, Math.PI / 3, 0.1);
    spotLight.position.set(0, 3, 5);
    scene.add(spotLight, new THREE.AmbientLight(0xffffff, 0.05));

    // 5. Render Loop
    let start = null;
    function animate(now) {
        requestAnimationFrame(animate);
        if (!start) start = now;
        spotLight.intensity = Math.min(Math.max(0, now - start - 1000) / 2000, 1) * 2.0;
        rock.rotation.y += 0.006;
        renderer.render(scene, camera);
    }
    animate(performance.now());
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('div[has-rock="true"]').forEach(div => {
        const seedAttr = div.getAttribute('seed');
        const seed = seedAttr !== null ? parseInt(seedAttr, 10) : 1337;
        createRock(div, seed);
    });
});