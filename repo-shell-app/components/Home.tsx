import dynamic from "next/dynamic";
import { ReactNode } from "react";

const Header = dynamic(() => import("../components/Header"), { ssr: false });
const Sidebar = dynamic(() => import("../components/Sidebar"), { ssr: false });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "2rem" }}>{children}</main>
      </div>
    </div>
  );
}
