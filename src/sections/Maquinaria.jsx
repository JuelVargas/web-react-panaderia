import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, Center, Environment } from "@react-three/drei"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'



function Bakery() {
  const gltf = useLoader(GLTFLoader, '../src/assets/models/maple_bakery/bakery.gltf')
  gltf.scene.rotation.y = 3;

  return <primitive object={gltf.scene} scale={0.0012} />
}

function Model({ url, scale, rotation }) {
  const gltf = useLoader(GLTFLoader, url);

  gltf.scene.traverse((node) => {
    if (node.isMesh) {
      node.material.needsUpdate = true;
    }
  });

  gltf.scene.rotation.y = rotation;
  return <primitive object={gltf.scene} scale={scale} />;
}

const Maquinaria = () => {



  return (
    <section
      id="maquinaria"
      className="w-full flex justify-center"
    >
      <div
        className="max-sm:mx-4 sm:w-4/5 lg:w-3/6 bg-slate-200/30  pt-8"
      >
        <div className="flex flex-col w-full gap-4 md:gap-20">
          <div className=" relative rounded-xl  mx-4 h-[300px] ">

            <Canvas className="w-full "  >
              <Suspense fallback={null}>
                <mesh position={[0, 0, 0]}   >
                  <Environment preset="sunset" />
                  <OrbitControls enableZoom={false} enableDamping={false} />
                  <ambientLight />
                  <Center>
                    <Bakery />
                  </Center>


                </mesh>
              </Suspense>
            </Canvas>

          </div>

          <div className="my-4">
            <p className=" mx-auto w-11/12 md:w-4/5  text-wrap p-3 md:p-8 bg-background shadow-xl text-text">El equipamiento en una panadería es esencial para aumentar la eficiencia y productividad, garantizar la calidad consistente de los productos, mantener altos estándares de higiene y seguridad, y reducir costos operativos a largo plazo. Facilita la innovación y diversificación del menú, asegura el cumplimiento normativo, y alivia la carga de trabajo del personal, mejorando su bienestar y reduciendo el riesgo de lesiones. En conjunto, estos factores son cruciales para la sostenibilidad y el éxito del negocio.
              <br />
              los siguiente modelos son algunos de los equipos que se utiliza en una panadería.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-center my-2 text-text ">Amasadora</h3>
            <div className=" rounded-xl  mx-4 bg-gradient-to-r from-secondary/30 to-black/30 h-[300px]">

              <Canvas className="w-full md:w-4/5  "  >
                <Suspense fallback={null}>
                  <mesh position={[0, 0, 0]}>
                    <Environment preset="sunset" />
                    <OrbitControls enableZoom={false} enableDamping={false} />
                    <ambientLight />
                    <Center>
                      <Model url={"../src/assets/models/dough_mixer/scene.gltf"} scale={8} rotation={0} />
                    </Center>
                  </mesh>
                </Suspense>
              </Canvas>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-center text-text my-2">Fermentador</h3>
            <div className=" rounded-xl  mx-4 bg-gradient-to-r from-secondary/30 to-black/30  h-[300px]">

              <Canvas className="w-full "  >
                <Suspense fallback={null}>
                  <mesh position={[0, 0, 0]}>
                    <Environment preset="sunset" />
                    <OrbitControls enableZoom={false} enableDamping={false} />
                    <ambientLight />
                    <meshBasicMaterial color={"gray"} />
                    <Center>
                      <Model url={"../src/assets/models/wake-up_dough/scene.gltf"} scale={0.045} rotation={5.4} />
                    </Center>
                  </mesh>
                </Suspense>
              </Canvas>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-center text-text my-2">Horno</h3>
            <div className=" rounded-xl  mx-4  bg-gradient-to-r from-secondary/30 to-black/30 h-[300px]">

              <Canvas className="w-full "  >
                <Suspense fallback={null}>
                  <mesh position={[0, 0, 0]}>
                    <Environment preset="sunset" />
                    <OrbitControls enableZoom={false} enableDamping={false} />
                    <ambientLight />
                    <Center>
                      <Model url={"../src/assets/models/bread_oven/oven.gltf"} scale={0.09} rotation={Math.PI} />
                    </Center>
                  </mesh>
                </Suspense>
              </Canvas>
            </div>
          </div>



        </div>

      </div>

    </section>
  )
}

export default Maquinaria