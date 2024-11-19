import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleTrigger } from "./ui/collapsible";
import { useState } from "react";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import { ChevronsUpDown } from "lucide-react"
import franchiseNames from "@/utils/franchiseNames";

interface Data {
    team: string,
    rating: number,
    stamp: string,
    over: boolean,
    resume: string,
    videoTimestamp: string,  
}

export default function CustomCard({ data }: { data: Data }) {
    const [isOpen, setIsOpen] = useState(false);

    const franchise = franchiseNames.find(franchise => franchise.slug === data.team);

    return (
        <Card>
            <CardHeader>
                <CardTitle>{franchise ? franchise.name : data.team}</CardTitle>
                <CardDescription>
                    <p>{data.rating}</p>
                    <p>{data.stamp}</p>
                    <p>{data.over ? "over" : "under"}</p>
                </CardDescription>
                <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                    <CollapsibleTrigger asChild>
                        <button>
                            <ChevronsUpDown className="h-4 w-4" />
                            <span className="sr-only" onClick={() => setIsOpen(!open)}>Toggle</span>
                        </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <CardContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac erat iaculis, aliquet nunc ultricies, tincidunt elit. Curabitur sit amet enim orci. Integer ut velit sed sapien sodales interdum. Suspendisse sit amet elit sit amet felis molestie scelerisque sed vel tellus. Phasellus nec dolor congue, accumsan massa nec, cursus nulla. Etiam eu magna leo. Suspendisse scelerisque eros quis turpis porttitor, eget accumsan nibh lacinia. Quisque ex dolor, scelerisque non ullamcorper in, suscipit ac nisi. Nulla nulla risus, porta nec tempus vel, viverra vel felis. Sed sollicitudin, urna id condimentum dictum, felis turpis blandit nunc, vitae elementum leo augue sed tellus. 
                        </CardContent>
                    </CollapsibleContent>
                </Collapsible>
            </CardHeader>
        </Card>
    )
}
//     {
//         "name": "Denver Nuggets",
//         "slug": "nuggets"
//     },
//     {
//         "name": "Oklahoma City Thunder",
//         "slug": "thunder"
//     },
//     {
//         "name": "Minnesota Timberwolves",
//         "slug": "timberwolves"
//     },
//     {
//         "name": "Utah Jazz",
//         "slug": "jazz"
//     },
//     {
//         "name": "Portland Trail Blazers",
//         "slug": "trail-blazers"
//     },
//     {
//         "name": "Detroit Pistons",
//         "slug": "pistons"
//     },
//     {
//         "name": "Milwaukee Bucks",
//         "slug": "bucks"
//     },
//     {
//         "name": "Cleveland Cavaliers",
//         "slug": "cavaliers"
//     },
//     {
//         "name": "Indiana Pacers",
//         "slug": "pacers"
//     },
//     {
//         "name": "Chicago Bulls",
//         "slug": "bulls"
//     },
//     {
//         "name": "San Antonio Spurs",
//         "slug": "spurs"
//     },
//     {
//         "name": "Dallas Mavericks",
//         "slug": "mavericks"
//     },
//     {
//         "name": "Memphis Grizzlies",
//         "slug": "grizzlies"
//     },
//     {
//         "name": "New Orleans Pelicans",
//         "slug": "pelicans"
//     },
//     {
//         "name": "Houston Rockets",
//         "slug": "rockets"
//     },
//     {
//         "name": "Brooklyn Nets",
//         "slug": "nets"
//     },
//     {
//         "name": "Boston Celtics",
//         "slug": "celtics"
//     },
//     {
//         "name": "New York Knicks",
//         "slug": "knicks"
//     },
//     {
//         "name": "Philadelphia 76ers",
//         "slug": "75ers"
//     },
//     {
//         "name": "Toronto Raptors",
//         "slug": "raptors"
//     },
//     {
//         "name": "Los Angeles Clippers",
//         "slug": "clippers"
//     },
//     {
//         "name": "Phoenix Suns",
//         "slug": "suns"
//     },
//     {
//         "name": "Sacramento Kings",
//         "slug": "kings"
//     },
//     {
//         "name": "Los Angeles Lakers",
//         "slug": "lakers"
//     },
//     {
//         "name": "Golden State Warriors",
//         "slug": "warriors"
//     },
//     {
//         "name": "Washington Wizards",
//         "slug": "wizards"
//     },
//     {
//         "name": "Charlotte Hornets",
//         "slug": "hornets"
//     },
//     {
//         "name": "Atlanta Hawks",
//         "slug": "hawks"
//     },
//     {
//         "name": "Miami Heat",
//         "slug": "heat"
//     },
//     {
//         "name": "Orlando Magic",
//         "slug": "magic"
//     }
// ];