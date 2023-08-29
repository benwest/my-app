"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <mesh scale={[100, 100, 1]} onClick={() => router.push("/page2")}>
      <planeGeometry />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
}
