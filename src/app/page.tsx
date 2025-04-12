"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";

export default function Home() {
  const [principal, setPrincipal] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(null);
  const [time, setTime] = useState<number | null>(null);
  const [interest, setInterest] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);

  const calculateInterest = () => {
    if (principal !== null && rate !== null && time !== null) {
      const calculatedInterest = (principal * rate * time) / 100;
      const calculatedTotal = principal + calculatedInterest;

      setInterest(calculatedInterest);
      setTotal(calculatedTotal);
    }
  };

  const clearFields = () => {
    setPrincipal(null);
    setRate(null);
    setTime(null);
    setInterest(null);
    setTotal(null);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <Card className="w-full max-w-md p-4 rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Calculadora de Juros Simples</CardTitle>
          <CardDescription className="text-muted-foreground">
            Calcule juros simples de forma rápida e fácil.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="principal" className="text-foreground">
              Valor Principal
            </Label>
            <Input
              type="number"
              id="principal"
              placeholder="R$ 1000"
              value={principal !== null ? principal.toString() : ""}
              onChange={(e) => setPrincipal(Number(e.target.value))}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="rate" className="text-foreground">
              Taxa de Juros (%)
            </Label>
            <Input
              type="number"
              id="rate"
              placeholder="5"
              value={rate !== null ? rate.toString() : ""}
              onChange={(e) => setRate(Number(e.target.value))}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="time" className="text-foreground">
              Tempo (meses)
            </Label>
            <Input
              type="number"
              id="time"
              placeholder="12"
              value={time !== null ? time.toString() : ""}
              onChange={(e) => setTime(Number(e.target.value))}
            />
          </div>

          <div className="flex justify-between">
            <Button onClick={calculateInterest} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Calcular
            </Button>
            <Button variant="outline" onClick={clearFields}>
              Limpar
            </Button>
          </div>

          {interest !== null && total !== null && (
            <div className="mt-4">
              <p className="text-lg text-foreground">
                Juros: <span className="font-bold">R$ {interest.toFixed(2)}</span>
              </p>
              <p className="text-lg text-foreground">
                Total: <span className="font-bold">R$ {total.toFixed(2)}</span>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
