import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import "./ThreeD.css";

export default function ThreeD() {
    const canvasRef = useRef();
    const [shapeIndex, setShapeIndex] = useState(0);
    const shapes = ["cube", "sphere", "cuboid", "cone", "cylinder"];
    const shapeInfo = {
        cube: "This is a cube. It has 6 faces, all of which are squares.",
        sphere: "This is a sphere. It is perfectly round, with no edges or vertices.",
        cuboid: "This is a cuboid. It has 6 rectangular faces.",
        cone: "This is a cone. It has a circular base and a single vertex.",
        cylinder: "This is a cylinder. It has two circular bases and a curved surface.",
    };

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

        // Set up camera position
        camera.position.z = 5;

        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(0, 1, 0);
        scene.add(directionalLight);

        // Add geometries
        const geometries = {
            cube: new THREE.BoxGeometry(),
            sphere: new THREE.SphereGeometry(1, 32, 32),
            cuboid: new THREE.BoxGeometry(1, 0.5, 1.5),
            cone: new THREE.ConeGeometry(1, 2, 32),
            cylinder: new THREE.CylinderGeometry(1, 1, 2, 32),
        };

        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        const shapeMesh = new THREE.Mesh(geometries[shapes[shapeIndex]], material);
        scene.add(shapeMesh);

        // Render loop
        const animate = () => {
            requestAnimationFrame(animate);
            shapeMesh.rotation.x += 0.01;
            shapeMesh.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        // Resize handling
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [shapeIndex]);

    const handleNextShape = () => {
        setShapeIndex((prevIndex) => (prevIndex + 1) % shapes.length);
    };

    const handlePrevShape = () => {
        setShapeIndex((prevIndex) => (prevIndex - 1 + shapes.length) % shapes.length);
    };

    return (
        <>
            <div id="nav">
            <a href="/learn" target="_top">
			<div id = "sign_up" class = "nav_sections">
				Back
			</div>
			</a>
            <a href="/" target="_top">
			<div id = "logout" class = "nav_sections">
				Logout
			</div>
			</a>
			<a href="/signin" target = "_top">
			</a>
			<a href="/reg" target = "_top">
			<div id = "register" class="nav_sections">
				Register
			</div>
			</a>
			<a href="/threed" target = "_top">
            <div id = "threed" class="nav_sections">
                3D Shapes!
            </div>
        	</a>
			<a href="/assessment" target = "_top">
            <div id = "assessment" class="nav_sections">
                Assessment
            </div>
        	</a>
			<a href="/feedback" target = "_top">
            <div id = "feedback" class="nav_sections">
                Feedback
            </div>
        	</a>
		</div>
            <div className="threed_container">
                <div style={{ textAlign: "center", color:"white"}}>
                    <div style={{ width: "70vw", height: "90vh", margin: "auto", position: "relative" }}>
                        <canvas ref={canvasRef} style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }} />
                        <div style={{ position: "absolute", bottom: "20px", left: 0, right: 0 }}>
                            <p>{shapeInfo[shapes[shapeIndex]]}</p>
                            <button onClick={handlePrevShape}>&lt; Previous</button>
                            <button onClick={handleNextShape}>Next &gt;</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}
