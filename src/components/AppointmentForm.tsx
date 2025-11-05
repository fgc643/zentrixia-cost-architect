import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Clock, Send } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export const AppointmentForm = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !name || !email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    const formattedDate = format(date, "dd/MM/yyyy", { locale: ptBR });
    const whatsappMessage = `*AGENDAMENTO - ZENTRIXIA*\n\n` +
      `👤 *Nome:* ${name}\n` +
      `📧 *Email:* ${email}\n` +
      `📅 *Data:* ${formattedDate}\n` +
      `🕐 *Horário:* ${time}\n` +
      `${message ? `\n💬 *Mensagem:*\n${message}` : ''}`;

    const whatsappUrl = `https://wa.me/5511932071021?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para confirmar o agendamento via WhatsApp."
    });
  };

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gold">Nome Completo *</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            className="bg-card/50 border-primary/30 focus:border-primary"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gold">Email *</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className="bg-card/50 border-primary/30 focus:border-primary"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="text-gold">Data Preferencial *</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal bg-card/50 border-primary/30 hover:bg-card hover:border-primary",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-gold" />
                {date ? format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }) : "Selecione uma data"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-background border-primary" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date()}
                initialFocus
                className="pointer-events-auto bg-card border-0 rounded-md"
                locale={ptBR}
                modifiersClassNames={{
                  selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="time" className="text-gold">Horário Preferencial *</Label>
          <div className="relative">
            <Clock className="absolute left-3 top-3 h-4 w-4 text-gold" />
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-card/50 border border-primary/30 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
              required
            >
              <option value="">Selecione um horário</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-gold">Mensagem (Opcional)</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Conte-nos brevemente sobre o que gostaria de conversar..."
          className="bg-card/50 border-primary/30 focus:border-primary min-h-[100px]"
        />
      </div>

      <Button 
        type="submit" 
        variant="premium" 
        size="lg"
        className="w-full gap-2"
      >
        <Send className="w-5 h-5" />
        Confirmar Agendamento via WhatsApp
      </Button>

      <p className="text-sm text-silver text-center">
        Ao confirmar, você será redirecionado ao WhatsApp com os dados preenchidos.
        <br />
        Receberá uma confirmação e lembrete automaticamente.
      </p>
    </form>
  );
};
