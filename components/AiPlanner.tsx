import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Loader2, Bot } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';
import { GenerateContentResponse } from '@google/genai';

const AiPlanner: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Ciao! Sono Amina, la tua guida personale per la Tunisia. Vuoi un consiglio su un itinerario o curiosità su una destinazione?' }
  ]);
  const [input, setInput] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loadingState === LoadingState.LOADING) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoadingState(LoadingState.LOADING);

    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    try {
      const streamResponse = await sendMessageToGemini(userMessage);
      
      let fullText = '';
      
      for await (const chunk of streamResponse) {
        const c = chunk as GenerateContentResponse;
        const text = c.text || '';
        fullText += text;
        
        setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { role: 'model', text: fullText };
            return newMessages;
        });
      }
      
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { role: 'model', text: 'Mi dispiace, ho avuto un piccolo problema tecnico. Riprova tra poco.' };
          return newMessages;
      });
      setLoadingState(LoadingState.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-planner" className="py-24 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-italy-gold/10 rounded-full mb-6">
            <Sparkles className="w-6 h-6 text-italy-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-italy-green mb-4">Chiedi ad Amina</h2>
          <p className="text-gray-500 font-light">L'Intelligenza Artificiale al servizio del tuo viaggio ideale.</p>
        </div>

        <div className="bg-white rounded-md shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="bg-italy-green p-6 flex items-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
               <Bot className="text-white w-7 h-7" />
            </div>
            <div>
                <h3 className="text-white font-serif text-xl tracking-wide">Amina Assistant</h3>
                <p className="text-white/60 text-xs uppercase tracking-widest flex items-center mt-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                    Online
                </p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-white">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-5 shadow-sm text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-italy-green text-white rounded-2xl rounded-tr-sm' 
                      : 'bg-gray-50 text-gray-800 border border-gray-100 rounded-2xl rounded-tl-sm'
                  }`}
                >
                  {msg.role === 'model' && msg.text === '' ? (
                      <div className="flex space-x-1 items-center h-6">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                      </div>
                  ) : (
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-3 bg-gray-50 rounded-full border border-gray-200 px-6 py-3 focus-within:ring-1 focus-within:ring-italy-green transition-all">
                <User className="text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Es. Consigliami un itinerario..."
                className="flex-1 bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
                disabled={loadingState === LoadingState.LOADING}
              />
              <button 
                onClick={handleSend}
                disabled={loadingState === LoadingState.LOADING || !input.trim()}
                className={`p-2 rounded-full transition-all ${
                    loadingState === LoadingState.LOADING || !input.trim()
                    ? 'bg-gray-200 text-gray-400'
                    : 'bg-italy-red text-white hover:bg-red-800 shadow-md'
                }`}
              >
                {loadingState === LoadingState.LOADING ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                    <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiPlanner;