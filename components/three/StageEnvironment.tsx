"use client";

import { useLayoutEffect, useMemo, useRef, type MutableRefObject } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * One shared event-stage environment used by the hero and the experience
 * showcase. All animatable values live in a plain `StageParams` object so GSAP
 * (or any controller) can tween it without touching React state.
 */
export interface StageParams {
  wall: number; // LED wall brightness 0..1
  beams: number; // light-beam opacity multiplier 0..1.4
  truss: number; // lighting gantry visibility 0..1
  crowd: number; // audience height scale 0..1
  sparks: number; // particle opacity 0..1
  glow: number; // stage-floor light pools 0..1
  fog: number; // exp2 fog density
  warm: number; // 0 = purple dominant, 1 = gold dominant (wall tint)
  shift: number; // horizontal scene offset (hero composes stage to the right)
  scroll: number; // 0..1 scroll progress (hero camera dolly)
  zoom: number; // distance multiplier, >1 = further
  cam: [number, number, number]; // camera position (desktop 16:9 reference)
  look: [number, number, number]; // look-at target
}

export const HERO_PARAMS: StageParams = {
  wall: 1,
  beams: 1.15,
  truss: 1,
  crowd: 0,
  sparks: 0.95,
  glow: 1,
  fog: 0.015,
  warm: 0.4,
  shift: 0,
  scroll: 0,
  zoom: 1,
  cam: [0, 4.1, 21],
  look: [0, 3.6, 0],
};

export interface StageQuality {
  fixtures: number;
  sparks: number;
  crowd: number;
}
export const QUALITY_HIGH: StageQuality = { fixtures: 7, sparks: 260, crowd: 150 };
export const QUALITY_LOW: StageQuality = { fixtures: 5, sparks: 90, crowd: 60 };

type ParamsRef = MutableRefObject<StageParams>;

function radialTexture(stops: [number, string][]): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  stops.forEach(([o, col]) => grad.addColorStop(o, col));
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function wallTexture(): THREE.CanvasTexture {
  const W = 1024;
  const H = 512;
  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const g = c.getContext("2d")!;
  const base = g.createLinearGradient(0, 0, 0, H);
  base.addColorStop(0, "#30093d");
  base.addColorStop(0.55, "#6a1680");
  base.addColorStop(1, "#b0178f");
  g.fillStyle = base;
  g.fillRect(0, 0, W, H);

  const sun = g.createRadialGradient(W / 2, H * 0.92, 10, W / 2, H * 0.92, H * 0.95);
  sun.addColorStop(0, "rgba(255, 208, 92, 0.95)");
  sun.addColorStop(0.35, "rgba(247, 183, 33, 0.3)");
  sun.addColorStop(1, "rgba(247, 183, 33, 0)");
  g.fillStyle = sun;
  g.fillRect(0, 0, W, H);

  // vertical light bars
  for (let i = 0; i < 22; i++) {
    const x = (i + 0.5) * (W / 22);
    const bar = g.createLinearGradient(0, 0, 0, H);
    bar.addColorStop(0, "rgba(255,255,255,0)");
    bar.addColorStop(0.5, `rgba(255, 220, 140, ${0.05 + (i % 3) * 0.05})`);
    bar.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = bar;
    g.fillRect(x - 5, 0, 10, H);
  }

  // LED pixel grid
  g.strokeStyle = "rgba(23, 9, 29, 0.38)";
  g.lineWidth = 2;
  for (let x = 0; x <= W; x += 16) {
    g.beginPath();
    g.moveTo(x, 0);
    g.lineTo(x, H);
    g.stroke();
  }
  for (let y = 0; y <= H; y += 16) {
    g.beginPath();
    g.moveTo(0, y);
    g.lineTo(W, y);
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

const C_GOLD = new THREE.Color("#F7B721");
const C_PURPLE = new THREE.Color("#9a2bb8");
const C_MAG = new THREE.Color("#F609CF");

/* ------------------------------------------------------------------ */
/* Camera                                                              */
/* ------------------------------------------------------------------ */
function CameraRig({ params, parallax }: { params: ParamsRef; parallax: boolean }) {
  const camera = useThree((s) => s.camera);
  const size = useThree((s) => s.size);
  const smooth = useRef({ x: 0, y: 0 });
  const tmpLook = useMemo(() => new THREE.Vector3(), []);
  const tmpPos = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, dt) => {
    const p = params.current;
    const aspect = size.width / Math.max(1, size.height);
    // pull the camera back on tall/narrow viewports so the stage stays framed
    const fit = THREE.MathUtils.clamp(1.65 / aspect, 1, 2.7);
    const k = fit * p.zoom;

    if (parallax) {
      smooth.current.x += (state.pointer.x - smooth.current.x) * Math.min(1, dt * 2.2);
      smooth.current.y += (state.pointer.y - smooth.current.y) * Math.min(1, dt * 2.2);
    }
    tmpLook.set(p.look[0], p.look[1], p.look[2]);
    tmpPos.set(
      tmpLook.x + (p.cam[0] - p.look[0]) * k + smooth.current.x * 1.2,
      tmpLook.y + (p.cam[1] - p.look[1]) * k + p.scroll * 1.6 + smooth.current.y * 0.6,
      tmpLook.z + (p.cam[2] - p.look[2]) * k - p.scroll * 5
    );
    camera.position.copy(tmpPos);
    camera.lookAt(tmpLook);
  });
  return null;
}

