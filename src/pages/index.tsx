import localFont from "next/font/local";
import fs from 'fs';
import path from "path";
import { InferGetStaticPropsType } from "next";
import CustomCard from "@/components/CustomCard";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function getStaticProps() {
  const filepath = path.join(process.cwd(), 'src', 'pages', 'api', 'data.json');
  const jsonData = fs.readFileSync(filepath, 'utf8');
  const data = JSON.parse(jsonData);

  data.sort((a, b) => b.rating - a.rating);

  return {
    props: {
      cards: data,
    }
  }
}

export default function Home({ cards }: { cards: InferGetStaticPropsType<typeof getStaticProps> }) {
  return (
    <div
      className={`bg-background ${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] p-4`}
    >
      {
        cards.map((card, index) => (
          <CustomCard data={card} key={index} />
        ))
      }
    </div>
  );
}
