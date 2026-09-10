// Impede que uma chave secreta / service_role seja exposta no navegador.
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

function looksSecret(value: string) {
  if (value.startsWith("sb_secret_")) return true;
  const parts = value.split(".");
  if (parts.length === 3) {
    try {
      const payload = JSON.parse(atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")));
      if (payload?.role === "service_role") return true;
    } catch {
      return false;
    }
  }
  return false;
}

if (key && looksSecret(key)) {
  throw new Error(
    "Configuração inválida: uma chave secreta foi definida no frontend. Use apenas a chave pública (anon)."
  );
}

export {};
