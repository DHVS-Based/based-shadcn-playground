import { Card, CardHeader, CardTitle } from "../components/ui/card";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between bg-slate-50 dark:bg-slate-950">
      <Card className='mt-24'>
        <CardHeader>
          <CardTitle>
            Welcome to the Based Playground
          </CardTitle>
        </CardHeader>
      </Card>
    </main>
  );
}
