import React, { useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Database,
  LineChart,
  Megaphone,
  MonitorSmartphone,
  QrCode,
  ShieldCheck,
  Sparkles,
  WalletCards
} from 'lucide-react';

const ASSET = '/assets/';

const memberships = [
  {
    name: 'Digital Starter',
    price: '$100',
    cadence: '/week',
    description:
      'For small businesses that need professional digital support without a large upfront website or software bill.',
    features: [
      'Website care and AWS hosting management',
      'Branded forms and QR code setup',
      'Lead capture or loyalty signup support',
      'Minor weekly website, content, or design update',
      'Monthly analytics snapshot'
    ],
    accent: 'cyan'
  },
  {
    name: 'Growth + Books',
    price: '$150',
    cadence: '/week',
    description:
      'Digital growth support plus basic bookkeeping help through Vista Insurance & Financial Services.',
    features: [
      'Everything in Digital Starter',
      'Basic bookkeeping support',
      'Invoice and payment tracking support',
      'Monthly records review',
      'Business admin organization'
    ],
    accent: 'gold',
    featured: true
  },
  {
    name: 'Technology Growth',
    price: 'Custom',
    cadence: '/quote',
    description:
      'For businesses that need a deeper AWS-powered system, customer dashboard, Cut Catalog, or analytics workflow.',
    features: [
      'Customer check-in workflows',
      'Cut Catalog or service catalog systems',
      'Loyalty and rewards dashboard',
      'Custom AWS architecture',
      'Advanced integrations quoted separately'
    ],
    accent: 'purple'
  }
];

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Website + Landing Pages',
    text: 'Modern branded pages, AWS hosting, mobile layouts, booking CTAs, and service sections.'
  },
  {
    icon: QrCode,
    title: 'Customer Capture',
    text: 'QR codes, branded forms, loyalty signups, contact lists, and client interest tracking.'
  },
  {
    icon: Megaphone,
    title: 'Lookbooks + Marketing Assets',
    text: 'Digital lookbooks, service menus, social content, product mockups, booth concepts, and print-ready designs.'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboards',
    text: 'Simple reporting on visits, leads, scans, services selected, reward progress, and campaign performance.'
  },
  {
    icon: WalletCards,
    title: 'Bookkeeping Add-On',
    text: 'Basic books, transactions, invoices, payment tracking, and small business records support.'
  },
  {
    icon: Database,
    title: 'AWS-Powered Tools',
    text: 'Custom branded systems, data capture, dashboards, service catalogs, and future automation.'
  }
];

const costItems = [
  'Meta ad spend',
  'Google ad spend',
  'Printing',
  'Tents + banners',
  'Business cards',
  'Domains',
  'Software subscriptions',
  'SMS/email platform fees',
  'Shipping',
  'Product manufacturing'
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav shell">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <img src={`${ASSET}marinia-logo.png`} alt="Marinia Group logo" />
          <span>
            <strong>Marinia Group</strong>
            <small>Weekly Business Growth Memberships</small>
          </span>
        </a>

        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          ☰
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#memberships" onClick={() => setOpen(false)}>Memberships</a>
          <a href="#divisions" onClick={() => setOpen(false)}>Divisions</a>
          <a href="#autopay" onClick={() => setOpen(false)}>Weekly Pay</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Book Call</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Branding • AWS Tools • Analytics • Bookkeeping</p>
        <h1>Business infrastructure without the large upfront bill.</h1>
        <p className="lead">
          Marinia Group helps small and minority-owned businesses build professional branding, customer capture,
          digital systems, light analytics, and bookkeeping support through tiered weekly memberships.
        </p>

        <div className="hero-actions">
          <a href="#memberships" className="button primary">
            View Memberships <ArrowRight size={18} />
          </a>
          <a href="https://calendly.com/studio-mergemads/30min" target="_blank" rel="noopener noreferrer" className="button secondary">
            Book a Discovery Call
          </a>
        </div>

        <div className="proof-strip" aria-label="Marinia Group divisions">
          <span>MergeMADS</span>
          <span>Elevate AI Solutions</span>
          <span>Vista IFS</span>
        </div>
      </div>

      <div className="hero-stage" aria-label="Future animated Marinia Group hero video placeholder">
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="video-frame">
          <div className="scan-line"></div>
          <img src={`${ASSET}marinia-logo.png`} alt="Marinia Group logo placeholder" />
          <p className="eyebrow">Hero Video Placeholder</p>
          <h2>Animated Marinia Group Logo</h2>
          <p>
            Drop the future Runway animation here as <strong>marinia-hero.mp4</strong> and replace this placeholder with the video.
          </p>
        </div>
      </div>
    </section>
  );
}

