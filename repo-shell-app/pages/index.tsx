import dynamic from "next/dynamic";
import Layout from "../components/Home";

// const RemoteAppA = dynamic(() => import("mfe_a/AppA"), { ssr: false });
// const RemoteAppB = dynamic(() => import("mfe_b/AppB"), { ssr: false });
// const Header = dynamic(() => import("../components/Header"), { ssr: false });
// const Sidebar = dynamic(() => import("../components/Sidebar"), { ssr: false });

// export default function IndexPage() {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
//       <Header />
//       <div style={{ display: "flex", flex: 1 }}>
//         <Sidebar />
//         <main style={{ flex: 1, padding: "1rem" }}>
//           <RemoteAppA />
//           <RemoteAppB />
//         </main>
//       </div>
//     </div>
//   );
// }

export default function IndexPage() {
  return (
    <Layout>
      <h1>Welcome to the Host App</h1>
      <p>This is the main page.</p>
    </Layout>
  );
}
