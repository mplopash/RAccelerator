"use client";

/**
 * Points copied from the three.js particle sprites example.
 * Source: https://github.com/mrdoob/three.js/blob/dev/examples/webgl_points_sprites.html
 * License: MIT — https://github.com/mrdoob/three.js/blob/dev/LICENSE
 *
 * Same BufferGeometry loop (10,000 random positions in a 2000-unit cube),
 * Points, PointsMaterial sizes, additive blending, and the slow Y spin.
 * Color is #6EFFCE instead of the example's cycling HSL.
 * Snowflake PNGs are not shipped; a soft disc stands in for the sprite map.
 */

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  AdditiveBlending,
  BufferGeometry,
  CanvasTexture,
  Color,
  Float32BufferAttribute,
  FogExp2,
  NormalBlending,
  Points,
  PointsMaterial,
  SRGBColorSpace,
  type Scene,
} from "three";

const sizes = [20, 15, 10, 8, 5];

const themes = {
  light: {
    particle: "#065F4A",
    field: "#EAEEF4",
    opacity: 0.28,
    blending: NormalBlending,
    fog: 0.00115,
  },
  dark: {
    particle: "#6EFFCE",
    field: "#061410",
    opacity: 0.55,
    blending: AdditiveBlending,
    fog: 0.0008,
  },
} as const;

function themeNow() {
  return document.documentElement.classList.contains("dark")
    ? themes.dark
    : themes.light;
}

function paintTheme(materials: PointsMaterial[], scene: Scene) {
  const theme = themeNow();
  const field = new Color(theme.field);
  for (const material of materials) {
    material.color.set(theme.particle);
    material.opacity = theme.opacity;
    material.blending = theme.blending;
    material.needsUpdate = true;
  }
  scene.background = field;
  if (scene.fog instanceof FogExp2) {
    scene.fog.color.copy(field);
    scene.fog.density = theme.fog;
  } else {
    scene.fog = new FogExp2(theme.field, theme.fog);
  }
}

function discTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const context = canvas.getContext("2d");
  if (!context) return null;
  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 28);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.45, "rgba(255,255,255,0.7)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 64, 64);
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  return texture;
}

function ThemeSync({ materials }: { materials: PointsMaterial[] }) {
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    const apply = () => paintTheme(materials, scene);
    apply();
    const observer = new MutationObserver(apply);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, [materials, scene]);

  return null;
}

function SpritePoints({ reduced }: { reduced: boolean }) {
  const clouds = useRef<Points[]>([]);

  const built = useMemo(() => {
    const geometry = new BufferGeometry();
    const vertices: number[] = [];

    for (let i = 0; i < 10000; i++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;
      vertices.push(x, y, z);
    }

    geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));

    const sprite = discTexture();
    const theme = themeNow();

    return sizes.map((size, index) => {
      const material = new PointsMaterial({
        size,
        map: sprite,
        blending: theme.blending,
        depthTest: false,
        transparent: true,
        opacity: theme.opacity,
        color: theme.particle,
      });
      const particles = new Points(geometry, material);
      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;
      particles.userData.spin = index < 4 ? index + 1 : -(index + 1);
      return particles;
    });
  }, []);

  useFrame(() => {
    if (reduced) return;
    const time = Date.now() * 0.00005;
    clouds.current.forEach((object) => {
      if (!object) return;
      object.rotation.y = time * object.userData.spin;
    });
  });

  const materials = useMemo(
    () => built.map((particles) => particles.material as PointsMaterial),
    [built],
  );

  return (
    <>
      <ThemeSync materials={materials} />
      <group scale={0.52}>
        {built.map((particles, index) => (
          <primitive
            key={index}
            ref={(node: Points | null) => {
              clouds.current[index] = node as Points;
            }}
            object={particles}
          />
        ))}
      </group>
    </>
  );
}

export function MercuryScene() {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const field = themeNow().field;

  return (
    <Canvas
      camera={{ position: [0, 0, 1000], fov: 75, near: 1, far: 2000 }}
      dpr={[1, 1.5]}
      gl={{ alpha: false, antialias: false }}
      onCreated={({ scene }) => {
        scene.fog = new FogExp2(field, themeNow().fog);
        scene.background = new Color(field);
      }}
    >
      <color attach="background" args={[field]} />
      <SpritePoints reduced={reduced} />
    </Canvas>
  );
}
