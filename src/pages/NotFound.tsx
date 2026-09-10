import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <Seo title="Página não encontrada | Beckmans Engenharia" description="Esta página não está disponível. Volte ao início do site da Beckmans Engenharia." noindex />
      <div className="max-w-xl text-center">
        <p className="eyebrow">Erro 404</p>
        <h1 className="text-h1 font-bold">Esta página não foi encontrada.</h1>
        <p className="my-6 text-lg text-muted-foreground">O endereço pode ter mudado ou não existir mais.</p>
        <Button variant="accent" size="lg" asChild className="rounded-full px-8">
          <Link to="/"><ArrowLeft className="h-5 w-5" /> Voltar ao início</Link>
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
