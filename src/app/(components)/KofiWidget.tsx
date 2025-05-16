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
            // @ts-expect-error
            if (window.kofiWidgetOverlay) {
                // @ts-expect-error
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
