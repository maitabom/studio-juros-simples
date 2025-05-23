"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sun, Moon, Computer } from 'lucide-react';
import { useTheme } from 'next-themes'

export default function Home() {
  const [principalSimple, setPrincipalSimple] = useState<number | null>(null);
  const [rateSimple, setRateSimple] = useState<number | null>(null);
  const [timeSimple, setTimeSimple] = useState<number | null>(null);
  const [interestSimple, setInterestSimple] = useState<number | null>(null);
  const [totalSimple, setTotalSimple] = useState<number | null>(null);

  const [principalCompound, setPrincipalCompound] = useState<number | null>(null);
  const [rateCompound, setRateCompound] = useState<number | null>(null);
  const [timeCompound, setTimeCompound] = useState<number | null>(null);
  const [compoundedPerYear, setCompoundedPerYear] = useState<number>(1); // Default: Annually
  const [totalCompound, setTotalCompound] = useState<number | null>(null);

  return (
    <InterestCalculator/>
  );
}

function InterestCalculator() {
  const [principalSimple, setPrincipalSimple] = useState<number | null>(null);
  const [rateSimple, setRateSimple] = useState<number | null>(null);
  const [timeSimple, setTimeSimple] = useState<number | null>(null);
  const [interestSimple, setInterestSimple] = useState<number | null>(null);
  const [totalSimple, setTotalSimple] = useState<number | null>(null);

  const [principalCompound, setPrincipalCompound] = useState<number | null>(null);
  const [rateCompound, setRateCompound] = useState<number | null>(null);
  const [timeCompound, setTimeCompound] = useState<number | null>(null);
  const [compoundedPerYear, setCompoundedPerYear] = useState<number>(1); // Default: Annually
  const [totalCompound, setTotalCompound] = useState<number | null>(null);

  const { setTheme } = useTheme();

  const calculateSimpleInterest = () => {
    if (principalSimple !== null && rateSimple !== null && timeSimple !== null) {
      const calculatedInterest = (principalSimple * rateSimple * timeSimple) / 100;
      const calculatedTotal = principalSimple + calculatedInterest;

      setInterestSimple(calculatedInterest);
      setTotalSimple(calculatedTotal);
    }
  };

  const calculateCompoundInterest = () => {
    if (principalCompound !== null && rateCompound !== null && timeCompound !== null) {
      const calculatedTotal =
        principalCompound * Math.pow(1 + (rateCompound / 100) / compoundedPerYear, (compoundedPerYear * timeCompound) / 12);

      setTotalCompound(calculatedTotal);
    }
  };

  const clearFields = () => {
    setPrincipalSimple(null);
    setRateSimple(null);
    setTimeSimple(null);
    setInterestSimple(null);
    setTotalSimple(null);

    setPrincipalCompound(null);
    setRateCompound(null);
    setTimeCompound(null);
    setTotalCompound(null);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <Card className="w-full max-w-md p-4 rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Calculadora de Juros</CardTitle>
          <CardDescription className="text-muted-foreground">
            Calcule juros simples e compostos de forma rápida e fácil.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Tabs defaultValue="simple" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="simple">Simples</TabsTrigger>
              <TabsTrigger value="compound">Compostos</TabsTrigger>
            </TabsList>
            <TabsContent value="simple">
              <div className="grid gap-2">
                <Label htmlFor="principalSimple" className="text-foreground mt-4">
                  Valor Principal
                </Label>
                <Input
                  type="number"
                  id="principalSimple"
                  placeholder="R$ 1000"
                  value={principalSimple !== null ? principalSimple.toString() : ""}
                  onChange={(e) => setPrincipalSimple(Number(e.target.value))}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="rateSimple" className="text-foreground mt-4">
                  Taxa de Juros (%)
                </Label>
                <Input
                  type="number"
                  id="rateSimple"
                  placeholder="5"
                  value={rateSimple !== null ? rateSimple.toString() : ""}
                  onChange={(e) => setRateSimple(Number(e.target.value))}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="timeSimple" className="text-foreground mt-4">
                  Tempo (meses)
                </Label>
                <Input
                  type="number"
                  id="timeSimple"
                  placeholder="12"
                  value={timeSimple !== null ? timeSimple.toString() : ""}
                  onChange={(e) => setTimeSimple(Number(e.target.value))}
                />
              </div>

              <Button onClick={calculateSimpleInterest} className="bg-accent mt-4 text-accent-foreground hover:bg-accent/90 w-full">
                Calcular
              </Button>

              {interestSimple !== null && totalSimple !== null && (
                <div className="mt-4">
                  <p className="text-lg text-foreground">
                    Juros: <span className="font-bold">R$ {interestSimple.toFixed(2)}</span>
                  </p>
                  <p className="text-lg text-foreground">
                    Total: <span className="font-bold">R$ {totalSimple.toFixed(2)}</span>
                  </p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="compound">
              <div className="grid gap-2">
                <Label htmlFor="principalCompound" className="text-foreground mt-4">
                  Valor Principal
                </Label>
                <Input
                  type="number"
                  id="principalCompound"
                  placeholder="R$ 1000"
                  value={principalCompound !== null ? principalCompound.toString() : ""}
                  onChange={(e) => setPrincipalCompound(Number(e.target.value))}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="rateCompound" className="text-foreground mt-4">
                  Taxa de Juros (%)
                </Label>
                <Input
                  type="number"
                  id="rateCompound"
                  placeholder="5"
                  value={rateCompound !== null ? rateCompound.toString() : ""}
                  onChange={(e) => setRateCompound(Number(e.target.value))}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="timeCompound" className="text-foreground mt-4">
                  Tempo (meses)
                </Label>
                <Input
                  type="number"
                  id="timeCompound"
                  placeholder="5"
                  value={timeCompound !== null ? timeCompound.toString() : ""}
                  onChange={(e) => setTimeCompound(Number(e.target.value))}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="compoundedPerYear" className="text-foreground mt-4">
                  Compounded Per Year
                </Label>
                <Input
                  type="number"
                  id="compoundedPerYear"
                  placeholder="12"
                  value={compoundedPerYear ? compoundedPerYear.toString() : ""}
                  onChange={(e) => setCompoundedPerYear(Number(e.target.value))}
                />
              </div>

              <Button onClick={calculateCompoundInterest} className="bg-accent mt-4 text-accent-foreground hover:bg-accent/90 w-full">
                Calcular
              </Button>

              {totalCompound !== null && (
                <div className="mt-4">
                  <p className="text-lg text-foreground">
                    Total: <span className="font-bold">R$ {totalCompound.toFixed(2)}</span>
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <Button variant="outline" onClick={clearFields} className="w-full mt-4">
            Limpar
          </Button>
          <div className="flex justify-center mt-4 space-x-2">
            <Button size="icon" onClick={() => setTheme('system')}>
              <Computer className="h-5 w-5" />
              <span className="sr-only">System</span>
            </Button>
            <Button size="icon" onClick={() => setTheme('light')}>
              <Sun className="h-5 w-5" />
              <span className="sr-only">Light</span>
            </Button>
            <Button size="icon" onClick={() => setTheme('dark')}>
              <Moon className="h-5 w-5" />
              <span className="sr-only">Dark</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