function DivisionCards() {
  return (
    <section className="division-section shell" id="divisions">
      <div className="section-heading">
        <p className="eyebrow">One parent company. Three service strengths.</p>
        <h2>Built from Marinia Group’s creative, technical, and financial ecosystem.</h2>
      </div>

      <div className="division-grid">
        <article className="division-card merge">
          <img src={`${ASSET}merge-banner.png`} alt="Merge Marketing and Design Studio logo" />
          <h3>Merge Marketing & Design Studio</h3>
          <p>Brand identity, websites, lookbooks, QR campaigns, product mockups, social content, print design, and marketing visuals.</p>
        </article>

        <article className="division-card elevate">
          <img src={`${ASSET}elevate-banner.png`} alt="Elevate AI Solutions logo" />
          <h3>Elevate AI Solutions</h3>
          <p>AWS websites, branded customer capture tools, Cut Catalog systems, loyalty dashboards, analytics, and automation planning.</p>
        </article>

        <article className="division-card vista">
          <img src={`${ASSET}vista-logo.png`} alt="Vista Insurance and Financial Services logo" />
          <h3>Vista Insurance & Financial Services</h3>
          <p>Bookkeeping support, invoicing organization, records cleanup, and financial admin support for small business owners.</p>
        </article>
      </div>
    </section>
  );
}

