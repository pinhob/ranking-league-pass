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
