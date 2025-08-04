import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside style={{ width: "200px", background: "#eee", padding: "1rem" }}>
      <ul>
        <li>
          <button onClick={() => router.push("/")}>SHELL APP</button>
        </li>
        <li>
          <button onClick={() => router.push("/mfe-a")}>MFE A</button>
        </li>
        <li>
          <button onClick={() => router.push("/mfe-b")}>MFE B</button>
        </li>
        <li>
          <button onClick={() => router.push("/star-wars")}>StarWars</button>
        </li>
      </ul>
    </aside>
  );
}
