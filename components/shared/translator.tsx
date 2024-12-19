'use client'

import { useEffect } from 'react'
import { Globe } from 'lucide-react'

declare global {
  interface Window {
    google: any
  }
}

export default function GoogleTranslator() {
  useEffect(() => {
    const addScript = () => {
      const script = document.createElement('script')
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      document.body.appendChild(script)
    }

    //@ts-ignore
    window.googleTranslateElementInit = function() {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL
        },
        'google_translate_element'
      )
    }

    addScript()

    // Add custom styles for the Google Translate widget
    const style = document.createElement('style')
    style.textContent = `
      .goog-te-gadget {
        font-family: inherit !important;
        color: inherit !important;
      }
      .goog-te-gadget-simple {
        background-color: transparent !important;
        border: 1px solid hsl(var(--border)) !important;
        padding: 8px 12px !important;
        border-radius: 6px !important;
        transition: all 0.2s ease-in-out !important;
        display: flex !important;
        align-items: center !important;
        height: 40px !important;
      }
      .goog-te-gadget-simple:hover {
        background-color: hsl(var(--muted)) !important;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
      }
      .goog-te-gadget-simple img {
        display: none !important;
      }
      .goog-te-gadget-simple span {
        border: none !important;
        color: hsl(var(--foreground)) !important;
        vertical-align: middle !important;
      }
      .goog-te-menu-value {
        display: inline-flex !important;
        align-items: center !important;
        gap: 8px !important;
        margin: 0 !important;
      }
      .goog-te-menu-value span:first-child {
        white-space: nowrap !important;
      }
      .goog-te-menu-value span:last-child {
        display: none !important;
      }
      .goog-te-banner-frame {
        display: none !important;
      }
    `
    document.head.appendChild(style)
  }, [])

  return (
    <div className="translate-container inline-flex items-center gap-2 p-2 rounded-lg">
      <Globe size={20} className="text-muted-foreground" />
      <div id="google_translate_element" className="min-w-[180px]"></div>
    </div>
  )
}
