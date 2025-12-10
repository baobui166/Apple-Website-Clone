import { Html } from "@react-three/drei";

function Loader() {
  return (
    <Html>
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <div className="w-[100vw] h-[100vh] rounded-full ">Loading...</div>
      </div>
    </Html>
  );
}

export default Loader;
