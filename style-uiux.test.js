import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = "/Users/nenadkalicanin/Documents/test/alexej-platizin.vercel.app";
const css = readFileSync(join(root, "style.css"), "utf8");
const html = readFileSync(join(root, "index.html"), "utf8");

describe("global UI/UX styling", () => {
    test("defines reusable color tokens and applies them globally", () => {
        expect(css).toContain(":root");
        expect(css).toContain("--accent-primary");
        expect(css).toContain("--accent-secondary");
        expect(css).toContain("--surface-primary");
    });

    test("applies colorful section and surface gradients", () => {
        expect(css).toContain(".hero-section");
        expect(css).toContain(".hero-section, .about-section, #skills, .experience-section, .projects-section, .contact-section");
        expect(css).toContain("linear-gradient(");
    });

    test("adds global section spacing rhythm", () => {
        expect(css).toContain("section + section");
        expect(css).toContain("scroll-margin-top");
    });

    test("has interactive hover/focus states for navigation", () => {
        expect(css).toContain(".navbar nav a:hover");
        expect(css).toContain(".navbar nav a:focus-visible");
    });

    test("has hover elevation for cards and buttons", () => {
        expect(css).toContain(".btn:hover");
        expect(css).toContain(".skill-card:hover, .project-card:hover");
        expect(css).toContain(".timeline-item:hover");
    });

    test("has accessible link interaction styles for contact links", () => {
        expect(css).toContain(".contact-info a:hover");
        expect(css).toContain(".contact-info a:focus-visible");
    });

    test("has dedicated project card layout and cta styles", () => {
        expect(css).toContain(".project-card");
        expect(css).toContain(".project-card p");
        expect(css).toContain(".project-meta-title");
        expect(css).toContain(".project-standards");
        expect(css).toContain(".project-link-btn");
    });

    test("has polished contact and footer styling hooks", () => {
        expect(css).toContain(".contact-section .contact-box");
        expect(css).toContain(".contact-lead");
        expect(css).toContain(".contact-info i");
        expect(css).toContain(".footer-legal");
    });

    test("has mobile responsive navbar rules", () => {
        expect(css).toContain("@media (max-width: 900px)");
        expect(css).toContain(".navbar");
        expect(css).toContain(".navbar nav");
        expect(css).toContain(".navbar nav a");
    });

    test("applies ui-ux-pro-max design system hooks", () => {
        expect(css).toContain("--color-cta");
        expect(css).toContain("Archivo");
        expect(css).toContain("Space Grotesk");
        expect(css).toContain("prefers-reduced-motion");
        expect(css).toContain("overflow-x: hidden");
        expect(css).toContain(".nav-toggle");
        expect(html).toContain('id="primary-nav"');
        expect(html).not.toContain("🎥");
        expect(html).not.toContain("📝");
    });

    test("keeps project cards proportionate by content", () => {
        expect(css).toContain(".projects-grid");
        expect(css).toContain("align-items: start");
        expect(css).toContain(".project-card");
        expect(css).toContain("min-height: 0");
    });


    test("uses consistent color palette in contact section", () => {
        expect(css).toContain(".contact-info a");
        expect(css).toContain("color: var(--accent-secondary)");
        expect(css).toContain(".contact-info a:hover");
        expect(css).toContain("color: var(--accent-primary)");
    });


    test("uses consistent background palette across all sections", () => {
        expect(css).toContain(".hero-section, .about-section, #skills, .experience-section, .projects-section, .contact-section");
        expect(css).toContain("background: linear-gradient(145deg, rgba(12, 23, 47, 0.96), rgba(10, 19, 40, 0.96));");
    });


    test("applies same side padding to skills section", () => {
        expect(css).toContain(".hero-section, .about-section, #skills, .projects-section, .contact-section");
        expect(css).toContain("padding: 80px 8%");
    });


    test("uses high-contrast styles for secondary buttons", () => {
        expect(css).toContain(".btn-secondary");
        expect(css).toContain("color: var(--text-primary)");
        expect(css).toContain("background-color: rgba(10, 19, 40, 0.72)");
        expect(css).toContain(".btn-secondary:hover");
    });


    test("adds cursor trail effect hooks", () => {
        expect(css).toContain(".cursor-trail-dot");
        expect(html).toContain("pointermove");
        expect(html).toContain("cursor-trail-dot");
    });

    test("uses pointer cursor on key interactive elements", () => {
        expect(css).toContain(".about-doc-link");
        expect(css).toContain(".timeline-item");
        expect(css).toContain(".contact-info a");
        expect(css).toContain("cursor: pointer");
    });


    test("uses consistent content width for key sections", () => {
        expect(css).toContain("max-width: 1200px");
        expect(css).toContain("#skills > .skills-grid");
        expect(css).toContain(".projects-section > .projects-grid");
        expect(css).toContain(".experience-section > .timeline");
    });

    test("improves text readability in cards and timeline", () => {
        expect(css).toContain(".skill-card h3, .project-card h3");
        expect(css).toContain(".timeline-content p");
        expect(css).toContain("line-height: 1.7");
    });


    test("adds subtle section separators and nav polish", () => {
        expect(css).toContain("section + section::before");
        expect(css).toContain("backdrop-filter: blur(10px)");
        expect(css).toContain(".navbar nav a.active");
    });

    test("improves global focus-visible accessibility", () => {
        expect(css).toContain("a:focus-visible");
        expect(css).toContain("button:focus-visible");
    });


    test("adds back-to-top ux control", () => {
        expect(css).toContain(".back-to-top");
        expect(css).toContain(".back-to-top.visible");
        expect(html).toContain("back-to-top");
        expect(html).toContain("scrollY > 420");
    });

    test("improves mobile tap targets for nav and buttons", () => {
        expect(css).toContain("min-height: 44px");
        expect(css).toContain(".navbar nav a");
        expect(css).toContain(".btn");
    });


    test("supports scroll-aware active navigation", () => {
        expect(html).toContain("IntersectionObserver");
        expect(html).toContain("section[id]");
        expect(html).toContain("setActiveNav");
    });

    test("adds section target feedback and mobile effect tuning", () => {
        expect(css).toContain("section:target");
        expect(css).toContain("scroll-padding-top");
        expect(css).toContain("@media (max-width: 768px)");
        expect(css).toContain("box-shadow: 0 8px 18px");
    });


    test("improves project standards list spacing readability", () => {
        expect(css).toContain(".project-standards li");
        expect(css).toContain("padding-left: 1.3rem");
        expect(css).toContain(".project-standards li i");
        expect(css).toContain("position: absolute");
    });

});
