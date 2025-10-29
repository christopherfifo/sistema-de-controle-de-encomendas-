// app/login/page.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoginForm } from "./loginForm"; // <-- Importa o Client Component

// Esta página continua sendo um Server Component (ótimo para SEO)
export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Acesse sua conta para gerenciar as encomendas.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {/* Renderiza o formulário interativo aqui */}
          <LoginForm />
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/cadastro">Não tem uma conta? Cadastre-se</Link>
          </Button>
          <Button variant="link" size="sm" asChild>
            <Link href="/">Voltar para a Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}