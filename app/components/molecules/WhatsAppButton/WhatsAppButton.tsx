"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { portfolio } from "@/app/data/portfolio";

export default function WhatsAppButton() {
    return (
        <Link
            href={portfolio.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-500 hover:rotate-[10deg] cursor-pointer flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
        >
            {/* Ripple Effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40 duration-1000"></span>
            <MessageCircle size={32} fill="white" className="text-white relative z-10" />
        </Link>
    );
}
