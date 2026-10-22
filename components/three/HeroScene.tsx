"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroScene() {
  const { camera, scene, gl, size } = useThree();
  const stageRef = useRef<THREE.Group | null>(null);
  const lightsRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const particleGeometryRef = useRef<THREE.BufferGeometry | null>(null);
  const particleMaterialRef = useRef<THREE.PointsMaterial | null>(null);
  const screenRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    const stage = new THREE.Group();
    stageRef.current = stage;
    scene.add(stage);

    const createStageStructure = () => {
      const structureGroup = new THREE.Group();

      // Main stage base - larger and more substantial
      const baseGeometry = new THREE.BoxGeometry(36, 1.5, 20);
      const baseMaterial = new THREE.MeshStandardMaterial({
        color: 0x0f0812,
        roughness: 0.7,
        metalness: 0.3,
      });
      const base = new THREE.Mesh(baseGeometry, baseMaterial);
      base.position.y = -0.75;
      base.receiveShadow = true;
      structureGroup.add(base);

      // Stage platform (upper level)
      const platformGeometry = new THREE.BoxGeometry(30, 0.6, 16);
      const platformMaterial = new THREE.MeshStandardMaterial({
        color: 0x1a0a1f,
        roughness: 0.6,
        metalness: 0.2,
      });
      const platform = new THREE.Mesh(platformGeometry, platformMaterial);
      platform.position.y = 0.6;
      platform.receiveShadow = true;
      structureGroup.add(platform);

      // Truss material
      const trussMaterial = new THREE.MeshStandardMaterial({
        color: 0x2a1035,
        roughness: 0.5,
        metalness: 0.5,
      });

      // Main corner trusses - taller and thicker
      const trussGeometry = new THREE.CylinderGeometry(0.35, 0.35, 18, 12);
      const trussPositions = [
        [-15, 9, -8],
        [15, 9, -8],
        [-15, 9, 8],
        [15, 9, 8],
      ];
      trussPositions.forEach(([x, y, z]) => {
        const truss = new THREE.Mesh(trussGeometry, trussMaterial);
        truss.position.set(x, y, z);
        truss.castShadow = true;
        structureGroup.add(truss);
      });

      // Horizontal beams connecting trusses (front/back)
      const beamGeometry = new THREE.BoxGeometry(32, 0.4, 0.4);
      const beamZPositions = [-8, 8];
      beamZPositions.forEach((z) => {
        const beam = new THREE.Mesh(beamGeometry, trussMaterial);
        beam.position.set(0, 18.2, z);
        beam.castShadow = true;
        structureGroup.add(beam);
      });

      // Cross beams (left/right)
      const crossBeamGeometry = new THREE.BoxGeometry(0.4, 0.4, 18);
      const crossBeamXPositions = [-15, 15];
      crossBeamXPositions.forEach((x) => {
        const beam = new THREE.Mesh(crossBeamGeometry, trussMaterial);
        beam.position.set(x, 18.2, 0);
        beam.castShadow = true;
        structureGroup.add(beam);
      });

      // Additional mid-level truss supports
      const midTrussGeometry = new THREE.CylinderGeometry(0.25, 0.25, 8, 8);
      const midTrussPositions = [
        [-10, 5, -8], [10, 5, -8],
        [-10, 5, 8], [10, 5, 8],
      ];
      midTrussPositions.forEach(([x, y, z]) => {
        const truss = new THREE.Mesh(midTrussGeometry, trussMaterial);
        truss.position.set(x, y, z);
        truss.castShadow = true;
        structureGroup.add(truss);
      });

      // LED screen back panel
      const screenGeometry = new THREE.PlaneGeometry(28, 14);
      const screenMaterial = new THREE.MeshStandardMaterial({
        color: 0x0a050f,
        roughness: 0.3,
        metalness: 0.7,
        emissive: 0x521262,
        emissiveIntensity: 0.15,
        side: THREE.DoubleSide,
      });
      const screen = new THREE.Mesh(screenGeometry, screenMaterial);
      screen.position.set(0, 8.5, 8.3);
      screen.rotation.y = Math.PI;
      screenRef.current = screen;
      structureGroup.add(screen);

      // Screen frame
      const frameGeometry = new THREE.BoxGeometry(28.8, 14.8, 0.2);
      const frameMaterial = new THREE.MeshStandardMaterial({
        color: 0x1a0a1f,
        roughness: 0.4,
        metalness: 0.6,
      });
      const frame = new THREE.Mesh(frameGeometry, frameMaterial);
      frame.position.set(0, 8.5, 8.2);
      structureGroup.add(frame);

      // Side LED panels
      const sideScreenGeometry = new THREE.PlaneGeometry(10, 12);
      const sideScreenMaterial = new THREE.MeshStandardMaterial({
        color: 0x0a050f,
        roughness: 0.3,
        metalness: 0.7,
        emissive: 0x521262,
        emissiveIntensity: 0.1,
        side: THREE.DoubleSide,
      });
      [-1, 1].forEach((side) => {
        const sideScreen = new THREE.Mesh(sideScreenGeometry, sideScreenMaterial);
        sideScreen.position.set(side * 18, 7, -2);
        sideScreen.rotation.y = side * -Math.PI / 2;
        structureGroup.add(sideScreen);
      });

      // Ground plane - larger
      const groundGeometry = new THREE.PlaneGeometry(120, 120);
      const groundMaterial = new THREE.MeshStandardMaterial({
        color: 0x0a050d,
        roughness: 0.9,
        metalness: 0.1,
      });
      const ground = new THREE.Mesh(groundGeometry, groundMaterial);
      ground.rotation.x = -Math.PI / 2;
      ground.position.y = -1.5;
      ground.receiveShadow = true;
      structureGroup.add(ground);

      return structureGroup;
    };

    const createLightingRig = () => {
      const lightGroup = new THREE.Group();

      // Main golden spotlights (front)
      const spotLightPositions = [
        { x: -14, y: 16, z: -6, color: 0xffd700, intensity: 4.5, angle: Math.PI / 7, penumbra: 0.25 },
        { x: 14, y: 16, z: -6, color: 0xffd700, intensity: 4.5, angle: Math.PI / 7, penumbra: 0.25 },
        { x: -10, y: 14, z: -4, color: 0xffd700, intensity: 3, angle: Math.PI / 8, penumbra: 0.3 },
        { x: 10, y: 14, z: -4, color: 0xffd700, intensity: 3, angle: Math.PI / 8, penumbra: 0.3 },
        // Purple wash lights (back)
        { x: -14, y: 16, z: 6, color: 0x521262, intensity: 5, angle: Math.PI / 6, penumbra: 0.35 },
        { x: 14, y: 16, z: 6, color: 0x521262, intensity: 5, angle: Math.PI / 6, penumbra: 0.35 },
        { x: -10, y: 14, z: 4, color: 0x521262, intensity: 3.5, angle: Math.PI / 7, penumbra: 0.3 },
        { x: 10, y: 14, z: 4, color: 0x521262, intensity: 3.5, angle: Math.PI / 7, penumbra: 0.3 },
        // Magenta accent (center top)
        { x: 0, y: 18, z: 0, color: 0xf609cf, intensity: 2.5, angle: Math.PI / 5, penumbra: 0.4 },
      ];

      spotLightPositions.forEach((pos) => {
        const spotLight = new THREE.SpotLight(pos.color, pos.intensity);
        spotLight.position.set(pos.x, pos.y, pos.z);
        spotLight.target.position.set(pos.x * 0.5, 0, pos.z * 0.5);
        spotLight.angle = pos.angle;
        spotLight.penumbra = pos.penumbra;
        spotLight.decay = 1.5;
        spotLight.distance = 50;
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 2048;
        spotLight.shadow.mapSize.height = 2048;
        spotLight.shadow.bias = -0.0001;
        lightGroup.add(spotLight);
        lightGroup.add(spotLight.target);
      });

      // Ambient fill
      const ambientLight = new THREE.AmbientLight(0x1a0a1f, 0.4);
      lightGroup.add(ambientLight);

      // Hemisphere for sky/ground tone
      const hemiLight = new THREE.HemisphereLight(0x521262, 0x0a050d, 0.25);
      lightGroup.add(hemiLight);

      // Rim lights for depth
      const rimLight1 = new THREE.DirectionalLight(0xffd700, 0.8);
      rimLight1.position.set(-20, 10, -10);
      rimLight1.target.position.set(0, 2, 0);
      lightGroup.add(rimLight1);
      lightGroup.add(rimLight1.target);

      const rimLight2 = new THREE.DirectionalLight(0x521262, 0.6);
      rimLight2.position.set(20, 10, 10);
      rimLight2.target.position.set(0, 2, 0);
      lightGroup.add(rimLight2);
      lightGroup.add(rimLight2.target);

      return lightGroup;
    };

    const createParticles = () => {
      const particleCount = 1500;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      const alphas = new Float32Array(particleCount);

      const colorPurple = new THREE.Color(0x521262);
      const colorGold = new THREE.Color(0xf7b721);
      const colorMagenta = new THREE.Color(0xf609cf);
      const colorWhite = new THREE.Color(0xffffff);

      for (let i = 0; i < particleCount; i++) {
        // Distribute in a stage-shaped volume
        const radius = 8 + Math.random() * 25;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = -1 + Math.random() * 16;
        positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

        const colorChoice = Math.random();
        if (colorChoice < 0.35) {
          colors[i * 3] = colorPurple.r;
          colors[i * 3 + 1] = colorPurple.g;
          colors[i * 3 + 2] = colorPurple.b;
          alphas[i] = 0.3 + Math.random() * 0.4;
        } else if (colorChoice < 0.65) {
          colors[i * 3] = colorGold.r;
          colors[i * 3 + 1] = colorGold.g;
          colors[i * 3 + 2] = colorGold.b;
          alphas[i] = 0.4 + Math.random() * 0.5;
        } else if (colorChoice < 0.85) {
          colors[i * 3] = colorMagenta.r;
          colors[i * 3 + 1] = colorMagenta.g;
          colors[i * 3 + 2] = colorMagenta.b;
          alphas[i] = 0.2 + Math.random() * 0.3;
        } else {
          colors[i * 3] = colorWhite.r;
          colors[i * 3 + 1] = colorWhite.g;
          colors[i * 3 + 2] = colorWhite.b;
          alphas[i] = 0.15 + Math.random() * 0.25;
        }

        sizes[i] = 0.03 + Math.random() * 0.12;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
      geometry.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));

      const material = new THREE.PointsMaterial({
        size: 0.12,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        alphaTest: 0.01,
      });

      const particles = new THREE.Points(geometry, material);
      particlesRef.current = particles;
      particleGeometryRef.current = geometry;
      particleMaterialRef.current = material;
      stage.add(particles);
    };

    const createFog = () => {
      scene.fog = new THREE.FogExp2(0x0a050d, 0.015);
    };

    const structure = createStageStructure();
    const lighting = createLightingRig();
    createParticles();
    createFog();

    stage.add(structure);
    stage.add(lighting);
    lightsRef.current = lighting;

    // Initial camera position - closer for more impact
    const initialCameraPosition = new THREE.Vector3(0, 3, 22);
    const initialCameraTarget = new THREE.Vector3(0, 2, 0);
    camera.position.copy(initialCameraPosition);
    camera.lookAt(initialCameraTarget);

    // Handle resize
    const handleResize = () => {
      if (camera instanceof THREE.PerspectiveCamera) {
        camera.aspect = size.width / size.height;
        camera.updateProjectionMatrix();
      }
    };
    window.addEventListener("resize", handleResize);

    const createScrollTimeline = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "section[aria-labelledby='hero-headline']",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            updateScene(progress);
          },
        },
      });

      timelineRef.current = tl;
      return tl;
    };

    const updateScene = (progress: number) => {
      if (!stageRef.current) return;

      // 0-20%: Stage emerges from darkness
      if (progress < 0.2) {
        const appearProgress = progress / 0.2;
        stageRef.current.scale.setScalar(0.4 + 0.6 * appearProgress);
        stageRef.current.rotation.y = (1 - appearProgress) * 0.4;
        stageRef.current.position.y = (1 - appearProgress) * -5;
      }

      // 20-40%: Gold lighting sweeps in, brand identity clear
      if (progress >= 0.2 && progress < 0.4) {
        const lightProgress = (progress - 0.2) / 0.2;
        if (lightsRef.current) {
          lightsRef.current.children.forEach((child) => {
            if (child instanceof THREE.SpotLight) {
              if (child.color.getHex() === 0xffd700) {
                child.intensity = Math.max(0.5, child.intensity * (0.3 + lightProgress * 0.7));
              }
            }
          });
        }
      }

      // 40-60%: Camera moves toward stage, reveals depth
      if (progress >= 0.4 && progress < 0.6) {
        const moveProgress = (progress - 0.4) / 0.2;
        const targetZ = 22 - moveProgress * 14;
        const targetY = 3 + moveProgress * 3;
        camera.position.lerp(new THREE.Vector3(0, targetY, targetZ), 0.08);
        camera.lookAt(0, 1.5, 0);
      }

      // 60-80%: Environment transitions toward exhibition/branded installation
      if (progress >= 0.6 && progress < 0.8) {
        const transitionProgress = (progress - 0.6) / 0.2;
        if (lightsRef.current) {
          lightsRef.current.children.forEach((child) => {
            if (child instanceof THREE.SpotLight) {
              if (child.color.getHex() === 0xffd700) {
                child.color.lerp(new THREE.Color(0x521262), transitionProgress * 0.08);
                child.intensity *= 0.99;
              }
            }
          });
        }
        if (screenRef.current && screenRef.current.material) {
          const mat = screenRef.current.material as THREE.MeshStandardMaterial;
          mat.emissiveIntensity = 0.15 + transitionProgress * 0.35;
        }
      }

      // 80-100%: Camera travels through scene into next section
      if (progress >= 0.8) {
        const exitProgress = Math.min((progress - 0.8) / 0.2, 1);
        camera.position.lerp(new THREE.Vector3(0, 5, -8), exitProgress * 0.06);
        camera.lookAt(0, 2, -10);
      }

      // Subtle particle rotation
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.00015;
        particlesRef.current.rotation.x += 0.00005;
      }
    };

    createScrollTimeline();

    return () => {
      timelineRef.current?.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", handleResize);
      scene.remove(stage);
      particleGeometryRef.current?.dispose();
      particleMaterialRef.current?.dispose();
    };
  }, [camera, scene, size]);

  useFrame((_, delta) => {
    if (stageRef.current) {
      stageRef.current.rotation.y += delta * 0.003;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.0015;
      particlesRef.current.rotation.x += delta * 0.0005;
    }
    // Subtle screen pulse
    if (screenRef.current && screenRef.current.material) {
      const mat = screenRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.15 + Math.sin(performance.now() * 0.001) * 0.05;
    }
  });

  return null;
}