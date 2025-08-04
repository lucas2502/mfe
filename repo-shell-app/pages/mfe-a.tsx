import dynamic from "next/dynamic";
import Layout from "../components/Home";

const RemoteAppA = dynamic(() => import("mfe_a/AppA"), { ssr: true });

export default function ProfilePage() {
  return (
    <Layout>
      <RemoteAppA />
    </Layout>
  );
}