function Memberships() {
  return (
    <section className="section shell memberships" id="memberships">
      <div className="section-heading">
        <p className="eyebrow">Tiered memberships</p>
        <h2>Weekly pricing that small businesses can actually manage.</h2>
        <p>
          All membership levels require a $300 deposit before work begins, followed by weekly automated withdrawals. Third-party costs are separate and must be approved before purchase.
        </p>
      </div>

      <div className="pricing-grid">
        {memberships.map((plan) => (
          <article key={plan.name} className={`price-card ${plan.featured ? 'featured' : ''} ${plan.accent}`}>
            <div className="price-top">
              <p className="tier">{plan.name}</p>
              {plan.featured && <span className="badge">Recommended</span>}
            </div>
            <h3>
              {plan.price}
              <span>{plan.cadence}</span>
            </h3>
            <p className="deposit-note">$300 deposit required to begin.</p>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={17} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="button full">
              Get Started <ChevronRight size={17} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function AutoPay() {
  return (
    <section className="section shell autopay" id="autopay">
      <div>
        <p className="eyebrow">Weekly pay requirement</p>
        <h2>Memberships require automated weekly withdrawals.</h2>
        <p>
          To keep the membership affordable and sustainable, payment is collected weekly through automated withdrawal.
          Work begins after the membership agreement is signed and the first weekly payment is active.
        </p>
      </div>

      <div className="policy-card">
        <div className="policy-icon">
          <CreditCard />
        </div>
        <h3>Payment policy</h3>
        <ul>
          <li>A $300 deposit is required for all membership levels.</li>\n          <li>Weekly automated payments are required after the deposit.</li>
          <li>Third-party costs are billed separately with client approval.</li>
          <li>Accounts past due may have updates, dashboards, or hosting access paused.</li>
          <li>Large builds, software features, print projects, and ad campaigns are scoped separately.</li>
        </ul>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section shell services" id="services">
      <p className="eyebrow">What we support</p>
      <h2>From brand presence to business data.</h2>
      <div className="service-grid">
        {services.map(({ icon: Icon, title, text }) => (
          <article key={title}>
            <Icon />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function UseCase() {
  return (
    <section className="section shell use-case">
      <div className="use-case-card">
        <div>
          <p className="eyebrow">Sample use case</p>
          <h2>Barbershop Loyalty + Cut Catalog System</h2>
          <p>
            A customer scans a loyalty card QR code, joins rewards, chooses a service from a branded Cut Catalog,
            and the shop owner can see which cuts, products, and campaigns performed best over the quarter.
          </p>
        </div>

        <div className="dashboard-mock">
          <div className="dashboard-header">
            <span></span><span></span><span></span>
          </div>
          <div className="metric-row">
            <div><small>Members</small><strong>148</strong></div>
            <div><small>Repeat Visits</small><strong>62%</strong></div>
          </div>
          <div className="chart-bars">
            <span style={{ height: '42%' }}></span>
            <span style={{ height: '68%' }}></span>
            <span style={{ height: '54%' }}></span>
            <span style={{ height: '82%' }}></span>
            <span style={{ height: '73%' }}></span>
          </div>
          <p>Top service: Taper Fade + Beard Lineup</p>
        </div>
      </div>
    </section>
  );
}

function BrandVideos() {
  return (
    <section className="brand-video-section shell">
      <div className="section-heading">
        <p className="eyebrow">Division brand energy</p>
        <h2>Animated brand assets can make the site feel alive.</h2>
      </div>

      <div className="video-grid">
        <video src={`${ASSET}merge-hero.mp4`} muted autoPlay loop playsInline />
        <video src={`${ASSET}elevate-hero.mp4`} muted autoPlay loop playsInline />
        <video src={`${ASSET}vista-hero.mp4`} muted autoPlay loop playsInline />
      </div>
    </section>
  );
}

function ThirdPartyCosts() {
  return (
    <section className="section shell third-party">
      <p className="eyebrow">Outside costs</p>
      <h2>Third-party fees are additional.</h2>
      <p>
        The weekly membership covers Marinia Group strategy, design support, hosting management, updates,
        customer capture support, analytics review, and eligible bookkeeping support. Outside vendor costs are not included.
      </p>

      <div className="cost-list">
        {costItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section shell contact" id="contact">
      <div className="contact-card">
        <img src={`${ASSET}marinia-logo.png`} alt="Marinia Group logo" />
        <p className="eyebrow">Start with a discovery call</p>
        <h2>Let’s identify the first growth system your business needs.</h2>
        <p>
          We can begin with a website, a lead capture form, a loyalty concept, a customer dashboard,
          a lookbook, or bookkeeping support.
        </p>
        <a href="https://calendly.com/studio-mergemads/30min" target="_blank" rel="noopener noreferrer" className="button primary">
          <CalendarClock size={18} /> Book a Discovery Call
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="section shell intro">
          <p className="eyebrow">The Marinia Group model</p>
          <h2>Business growth membership for the businesses that usually get priced out.</h2>
          <p className="wide-copy">
            Many local businesses need more than a website. They need brand presence, customer capture, simple analytics,
            digital follow-up, and financial organization. Marinia Group makes those assets accessible without requiring
            a large upfront project fee.
          </p>
        </section>
        <DivisionCards />
        <Memberships />
        <AutoPay />
        <Services />
        <UseCase />
        <BrandVideos />
        <ThirdPartyCosts />
        <Contact />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Marinia Group, LLC. All rights reserved.</p>
        <p>Marinia Group • MergeMADS • Elevate AI Solutions • Vista Insurance & Financial Services</p>
      </footer>
    </>
  );
}
