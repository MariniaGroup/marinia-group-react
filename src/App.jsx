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
  FileText,
  Gauge,
  HeartHandshake,
  Laptop,
  LineChart,
  Megaphone,
  MonitorSmartphone,
  QrCode,
  ReceiptText,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
  Workflow
} from 'lucide-react';
import './styles.css';

const ASSET = '/assets/';
const MEMBER_ASSET = `${ASSET}membership/`;

const stripeLinks = {
  onboarding: "https://buy.stripe.com/9B68wP7Ad6wY17C39ufYY00",
  smartMarketing: "https://buy.stripe.com/aFa4gzaMpf3u7w05hCfYY01",
  smartBooks: "https://buy.stripe.com/9B67sLdYB2gI9E85hCfYY02",
  payrollBooks: "https://buy.stripe.com/bJe9ATcUx9Ja2bG5hCfYY03",
  payrollAddon: "https://buy.stripe.com/cNi5kD9Il9Ja2bGcK4fYY04",
  smartGrowth: "https://buy.stripe.com/28E5kD5s5cVmcQk8tOfYY05",
  smartSystems: "https://buy.stripe.com/7sY9AT1bPg7y3fK8tOfYY06",
  customerPortal: "https://billing.stripe.com/p/login/9B68wP7Ad6wY17C39ufYY00",
  calendly: "https://calendly.com/s-sambrano"
};

const tiers = [
  {
    key: 'smartMarketing',
    name: 'Smart Marketing Member',
    badge: 'Best for visibility',
    price: '$100',
    cadence: '/week',
    image: 'smm.png',
    short:
      'Marketing management, brand presence, website support, AI-powered commercials, content, static ads, and basic business systems engineering.',
    includes: [
      'Brand image support',
      'Phased website/landing page support',
      'Social content support',
      'Static ad support',
      'Basic loyalty program planning',
      'Basic workflow and web engineering guidance'
    ]
  },
  {
    key: 'smartBooks',
    name: 'Smart Books Member',
    badge: 'Best for books',
    price: '$150',
    cadence: '/week',
    image: 'sbm.png',
    short:
      'Marketing management, QuickBooks bookkeeping support, tax-readiness organization, and business systems engineering.',
    includes: [
      'Everything in Smart Marketing',
      'QuickBooks bookkeeping support',
      'Transaction organization',
      'Reconciliation support',
      'Monthly bookkeeping summaries',
      'Tax-readiness records'
    ]
  },
  {
    key: 'payrollBooks',
    name: 'Smart Payroll & Books Member',
    badge: 'Best for payroll + books',
    price: '$175',
    cadence: '/week',
    image: 'spbm.png',
    short:
      'Marketing management, bookkeeping support, payroll coordination, worker tracking, and systems engineering support.',
    includes: [
      'Everything in Smart Books',
      'Payroll coordination support',
      'Worker tracking',
      'Payroll records organization',
      'Basic payroll reports',
      'Payroll Worker Add-On required per worker'
    ]
  },
  {
    key: 'smartGrowth',
    name: 'Smart Growth Member',
    badge: 'Best for growth',
    price: '$250',
    cadence: '/week',
    image: 'sgm.png',
    short:
      'Marketing management, growth strategy, loyalty planning, lead tracking, analytics, and enhanced systems support.',
    includes: [
      'Enhanced marketing management',
      'Campaign planning',
      'Lead tracking and funnel support',
      'Basic analytics and KPI review',
      'Basic bookkeeping support',
      'Enhanced web and workflow engineering'
    ],
    featured: true
  },
  {
    key: 'smartSystems',
    name: 'Smart Systems Member',
    badge: 'Best for automation',
    price: '$350',
    cadence: '/week',
    image: 'ssm.png',
    short:
      'Advanced marketing, bookkeeping, dashboards, automation planning, data organization, and web/app engineering support.',
    includes: [
      'Advanced marketing management',
      'Dashboards and KPI support',
      'Data organization',
      'Workflow automation guidance',
      'Web/app development support',
      'Customer retention systems'
    ]
  }
];

