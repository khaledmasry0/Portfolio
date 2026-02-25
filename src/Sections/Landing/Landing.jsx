import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Container } from "react-bootstrap";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";
import prof from "../../assets/prof1.jpg";
import "./Landing.css";

const MouseCamera = () => {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (mouse.current.y * 0.3 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    });
  }

  return null;
};

const FloatingGeometry = ({ position, speed, geometry, scale, color, opacity }) => {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.003 * speed;
      ref.current.rotation.y += 0.004 * speed;
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.5;
    }
  });

  const geomMap = {
    icosahedron: <icosahedronGeometry args={[1, 0]} />,
    octahedron: <octahedronGeometry args={[1, 0]} />,
    torusKnot: <torusKnotGeometry args={[0.6, 0.2, 64, 16]} />,
    dodecahedron: <dodecahedronGeometry args={[1, 0]} />,
    torus: <torusGeometry args={[0.7, 0.3, 16, 32]} />,
    tetrahedron: <tetrahedronGeometry args={[1, 0]} />,
    box: <boxGeometry args={[1, 1, 1]} />,
  };

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.3}>
      <mesh ref={ref} position={position} scale={scale}>
        {geomMap[geometry] || geomMap.icosahedron}
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={opacity}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
};

const GlowSphere = () => {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.material.distort = 0.3 + Math.sin(state.clock.elapsedTime) * 0.15;
    }
  });
  return (
    <mesh ref={ref} position={[0, 0, -8]} scale={2.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#c8a25a"
        transparent
        opacity={0.05}
        distort={0.3}
        speed={2}
        roughness={0}
      />
    </mesh>
  );
};

const ConnectionLines = ({ count = 30 }) => {
  const ref = useRef();
  const linePositions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const x1 = (Math.random() - 0.5) * 20;
      const y1 = (Math.random() - 0.5) * 14;
      const z1 = -3 - Math.random() * 8;
      const x2 = x1 + (Math.random() - 0.5) * 4;
      const y2 = y1 + (Math.random() - 0.5) * 4;
      const z2 = z1 + (Math.random() - 0.5) * 2;
      arr.push(x1, y1, z1, x2, y2, z2);
    }
    return new Float32Array(arr);
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={linePositions.length / 3}
          array={linePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#c8a25a"
        transparent
        opacity={0.04}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#c8a25a" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#534666" />
      <pointLight position={[0, 5, 5]} intensity={0.2} color="#e0c17a" />

      <GlowSphere />
      <ConnectionLines count={25} />

      <FloatingGeometry position={[-5, 2, -4]} speed={1.2} geometry="icosahedron" scale={1.3} color="#c8a25a" opacity={0.2} />
      <FloatingGeometry position={[5, -1, -5]} speed={0.8} geometry="torusKnot" scale={0.9} color="#534666" opacity={0.18} />
      <FloatingGeometry position={[-3, -3, -6]} speed={1} geometry="octahedron" scale={1.1} color="#c8a25a" opacity={0.15} />
      <FloatingGeometry position={[4, 3, -7]} speed={0.7} geometry="dodecahedron" scale={1} color="#6b5a80" opacity={0.12} />
      <FloatingGeometry position={[0, -4, -5]} speed={1.4} geometry="torus" scale={0.8} color="#e0c17a" opacity={0.14} />
      <FloatingGeometry position={[-6, -1, -8]} speed={1.1} geometry="tetrahedron" scale={0.7} color="#534666" opacity={0.1} />
      <FloatingGeometry position={[6, 1, -6]} speed={0.9} geometry="box" scale={0.5} color="#c8a25a" opacity={0.12} />
      <FloatingGeometry position={[-1, 4, -7]} speed={1.3} geometry="box" scale={0.4} color="#6b5a80" opacity={0.1} />
      <FloatingGeometry position={[2, -2, -3]} speed={0.6} geometry="tetrahedron" scale={0.6} color="#e0c17a" opacity={0.1} />
      <FloatingGeometry position={[-4, 0, -9]} speed={0.5} geometry="dodecahedron" scale={0.8} color="#534666" opacity={0.08} />

      <Stars radius={60} depth={60} count={2500} factor={4} saturation={0} fade speed={1.2} />

      <MouseCamera />
    </>
  );
};

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing_canvas">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <Container className="landing_content">
        <div className="landing_grid">
          <motion.div
            className="landing_text"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="landing_greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="landing_name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Khaled Mohamed
            </motion.h1>

            <motion.div
              className="landing_role"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <TypeAnimation
                sequence={[
                  "Senior Frontend Developer",
                  2000,
                  "React & React Native Expert",
                  2000,
                  "5+ Years of Experience",
                  2000,
                  "Building Scalable Web Apps",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              className="landing_bio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              Turning complex ideas into clean, intuitive interfaces that combine
              performance, usability, and security.
            </motion.p>

            <motion.div
              className="landing_actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <a href="#/Contact" className="custom_button landing_cta">
                Get In Touch
              </a>
              <a href="#/Projects" className="custom_button landing_cta_alt">
                View Projects
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="landing_image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <div className="profile_holder">
              <div className="profile_ring" />
              <div className="profile_ring profile_ring_2" />
              <svg
                viewBox="0 0 480 480"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <clipPath id="blob">
                    <path
                      fill="#474bff"
                      d="M453,295.5Q451,351,398.5,372Q346,393,303,400.5Q260,408,210.5,428.5Q161,449,112.5,422.5Q64,396,42,345Q20,294,20.5,240Q21,186,43.5,136Q66,86,112.5,56Q159,26,211,36.5Q263,47,301,72Q339,97,374,124Q409,151,432,195.5Q455,240,453,295.5Z"
                    />
                  </clipPath>
                </defs>
                <image
                  style={{
                    filter: "opacity(0.95)",
                    transform: "rotate(7deg)",
                    transformOrigin: "center",
                  }}
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  clipPath="url(#blob)"
                  xlinkHref={prof}
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
              <div className="profile_glow" />
              <div className="profile_dots" />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll_indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onClick={() => window.scrollBy({ top: 500, behavior: "smooth" })}
        >
          <div className="scroll_mouse">
            <div className="scroll_wheel" />
          </div>
          <span>Scroll Down</span>
        </motion.div>
      </Container>
    </section>
  );
};

export default Landing;