/* ------------------------------------------------------------------ */
/* Environment                                                         */
/* ------------------------------------------------------------------ */
export function StageEnvironment({
  params,
  quality,
  parallax = true,
  animate = true,
}: {
  params: ParamsRef;
  quality: StageQuality;
  parallax?: boolean;
  animate?: boolean;
}) {
  const scene = useThree((s) => s.scene);
  const size = useThree((s) => s.size);
  const invalidate = useThree((s) => s.invalidate);

  const root = useRef<THREE.Group>(null);
  const wallMat = useRef<THREE.MeshBasicMaterial>(null);
  const stripMats = useRef<THREE.MeshBasicMaterial[]>([]);
  const trussGroup = useRef<THREE.Group>(null);
  const trussMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#3a1a47", roughness: 0.35, metalness: 0.8, transparent: true }),
    []
  );
  const beamGroups = useRef<(THREE.Group | null)[]>([]);
  const poolMats = useRef<THREE.MeshBasicMaterial[]>([]);
  const crowdGroup = useRef<THREE.Group>(null);
  const sparks = useRef<THREE.Points>(null);
  const sparkMat = useRef<THREE.PointsMaterial>(null);

  const wallTex = useMemo(() => wallTexture(), []);
  const poolTex = useMemo(
    () => radialTexture([[0, "rgba(255,255,255,0.9)"], [0.45, "rgba(255,255,255,0.28)"], [1, "rgba(255,255,255,0)"]]),
    []
  );
  const sparkTex = useMemo(
    () => radialTexture([[0, "rgba(255,255,255,1)"], [0.4, "rgba(255,255,255,0.35)"], [1, "rgba(255,255,255,0)"]]),
    []
  );

  const fixtures = useMemo(() => {
    const n = quality.fixtures;
    return Array.from({ length: n }, (_, i) => {
      const x = n === 1 ? 0 : -7 + (14 / (n - 1)) * i;
      const colour = i % 3 === 1 ? C_PURPLE : i === Math.floor(n / 2) ? C_MAG : C_GOLD;
      return { x, colour, phase: i * 1.3 };
    });
  }, [quality.fixtures]);

  const sparkData = useMemo(() => {
    const n = quality.sparks;
    const pos = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 34;
      pos[i * 3 + 1] = Math.random() * 12;
      pos[i * 3 + 2] = -4 + Math.random() * 20;
      const c = Math.random() < 0.6 ? C_GOLD : Math.random() < 0.6 ? C_PURPLE : C_MAG;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { pos, col };
  }, [quality.sparks]);

  const crowdData = useMemo(() => {
    const n = quality.crowd;
    const mats: THREE.Matrix4[] = [];
    const m = new THREE.Matrix4();
    for (let i = 0; i < n; i++) {
      const row = Math.floor(i / 14);
      const z = 7 + row * 1.5 + Math.random() * 0.5;
      const spread = 8 + row * 1.2;
      const x = (((i % 14) + Math.random() * 0.6) / 13 - 0.5) * 2 * spread;
      const s = 0.85 + Math.random() * 0.35;
      m.compose(new THREE.Vector3(x, 0.95 * s, z), new THREE.Quaternion(), new THREE.Vector3(s, s, s));
      mats.push(m.clone());
    }
    return mats;
  }, [quality.crowd]);

  const crowdMesh = useRef<THREE.InstancedMesh>(null);
  const headMesh = useRef<THREE.InstancedMesh>(null);

  useLayoutEffect(() => {
    if (!crowdMesh.current || !headMesh.current) return;
    const head = new THREE.Matrix4();
    const pos = new THREE.Vector3();
    const q = new THREE.Quaternion();
    const sc = new THREE.Vector3();
    crowdData.forEach((m, i) => {
      crowdMesh.current!.setMatrixAt(i, m);
      m.decompose(pos, q, sc);
      head.compose(new THREE.Vector3(pos.x, pos.y + 0.78 * sc.y, pos.z), q, sc);
      headMesh.current!.setMatrixAt(i, head);
    });
    crowdMesh.current.instanceMatrix.needsUpdate = true;
    headMesh.current.instanceMatrix.needsUpdate = true;
    invalidate();
  }, [crowdData, invalidate]);

  useFrame((state) => {
    const p = params.current;
    const t = animate ? state.clock.elapsedTime : 0;

    // fog & placement
    if (scene.fog instanceof THREE.FogExp2) scene.fog.density = p.fog;
    if (root.current) root.current.position.x = size.width / Math.max(1, size.height) > 1.2 ? p.shift : 0;

    // LED wall + side strips
    if (wallMat.current) {
      const pulse = p.wall * (1 + (animate ? Math.sin(t * 0.8) * 0.04 : 0));
      // warm = bias the wall toward gold (raise R/G, lower B)
      wallMat.current.color.setRGB(pulse * (1 + p.warm * 0.35), pulse * (1 + p.warm * 0.45), pulse * (1 - p.warm * 0.25));
    }
    stripMats.current.forEach((m) => m && (m.opacity = 0.2 + p.wall * 0.7));

    // truss
    trussMat.opacity = p.truss;
    if (trussGroup.current) trussGroup.current.visible = p.truss > 0.01;

    // pointer parallax tracking
    const ptrX = parallax ? state.pointer.x * 0.1 : 0;
    const ptrY = parallax ? state.pointer.y * 0.06 : 0;

    // beams
    beamGroups.current.forEach((g, i) => {
      if (!g) return;
      const f = fixtures[i];
      const sway = animate ? Math.sin(t * 0.55 + f.phase) * 0.05 : 0;
      g.rotation.z = -f.x * 0.038 + sway + ptrX * (1 - Math.abs(f.x) * 0.035);
      g.rotation.x = 0.44 + (animate ? Math.cos(t * 0.4 + f.phase) * 0.03 : 0) + ptrY;
      g.visible = p.beams > 0.01;
      g.children.forEach((c) => {
        const mesh = c as THREE.Mesh;
        const mat = mesh.material as THREE.MeshBasicMaterial | undefined;
        if (mat && mesh.userData.base !== undefined) {
          mat.opacity = mesh.userData.base * p.beams * (0.85 + (animate ? Math.sin(t * 1.3 + f.phase) * 0.15 : 0));
        }
      });
    });

    // pulsating stage light pools
    poolMats.current.forEach((m, i) => {
      if (!m) return;
      const f = fixtures[i];
      const pulse = 0.38 + (animate ? Math.sin(t * 1.3 + (f ? f.phase : 0)) * 0.12 : 0);
      m.opacity = pulse * p.glow;
    });

    // crowd
    if (crowdGroup.current) {
      crowdGroup.current.scale.y = Math.max(0.001, p.crowd);
      crowdGroup.current.visible = p.crowd > 0.01;
    }

    // sparks with gentle ambient drift and twinkling
    if (sparkMat.current) sparkMat.current.opacity = p.sparks * (0.85 + (animate ? Math.sin(t * 0.8) * 0.15 : 0));
    if (sparks.current && animate) {
      sparks.current.rotation.y = t * 0.016;
      sparks.current.position.y = Math.sin(t * 0.28) * 0.35;
    }
  });

  return (
    <>
      <color attach="background" args={["#17091D"]} />
      <fogExp2 attach="fog" args={["#17091D", HERO_PARAMS.fog]} />
      <ambientLight color="#8a4a9e" intensity={0.55} />
      <directionalLight color="#ffd9a0" intensity={0.65} position={[-6, 9, 14]} />
      <pointLight color="#b23ad0" intensity={90} distance={30} decay={1.6} position={[0, 6, -2]} />
      <pointLight color="#F7B721" intensity={60} distance={26} decay={1.6} position={[0, 5.5, 6]} />

      <CameraRig params={params} parallax={parallax} />

      <group ref={root}>
        {/* floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 4]}>
          <circleGeometry args={[70, 64]} />
          <meshStandardMaterial color="#0c0511" roughness={0.55} metalness={0.4} />
        </mesh>

        {/* stage deck + apron */}
        <mesh position={[0, 0.25, -0.5]}>
          <boxGeometry args={[15.5, 0.5, 7.6]} />
          <meshStandardMaterial color="#1f0c27" roughness={0.4} metalness={0.55} />
        </mesh>
        <mesh position={[0, 0.125, 4.1]}>
          <boxGeometry args={[15.5, 0.25, 1.4]} />
          <meshStandardMaterial color="#190a20" roughness={0.5} metalness={0.5} />
        </mesh>
        <mesh position={[0, 0.53, 3.32]}>
          <boxGeometry args={[15.5, 0.05, 0.08]} />
          <meshBasicMaterial color="#F7B721" toneMapped={false} />
        </mesh>

        {/* LED wall */}
        <mesh position={[0, 3.9, -4.05]}>
          <planeGeometry args={[13, 6]} />
          <meshBasicMaterial ref={wallMat} map={wallTex} toneMapped={false} />
        </mesh>
        <mesh position={[0, 3.9, -4.18]}>
          <boxGeometry args={[13.5, 6.5, 0.2]} />
          <meshStandardMaterial color="#12061a" roughness={0.5} metalness={0.7} />
        </mesh>

        {/* side LED towers */}
        {[-1, 1].map((s) => (
          <group key={s} position={[s * 8.6, 0, -2.6]}>
            <mesh position={[0, 3.6, 0]}>
              <boxGeometry args={[1.5, 7.2, 1.1]} />
              <meshStandardMaterial color="#14071b" roughness={0.45} metalness={0.7} />
            </mesh>
            <mesh position={[0, 3.6, 0.56]}>
              <planeGeometry args={[0.5, 6.4]} />
              <meshBasicMaterial
                ref={(m) => {
                  if (m) stripMats.current[s === -1 ? 0 : 1] = m;
                }}
                color="#F7B721"
                transparent
                toneMapped={false}
              />
            </mesh>
          </group>
        ))}

        {/* lighting gantry */}
        <group ref={trussGroup}>
          {[
            { p: [0, 7.7, 2.8], a: [17, 0.36, 0.36] },
            { p: [0, 7.7, -2.2], a: [17, 0.36, 0.36] },
            { p: [-8.5, 7.7, 0.3], a: [0.36, 0.36, 5.4] },
            { p: [8.5, 7.7, 0.3], a: [0.36, 0.36, 5.4] },
          ].map((b, i) => (
            <mesh key={i} position={b.p as [number, number, number]} material={trussMat}>
              <boxGeometry args={b.a as [number, number, number]} />
            </mesh>
          ))}
          {[
            [-8.5, 2.8],
            [8.5, 2.8],
            [-8.5, -2.2],
            [8.5, -2.2],
          ].map(([x, z], i) => (
            <mesh key={i} position={[x, 3.9, z]} material={trussMat}>
              <cylinderGeometry args={[0.17, 0.17, 7.8, 10]} />
            </mesh>
          ))}
        </group>

        {/* moving-head fixtures with light beams */}
        {fixtures.map((f, i) => (
          <group key={i} position={[f.x, 7.45, 2.8]}>
            <mesh>
              <cylinderGeometry args={[0.24, 0.3, 0.5, 14]} />
              <meshStandardMaterial color="#0c0511" roughness={0.4} metalness={0.8} />
            </mesh>
            <mesh position={[0, -0.27, 0]}>
              <circleGeometry args={[0.22, 20]} />
              <meshBasicMaterial color={f.colour} toneMapped={false} side={THREE.DoubleSide} />
            </mesh>
            <group
              position={[0, -0.25, 0]}
              ref={(g) => {
                beamGroups.current[i] = g;
              }}
            >
              <mesh position={[0, -3.9, 0]} userData={{ base: 0.16 }}>
                <coneGeometry args={[1.35, 7.8, 28, 1, true]} />
                <meshBasicMaterial color={f.colour} transparent opacity={0.16} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
              </mesh>
              <mesh position={[0, -3.9, 0]} userData={{ base: 0.22 }}>
                <coneGeometry args={[0.55, 7.8, 20, 1, true]} />
                <meshBasicMaterial color={f.colour} transparent opacity={0.22} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
              </mesh>
            </group>
          </group>
        ))}

        {/* light pools on the stage deck */}
        {fixtures.map((f, i) => (
          <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[f.x * 0.82, 0.54, -0.2 + (i % 2) * 0.8]}>
            <planeGeometry args={[3.4, 3.4]} />
            <meshBasicMaterial
              ref={(m) => {
                if (m) poolMats.current[i] = m;
              }}
              map={poolTex}
              color={f.colour}
              transparent
              blending={THREE.AdditiveBlending}
              depthWrite={false}
              toneMapped={false}
            />
          </mesh>
        ))}

        {/* audience silhouettes */}
        <group ref={crowdGroup}>
          <instancedMesh ref={crowdMesh} args={[undefined, undefined, quality.crowd]}>
            <capsuleGeometry args={[0.3, 0.7, 4, 8]} />
            <meshStandardMaterial color="#0b0510" roughness={0.9} />
          </instancedMesh>
          <instancedMesh ref={headMesh} args={[undefined, undefined, quality.crowd]}>
            <sphereGeometry args={[0.24, 10, 8]} />
            <meshStandardMaterial color="#0b0510" roughness={0.9} />
          </instancedMesh>
        </group>

        {/* atmosphere */}
        <points ref={sparks}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[sparkData.pos, 3]} />
            <bufferAttribute attach="attributes-color" args={[sparkData.col, 3]} />
          </bufferGeometry>
          <pointsMaterial
            ref={sparkMat}
            size={0.2}
            map={sparkTex}
            vertexColors
            transparent
            opacity={0.9}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            sizeAttenuation
          />
        </points>
      </group>
    </>
  );
}
