import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send as Telegram, Mail, Phone, Box, Printer, Sparkles, Loader2, Send, Moon, Sun } from "lucide-react";

export default function HomePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { toast } = useToast();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Заявка отправлена!",
      description: "Спасибо за обращение. Свяжусь с вами в течение 24 часов и рассчитаю стоимость.",
    });

    setIsSubmitting(false);
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Box className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">3D Студия</span>
          </div>
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              Принимаю заказы
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              3D-моделирование и печать на заказ
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Создаю 3D-модели любой сложности и печатаю готовые изделия из пластика и смолы.
              От прототипа и сувенира до функциональной детали — воплощаю вашу идею в реальную вещь.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="#contact">Рассчитать заказ</a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://t.me" className="text-muted-foreground hover:text-foreground transition-colors">
              <Telegram className="w-6 h-6" />
            </a>
            <a href="tel:+70000000000" className="text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-6 h-6" />
            </a>
            <a href="mailto:info@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Что я делаю</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный цикл: от цифровой модели до готового изделия в руках
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Box className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3D-моделирование</h3>
                <p className="text-muted-foreground mb-4">
                  Разрабатываю модели под печать по фото, чертежу или эскизу.
                  Прототипы, сувениры, детали и сложная геометрия любой сложности.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">По фото</Badge>
                  <Badge variant="secondary">По чертежу</Badge>
                  <Badge variant="secondary">Прототипы</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Printer className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3D-печать на заказ</h3>
                <p className="text-muted-foreground mb-4">
                  Печатаю из пластика (FDM) и фотополимерной смолы (SLA).
                  Высокая детализация, прочные материалы и точная геометрия.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">PLA / PETG</Badge>
                  <Badge variant="secondary">Смола SLA</Badge>
                  <Badge variant="secondary">FDM</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Постобработка и покраска</h3>
                <p className="text-muted-foreground mb-4">
                  Шлифовка, грунтовка и покраска готовых изделий.
                  Доведу модель до идеального вида под ваши задачи и интерьер.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Шлифовка</Badge>
                  <Badge variant="secondary">Покраска</Badge>
                  <Badge variant="secondary">Сборка</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Оставьте заявку</h2>
            <p className="text-lg text-muted-foreground">
              Опишите задачу — рассчитаю стоимость и сроки печати бесплатно.
            </p>
          </div>

          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Заказать 3D-печать</CardTitle>
              <CardDescription>
                Расскажите, что нужно изготовить. Свяжусь с вами в течение 24 часов.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" name="name" placeholder="Ваше имя" required disabled={isSubmitting} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Что нужно изготовить, размеры, материал, количество, сроки..."
                    className="min-h-[120px]"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Отправляю...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Отправить заявку
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>&copy; 2024 3D Студия. 3D-моделирование и печать на заказ.</p>
        </div>
      </footer>
    </div>
  );
}