# Roadmap — Beckmans Engenharia

## Concluído
- Fotos e vídeos reais em todas as páginas (carrossel, galeria, modal).
- Página `/contato` com dados de contato e formulário validado que abre o WhatsApp.
- Menu com links reais (Início, Serviços, Vistorias, Portfólio, Vídeos, Sobre, Contato).
- Rolagem para o topo ao trocar de página e botão "Voltar ao topo" funcional.
- `.env` fora do controle de versão + `.env.example`; bloqueio de chave secreta no frontend.
- React Router atualizado para 7.18.3 (vulnerabilidades moderadas corrigidas).
- Cadastro público removido da tela de acesso e desativado no backend.
- Proteção reutilizável de administrador em `/admin/videos` + RLS conferida.
- Uploads com validação de tipo/tamanho e nomes de arquivo seguros.
- `innerHTML` removido de Partners; JSON-LD gerado com `JSON.stringify`.
- Cabeçalhos de segurança ampliados (CSP, HSTS, frame-ancestors).
- Build `es2020`, limite de chunk 600 KB, ErrorBoundary global, lockfile único (npm).
- `/contato` no sitemap; `/auth` e `/admin/videos` com noindex.

## Pendente (depende de ação externa)
- Rotacionar credenciais caso já tenham sido expostas no histórico do Git.
- Limpar `.env` e os MP4 grandes do histórico do Git (reescrita de histórico).
- Migrar os seis vídeos para o Storage/CDN e reduzir o peso das imagens (WebP/AVIF).
