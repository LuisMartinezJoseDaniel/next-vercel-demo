import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

//* Las pages deben ser exportaciones por defecto
//* Las pages deben nombrarse en minuscula (archivos)
export default function HomePage() {
  return (
    <MainLayout title={"Home"}>
      <h1 className={`title`}>
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className={`description`}>
        Get started by editing <code className={`code`}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
