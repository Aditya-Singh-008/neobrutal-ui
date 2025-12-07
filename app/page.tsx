import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 bg-yellow-50">
      <div className="max-w-5xl mx-auto space-y-12">

        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black border-b-4 border-black pb-4 inline-block">
            NeoBrutal UI
          </h1>
          <p className="text-xl md:text-2xl font-medium text-neutral-700">
            A headless-first neobrutalist component library.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>Various button styles with hard shadows.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="neutral">Neutral</Button>
              <Button variant="primary">Primary</Button>
              <Button variant="reverse">Reverse</Button>
            </CardContent>
          </Card>
          <Card className="bg-pink-200">
            <CardHeader>
              <CardTitle>Cards</CardTitle>
              <CardDescription>Cards can have different background colors.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is a card with a pink background. It maintains the same hard borders and shadows.</p>
            </CardContent>
            <CardFooter>
              <Button variant="reverse" size="sm">Action</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}