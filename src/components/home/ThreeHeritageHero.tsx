import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useHeritage } from '../../context/HeritageContext';

export const ThreeHeritageHero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { playChime } = useHeritage();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for all heritage elements
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Ornate Golden Mandala Rings
    const ringGeo1 = new THREE.TorusGeometry(1.8, 0.035, 16, 100);
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0x553C0E,
    });
    const ring1 = new THREE.Mesh(ringGeo1, goldMaterial);
    rootGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(1.3, 0.025, 16, 80);
    const amberMaterial = new THREE.MeshStandardMaterial({
      color: 0xC85A32,
      metalness: 0.6,
      roughness: 0.4,
    });
    const ring2 = new THREE.Mesh(ringGeo2, amberMaterial);
    rootGroup.add(ring2);

    // 2. 24 Radial Spokes (Ashoka Dharma Chakra)
    const spokeGroup = new THREE.Group();
    const spokeGeo = new THREE.CylinderGeometry(0.015, 0.015, 2.5, 8);
    for (let i = 0; i < 24; i++) {
      const angle = (i * Math.PI * 2) / 24;
      const spoke = new THREE.Mesh(spokeGeo, goldMaterial);
      spoke.rotation.z = angle;
      spokeGroup.add(spoke);
    }
    rootGroup.add(spokeGroup);

    // 3. Central Sacred Relic (Lotus & Stupa polyhedron)
    const relicGeo = new THREE.IcosahedronGeometry(0.65, 1);
    const relicMat = new THREE.MeshStandardMaterial({
      color: 0xFAF5EE,
      roughness: 0.3,
      metalness: 0.5,
      wireframe: false,
    });
    const relic = new THREE.Mesh(relicGeo, relicMat);
    rootGroup.add(relic);

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xD4AF37,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const wireRelic = new THREE.Mesh(relicGeo, wireMat);
    wireRelic.scale.set(1.05, 1.05, 1.05);
    rootGroup.add(wireRelic);

    // 4. Floating Sacred Dust Particles
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xF59E0B,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xfff8ee, 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xF59E0B, 3, 20);
    pointLight1.position.set(4, 4, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xC85A32, 2.5, 20);
    pointLight2.position.set(-4, -3, 3);
    scene.add(pointLight2);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      targetRotationY = mouseX * 0.6;
      targetRotationX = -mouseY * 0.6;
    };

    container.addEventListener('mousemove', onMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Slow majestic rotations
      ring1.rotation.x = Math.sin(elapsedTime * 0.3) * 0.2;
      ring1.rotation.y = elapsedTime * 0.25;

      ring2.rotation.y = -elapsedTime * 0.35;
      ring2.rotation.z = Math.cos(elapsedTime * 0.4) * 0.2;

      spokeGroup.rotation.z = -elapsedTime * 0.15;
      relic.rotation.y = elapsedTime * 0.5;
      relic.rotation.x = elapsedTime * 0.3;
      wireRelic.rotation.y = elapsedTime * 0.5;
      wireRelic.rotation.x = elapsedTime * 0.3;

      particles.rotation.y = elapsedTime * 0.05;

      // Mouse damping
      rootGroup.rotation.y += (targetRotationY - rootGroup.rotation.y) * 0.05;
      rootGroup.rotation.x += (targetRotationX - rootGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', onMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      className="relative w-full h-[380px] sm:h-[460px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      onClick={() => playChime()}
      title="Interactive 3D Dharma Chakra & Mandala (Move cursor to tilt)"
    >
      <div ref={mountRef} className="w-full h-full" />
      
      {/* Subtle overlay badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-amber-300/80 text-[11px] font-semibold text-stone-700 shadow-sm flex items-center gap-1.5 pointer-events-none select-none">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
        Interactive WebGL 3D Heritage Artifact
      </div>
    </div>
  );
};
