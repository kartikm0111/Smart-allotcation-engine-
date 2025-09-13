import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-green-900/10 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-green-900/30"></div>
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-repeat [mask-image:linear-gradient(to_bottom,white_0%,white_75%,transparent_100%)]"></div>
      
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <Card className="w-full max-w-lg animate-fade-in-up backdrop-blur-xl bg-card/60 shadow-2xl">
          <CardHeader>
            <div className="flex flex-col items-center gap-4 mb-4">
              <Logo className="h-16 w-16 text-primary" />
              <p className="text-sm font-medium text-muted-foreground">PM Internship Scheme</p>
            </div>
            <CardTitle className="text-3xl">
              Smart AI Allocation for a Fair Future
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/app">
                Continue <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
