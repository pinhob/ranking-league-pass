import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import localFont from "next/font/local";
import fs from 'fs';
import path from "path";
import { InferGetStaticPropsType } from "next";

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

  return {
    props: {
      cards: data,
    }
  }
}

export default function Home({ cards }: { cards: InferGetStaticPropsType<typeof getStaticProps> }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      {
        cards.map((card, index) => (
          <Card key={index}>
          <CardHeader>
            <CardTitle>{card.team}</CardTitle>
            <CardDescription>
              <p>{card.rating}</p>
              <p>{card.stamp}</p>
              <p>{card.over ? "over" : "under"}</p>
            </CardDescription>
          </CardHeader>
        </Card>
        ))
      }
    </div>
  );
}
