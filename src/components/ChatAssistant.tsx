import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { X, Headphones, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const ChatAssistant = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello user! How can I help you today?", sender: "agent" }
  ]);
  const [inputText, setInputText] = useState("");


  const hasValid10DigitNumber = (text: string) => {
    // Remove all non-digit characters and check if exactly 10 digits remain
    const digitsOnly = text.replace(/\D/g, '');
    return digitsOnly.length === 10;
  };

  const extractPhoneNumber = (text: string) => {
    // Extract only digits from the text
    return text.replace(/\D/g, '');
  };

  const saveUserMessage = async (userMessage: string, phoneNumber: string | null = null) => {
    try {
      await supabase
        .from('chat_interactions')
        .insert({
          phone_number: phoneNumber || '',
          user_message: userMessage
        });
    } catch (error) {
      console.error('Error saving user message:', error);
    }
  };

  const handleSendMessage = async () => {
    if (inputText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputText,
        sender: "user"
      };
      setMessages([...messages, newMessage]);
      
      // Simulate agent response
      setTimeout(async () => {
        let responseText;
        if (hasValid10DigitNumber(inputText)) {
          const phoneNumber = extractPhoneNumber(inputText);
          await saveUserMessage(inputText, phoneNumber);
          responseText = "Thank you! We've received your contact number. Our sales team will reach out to you shortly to assist with your refrigeration needs.";
        } else {
          await saveUserMessage(inputText);
          responseText = "Thank you for your message!\nPlease share your valid 10-digit contact number, and our sales team will get in touch with you shortly.";
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