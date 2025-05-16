"use client";
import { useEffect } from "react";

const KofiWidget = () => {
    useEffect(() => {
        if (document.getElementById("kofi-script")) return;

        const script = document.createElement("script");
        script.id = "kofi-script";
        script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
        script.async = true;

        script.onload = () => {
            // @ts-expect-error - kofiWidgetOverlay is loaded globally via external script
            if (window.kofiWidgetOverlay) {
                // @ts-expect-error - draw method exists on kofiWidgetOverlay but is not typed
                window.kofiWidgetOverlay.draw("itsmeprinceyt", {
                    type: "floating-chat",
                    "floating-chat.donateButton.text": "Tip Me",
                    "floating-chat.donateButton.background-color": "#323842",
                    "floating-chat.donateButton.text-color": "#fff",
                });
            }
        };

        document.body.appendChild(script);
    }, []);

    return null;
};

export default KofiWidget;
