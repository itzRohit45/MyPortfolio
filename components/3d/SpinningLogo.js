"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "@/utils/ThemeContext";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function SpinningLogo() {
  const mountRef = useRef(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    // Store a reference to the current DOM node to avoid stale reference in cleanup
    const currentRef = mountRef.current;

    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      currentRef.clientWidth / currentRef.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Clear any existing canvas
    while (currentRef.firstChild) {
      currentRef.removeChild(currentRef.firstChild);
    }

    currentRef.appendChild(renderer.domElement);

    // Create a dodecahedron geometry
    const geometry = new THREE.DodecahedronGeometry(1.5, 0);
    const material = new THREE.MeshPhongMaterial({
      color: darkMode ? 0x3ce5fc : 0x4831d4,
      flatShading: true,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Add orbit controls for limited interactivity
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.enableZoom = false;
    controls.enablePan = false;

    // Position camera
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      mesh.rotation.x += 0.003;
      mesh.rotation.y += 0.005;

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Handle resize events
    const handleResize = () => {
      if (!currentRef) return;

      camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      if (currentRef && renderer.domElement.parentNode === currentRef) {
        currentRef.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, [darkMode]); // Re-create the scene when dark mode changes

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "300px",
      }}
    />
  );
}
