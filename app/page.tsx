import {PricePoint} from "@/components/Chart";

export default function Home() {

    const sampleData: PricePoint[] = [
        { time: "2024-06-01", price: 30000 },
        { time: "2024-06-02", price: 31000 },
        { time: "2024-06-03", price: 32000 },
        { time: "2024-06-04", price: 33000 },
        { time: "2024-06-05", price: 32000 },
        { time: "2024-06-06", price: 34000 },
    ];


    return (
      <div>
          <h1 className="text-4xl font-bold underline text-center mt-10">
              Bitcoin Tracker
          </h1>
      </div>
    );
}
