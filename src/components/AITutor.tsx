import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Send, 
  Brain, 
  Lightbulb, 
  BookOpen, 
  Calculator,
  FileText,
  Mic,
  Volume2
} from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  subject?: string;
}

const suggestedQuestions = [
  "Help me understand fractions",
  "Explain photosynthesis",
  "What is the Pythagorean theorem?",
  "How do I write a good essay?",
  "What causes weather patterns?"
];

const subjects = [
  { name: 'Math', icon: Calculator, color: 'bg-primary' },
  { name: 'Science', icon: BookOpen, color: 'bg-secondary' },
  { name: 'English', icon: FileText, color: 'bg-accent' },
];

export const AITutor = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI tutor. I'm here to help you learn and understand any topic. What would you like to explore today?",
      sender: 'ai',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const responses = {
      fractions: "Great question about fractions! Think of fractions as parts of a whole. For example, if you have a pizza cut into 8 slices and you eat 3 slices, you've eaten 3/8 of the pizza. The bottom number (denominator) tells us how many equal parts the whole is divided into, and the top number (numerator) tells us how many of those parts we're talking about. Would you like me to show you how to add fractions?",
      
      photosynthesis: "Photosynthesis is like a kitchen inside plant leaves! Plants use sunlight as energy, carbon dioxide from the air, and water from their roots to make their own food (glucose) and release oxygen as a bonus. The equation is: 6CO₂ + 6H₂O + sunlight → C₆H₁₂O₆ + 6O₂. This process happens in chloroplasts, which contain chlorophyll - that's what makes plants green! Would you like to learn about the different stages of photosynthesis?",
      
      pythagorean: "The Pythagorean theorem is super useful! It says that in a right triangle (one with a 90° angle), if you square the lengths of the two shorter sides and add them together, you get the square of the longest side. We write it as: a² + b² = c², where c is the hypotenuse (longest side). For example, if you have a triangle with sides 3 and 4, then 3² + 4² = 9 + 16 = 25, so c = 5. Try it with a ruler - it works every time!",
      
      essay: "Writing a good essay is like building a house! Start with a strong foundation (introduction) that tells your reader what you're going to discuss. Then build your walls (body paragraphs) with one main idea per paragraph, supported by evidence and examples. Finally, add a roof (conclusion) that summarizes your main points and leaves the reader with something to think about. Remember: plan first, write second, edit third!",
      
      weather: "Weather patterns are created by the sun's uneven heating of Earth! When the sun heats different areas differently, it creates air pressure differences. Warm air rises (low pressure) and cool air sinks (high pressure). This creates wind as air moves from high to low pressure areas. Add water evaporation and condensation, and you get clouds, rain, and storms! It's like Earth has its own circulation system."
    };

    // Simple keyword matching for demo
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('fraction')) return responses.fractions;
    if (lowerMessage.includes('photosynthesis')) return responses.photosynthesis;
    if (lowerMessage.includes('pythagorean')) return responses.pythagorean;
    if (lowerMessage.includes('essay')) return responses.essay;
    if (lowerMessage.includes('weather')) return responses.weather;

    // Default response
    return `That's an interesting question about "${userMessage}"! Let me break this down for you step by step. Based on your learning level, I recommend starting with the fundamentals and building up to more complex concepts. Would you like me to create a personalized learning path for this topic? I can also provide practice exercises and visual examples to help you understand better.`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
      subject: selectedSubject || undefined
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const aiResponse = await simulateAIResponse(inputValue);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      toast.error('Sorry, I had trouble processing your message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground flex items-center justify-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <span>AI Tutor</span>
          </h1>
          <p className="text-muted-foreground">Your personal learning assistant, powered by advanced AI</p>
        </div>

        {/* Subject Selection */}
        <div className="flex justify-center space-x-4">
          {subjects.map((subject) => (
            <Button
              key={subject.name}
              variant={selectedSubject === subject.name ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedSubject(selectedSubject === subject.name ? null : subject.name)}
              className="flex items-center space-x-2"
            >
              <subject.icon className="h-4 w-4" />
              <span>{subject.name}</span>
            </Button>
          ))}
        </div>

        {/* Chat Interface */}
        <Card className="h-[600px] flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between">
              <span>Learning Session</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Volume2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col space-y-4">
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex space-x-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className={message.sender === 'ai' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}>
                        {message.sender === 'ai' ? <Brain className="h-4 w-4" /> : 'U'}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className={`rounded-lg px-4 py-3 ${
                      message.sender === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted'
                    }`}>
                      {message.subject && (
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {message.subject}
                        </Badge>
                      )}
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.content}
                      </p>
                      <p className={`text-xs mt-2 opacity-70 ${
                        message.sender === 'user' ? 'text-primary-foreground' : 'text-muted-foreground'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex space-x-3 max-w-[80%]">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <Brain className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-lg px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground flex items-center space-x-2">
                  <Lightbulb className="h-4 w-4" />
                  <span>Try asking about:</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSuggestedQuestion(question)}
                      className="text-xs"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="flex space-x-2 pt-4 border-t">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about your studies..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!inputValue.trim() || isLoading}
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};