import { useState } from "react";

export default function TimeTemp() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        const existingEmails = JSON.parse(sessionStorage.getItem("chaiEmails")) || [];

        if (!existingEmails.includes(email)) {
            existingEmails.push(email);
            sessionStorage.setItem("chaiEmails", JSON.stringify(existingEmails));
        }

        setSubmitted(true);
        setEmail("");
    };

    return (
        <section className="comingSoonSection" id="our-story">
            <div className="comingSoonOverlay"></div>

            <div className="comingSoonContent">
                <p className="sectionTag">Chai Culture</p>

                <h2>The Royal Brew Arrives Soon</h2>

                <div className="divider"></div>

                <p className="heritageText">
                    A legacy once reserved for royal kitchens is being prepared for the modern world.
                    Inspired by India's grand tea traditions, Chai Culture is crafting a premium instant
                    chai experience that blends heritage, elegance, and indulgent flavor all in a single cup.
                </p>

                <p className="heritageText">
                    We are carefully perfecting every detail before unveiling our collection.
                    Join us at the beginning of this journey and be among the first to experience
                    a brew worthy of royalty.
                </p>

                <p className="closingLine">Launching Soon. Exclusively for those who appreciate the finer sip.</p>

                {!submitted ? (
                    <form className="emailSignup" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email for early access"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Notify Me</button>
                    </form>
                ) : (
                    <p className="successMessage">✨ You're on the royal waitlist!</p>
                )}
            </div>
        </section>
    );
}
