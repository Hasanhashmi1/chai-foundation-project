import { useEffect, useRef } from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    footerRef.current.classList.add("show");
                }
            },
            { threshold: 0.2 }
        );

        if (footerRef.current) observer.observe(footerRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <footer ref={footerRef} className="footer">
            <div className="footerContent">
                <img src="./src/images/1.png" alt="Chai Culture Logo" className="footerLogo" />
                <p className="footerTagline">Brew the Royal Tradition</p>

                <div className="footerSocials">
                    <a href="https://www.instagram.com/hasan_hashmi_1/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com/hasan.hashmi.9828" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://x.com/Hasan_hashmi_1" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                </div>

                <p className="footerCopy">
                    © {new Date().getFullYear()} Chai Culture. Crafted with heritage.
                </p>
            </div>
        </footer>
    );
}