const comparisonRows = [
  ['Weekly price', '$100', '$150', '$175 + $3/worker', '$250', '$350'],
  ['Marketing management', true, true, true, true, true],
  ['Brand + website support', true, true, true, true, true],
  ['Social content support', true, true, true, true, true],
  ['Static ad support', true, true, true, true, true],
  ['Loyalty / retention planning', 'Basic', 'Basic', 'Basic', true, true],
  ['Business systems engineering', 'Basic', 'Basic', 'Basic', 'Enhanced', 'Advanced'],
  ['Web development support', 'Basic', 'Basic', 'Basic', 'Enhanced', 'Advanced'],
  ['App / portal planning', false, false, false, 'Planning', true],
  ['Bookkeeping support', false, true, true, 'Basic', true],
  ['Reconciliation support', false, true, true, 'Basic', true],
  ['Payroll coordination', false, false, true, 'Add-on', 'Add-on'],
  ['Payroll worker add-on', false, false, '$3/worker/week', 'Available', 'Available'],
  ['Campaign planning', false, false, false, true, true],
  ['Lead tracking / CRM guidance', 'Basic', 'Basic', 'Basic', true, true],
  ['Dashboards / KPI support', false, false, false, 'Basic', true],
  ['Automation planning', false, false, false, 'Basic', true],
  ['Monthly smart business review', false, false, false, true, true]
];

const serviceCards = [
  {
    icon: Megaphone,
    title: 'Marketing Management',
    text: 'Brand, content, static ads, campaigns, lookbooks, CTAs, and consistent promotional support.'
  },
  {
    icon: MonitorSmartphone,
    title: 'Web + App Development',
    text: 'Phased website, landing page, portal, app, customer intake, and loyalty system planning.'
  },
  {
    icon: Database,
    title: 'Data + Software Engineering',
    text: 'Workflow design, data organization, reporting structures, dashboards, and automation guidance.'
  },
  {
    icon: WalletCards,
    title: 'Bookkeeping Support',
    text: 'QuickBooks bookkeeping support, transaction organization, reconciliation help, and record readiness.'
  },
  {
    icon: Users,
    title: 'Payroll Coordination',
    text: 'Worker tracking, payroll entry support, due-date coordination, and payroll record organization.'
  },
  {
    icon: HeartHandshake,
    title: 'Loyalty + Retention Systems',
    text: 'QR signups, loyalty program planning, customer follow-up flows, and retention system support.'
  }
];


const companyLinks = [
  {
    name: 'Merge Marketing & Design Studio',
    url: 'https://www.mergemads.com/',
    asset: 'merge-banner.png',
    label: 'Marketing, branding, websites, lookbooks, and visual campaigns',
    text: 'MergeMADS supports the creative side of the ecosystem: brand identity, social content, commercials, websites, ads, product visuals, digital lookbooks, pitch materials, and campaign-ready marketing assets.'
  },
  {
    name: 'Elevate AI Solutions',
    url: 'https://www.elevate-aisolutions.com/',
    asset: 'elevate-banner.png',
    label: 'AI, data, cloud, automation, and smart systems',
    text: 'Elevate AI Solutions supports the technical side: data/software engineering, workflow automation planning, dashboards, portals, AI readiness, cloud architecture, and smart business system design.'
  },
  {
    name: 'Vista Insurance & Financial Services',
    url: 'https://www.vistaifs.com/',
    asset: 'vista-logo.png',
    label: 'Bookkeeping support, payroll coordination, financial records, and business readiness',
    text: 'Vista IFS supports the financial operations side: QuickBooks bookkeeping support, payroll coordination, record organization, reporting, tax-readiness records, and future insurance/financial service expansion.'
  }
];

const values = [
  ['Smart systems', 'We help small businesses build repeatable processes, customer flows, websites, dashboards, and systems that can grow over time.'],
  ['Practical affordability', 'We structure phased weekly support so businesses can access professional services without one large upfront project fee.'],
  ['Worldbuilding mindset', 'We connect everyday business operations to a bigger vision: smarter workplaces, stronger communities, and smart-city readiness.'],
  ['Clarity and accountability', 'We use clear pricing, customer portal billing, defined weekly dues, and written expectations so members know what is included.'],
  ['Data-informed decisions', 'We help businesses organize records, track performance, understand customers, and improve through analytics when data is available.'],
  ['Creative excellence', 'We believe brand image, storytelling, design, and customer experience are part of business infrastructure, not decoration.']
];

const outsideCosts = [
  'QuickBooks fees',
  'QuickBooks Payroll fees',
  'Ad spend',
  'Domains',
  'Hosting',
  'Software subscriptions',
  'Printing',
  'Licensed images/music',
  'Shipping',
  'Payment processor fees',
  'Third-party platforms'
];

