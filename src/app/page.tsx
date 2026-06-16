import Image from "next/image";
import {
  CalendarDays,
  ChevronDown,
  Menu,
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

const galleryImages = [
  "/images/dome-pool.jpg",
  "/images/villa-night.jpg",
  "/images/pool-lounge.jpg",
  "/images/villa-pool-top.jpg",
];

export default function HomePage() {
  return (
    <main>
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
        <div className="bookingCard">
          <BookingItem
            icon={<CalendarDays size={22} />}
            label="Check-in"
            value="May 24, 2025"
          />
          <BookingItem
            icon={<CalendarDays size={22} />}
            label="Check-out"
            value="May 25, 2025"
          />
          <BookingItem icon={<Users size={22} />} label="Guests" value="2 Adults" />
          <BookingItem
            icon={<Home size={22} />}
            label="Property"
            value="Pool Villa"
            hasDropdown
          />

          <button className="bookingButton">
            Check availability
            <ArrowRight size={20} />
          </button>

          <div className="bookingFooter">
            <span>Best Rate Guarantee</span>
            <span>Instant confirmation</span>
          </div>
        </div>
      </section>

      <HorizonLine />

      <section className="staySection pageShell">
        <div className="sectionIntro">
          <p className="eyebrow clay">Stay your way</p>
          <h2>Two Unique Stays. One Unforgettable View.</h2>
          <p>
            Whether you’re here for a quiet escape, a special celebration, or a
            small adventure, ShaunHaven is all yours.
          </p>
        </div>

        <div className="stayGrid">
          <StayCard
            image="/images/aerial-villa.jpg"
            eyebrow="Poolside luxury"
            title="Private Pool Villa"
            text="Good for private stays, intimate gatherings, and peaceful seaside mornings."
          />

          <StayCard
            image="/images/dome-wide.jpg"
            eyebrow="Nature glamping"
            title="Luxe Dome Glamping"
            text="A cozy dome stay surrounded by tropical greenery and modern comforts."
          />
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

      <section className="gallery pageShell">
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

      <section className="finalCta pageShell">
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
      </section>

      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="pageShell nav">
      <a href="#" className="brand">
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
          <a href="#booking">Book</a>
          <a href="#stays">The Villa</a>
          <a href="#stays">Luxe Dome</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#booking" className="navButton">Book Now</a>

        <button className="menuButton" aria-label="Open menu">
          <Menu />
        </button>
      </div>
    </header>
  );
}

function BookingItem({
  icon,
  label,
  value,
  hasDropdown,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  hasDropdown?: boolean;
}) {
  return (
    <div className="bookingItem">
      <div className="bookingIcon">{icon}</div>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
      {hasDropdown && <ChevronDown size={18} />}
    </div>
  );
}

function StayCard({
  image,
  eyebrow,
  title,
  text,
}: {
  image: string;
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <article className="stayCard">
      <Image src={image} alt={title} fill />
      <div className="stayCardOverlay" />
      <div className="stayCardContent">
        <p>{eyebrow}</p>
        <h3>{title}</h3>
        <span>{text}</span>
        <button aria-label={`View ${title}`}>
          <ArrowRight size={20} />
        </button>
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
          <a href="#" className="brand">
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
          <p><MapPin size={16} /> Leyte, Philippines</p>
          <p><Mail size={16} /> hello@shaunhavenvilla.com</p>
          <p><Phone size={16} /> +63 912 345 6789</p>
        </div>

        <div>
          <h4>Follow Us</h4>
          <div className="socials">
          </div>
        </div>
      </div>
    </footer>
  );
}