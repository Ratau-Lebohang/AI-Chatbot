# AI Knowledge Assistant

A clean, educational chatbot interface for learning AI fundamentals.

## Overview

This is a simplified, single-page interface designed specifically as an interactive AI educational chatbot. It serves as a knowledge assistant for users wanting to learn AI fundamentals, machine learning concepts, and artificial intelligence principles.

## Features

- **Educational Focus**: Specifically designed for AI learning and education
- **Clean Interface**: Minimalist design with single call-to-action
- **Responsive Layout**: Optimized for all devices  
- **Voiceflow Integration**: Seamless integration with educational AI chatbot
- **Fast Loading**: Lightweight with minimal dependencies

## Project Structure

```
├── index.html              # Main landing page 
├── chat.html               # Dedicated chat page with AI agent
├── app.js                  # Main React application component
├── chat-app.js             # Chat page React application
├── components/
│   ├── ChatInterface.js    # Landing page chat interface component
│   └── ChatPage.js         # Dedicated chat page component
└── trickle/
    └── notes/
        └── README.md       # This documentation
```

## Design Philosophy

The interface follows a "less is more" approach:
- Landing page with focused purpose and clear call-to-action
- Dedicated chat page with centered, large AI agent interface
- Educational branding and messaging throughout
- Clean gradient background
- Minimal distractions

## Navigation Flow

1. **Landing Page (index.html)**: Clean introduction with "Open Chat" button
2. **Chat Page (chat.html)**: Dedicated page with large, centered AI agent interface
3. **Auto-open**: Chat widget automatically opens when arriving at chat page
4. **Back Navigation**: Easy return to landing page

## Voiceflow Configuration

The educational chatbot is configured with:
- Project ID: `68c69b5e3c40bec5752bfe31`
- Runtime URL: `https://general-runtime.voiceflow.com`
- Version: `production`

## Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## Performance

- Single React component
- Optimized CSS with Tailwind
- Minimal external dependencies
- Fast loading times

Last updated: September 15, 2025
