import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleTrigger } from "./ui/collapsible";
import { useState } from "react";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react"
import franchiseNames from "@/utils/franchiseNames";
import Image from "next/image";

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
        <Card className="relative mb-12 bg-card">
            <CardHeader className="flex flex-row p-2 items-center">
                <Image src={`/logos/${data.team}.svg`} alt={data.team} width={100} height={100} className="mr-2" />
                
                <div className="flex flex-col gap-1">
                    <CardTitle className="text-2xl font-bold">{franchise ? franchise.name : data.team}</CardTitle>
                    <p className={`flex items-center font-semibold gap-1 text-sm uppercase ${data.over ? "text-green-700" : "text-red-700"}`}>
                        {data.over
                            ? (<><div className="w-0 h-0 border-l-[8px] border-r-[8px] border-l-transparent border-r-transparent border-b-[8px] border-b-green-700"></div> over</>)
                            : (<><div className="w-0 h-0 border-l-[8px] border-r-[8px] border-l-transparent border-r-transparent border-t-[8px] border-t-red-700"></div> under</>)
                        }
                    </p>
                    <span className="absolute -top-2 -right-2">{data.stamp}</span>
                </div>
                <CardDescription className="flex flex-col ml-auto text-center text-card-foreground">
                    <p className="text-[2.5rem] leading-normal font-semibold">{data.rating}</p>
                    <p className="uppercase font-extralight text-sm">nota</p>
                </CardDescription>
            </CardHeader>
            <Collapsible open={isOpen} onOpenChange={setIsOpen} className="relative">
                <CollapsibleContent>
                    <CardContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac erat iaculis, aliquet nunc ultricies, tincidunt elit. Curabitur sit amet enim orci. Integer ut velit sed sapien sodales interdum. Suspendisse sit amet elit sit amet felis molestie scelerisque sed vel tellus. Phasellus nec dolor congue, accumsan massa nec, cursus nulla. Etiam eu magna leo. Suspendisse scelerisque eros quis turpis porttitor, eget accumsan nibh lacinia. Quisque ex dolor, scelerisque non ullamcorper in, suscipit ac nisi. Nulla nulla risus, porta nec tempus vel, viverra vel felis. Sed sollicitudin, urna id condimentum dictum, felis turpis blandit nunc, vitae elementum leo augue sed tellus. 
                    </CardContent>
                </CollapsibleContent>
                <CollapsibleTrigger asChild className="bg-card text-card-foreground w-fit pl-2 pr-2 pb-1 rounded-b-sm absolute left-1/2 -translate-x-1/2">
                    <button className="flex items-center">
                        <ChevronsUpDown className="h-4 w-4 font-extralight" />
                        <span className="text-sm font-extralight" onClick={() => setIsOpen(!open)}>Motivos</span>
                    </button>
                </CollapsibleTrigger>
            </Collapsible>
        </Card>
    )
}