function CheckValue({ value }) {
  if (value === true) return <CheckCircle2 className="table-check" size={18} aria-label="Included" />;
  if (value === false) return <span className="dash">—</span>;
  return <span className="table-text">{value}</span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav shell">
        <a className="brand" href="#top" onClick={close}>
          <img src={`${ASSET}marinia-logo.png`} alt="Marinia Group logo" />
          <span>
            <strong>Marinia Group</strong>
            <small>Smart Business Network</small>
          </span>
        </a>

        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          ☰
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#top" onClick={close}>Home</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#mission" onClick={close}>Mission</a>
          <a href="#companies" onClick={close}>Companies</a>
          <a href="#network" onClick={close}>Network</a>
          <a href="#comparison" onClick={close}>Compare</a>
          <a href="#policies" onClick={close}>Terms</a>
          <a href="#manage" onClick={close}>Manage</a>
          <a href="#join" className="nav-cta" onClick={close}>Join</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Marinia Smart Business Network</p>
        <h1>Professional business growth services without the large upfront price tag.</h1>
        <p className="lead">
          Marinia Group helps businesses grow through weekly access to marketing management, web development,
          app design, software engineering, data science, bookkeeping, payroll, analytics,
          loyalty systems, business plan development, and smart business advisory support depending on the selected tier. Join our Smart Business Network
          to access member discounts on business services and flexible payment plans.
        </p>

        <div className="hero-actions">
          <a href="#join" className="button primary">
            Join the Network <ArrowRight size={18} />
          </a>
          <a href="#comparison" className="button secondary">
            Compare Tiers
          </a>
        </div>

        <div className="proof-strip" aria-label="Marinia Group service areas">
          <span>Marketing</span>
          <span>Bookkeeping</span>
          <span>Engineering</span>
          <span>Analytics</span>
          <span>Loyalty Systems</span>
        </div>
      </div>

      <div className="hero-stage hero-stage-image" aria-label="Marinia Group smart city data network hero">
        <img
          className="hero-city-image"
          src="/assets/mg-hero.png"
          alt="Marinia Group smart city data network hero"
        />
      </div>
    </section >
  );
}


function AboutMarinia() {
  return (
    <section className="section shell about" id="about">
      <div className="about-grid">
        <div>
          <p className="eyebrow">Parent company</p>
          <h2>Marinia Group is the parent company behind a connected business-growth ecosystem.</h2>
          <p className="lead">
            Marinia Group brings together marketing, financial operations, data/software engineering, web development,
            app planning, workflow design, and smart business advisory support through three operating brands: Merge Marketing & Design Studio,
            Elevate AI Solutions, and Vista Insurance & Financial Services.
          </p>
          <p className="lead">
            The Marinia Smart Business Network is the membership model that gives qualified businesses phased access to that ecosystem through
            weekly service support instead of a large one-time project fee.
          </p>
        </div>
        <div className="parent-card">
          <img src={`${ASSET}marinia-logo.png`} alt="Marinia Group logo" />
          <h3>Engineering smarter systems for work, wellness, wealth, and worldbuilding.</h3>
          <p>
            Marinia Group helps businesses become smarter, more organized, more visible, and more ready for the future through practical systems,
            stronger customer experiences, and technology-supported operations.
          </p>
        </div>
      </div>
    </section>
  );
}

