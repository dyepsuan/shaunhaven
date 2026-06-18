"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  Menu,
  X,
  Users,
  Home,
  Waves,
  Sparkles,
  GlassWater,
  TentTree,
  Star,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const navLinks = [
  { href: "#booking", label: "Book" },
  { href: "#villa", label: "The Villa" },
  { href: "#dome", label: "Luxe Dome" },
  { href: "#gallery", label: "Gallery" },
  { href: "#directions", label: "Directions" },
  { href: "#contact", label: "Contact" },
];

const galleryImages = [
  "/images/dome-pool.jpg",
  "/images/villa-night.jpg",
  "/images/pool-lounge.jpg",
  "/images/villa-pool-top.jpg",
];


const stayOptions = [
  {
    id: "villa",
    image: "/images/aerial-villa.jpg",
    eyebrow: "Poolside luxury",
    title: "Private Pool Villa",
    text: "Good for private stays, intimate gatherings, and peaceful seaside mornings.",
    amenities: [
      "Fully air-conditioned loft villa",
      "Infinity pool",
      "2 king-sized beds, 2 double-size beds",
      "Indoor and outdoor dining",
      "Outdoor shower",
      "Hot and cold shower",
      "Hygiene kit and towels",
      "Smart TV",
      "Karaoke",
      "Starlink internet",
      "Full kitchen",
      "Grilling station",
      "Bonfire",
      "Sunset viewing deck",
      "Hammock and swing",
      "Camping ground",
      "Pavilion",
    ],
  },
  {
    id: "dome",
    image: "/images/dome-wide.jpg",
    eyebrow: "Nature glamping",
    title: "Luxe Dome Glamping",
    text: "A cozy dome stay surrounded by tropical greenery and modern comforts.",
    amenities: [
      "Good for 8 pax",
      "2 Queen Beds, 2 double beds",
      "Air-conditioned dome tent",
      "Jacuzzi-type pool",
      "Toilet and bath",
      "Full kitchen with ref",
      "Starlink internet",
      "Smart TV",
      "Dining area and bonfire area",
      "Lounging deck",
      "Grilling station",
      "Portable speaker with mic",
    ],
  },
];

type BookingInquiry = {
  checkIn: string;
  checkOut: string;
  guests: string;
  property: string;
};

