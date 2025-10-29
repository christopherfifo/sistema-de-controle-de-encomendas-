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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

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

        <CardContent className="space-y-6">
          <fieldset className="space-y-4 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Dados do Responsável (Síndico)
            </legend>
            <div className="space-y-2">
              <Label htmlFor="nome-completo">Nome Completo</Label>
              <Input id="nome-completo" placeholder="Seu nome" required />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cpf">CPF</Label>
                <Input id="cpf" placeholder="000.000.000-00" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="senha">Senha</Label>
              <Input id="senha" type="password" required />
            </div>
          </fieldset>

          <fieldset className="space-y-4 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Dados do Condomínio
            </legend>
            <div className="space-y-2">
              <Label htmlFor="nome-condominio">Nome do Condomínio</Label>
              <Input
                id="nome-condominio"
                placeholder="Ex: Residencial Flores"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cnpj">CNPJ do Condomínio</Label>
              <Input id="cnpj" placeholder="00.000.000/0001-00" required />
            </div>
          </fieldset>

          <Button type="submit" className="w-full" size="lg">
            Criar Conta e Cadastrar Condomínio
          </Button>
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
