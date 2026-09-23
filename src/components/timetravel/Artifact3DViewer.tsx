import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Artifact3DViewerProps {
  modelType: 'dancing_girl' | 'nataraja' | 'charkha' | 'satellite' | 'digital_mandala';
  artifactName: string;
  hotspots: { x: number; y: number; label: string; fact: string }[];
  onHotspotClick?: (fact: string) => void;
}

export const Artifact3DViewer: React.FC<Artifact3DViewerProps> = ({
  modelType,
  artifactName,
  hotspots,
  onHotspotClick
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedHotspot, setSelectedHotspot] = useState<{ label: string; fact: string } | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const artifactGroup = new THREE.Group();
    scene.add(artifactGroup);

    // Procedural 3D model construction based on era
    if (modelType === 'dancing_girl') {
      // Ancient Bronze Lost-Wax Statuette
      const bronzeMat = new THREE.MeshStandardMaterial({
        color: 0x5C4033,
        roughness: 0.45,
        metalness: 0.8,
      });

      // Pedestal
      const baseGeo = new THREE.CylinderGeometry(0.7, 0.8, 0.2, 32);
      const base = new THREE.Mesh(baseGeo, bronzeMat);
      base.position.y = -1.2;
      artifactGroup.add(base);

      // Slender Torso in Tribhanga bend
      const torsoGeo = new THREE.CylinderGeometry(0.2, 0.18, 0.9, 16);
      const torso = new THREE.Mesh(torsoGeo, bronzeMat);
      torso.position.y = -0.2;
      torso.rotation.z = 0.12;
      artifactGroup.add(torso);

      // Head with prominent chignon bun
      const headGeo = new THREE.SphereGeometry(0.22, 16, 16);
      const head = new THREE.Mesh(headGeo, bronzeMat);
      head.position.set(0.08, 0.45, 0);
      head.rotation.x = -0.1;
      artifactGroup.add(head);

      const bunGeo = new THREE.SphereGeometry(0.14, 16, 16);
      const bun = new THREE.Mesh(bunGeo, bronzeMat);
      bun.position.set(0.18, 0.52, -0.15);
      artifactGroup.add(bun);

      // Left arm with 24 stacked shell bangles
      const armCurve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(0.25, 0.2, 0),
        new THREE.Vector3(0.5, 0.0, 0.1),
        new THREE.Vector3(0.4, -0.4, 0.1),
        new THREE.Vector3(0.15, -0.6, 0.2)
      );
      const armGeo = new THREE.TubeGeometry(armCurve, 20, 0.06, 8, false);
      const arm = new THREE.Mesh(armGeo, bronzeMat);
      artifactGroup.add(arm);

      // Stacked conch bangle rings
      const bangleMat = new THREE.MeshStandardMaterial({ color: 0xE8D8C8, roughness: 0.3 });
      for (let b = 0; b < 12; b++) {
        const bg = new THREE.TorusGeometry(0.08, 0.015, 8, 16);
        const bm = new THREE.Mesh(bg, bangleMat);
        bm.position.set(0.38 - b * 0.015, -0.1 - b * 0.035, 0.1);
        bm.rotation.x = 1.2;
        artifactGroup.add(bm);
      }

    } else if (modelType === 'nataraja') {
      // Medieval Chola Bronze Nataraja
      const cholaBronze = new THREE.MeshStandardMaterial({
        color: 0x966838,
        metalness: 0.85,
        roughness: 0.3
      });

      // Prabha Mandala (Ring of Fire)
      const prabhaGeo = new THREE.TorusGeometry(1.4, 0.05, 16, 64);
      const prabha = new THREE.Mesh(prabhaGeo, cholaBronze);
      artifactGroup.add(prabha);

      // Lotus Pedestal
      const lotusBase = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.9, 0.2, 24), cholaBronze);
      lotusBase.position.y = -1.3;
      artifactGroup.add(lotusBase);

      // Central dancing torso
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.15, 0.8, 16), cholaBronze);
      body.position.y = -0.1;
      artifactGroup.add(body);

      // Four outstretched arms
      const armMat = cholaBronze;
      const leftUpper = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.8), armMat);
      leftUpper.position.set(-0.4, 0.25, 0);
      leftUpper.rotation.z = 1.0;
      artifactGroup.add(leftUpper);

      const rightUpper = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.8), armMat);
      rightUpper.position.set(0.4, 0.25, 0);
      rightUpper.rotation.z = -1.0;
      artifactGroup.add(rightUpper);

      // Lifted dancing foot
      const legLift = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.05, 0.9), armMat);
      legLift.position.set(-0.25, -0.65, 0.3);
      legLift.rotation.z = 1.1;
      legLift.rotation.x = 0.4;
      artifactGroup.add(legLift);

    } else if (modelType === 'charkha') {
      // Colonial Swadeshi Charkha (Wood and Spindle)
      const woodMat = new THREE.MeshStandardMaterial({ color: 0x8B5A2B, roughness: 0.7 });
      const steelMat = new THREE.MeshStandardMaterial({ color: 0xDDDDDD, metalness: 0.9, roughness: 0.2 });

      // Box Base
      const box = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.15, 1.0), woodMat);
      box.position.y = -0.8;
      artifactGroup.add(box);

      // Main drive wheel
      const wheelRing = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.04, 16, 32), woodMat);
      wheelRing.position.set(-0.4, -0.1, 0);
      artifactGroup.add(wheelRing);

      // Wheel spokes
      for (let s = 0; s < 8; s++) {
        const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 1.4), woodMat);
        spoke.position.set(-0.4, -0.1, 0);
        spoke.rotation.z = (s * Math.PI) / 4;
        artifactGroup.add(spoke);
      }

      // Spindle Flyer
      const spindle = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.9), steelMat);
      spindle.position.set(0.6, -0.4, 0);
      spindle.rotation.z = 1.57;
      artifactGroup.add(spindle);

    } else if (modelType === 'satellite') {
      // Modern Era: Ashoka Chakra Emblem & Bronze Lions
      const goldBronze = new THREE.MeshStandardMaterial({ color: 0xD4AF37, metalness: 0.8, roughness: 0.3 });
      
      // Pedestal abacus
      const abacus = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.0, 0.3, 32), goldBronze);
      abacus.position.y = -0.8;
      artifactGroup.add(abacus);

      // 24-Spoke Chakra
      const chakraRing = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.05, 16, 48), goldBronze);
      chakraRing.position.y = 0.0;
      artifactGroup.add(chakraRing);

      for (let i = 0; i < 24; i++) {
        const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.55), goldBronze);
        spoke.position.y = 0.0;
        spoke.rotation.z = (i * Math.PI * 2) / 24;
        artifactGroup.add(spoke);
      }

    } else {
      // Future Era: Holographic Digital NeRF Mandala
      const neonMat = new THREE.MeshStandardMaterial({
        color: 0x06B6D4,
        emissive: 0x0891B2,
        wireframe: true,
      });

      const sphereGeo = new THREE.IcosahedronGeometry(1.2, 3);
      const sphere = new THREE.Mesh(sphereGeo, neonMat);
      artifactGroup.add(sphere);

      const innerGeo = new THREE.OctahedronGeometry(0.7, 1);
      const innerMat = new THREE.MeshStandardMaterial({ color: 0xF59E0B, wireframe: true });
      const inner = new THREE.Mesh(innerGeo, innerMat);
      artifactGroup.add(inner);
    }

    // Lights
    const ambLight = new THREE.AmbientLight(0xfff8ee, 1.3);
    scene.add(ambLight);

    const dirLight1 = new THREE.DirectionalLight(0xF59E0B, 2.5);
    dirLight1.position.set(3, 4, 3);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38BDF8, 1.5);
    dirLight2.position.set(-3, -2, 2);
    scene.add(dirLight2);

    // Interactive Drag Rotation
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      artifactGroup.rotation.y += deltaX * 0.01;
      artifactGroup.rotation.x += deltaY * 0.01;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Render loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isDragging) {
        artifactGroup.rotation.y += 0.006;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [modelType]);

  return (
    <div className="relative w-full h-[360px] sm:h-[420px] bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl">
      
      {/* 3D Canvas Mount */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing" 
        title="Click and drag to rotate 3D artifact 360°"
      />

      {/* Top Banner */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-amber-400 border border-amber-500/40">
          3D WebGL Masterpiece Inspector
        </span>
        <span className="text-[11px] text-stone-400 bg-stone-800/80 px-2 py-0.5 rounded-md">
          Drag to Rotate
        </span>
      </div>

      {/* Clickable Hotspots Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 pointer-events-auto">
        {hotspots.map((hs, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedHotspot(hs);
              if (onHotspotClick) onHotspotClick(hs.fact);
            }}
            className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-stone-950 border border-amber-400/50 text-xs font-semibold backdrop-blur-md transition-all flex items-center gap-1"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>{hs.label}</span>
          </button>
        ))}
      </div>

      {/* Selected Hotspot Modal/Popover */}
      {selectedHotspot && (
        <div className="absolute inset-x-4 top-14 p-4 rounded-2xl bg-stone-950/95 border border-amber-500/60 shadow-2xl backdrop-blur-md text-white text-xs space-y-1 animate-fade-in z-20">
          <div className="flex items-center justify-between">
            <span className="font-bold text-amber-400 uppercase tracking-wider">{selectedHotspot.label}</span>
            <button 
              onClick={() => setSelectedHotspot(null)}
              className="text-stone-400 hover:text-white px-1"
            >
              ✕
            </button>
          </div>
          <p className="text-stone-300 leading-relaxed">{selectedHotspot.fact}</p>
        </div>
      )}

    </div>
  );
};