export default function HomePage() {
  return (
    <main id="top">
      <Header />

      <section className="hero">
        <Image
          src="/images/hero-pool-view.jpg"
          alt="ShaunHaven infinity pool overlooking the sea"
          fill
          priority
          className="heroImage"
        />

        <div className="heroOverlay" />

        <div className="heroContent pageShell">
          <div className="heroText">
            <p className="eyebrow">Your private escape in Leyte</p>
            <h1>Rest. Recharge. Reconnect.</h1>
            <p className="heroLead">
              A private pool villa and glamping retreat overlooking the San
              Pedro Bay — made for slow mornings and golden sunsets.
            </p>

            <a href="#booking" className="primaryButton heroButton">
              Book your escape
              <CalendarDays size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="booking" className="bookingWrap pageShell">
        <BookingForm />
      </section>

      <HorizonLine />

      <section id="stays" className="staySection pageShell">
        <div className="sectionIntro">
          <p className="eyebrow clay">Stay your way</p>
          <h2>Two Unique Stays. One Unforgettable View.</h2>
          <p>
            Whether you’re here for a quiet escape, a special celebration, or a
            small adventure, ShaunHaven is all yours.
          </p>
        </div>

        <div className="stayGrid">
          {stayOptions.map((stay) => (
            <StayCard key={stay.title} {...stay} />
          ))}
        </div>
      </section>

      <section className="features pageShell">
        <Feature icon={<Waves />} title="Oceanfront Views" text="Wake up to endless blue." />
        <Feature icon={<Sparkles />} title="Private Pool" text="Exclusive and serene." />
        <Feature icon={<TentTree />} title="Luxe Dome" text="Modern comfort in nature." />
        <Feature icon={<GlassWater />} title="Events" text="Perfect for intimate moments." />
      </section>

      <section className="moments">
        <div className="momentsInner pageShell">
          <div className="momentsText">
            <p className="eyebrow">Enjoy your moments</p>
            <h2>Stay. Celebrate. Make Memories.</h2>

            <div className="momentIcons">
              <MiniMoment icon={<Waves />} text="Staycations" />
              <MiniMoment icon={<GlassWater />} text="Intimate Events" />
              <MiniMoment icon={<Star />} text="Proposal Setup" />
              <MiniMoment icon={<Users />} text="Reunions" />
            </div>

            <a href="#booking" className="primaryButton">
              Plan your event
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="momentsImage">
            <Image
              src="/images/villa-night.jpg"
              alt="ShaunHaven evening event area"
              fill
            />
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery pageShell">
        <div className="galleryHeader">
          <div>
            <p className="eyebrow clay">Gallery</p>
            <h2>A Glimpse of ShaunHaven</h2>
          </div>

          <a href="#booking" className="ghostButton">
            Book direct
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="galleryGrid">
          {galleryImages.map((src) => (
            <div className="galleryItem" key={src}>
              <Image src={src} alt="ShaunHaven gallery photo" fill />
            </div>
          ))}
        </div>
      </section>

      <section id="directions" className="directionsBand">
        <div className="directions pageShell">
          <div className="directionsText">
            <p className="eyebrow clay">How to get there</p>
            <h2>Find your way to ShaunHaven.</h2>
            <p>
              ShaunHaven Exclusive Escape is tucked along the peaceful bay area between
              San Miguel and Barugo, Leyte. Use the map below to plan your route before
              your stay.
            </p>

            <div className="directionDetails">
              <div>
                <MapPin size={20} />
                <span>ShaunHaven Exclusive Escape</span>
              </div>
              <div>
                <MapPin size={20} />
                <span>Boundary of San Miguel and Barugo, Leyte</span>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=ShaunHaven%20Exclusive%20Escape"
              target="_blank"
              rel="noopener noreferrer"
              className="ghostButton"
            >
              Open in Google Maps
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="mapCard">
            <iframe
              title="ShaunHaven Exclusive Escape location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125192.13161036024!2d124.78273356596115!3d11.3161279042098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3308131929499d0d%3A0xa048d5a9d902b2d7!2sShaunHaven%20Exclusive%20Escape!5e0!3m2!1sen!2sph!4v1781644179188!5m2!1sen!2sph"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="finalCtaSection">
        <div className="finalCta pageShell">
          <div>
            <p className="eyebrow clay">Your private escape awaits</p>
            <h2>Book Direct & Save</h2>
            <p>
              Book directly with us for the best rates, faster assistance, and
              personalized service.
            </p>
          </div>

          <a href="#booking" className="primaryButton">
            Book direct & save
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="pageShell nav">
        <a href="#top" className="brand" onClick={closeMenu}>
          <Image
            src="/images/logo.png"
            alt="ShaunHaven logo"
            width={46}
            height={46}
            className="brandLogo"
            priority
          />
          <span>
            ShaunHaven
            <small>Exclusive Escape</small>
          </span>
        </a>

        <nav className="desktopNav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#booking" className="navButton">Book Now</a>

        <button
          className="menuButton"
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`mobileMenu ${isMenuOpen ? "isOpen" : ""}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#booking" className="mobileBookButton" onClick={closeMenu}>
          Book Now
        </a>
      </nav>
    </header>
  );
}

function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [confirmedInquiry, setConfirmedInquiry] =
    useState<BookingInquiry | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const inquiry = {
      checkIn: String(formData.get("checkIn") ?? ""),
      checkOut: String(formData.get("checkOut") ?? ""),
      guests: String(formData.get("guests") ?? ""),
      property: String(formData.get("property") ?? ""),
    };

    if (new Date(inquiry.checkOut) <= new Date(inquiry.checkIn)) {
      setError("Check-out must be after check-in.");
      return;
    }

    setError("");
    setIsSubmitting(true);
    timeoutRef.current = window.setTimeout(() => {
      setIsSubmitting(false);
      setConfirmedInquiry(inquiry);
    }, 450);
  };

  return (
    <>
      <form
        className="bookingCard"
        onSubmit={handleSubmit}
        onChange={() => error && setError("")}
      >
        <BookingField icon={<CalendarDays size={22} />} label="Check-in">
          <input type="date" name="checkIn" required aria-label="Check-in date" />
        </BookingField>
        <BookingField icon={<CalendarDays size={22} />} label="Check-out">
          <input type="date" name="checkOut" required aria-label="Check-out date" />
        </BookingField>
        <BookingField icon={<Users size={22} />} label="Guests">
          <input
            type="number"
            name="guests"
            min="1"
            max="30"
            defaultValue="2"
            required
            aria-label="Number of guests"
          />
        </BookingField>
        <BookingField
          icon={<Home size={22} />}
          label="Property"
          hasDropdown
        >
          <select name="property" defaultValue="Pool Villa" required aria-label="Property">
            <option value="Pool Villa">Pool Villa</option>
            <option value="Luxe Dome">Luxe Dome</option>
            <option value="Both stays">Both stays</option>
          </select>
        </BookingField>

        <button className="bookingButton" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Checking..." : "Check availability"}
          <ArrowRight size={20} aria-hidden="true" />
        </button>

        <div className="bookingFooter">
          <span>Best Rate Guarantee</span>
          <span>Instant confirmation</span>
        </div>
        {error && (
          <p className="bookingError" role="alert">
            {error}
          </p>
        )}
      </form>

      <BookingModal
        inquiry={confirmedInquiry}
        onClose={() => setConfirmedInquiry(null)}
      />
    </>
  );
}

function BookingField({
  icon,
  label,
  children,
  hasDropdown,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
}) {
  return (
    <label className="bookingItem">
      <div className="bookingIcon">{icon}</div>
      <div className="bookingControl">
        <span>{label}</span>
        {children}
      </div>
      {hasDropdown && <ChevronDown size={18} aria-hidden="true" />}
    </label>
  );
}

function BookingModal({
  inquiry,
  onClose,
}: {
  inquiry: BookingInquiry | null;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const emailHref = useMemo(() => {
    if (!inquiry) {
      return "mailto:hello@shaunhavenvilla.com";
    }

    const body = [
      "Hi ShaunHaven,",
      "",
      "I would like to check availability for:",
      `Property: ${inquiry.property}`,
      `Check-in: ${inquiry.checkIn}`,
      `Check-out: ${inquiry.checkOut}`,
      `Guests: ${inquiry.guests}`,
      "",
      "Please let me know the available rates and next steps.",
    ].join("\n");

    return `mailto:hello@shaunhavenvilla.com?subject=${encodeURIComponent(
      "ShaunHaven booking inquiry"
    )}&body=${encodeURIComponent(body)}`;
  }, [inquiry]);

  useEffect(() => {
    if (!inquiry) {
      return;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [inquiry, onClose]);

  if (!inquiry) {
    return null;
  }

  return (
    <div className="modalOverlay" role="presentation" onMouseDown={onClose}>
      <div
        className="bookingModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          className="modalClose"
          type="button"
          aria-label="Close booking inquiry"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <p className="eyebrow clay">Availability request</p>
        <h3 id="booking-modal-title">Ready to check your dates</h3>
        <dl className="inquirySummary">
          <div>
            <dt>Stay</dt>
            <dd>{inquiry.property}</dd>
          </div>
          <div>
            <dt>Dates</dt>
            <dd>
              {inquiry.checkIn} to {inquiry.checkOut}
            </dd>
          </div>
          <div>
            <dt>Guests</dt>
            <dd>{inquiry.guests}</dd>
          </div>
        </dl>
        <div className="modalActions">
          <a className="primaryButton" href={emailHref}>
            Send inquiry
            <Mail size={18} aria-hidden="true" />
          </a>
          <a className="ghostButton" href="tel:+639123456789">
            Call now
            <Phone size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

function StayCard({
  id,
  image,
  eyebrow,
  title,
  text,
  amenities,
}: {
  id: string;
  image: string;
  eyebrow: string;
  title: string;
  text: string;
  amenities: string[];
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article
      id={id}
      className={`stayCard flipCard ${isFlipped ? "isFlipped" : ""}`}
      aria-label={`${title} stay card`}
    >
      <div className="stayCardInner">
        <div className="stayCardFace stayCardFront" aria-hidden={isFlipped}>
          <Image src={image} alt={title} fill />
          <div className="stayCardOverlay" />
          <div className="stayCardContent">
            <p>{eyebrow}</p>
            <h3>{title}</h3>
            <span>{text}</span>
            <button
              type="button"
              aria-label={`View ${title} amenities`}
              aria-pressed={isFlipped}
              tabIndex={isFlipped ? -1 : 0}
              onClick={() => setIsFlipped(true)}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="stayCardFace stayCardBack" aria-hidden={!isFlipped}>
          <div className="amenitiesContent">
            <p>{eyebrow}</p>
            <h3>{title}</h3>
            <span className="amenitiesLabel">Amenities</span>

            <ul className="amenitiesList">
              {amenities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <button
              type="button"
              aria-label={`Back to ${title}`}
              aria-pressed={!isFlipped}
              tabIndex={isFlipped ? 0 : -1}
              onClick={() => setIsFlipped(false)}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="feature">
      <div>{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function MiniMoment({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="miniMoment">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function HorizonLine() {
  return <div className="horizonLine pageShell" />;
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footerInner pageShell">
        <div>
          <a href="#top" className="brand">
            <Image
              src="/images/logo.png"
              alt="ShaunHaven logo"
              width={46}
              height={46}
              className="brandLogo"
              priority
            />
            <span>
              ShaunHaven
              <small>Exclusive Escape</small>
            </span>
          </a>
          <p>Indulge in relaxation with a stunning sunset view in this exclusive hilltop sanctuary by the bay between the boundary of San Miguel and Barugo, Leyte.</p>
        </div>

        <div>
          <h4>Contact Us</h4>
          <p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=ShaunHaven%20Exclusive%20Escape"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={16} /> Brgy. Mawodpawod, San Miguel, Philippines
            </a>
          </p>
          <p>
            <a href="mailto:hello@shaunhavenvilla.com">
              <Mail size={16} /> hello@shaunhavenvilla.com
            </a>
          </p>
          <p>
            <a href="tel:+639123456789">
              <Phone size={16} /> +63 912 345 6789
            </a>
          </p>
        </div>

        <div>
          <h4>Follow Us</h4>
          <div className="socials">
            <span aria-disabled="true">Social links coming soon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
