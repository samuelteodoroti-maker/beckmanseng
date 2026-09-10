import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) console.error(error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md space-y-5 text-center">
          <h1 className="text-2xl font-bold text-primary dark:text-white">
            Algo não carregou como esperado
          </h1>
          <p className="text-muted-foreground">
            Tente novamente. Se o problema continuar, fale com a nossa equipe pelo WhatsApp.
          </p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
            className="rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground"
          >
            Tentar novamente
          </button>
        </div>
      </main>
    );
  }
}
