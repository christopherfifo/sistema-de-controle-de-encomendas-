// app/page.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Bem-vindo ao Sistema!
          </CardTitle>
          <CardDescription>
            Escolha uma opção abaixo para continuar.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <Button asChild size="lg" className="w-full">
            <Link href="/login">Fazer Login</Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="w-full">
            <Link href="/cadastro">Criar Conta</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
