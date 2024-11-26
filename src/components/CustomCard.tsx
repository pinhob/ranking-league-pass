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
        <Card className="relative">
            <CardHeader className="flex flex-row">
                <Image src={`/logos/${data.team}.svg`} alt={data.team} width={100} height={100} />
                
                <div className="flex flex-col gap-1 justify-end">
                    <CardTitle className="text-2xl">{franchise ? franchise.name : data.team}</CardTitle>
                    <p className={`flex flex-row gap-1 uppercase ${data.over ? "text-green-700" : "text-red-700"}`}>{data.over ? (<><ArrowUp /> over</>) : <><ArrowDown /> under</>}</p>
                    <span className="absolute top-0 right-1">{data.stamp}</span>
                </div>
                <CardDescription className="flex flex-col ml-auto text-center">
                    <p className="text-[2.5rem] leading-normal">{data.rating}</p>
                    <p className="uppercase">nota</p>
                </CardDescription>
            </CardHeader>
            <Collapsible open={isOpen} onOpenChange={setIsOpen} className="">
                <CollapsibleTrigger asChild className="">
                    <button>
                        <ChevronsUpDown className="h-4 w-4" />
                        <span className="" onClick={() => setIsOpen(!open)}>Motivos</span>
                    </button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <CardContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac erat iaculis, aliquet nunc ultricies, tincidunt elit. Curabitur sit amet enim orci. Integer ut velit sed sapien sodales interdum. Suspendisse sit amet elit sit amet felis molestie scelerisque sed vel tellus. Phasellus nec dolor congue, accumsan massa nec, cursus nulla. Etiam eu magna leo. Suspendisse scelerisque eros quis turpis porttitor, eget accumsan nibh lacinia. Quisque ex dolor, scelerisque non ullamcorper in, suscipit ac nisi. Nulla nulla risus, porta nec tempus vel, viverra vel felis. Sed sollicitudin, urna id condimentum dictum, felis turpis blandit nunc, vitae elementum leo augue sed tellus. 
                    </CardContent>
                </CollapsibleContent>
            </Collapsible>
        </Card>
    )
}
