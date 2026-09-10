import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Seo } from "@/components/Seo";

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    void supabase.auth.getSession().then(({ data }) => {
      if (active && data.session) navigate("/admin/videos", { replace: true });
    });
    return () => {
      active = false;
    };
  }, [navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setMessage(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMessage("Não foi possível entrar. Verifique os dados informados.");
    else navigate("/admin/videos", { replace: true });
    setBusy(false);
  };

  return (
    <main id="main-content" className="surface-light flex min-h-screen items-center justify-center px-4 py-16">
      <Seo title="Acesso restrito | Beckmans Engenharia" description="Área administrativa da Beckmans Engenharia." noindex />
      <form onSubmit={submit} className="w-full max-w-md space-y-5 rounded-2xl border border-border bg-card p-8 shadow-soft">
        <h1 className="text-2xl font-bold text-primary dark:text-white">Entrar</h1>
        <p className="text-sm text-muted-foreground">
          Acesso exclusivo para administradores autorizados.
        </p>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} autoComplete="current-password" />
        </div>
        {message && <p role="alert" className="text-sm text-destructive">{message}</p>}
        <Button type="submit" variant="accent" className="h-12 w-full rounded-full" disabled={busy}>
          {busy ? "Aguarde…" : "Entrar"}
        </Button>
      </form>
    </main>
  );
};

export default Auth;
