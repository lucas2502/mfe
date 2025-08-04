import dynamic from "next/dynamic";
import Layout from "../components/Home";

const RemoteAppB = dynamic(() => import("mfe_b/AppB"), { ssr: true });

export default function ProfilePage() {
  return (
    <Layout>
      <RemoteAppB />
    </Layout>
  );
}
