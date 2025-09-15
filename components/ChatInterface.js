function ChatInterface() {
  try {
    const [isVoiceflowReady, setIsVoiceflowReady] = React.useState(false);

    React.useEffect(() => {
      // Check if Voiceflow is loaded
      const checkVoiceflow = () => {
        if (window.voiceflow && window.voiceflow.chat) {
          setIsVoiceflowReady(true);
        } else {
          setTimeout(checkVoiceflow, 500);
        }
      };
      checkVoiceflow();
    }, []);

    const openVoiceflowChat = () => {
      if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.open();
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center px-4" data-name="chat-interface" data-file="components/ChatInterface.js">
        <div className="max-w-2xl mx-auto text-center">
          <div className="chat-container p-12">
            <div className="mb-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] flex items-center justify-center mx-auto mb-8 shadow-lg">
                <div className="icon-brain text-3xl text-white"></div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
                AI Knowledge Assistant
              </h1>
              <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-xl mx-auto leading-relaxed">
                Your interactive educational companion for learning AI fundamentals. 
                Ask questions about machine learning, neural networks, and artificial intelligence concepts.
              </p>
            </div>
            
            <button 
              onClick={openVoiceflowChat}
              disabled={!isVoiceflowReady}
              className={`btn-primary text-xl px-12 py-4 ${!isVoiceflowReady ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className="flex items-center space-x-3">
                <div className="icon-message-circle text-2xl"></div>
                <span>{isVoiceflowReady ? 'Open Chat' : 'Loading...'}</span>
              </div>
            </button>
            
            <div className="mt-8 text-[var(--text-secondary)] text-sm">
              <div className="flex items-center justify-center space-x-1 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>AI Assistant Online</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm">
              © 2025 AI Knowledge Assistant. Educational AI chatbot for learning.
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ChatInterface component error:', error);
    return null;
  }
}
