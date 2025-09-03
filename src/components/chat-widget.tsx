"use client";

import { Button } from "@/components/ui/button";
import { Loader2, MessageSquare, Send, X } from "lucide-react";
import { useState, useRef, useEffect, useTransition } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { chat } from "@/ai/flows/chat";

type Message = {
  role: "user" | "model";
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", content: "Hello! How can we help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isPending, startTransition] = useTransition();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    startTransition(async () => {
      const result = await chat({ history: newMessages });
      setMessages((prev) => [...prev, { role: "model", content: result.response }]);
    });
  };

  return (
    <>
      <div className={cn("fixed bottom-4 right-4 z-50 transition-transform duration-300 ease-in-out", isOpen ? "scale-0" : "scale-100")}>
        <Button size="icon" className="w-16 h-16 rounded-full shadow-lg" onClick={() => setIsOpen(true)}>
          <MessageSquare className="h-8 w-8" />
        </Button>
      </div>

      <Card className={cn("fixed bottom-4 right-4 z-50 w-80 shadow-lg transition-transform duration-300 ease-in-out", isOpen ? "scale-100" : "scale-0")}>
        <CardHeader className="flex flex-row items-center justify-between bg-primary text-primary-foreground p-4">
          <CardTitle className="text-lg">Chat Support</CardTitle>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:bg-primary/80" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent ref={chatContainerRef} className="p-4 h-64 overflow-y-auto">
          <div className="flex flex-col gap-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "p-3 rounded-lg max-w-xs text-sm",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground self-end"
                    : "bg-muted text-muted-foreground self-start"
                )}
              >
                <p>{message.content}</p>
              </div>
            ))}
            {isPending && (
              <div className="flex justify-start">
                 <div className="bg-muted p-3 rounded-lg max-w-xs self-start">
                    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                 </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-2 border-t">
          <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
            <Input
              placeholder="Type a message..."
              className="flex-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isPending}
            />
            <Button type="submit" size="icon" disabled={isPending}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </>
  );
}
