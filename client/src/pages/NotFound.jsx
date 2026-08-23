import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div>
        <p className="mb-3 text-xs font-bold tracking-[0.16em] text-primary">404</p>
        <h1 className="font-serif text-4xl">Page not found.</h1>
        <p className="mt-4 text-sm text-muted-foreground">The page you requested is not part of this portfolio.</p>
        <button className="mt-7 border-b border-foreground pb-1 text-sm font-bold" onClick={() => setLocation("/")}>Return home</button>
      </div>
    </main>
  );
}
