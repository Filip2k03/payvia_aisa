"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare, Send, X } from "lucide-react";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

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
        <CardContent className="p-4 h-64 overflow-y-auto">
          <div className="flex flex-col gap-3">
            <div className="bg-muted p-3 rounded-lg max-w-xs self-start">
              <p className="text-sm">Hello! How can we help you today?</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-2 border-t">
          <form className="flex w-full items-center gap-2">
            <Input placeholder="Type a message..." className="flex-1" />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </>
  );
}
