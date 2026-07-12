import React from 'react';

export interface Message {
  sender: 'user' | 'assistant';
  text: string;
}

export interface AIChatOverlayProps {
  open?: boolean;
  onClose?: () => void;
  topicTitle?: string;
  messages?: Message[];
  onSendMessage?: (text: string) => void;
  onQuickAction?: (action: 'explain' | 'quiz' | 'apply') => void;
  onSaveLastAnswer?: () => void;
  inputValue?: string;
  onInputChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  providerName?: string;
  modelName?: string;
  isGenerating?: boolean;
}

export declare const AIChatOverlay: React.FC<AIChatOverlayProps>;