function MissionVisionValues() {
  return (
    <section className="section shell mission" id="mission">
      <div className="section-heading wide">
        <p className="eyebrow">Mission, vision, and values</p>
        <h2>We build the business systems behind smarter communities.</h2>
      </div>

      <div className="mission-grid">
        <article>
          <Sparkles />
          <h3>Mission</h3>
          <p>
            To help small businesses, organizations, and community builders access professional marketing, financial operations,
            web/app development, data engineering, workflow design, and smart systems support in a phased and affordable way.
          </p>
        </article>
        <article>
          <LineChart />
          <h3>Vision</h3>
          <p>
            To become a cross-functional parent company that helps everyday businesses adopt smart-city best practices, build stronger
            customer relationships, organize their operations, and participate in future-ready economic development.
          </p>
        </article>
        <article>
          <Workflow />
          <h3>Operating philosophy</h3>
          <p>
            A smarter business is not just a business with a website. It has a brand system, customer journey, loyalty pathway,
            data structure, workflow, reporting rhythm, and financial recordkeeping foundation.
          </p>
        </article>
      </div>

      <div className="values-grid">
        {values.map(([title, text]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CompanyEcosystem() {
  return (
    <section className="division-section shell" id="companies">
      <div className="section-heading wide">
        <p className="eyebrow">Our companies</p>
        <h2>Three brands work together under Marinia Group.</h2>
        <p>
          Marinia Group is the parent company. The brands below represent the service areas that power the Marinia Smart Business Network.
          Standard market rates apply at each brand for non-Smart Business Network members. Click each card to visit the brand.
        </p>
      </div>

      <div className="company-grid">
        {companyLinks.map((company) => (
          <a className="company-card" href={company.url} target="_blank" rel="noopener noreferrer" key={company.name}>
            <img src={`${ASSET}${company.asset}`} alt={`${company.name} logo`} />
            <span className="company-label">{company.label}</span>
            <h3>{company.name}</h3>
            <p>{company.text}</p>
            <strong>Visit website <ArrowRight size={16} /></strong>
          </a>
        ))}
      </div>
    </section>
  );
}

function NetworkIntro() {
  return (
    <section className="section shell intro" id="network">
      <div className="section-heading wide">
        <p className="eyebrow">What members receive</p>
        <h2>One weekly membership. Multiple business functions working together.</h2>
        <p>
          The Marinia Smart Business Network is not a passive community subscription. It is an ongoing service membership
          designed to give qualified businesses phased access to the kind of brand, finance, website, data, software,
          and operational support that often costs thousands upfront when purchased as separate projects.
        </p>
      </div>
      <div className="value-grid">
        {serviceCards.map(({ icon: Icon, title, text }) => (
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

function DivisionCards() {
  return (
    <section className="division-section shell" id="divisions">
      <div className="section-heading">
        <p className="eyebrow">One parent company. Three service strengths.</p>
        <h2>Built from Marinia Group's creative, technical, and financial ecosystem.</h2>
      </div>

      <div className="division-grid">
        <article className="division-card merge">
          <img src={`${ASSET}merge-banner.png`} alt="Merge Marketing and Design Studio logo" />
          <h3>Merge Marketing & Design Studio</h3>
          <p>Brand identity, Ai-powered commercials, websites, lookbooks, social media, static ads, product mockups, customer-facing assets, and visual campaigns.</p>
        </article>

        <article className="division-card elevate">
          <img src={`${ASSET}elevate-banner.png`} alt="Elevate AI Solutions logo" />
          <h3>Elevate AI Solutions</h3>
          <p>Data/software engineering, AWS planning, dashboards, automation planning, loyalty systems, customer portals, and smart workflow design.</p>
        </article>

        <article className="division-card vista">
          <img src={`${ASSET}vista-logo.png`} alt="Vista Insurance and Financial Services logo" />
          <h3>Vista Insurance & Financial Services</h3>
          <p>QuickBooks bookkeeping support, financial records organization, payroll coordination support, reporting, and tax-readiness records.</p>
        </article>
      </div>
    </section>
  );
}

function Memberships() {
  return (
    <section className="section shell memberships" id="memberships">
      <div className="section-heading wide">
        <p className="eyebrow">Membership tiers</p>
        <h2>Weekly pricing that combines marketing, operations, and engineering support.</h2>
        <p>
          Membership begins with a separate $300 onboarding retainer. Weekly autopay starts in Week 2. Members complete an initial four weekly dues commitment after onboarding.
          Need a flexible payment plan on the $300 onboarding retainer? A Buy Now, Pay Later option is available at checkout for eligible customers. Approval and payment terms are handled by Klarna.
        </p>
      </div>

      <div className="pricing-grid">
        {tiers.map((plan) => (
          <article key={plan.key} className={`price-card ${plan.featured ? 'featured' : ''}`}>
            <img className="tier-image" src={`${MEMBER_ASSET}${plan.image}`} alt={`${plan.name} product graphic`} />
            <div className="price-top">
              <p className="tier">{plan.badge}</p>
              {plan.featured && <span className="badge">Popular</span>}
            </div>
            <h3>{plan.name}</h3>
            <div className="price-line">
              <strong>{plan.price}</strong><span>{plan.cadence}</span>
            </div>
            <p className="plan-short">{plan.short}</p>
            <ul>
              {plan.includes.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={17} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href={stripeLinks[plan.key]} className="button full" aria-label={`Stripe placeholder for ${plan.name}`}>
              Choose Tier <ChevronRight size={17} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function ComparisonTable() {
  return (
    <section className="section shell comparison" id="comparison">
      <div className="section-heading wide">
        <p className="eyebrow">Side-by-side comparison</p>
        <h2>Compare what is included in each tier.</h2>
        <p>
          Use this table to choose the best fit. Higher tiers include more technical support, data/engineering, dashboards, automation planning, bookkeeping, and business strategy.
        </p>
      </div>

      <div className="comparison-wrap">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Smart Marketing</th>
              <th>Smart Books</th>
              <th>Payroll & Books</th>
              <th>Smart Growth</th>
              <th>Smart Systems</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map(([feature, ...values]) => (
              <tr key={feature}>
                <td>{feature}</td>
                {values.map((value, index) => (
                  <td key={`${feature}-${index}`}>
                    <CheckValue value={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mobile-tier-list" aria-label="Mobile membership comparison">
        {tiers.map((tier) => (
          <article key={`mobile-${tier.key}`} className="mobile-tier-card">
            <h3>{tier.name}</h3>
            <p className="mobile-price">{tier.price}<span>{tier.cadence}</span></p>
            <p>{tier.short}</p>
            <ul>
              {tier.includes.map((item) => <li key={item}>✓ {item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function OnboardingAndStripe() {
  return (
    <section className="section shell join" id="join">
      <div className="join-grid">
        <article className="join-card retainer">
          <img src={`${MEMBER_ASSET}mg-retainer.png`} alt="Marinia onboarding retainer product graphic" />
          <p className="eyebrow">Start here</p>
          <h2>$300 Onboarding Retainer</h2>
          <p>
            The onboarding retainer covers intake review, business review, brand review, setup, project planning, membership activation,
            and placement in the production schedule. It is separate from weekly dues. Need flexibility on the onboarding retainer?
            Buy Now, Pay Later options are available via Klarna at checkout.
          </p>
          <a href={stripeLinks.onboarding} className="button primary full">Pay Onboarding Retainer</a>
        </article>

        <article className="join-card" id="stripe-links">
          <p className="eyebrow">Stripe link placeholders</p>
          <h2>Add your live Stripe links here.</h2>
          <p>
            Replace the placeholder values in <strong>stripeLinks</strong> at the top of <strong>src/App.jsx</strong> with the live Stripe payment links for each product and the Customer Portal link.
          </p>
          <div className="placeholder-list">
            <span>#STRIPE_ONBOARDING_RETAINER_PAYMENT_LINK</span>
            <span>#STRIPE_SMART_MARKETING_WEEKLY_LINK</span>
            <span>#STRIPE_SMART_BOOKS_WEEKLY_LINK</span>
            <span>#STRIPE_SMART_PAYROLL_BOOKS_WEEKLY_LINK</span>
            <span>#STRIPE_PAYROLL_WORKER_ADDON_WEEKLY_LINK</span>
            <span>#STRIPE_CUSTOMER_PORTAL_LINK</span>
          </div>
        </article>
      </div>
    </section>
  );
}

function PayrollAddon() {
  return (
    <section className="section shell addon">
      <div className="addon-card">
        <img src={`${MEMBER_ASSET}payroll.png`} alt="Payroll Worker Add-On product graphic" />
        <div>
          <p className="eyebrow">Payroll add-on</p>
          <h2>Payroll Worker Add-On: $3 per worker / week</h2>
          <p>
            Members using payroll coordination should select one Payroll Worker Add-On for each employee or contractor who needs support.
            Example: 3 workers = quantity 3. QuickBooks Payroll fees and third-party payroll software fees are not included.
          </p>
          <a href={stripeLinks.payrollAddon} className="button secondary">Add Payroll Worker Product</a>
        </div>
      </div>
    </section>
  );
}

function PaymentTerms() {
  return (
    <section className="section shell policies" id="policies">
      <div className="section-heading wide">
        <p className="eyebrow">Membership terms</p>
        <h2>Clear payment and cancellation rules.</h2>
      </div>

      <div className="policy-grid">
        <article>
          <ReceiptText />
          <h3>Onboarding retainer</h3>
          <p>The $300 onboarding retainer is paid in Week 1 and is separate from weekly dues. Buy Now, Pay Later options are avaliable via Klarna at checkout.</p>
        </article>
        <article>
          <CreditCard />
          <h3>Weekly autopay</h3>
          <p>Weekly dues begin in Week 2 through autopay. Weekly dues are non-refundable and cover the applicable weekly service period.</p>
        </article>
        <article>
          <CalendarClock />
          <h3>Four weekly dues commitment</h3>
          <p>Members complete four weekly dues payments after onboarding. Cancelling before four weekly dues are paid may result in an early cancellation fee.</p>
        </article>
        <article>
          <ShieldCheck />
          <h3>Portal cancellation</h3>
          <p>Members cancel future weekly dues through the secure Customer Portal. Email cancellation requests are not the official cancellation method.</p>
        </article>
      </div>
    </section>
  );
}

function SmartCityUseCase() {
  return (
    <section className="section shell use-case">
      <div className="use-case-card">
        <div>
          <p className="eyebrow">Loyalty + retention example</p>
          <h2>A smarter business becomes part of a smarter city.</h2>
          <p>
            A customer scans a QR code, joins a loyalty program, books a service, receives follow-up offers, and the business owner can review leads, repeat visits,
            customer segments, and campaign performance. This is the kind of engineering-backed customer system members can build over time.
          </p>
        </div>

        <div className="dashboard-mock">
          <div className="dashboard-header"><span></span><span></span><span></span></div>
          <div className="metric-row">
            <div><small>New Members</small><strong>148</strong></div>
            <div><small>Repeat Visits</small><strong>62%</strong></div>
          </div>
          <div className="chart-bars">
            <span style={{ height: '42%' }}></span>
            <span style={{ height: '68%' }}></span>
            <span style={{ height: '54%' }}></span>
            <span style={{ height: '82%' }}></span>
            <span style={{ height: '73%' }}></span>
          </div>
          <p>Dashboard placeholder: loyalty, leads, content, and business performance.</p>
        </div>
      </div>
    </section>
  );
}

function OutsideCosts() {
  return (
    <section className="section shell third-party">
      <p className="eyebrow">Outside costs</p>
      <h2>Third-party costs are not included in weekly dues.</h2>
      <p>
        Membership dues cover Marinia Group services. QuickBooks fees, ad spend, software, printing, hosting, platform costs, and outside vendor expenses are not included unless specifically stated in writing.
      </p>
      <div className="cost-list">
        {outsideCosts.map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}

function ManageMembership() {
  return (
    <section className="section shell manage" id="manage">
      <div className="manage-card">
        <Gauge />
        <p className="eyebrow">Member billing portal</p>
        <h2>Manage or cancel membership.</h2>
        <p>
          Members can update payment methods, view receipts, and cancel future weekly dues through the secure Customer Portal. Add the live Stripe Customer Portal link below when ready.
        </p>
        <a href={stripeLinks.customerPortal} className="button primary">Manage or Cancel Membership</a>
      </div>
    </section>
  );
}

function PolicyPages() {
  return (
    <section className="section shell policy-pages" id="policy-pages">
      <div className="section-heading">
        <p className="eyebrow">Required website pages</p>
        <h2>Policy page placeholders for Stripe and customers.</h2>
      </div>
      <div className="policy-link-grid">
        <a href="#privacy"><FileText /> Privacy Policy Placeholder</a>
        <a href="#terms"><BookOpenCheck /> Terms of Service Placeholder</a>
        <a href="#refund"><RefreshCcw /> Refund & Cancellation Policy Placeholder</a>
        <a href="#support"><Laptop /> Support Page Placeholder</a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section shell contact" id="contact">
      <div className="contact-card">
        <img src={`${ASSET}marinia-logo.png`} alt="Marinia Group logo" />
        <p className="eyebrow">Need help choosing?</p>
        <h2>Start with the onboarding retainer or book a discovery call.</h2>
        <p>
          Buy Now, Pay Later options are available via Klarna at checkout. Your personal Success Manager will reach out within 1 business day to prioritize the first 30-day roadmap for your brand, website, bookkeeping, loyalty system, or data workflow.
        </p>
        <div className="hero-actions center">
          <a href={stripeLinks.onboarding} className="button primary">Join the Network</a>
          <a href={stripeLinks.calendly} target="_blank" rel="noopener noreferrer" className="button secondary"><CalendarClock size={18} /> Book a Discovery Call</a>
        </div>
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
        <AboutMarinia />
        <MissionVisionValues />
        <CompanyEcosystem />
        <NetworkIntro />
        <Memberships />
        <ComparisonTable />
        <OnboardingAndStripe />
        <PayrollAddon />
        <PaymentTerms />
        <SmartCityUseCase />
        <OutsideCosts />
        <ManageMembership />
        <PolicyPages />
        <Contact />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Marinia Group, LLC. All rights reserved.</p>
        <p>Engineering smarter systems for work, wellness, wealth, and worldbuilding.</p>
        <p>Support: support@mariniagroup.com • Membership: members@mariniagroup.com • Billing: billing@mariniagroup.com</p>
      </footer>
    </>
  );
}
