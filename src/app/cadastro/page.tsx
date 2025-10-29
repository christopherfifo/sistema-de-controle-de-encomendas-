// app/cadastro/page.tsx
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
import { CadastroSaaSForm } from "./cadastroSaaSForm"; // <-- Importa o Client Component

// Esta página também continua sendo um Server Component
export default function CadastroPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 p-4 py-8">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Crie sua Conta</CardTitle>
          <CardDescription>
            Cadastre seu condomínio para começar a usar o sistema.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {/* Renderiza o formulário de cadastro interativo */}
          <CadastroSaaSForm />
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/login">Já tem uma conta? Faça Login</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}