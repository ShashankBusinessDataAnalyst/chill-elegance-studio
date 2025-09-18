import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { X, Headphones, Send } from 'lucide-react';

const ChatAssistant = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello user! How can I help you today?", sender: "agent" }
  ]);
  const [inputText, setInputText] = useState("");


  const hasContactNumber = (text: string) => {
    // Check for phone number patterns (various formats)
    const phoneRegex = /(\+?\d{1,4}[\s\-\.]?)?(\(?\d{3}\)?[\s\-\.]?)?\d{3}[\s\-\.]?\d{4}/;
    return phoneRegex.test(text);
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputText,
        sender: "user"
      };
      setMessages([...messages, newMessage]);
      
      // Simulate agent response
      setTimeout(() => {
        let responseText;
        if (hasContactNumber(inputText)) {
          responseText = "Thank you! We've received your contact number. Our sales team will reach out to you shortly to assist with your refrigeration needs.";
        } else {
          responseText = "Thank you for your message! I'm here to help with any questions about our commercial refrigeration solutions.\nPlease share your contact number, and our sales team will get in touch with you shortly.";
        }
        
        const response = {
          id: messages.length + 2,
          text: responseText,
          sender: "agent"
        };
        setMessages(prev => [...prev, response]);
      }, 1000);
      
      setInputText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg animate-bounce"
        >
          <Headphones className="w-6 h-6" />
        </Button>
      ) : (
        <Card className="w-80 h-96 shadow-lg border-0 bg-background">
          <CardHeader className="bg-primary text-primary-foreground p-3 rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">SmartCool Agent</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 p-0 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-80">
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button size="sm" onClick={handleSendMessage} disabled={!inputText.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ChatAssistant;