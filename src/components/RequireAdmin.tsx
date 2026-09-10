import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

type Status = "checking" | "allowed" | "denied";

export function RequireAdmin({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    let active = true;

    const check = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!active) return;
      if (!sessionData.session) {
        navigate("/auth", { replace: true });
        return;
      }
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", sessionData.session.user.id)
        .eq("role", "admin")
        .maybeSingle();
      if (!active) return;
      setStatus(!error && data ? "allowed" : "denied");
    };

    void check();
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/auth", { replace: true });
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, [navigate]);

  if (status === "checking") {
    return (
      <main className="grid min-h-screen place-items-center text-muted-foreground">
        Verificando acesso…
      </main>
    );
  }

  if (status === "denied") {
    return (
      <main className="grid min-h-screen place-items-center px-4 text-center">
        <div className="max-w-md space-y-4">
          <h1 className="text-2xl font-bold text-primary dark:text-white">Acesso restrito</h1>
          <p className="text-muted-foreground">
            Esta área é exclusiva para administradores autorizados.
          </p>
          <Button variant="outline" onClick={() => supabase.auth.signOut().then(() => navigate("/auth", { replace: true }))}>
            Sair
          </Button>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}
