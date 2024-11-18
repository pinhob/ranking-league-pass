import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Data {
    team: string,
    rating: number,
    stamp: string,
    over: boolean,
    resume: string,
    videoTimestamp: string,  
}

export default function CustomCard({ data }: { data: Data }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{data.team}</CardTitle>
                <CardDescription>
                    <p>{data.rating}</p>
                    <p>{data.stamp}</p>
                    <p>{data.over ? "over" : "under"}</p>
                </CardDescription>
            </CardHeader>
        </Card>
    )
}