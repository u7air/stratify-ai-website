import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

/**
 * Live Chat Widget Component
 * Displays a floating chat bubble that opens into a conversation interface.
 * Simulates an AI agent responding to visitor inquiries.
 */
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! 👋 I'm your AI assistant. I can answer questions about our voice agents, text agents, lead management system, or Meta ads integration. What can I help you with?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses: { [key: string]: string } = {
    "voice agent": "Our AI voice agents handle inbound calls 24/7 as a receptionist, and can also make outbound calls for follow-ups and cold calling. They sound natural and can transfer calls or book appointments.",
    "text agent": "Our text agents work via SMS and chat to qualify leads, answer questions, and schedule appointments. They integrate with your existing communication channels.",
    "lead management": "Our AI-powered CRM automatically qualifies, scores, and nurtures leads. It tracks the entire journey from initial contact to appointment booking with real-time analytics.",
    "meta ads": "We manage your Meta ads campaigns and automatically route leads to your AI agents. The system optimizes campaigns based on performance and ROI.",
    "pricing": "We have two packages: AI Voice & Text Suite ($2,999/month) for businesses with existing leads, and Complete Lead-to-Booking System ($7,999/month) with Meta ads and lead generation included.",
    "consultation": "I'd love to help! You can book a free consultation call using the 'Book a Free Consultation Call' button on this page. We'll discuss your specific needs and find the perfect solution.",
    "integration": "We integrate with most CRMs, calendar systems, and communication platforms. Setup typically takes 1-2 weeks depending on your existing systems.",
    "default": "That's a great question! For more detailed information, I'd recommend booking a free consultation call with our team. They can give you a personalized demo and answer any specific questions.",
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [keyword, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }
    
    return botResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] rounded-2xl bg-card border-2 border-border shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white">AI Assistant</h3>
              <p className="text-xs text-white/80">Always here to help</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded-full transition"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-cyan-500 text-black rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100" />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-4 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
              placeholder="Ask a question..."
              className="flex-1 bg-input border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <Button
              size="sm"
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-cyan-500 hover:bg-cyan-600 text-black"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
