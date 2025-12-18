import Link from "next/link";
import React from "react";

export default function Meals() {
    return (
        <main>
            <h1>Meals page</h1>
            <Link style={{display: 'flex'}} href="/">go to home page</Link>
            <Link style={{display: 'flex'}} href="/meals/share">go to share page</Link>
            <Link style={{display: 'flex'}} href="/meals/detailPage">go to detail page</Link>
        </main>
    );
};