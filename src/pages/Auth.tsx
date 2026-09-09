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
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate("/admin/videos", { replace: true });
    });
  }, [navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setMessage(null);
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMessage(error.message);
      else navigate("/admin/videos", { replace: true });
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/admin/videos` },
      });
      setMessage(error ? error.message : "Conta criada. Verifique seu e-mail, se solicitado.");
    }
    setBusy(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 surface-light">
      <Seo title="Acesso restrito | Beckmans Engenharia" description="Área administrativa da Beckmans Engenharia." noindex />
      <form onSubmit={submit} className="w-full max-w-md space-y-5 rounded-2xl border border-border bg-card p-8 shadow-soft">
        <h1 className="text-2xl font-bold text-primary dark:text-white">
          {mode === "signin" ? "Entrar" : "Criar conta"}
        </h1>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} autoComplete={mode === "signin" ? "current-password" : "new-password"} />
        </div>
        {message && <p className="text-sm text-muted-foreground">{message}</p>}
        <Button type="submit" variant="accent" className="w-full h-12 rounded-full" disabled={busy}>
          {busy ? "Aguarde…" : mode === "signin" ? "Entrar" : "Criar conta"}
        </Button>
        <button
          type="button"
          className="w-full text-sm text-muted-foreground underline"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
        >
          {mode === "signin" ? "Não tenho conta" : "Já tenho conta"}
        </button>
      </form>
    </main>
  );
};

export default Auth;
