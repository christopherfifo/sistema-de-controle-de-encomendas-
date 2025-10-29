// app/cadastro/CadastroSaaSForm.tsx
"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// 1. Schema do Zod para o cadastro do cliente SaaS
const formSchema = z.object({
  // Dados do Síndico
  nomeCompleto: z.string().min(3, { message: "Nome é obrigatório." }),
  email: z.string().email({ message: "Email inválido." }),
  cpf: z.string().min(11, { message: "CPF inválido." }), // Simplificado
  senha: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres." }),
  
  // Dados do Condomínio
  nomeCondominio: z.string().min(3, { message: "Nome do condomínio é obrigatório." }),
  cnpj: z.string().min(14, { message: "CNPJ inválido." }), // Simplificado
});

// 2. Componente do Formulário de Cadastro
export function CadastroSaaSForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeCompleto: "",
      email: "",
      cpf: "",
      senha: "",
      nomeCondominio: "",
      cnpj: "",
    },
  });

  // 3. Função de envio
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Lógica para criar o Usuário (Sindico) e o Condomínio
    console.log(values);
    // Ex: await api.post('/register-saas', values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Seção 1: Dados do Síndico (Usuário) */}
        <fieldset className="space-y-4 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">
            Dados do Responsável (Síndico)
          </legend>
          <FormField
            control={form.control}
            name="nomeCompleto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="seu@email.com" {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input placeholder="000.000.000-00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="senha"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input placeholder="••••••••" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>

        {/* Seção 2: Dados do Condomínio (Cliente SaaS) */}
        <fieldset className="space-y-4 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">
            Dados do Condomínio
          </legend>
          <FormField
            control={form.control}
            name="nomeCondominio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do Condomínio</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Residencial Flores" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cnpj"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CNPJ do Condomínio</FormLabel>
                <FormControl>
                  <Input placeholder="00.000.000/0001-00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>

        <Button type="submit" className="w-full" size="lg">
          Criar Conta e Cadastrar Condomínio
        </Button>
      </form>
    </Form>
  );
}