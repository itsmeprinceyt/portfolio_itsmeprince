"use client";
import Divider from "../(components)/Components/Divider";
import PageWrapperNormal from "../(components)/PageWrapper";
import SocialMediaIcons from "../(components)/SocialMediaIcons";

export default function Contact() {
    return (
        <PageWrapperNormal>
            {/* Main Div */}
            <div className="flex flex-col items-center justify-center gap-5 text-stone-300 p-5">
                <div className="flex flex-col items-center px-5  text-4xl text-glow-white text-stone-300 w-full">Contact Me
                </div>
                
                <Divider />
                <SocialMediaIcons />
            </div>
        </PageWrapperNormal>

    );
}