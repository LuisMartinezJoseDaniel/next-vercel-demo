import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

const PrincingPage = () => {
  return (
    <MainLayout title="Pricing Page">
      
      <h1 className={`title`}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={`description`}>
        Get started by editing <code className={`code`}>pages/pricing/pricing.jsx</code>
      </p>
    </MainLayout>
  );
}

export default PrincingPage