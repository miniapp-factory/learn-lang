import { title, description } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { generateMetadata } from "@/lib/farcaster-embed";

export { generateMetadata };

export default function Home() {
  // NEVER write anything here, only use this page to import components
  return (
    <main className="flex flex-col gap-3 place-items-center place-content-center px-4 grow">
      <span className="text-2xl">{title}</span>
      <span className="text-muted-foreground">{description}</span>
      <div className="flex flex-wrap gap-2 mt-4">
        <Button variant="outline" size="lg" className="flex items-center gap-2">
          🇺🇸 English
        </Button>
        <Button variant="outline" size="lg" className="flex items-center gap-2">
          🇪🇸 Español
        </Button>
        <Button variant="outline" size="lg" className="flex items-center gap-2">
          🇫🇷 Français
        </Button>
        <Button variant="outline" size="lg" className="flex items-center gap-2">
          🇩🇪 Deutsch
        </Button>
        <Button variant="outline" size="lg" className="flex items-center gap-2">
          🇯🇵 日本語
        </Button>
      </div>
    </main>
  );
}
