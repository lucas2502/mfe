// pages/index.tsx
import axios from "axios";
import Layout from "../components/Home";

type Character = {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
};

type Props = {
  characters: Character[];
};

export default function StarWars({ characters }: Props) {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Star Wars Characters</h1>
        <ul className="space-y-2">
          {characters.map((char, index) => (
            <li key={index} className="border p-3 rounded shadow">
              <strong>{char.name}</strong> — Height: {char.height} cm — Mass:{" "}
              {char.mass} kg — Born: {char.birth_year}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get("https://swapi.py4e.com/api/people");
    return {
      props: {
        characters: res.data.results,
      },
    };
  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    return {
      props: {
        characters: [],
      },
    };
  }
}
