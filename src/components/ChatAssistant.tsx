import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { X, Headphones, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const ChatAssistant = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [inputText, setInputText] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [dbRecordId, setDbRecordId] = useState<string | null>(null);
  const [hasPhoneNumber, setHasPhoneNumber] = useState(false);


  const hasValid10DigitNumber = (text: string) => {
    // Remove all non-digit characters and check if exactly 10 digits remain
    const digitsOnly = text.replace(/\D/g, '');
    return digitsOnly.length === 10;
  };

  const extractPhoneNumber = (text: string) => {
    // Extract only digits from the text
    return text.replace(/\D/g, '');
  };

  const startNewSession = async () => {
    // Reset all state for fresh session
    setSessionId(null);
    setDbRecordId(null);
    setHasPhoneNumber(false);
    const welcomeMessage = { id: 1, text: "Hello user! How can I help you today?", sender: "agent" };
    setMessages([welcomeMessage]);
    
    // Create new session in database
    try {
      const newSessionId = crypto.randomUUID();
      const { data, error } = await supabase
        .from('chat_sessions')
        .insert({
          session_id: newSessionId,
          conversation: [welcomeMessage],
          phone_number: null
        })
        .select()
        .single();
      
      if (error) throw error;
      
      setSessionId(newSessionId);
      setDbRecordId(data.id);
    } catch (error) {
      console.error('Error creating chat session:', error);
    }
  };

  const updateSession = async (updatedMessages: any[], phoneNumber: string | null = null) => {
    if (!dbRecordId) return;
    
    try {
      await supabase
        .from('chat_sessions')
        .update({
          conversation: updatedMessages,
          phone_number: phoneNumber || undefined
        })
        .eq('id', dbRecordId);
    } catch (error) {
      console.error('Error updating chat session:', error);
    }
  };

  const handleSendMessage = async () => {
    if (inputText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputText,
        sender: "user"
      };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      
      // Simulate agent response
      setTimeout(async () => {
        let responseText;
        let phoneNumber = null;
        
        if (hasValid10DigitNumber(inputText)) {
          phoneNumber = extractPhoneNumber(inputText);
          setHasPhoneNumber(true);
          responseText = "Thank you! We've received your contact number. Our sales team will reach out to you shortly to assist with your refrigeration needs.";
        } else if (hasPhoneNumber) {
          responseText = "Thank you";
        } else {
          responseText = "Thank you for your message!\nPlease share your valid 10-digit contact number, and our sales team will get in touch with you shortly.";
        }
        
        const response = {
          id: updatedMessages.length + 1,
          text: responseText,
          sender: "agent"
        };
        const finalMessages = [...updatedMessages, response];
        setMessages(finalMessages);
        
        // Save/update session with complete conversation
        await updateSession(finalMessages, phoneNumber);
      }, 1000);
      
      setInputText("");
    }
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    startNewSession();
  };

  const handleCloseChat = () => {
    setIsOpen(false);
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
          onClick={handleOpenChat}
          className="rounded-full w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 animate-bounce"
        >
          <Headphones className="w-7 h-7" />
        </Button>
      ) : (
        <Card className="w-96 h-[500px] shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-t-3xl">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Headphones className="w-5 h-5" />
                SmartCool Agent
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCloseChat}
                className="h-8 w-8 p-0 text-white hover:bg-white/20 rounded-full transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-[420px] bg-gradient-to-b from-gray-50 to-white">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium shadow-sm ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white rounded-br-md'
                        : 'bg-white text-gray-700 border border-gray-100 rounded-bl-md'
                    }`}
                  >
                    {message.text.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 border-t border-gray-100 bg-white">
              <div className="flex gap-3">
                <Input
                  placeholder="Type your message..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 border-gray-200 rounded-2xl px-4 py-3 focus:border-blue-400 focus:ring-blue-400/20"
                />
                <Button 
                  size="sm" 
                  onClick={handleSendMessage} 
                  disabled={!inputText.trim()}
                  className="px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-200 disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
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