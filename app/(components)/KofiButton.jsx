import React, { useEffect } from 'react';

export default function KofiButton() {
    useEffect(() => {
        // Dynamically load the Ko-fi widget script
        const script = document.createElement('script');
        script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
        script.async = true;
        script.onload = () => {
            // Initialize the Ko-fi widget
            if (window.kofiWidgetOverlay) {
                window.kofiWidgetOverlay.draw('itsmeprinceyt', {
                    type: 'floating-chat',
                    'floating-chat.donateButton.text': 'Support Me',
                    'floating-chat.donateButton.background-color': '#323842',
                    'floating-chat.donateButton.text-color': '#fff',
                });
            }
        };
        document.body.appendChild(script);

        // Cleanup script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array ensures this runs only once after the component mounts

    return null; // No JSX needed since it's just injecting the widget
}
