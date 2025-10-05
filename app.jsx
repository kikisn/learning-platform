import React, { useState } from 'react';
import { BookOpen, CheckCircle, Circle, ChevronDown, ChevronUp, ExternalLink, Code, Rocket, Lock, Globe, ShoppingCart, User, Layers } from 'lucide-react';

// Lucide React icons loaded via CDN
const { 
  BookOpen, CheckCircle, Circle, ChevronDown, ChevronUp, 
  ExternalLink, Code, Rocket, Lock, Globe, ShoppingCart, User, Layers 
} = lucideReact;

function WebDevLearningPlatform() {
  const [expandedModule, setExpandedModule] = useState('foundations'); // Start with first module open
  const [expandedLesson, setExpandedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [activeTab, setActiveTab] = useState('lessons'); // Start on lessons tab

  const learningPath = [
    {
      id: 'foundations',
      title: 'Understanding E-commerce Architecture',
      icon: <Layers className="w-6 h-6" />,
      duration: '2-3 hours',
      description: 'Learn how modern e-commerce sites work and the different integration approaches',
      lessons: [
        {
          id: 'foundations-1',
          title: 'Static vs Dynamic Websites',
          content: `Your Vino Arsan site is currently "static" - HTML, CSS, and JavaScript files. To add shopping capabilities, you need to understand the difference:

**Static Sites (What you have now):**
- Just files served directly to users
- No database, no user accounts, no real-time updates
- Fast, simple, but limited functionality

**Dynamic Sites (What you need):**
- Server-side code that generates pages on-demand
- Database to store products, orders, customers
- User authentication and personalization

**The Good News:** You don't have to rebuild everything! You have options:

1. **Headless Commerce** - Keep your beautiful frontend, connect to Shopify's backend via API
2. **Platform Integration** - Convert to Shopify theme, use their infrastructure
3. **Hybrid Approach** - Static marketing pages, link to hosted store`,
          philippineContext: 'For Philippine wine sales, you need FDA compliance, GCash integration, and mobile-first design.',
          resources: [
            { title: 'Jamstack Architecture Explained', url: 'https://jamstack.org/what-is-jamstack/' },
            { title: 'Headless Commerce 101', url: 'https://www.shopify.com/enterprise/headless-commerce' }
          ],
          practical: 'Decision Point: Which approach fits your skills and client needs?'
        },
        {
          id: 'foundations-2',
          title: 'How Shopify Works (Philippine Edition)',
          content: `Shopify is a complete e-commerce platform. Think of it as "WordPress for online stores" but more powerful.

**What Shopify Handles:**
- Product catalog & inventory
- Shopping cart functionality
- Checkout & payment processing (via PayMongo in Philippines!)
- Order management
- Customer accounts
- Analytics & reporting
- Hosting & security

**Your Integration Options:**

**Option 1: Shopify Buy Button**
- Easiest! Add a script tag to your HTML
- Keep your entire design
- Products open in overlay/modal
- 5-minute setup

**Option 2: Storefront API (Headless)**
- You build the frontend (like you did)
- Fetch products via JavaScript
- More control, more complexity
- Requires JavaScript API knowledge

**Option 3: Custom Theme**
- Convert your design to Liquid templates
- Full Shopify integration
- Most powerful, steepest learning curve`,
          philippineContext: 'Remember: Shopify Payments NOT available in PH. You MUST use PayMongo or Xendit for payments. Also need FDA license for alcohol!',
          resources: [
            { title: 'Shopify Buy Button SDK', url: 'https://shopify.dev/docs/api/custom-storefronts/buy-button-js' },
            { title: 'PayMongo Integration Guide', url: 'https://developers.paymongo.com/docs' }
          ],
          practical: 'Action: Set up a free Shopify Partner account to test in a development store'
        }
      ]
    },
    {
      id: 'shopify',
      title: 'Shopify Integration (PH Edition)',
      icon: <ShoppingCart className="w-6 h-6" />,
      duration: '4-6 hours',
      description: 'Learn to integrate Shopify with PayMongo for Philippine e-commerce',
      lessons: [
        {
          id: 'shopify-1',
          title: 'Setting Up Your Shopify Store',
          content: `Let's get your Shopify environment ready:

**Step 1: Create Shopify Partner Account**
- Go to shopify.com/partners
- Sign up (free)
- You get unlimited development stores
- Access to all apps and themes

**Step 2: Create a Development Store**
- From Partners dashboard → Stores → Add Store
- Choose "Development store"
- Fill in basic info (you can change later)
- Enable "Storefront API" in Settings

**Step 3: Add Your Products**
In your dev store:
- Products → Add product
- For Vino Arsan, add each wine
- Include: title, description, price in PESOS (₱), images
- Create collections (Red Wines, White Wines, etc.)

**Important for Alcohol Sales in Philippines:**
- Enable age verification apps
- Get FDA License to Operate (REQUIRED!)
- Set up PayMongo for payments (Shopify Payments not available in PH)
- Consider GCash integration (very popular in Philippines)`,
          philippineContext: 'FDA compliance is NON-NEGOTIABLE. Budget ₱8,000-15,000 for FDA LTO. Also need DTI registration and Mayor\'s permit.',
          resources: [
            { title: 'Shopify Partner Signup', url: 'https://www.shopify.com/partners' },
            { title: 'FDA Philippines', url: 'https://www.fda.gov.ph/' }
          ],
          practical: 'Create your partner account and dev store now (takes 10 minutes). Add at least 3 wine products.'
        },
        {
          id: 'shopify-2',
          title: 'PayMongo Integration (Required for PH)',
          content: `Since Shopify Payments isn't available in the Philippines, you MUST use a third-party payment processor. PayMongo is the best option:

**Why PayMongo:**
- Official Shopify partner
- Supports GCash (20+ million users in PH!)
- Credit/debit cards
- GrabPay, Maya/PayMaya
- Bank transfers via InstaPay

**Setup Steps:**

1. **Sign up at paymongo.com**
   - Business verification required (DTI, valid ID)
   - Takes 3-5 business days
   - Confirm you're selling wine during application

2. **Install PayMongo in Shopify:**
   - Shopify Admin → Apps → Visit Shopify App Store
   - Search "PayMongo"
   - Click "Add app"
   - Follow authentication flow

3. **Configure Payment Methods:**
   - Enable: Cards + GCash + GrabPay (minimum)
   - Consider adding bank transfers
   - Set up test mode first

**Fees:**
- Cards: 3.5% + ₱15 per transaction
- E-wallets (GCash, etc.): 2.5% + ₱15
- No setup fees, no monthly fees

**CRITICAL:** Confirm PayMongo accepts alcohol sales during your merchant application!`,
          philippineContext: 'GCash is ESSENTIAL in Philippines - 40%+ of online shoppers prefer it. Don\'t launch without GCash support!',
          resources: [
            { title: 'PayMongo for Shopify', url: 'https://www.paymongo.com/shopify' },
            { title: 'PayMongo Documentation', url: 'https://developers.paymongo.com/' }
          ],
          practical: 'Sign up for PayMongo account today - verification takes 3-5 days, so start early!'
        },
        {
          id: 'shopify-3',
          title: 'Buy Button Integration (Quickest Path)',
          content: `This is the fastest way to add e-commerce to your existing Vino Arsan HTML site:

**How It Works:**
1. Generate Buy Buttons in Shopify for each product
2. Copy the embed code
3. Paste into your HTML where products appear
4. Shopify handles cart, checkout, and payments via PayMongo

**Step-by-Step:**

1. In Shopify Admin:
   - Sales Channels → Online Store → Preferences
   - Enable "Buy Button" channel

2. Create Buy Button:
   - Sales Channels → Buy Button → Create Buy Button
   - Select products or collections
   - Customize styling to match Vino Arsan aesthetic
   - Copy the generated code

3. Add to Your HTML:
   Replace your current "Add to Cart" button with:
   
   <div id="product-component-123"></div>
   <script type="text/javascript">
   // Paste Shopify's Buy Button code here
   // It will create a styled button automatically
   </script>

**Pros:**
✅ Works in 5 minutes
✅ Shopify + PayMongo handle all payments
✅ GCash checkout included
✅ Keep your atomic-age design
✅ Mobile-responsive automatically

**Cons:**
❌ Checkout happens on Shopify domain (not vinoarsan.com)
❌ Some Shopify branding
❌ Less customization of checkout flow`,
          philippineContext: 'Buy Button is perfect for soft launch! Get sales flowing while you learn advanced integration. Filipino customers are used to redirects for payment.',
          resources: [
            { title: 'Buy Button Setup Guide', url: 'https://help.shopify.com/en/manual/online-sales-channels/buy-button' }
          ],
          practical: 'Add Buy Button to ONE product on your Vino Arsan site today. Test the full checkout flow.'
        }
      ]
    },
    {
      id: 'ph-legal',
      title: 'Philippine Legal Compliance',
      icon: <Lock className="w-6 h-6" />,
      duration: '3-4 hours',
      description: 'CRITICAL: Legal requirements for selling wine online in the Philippines',
      lessons: [
        {
          id: 'ph-legal-1',
          title: 'FDA License & Alcohol Regulations',
          content: `⚠️ ATTENTION: This is the MOST IMPORTANT lesson for Vino Arsan!

**The Reality:**
Online alcohol sales in the Philippines exist in a **legal gray area**. Here's what you MUST know:

**Current Legal Status (2025):**
- NO explicit law banning online alcohol sales
- But NO clear regulations permitting it either
- Enforcement focuses on preventing sales to minors
- Major platforms (Lazada, Shopee) DO sell alcohol online

**FDA REQUIREMENTS (Mandatory!):**

Your friend MUST have:
1. **FDA License to Operate (LTO)**
   - Required to legally sell alcohol
   - Cost: ₱8,000-15,000
   - Valid for 2 years
   - Processing: 2-4 weeks

2. **Product Registration** (for imported wines)
   - Each wine must be FDA-registered
   - Cost: ₱3,000-5,000 per product
   - Certificate of Free Sale from origin country
   - Lab analysis results required

**Age Verification Requirements:**
- Cannot sell to anyone under 18 (Presidential Decree No. 1619)
- Your popup is NOT legally sufficient!
- Must verify ID at checkout AND delivery
- Keep records of age verification

**What Your Website MUST Have:**
✅ "For 18+ only" on every page
✅ Age verification at checkout (not just popup)
✅ "Drink Responsibly" messaging
✅ Clear shipping restrictions
✅ Terms with alcohol disclaimers`,
          philippineContext: 'Budget ₱10,000-20,000 for legal consultation + FDA license. This is NOT optional - without FDA LTO, you cannot legally sell wine in Philippines!',
          resources: [
            { title: 'FDA Philippines', url: 'https://www.fda.gov.ph/' },
            { title: 'FDA Hotline', url: 'tel:+6328571900' }
          ],
          practical: 'BEFORE building more: Your friend should contact FDA and consult a lawyer. Get FDA LTO application started NOW (takes 2-4 weeks).'
        },
        {
          id: 'ph-legal-2',
          title: 'Business Registration Requirements',
          content: `For Vino Arsan to operate legally, your friend needs these registrations:

**1. DTI Registration (Sole Proprietorship)**
- Register business name online: bnrs.dti.gov.ph
- Cost: ₱1,000-2,000 (regional/national scope)
- Indicate "e-commerce" in line of business
- Valid for 5 years

**2. Mayor's Permit / Business Permit**
- Apply at city's Business Permits Office
- Cost: ₱1,000-10,000+ (varies by city)
- For alcohol: additional requirements
  - Fire Safety Inspection
  - Zoning clearance
- Renewed annually (every January)

**3. BIR Registration**
- Get Tax Identification Number (TIN)
- Register books of accounts
- Get Authority to Print (ATP) receipts
- Cost: ₱500 registration + ₱500 annual
- File taxes quarterly

**4. Barangay Clearance**
- From local barangay hall
- Cost: ₱50-200
- Needed for mayor's permit

**Complete Setup Cost:**
- DTI: ₱1,000-2,000
- Mayor's Permit: ₱1,000-10,000
- BIR: ₱1,000
- FDA LTO: ₱8,000-15,000
- Lawyer consultation: ₱10,000-20,000
- **Total: ₱21,000-48,000**

**Timeline:**
- DTI: 1 day (online)
- BIR: 1 week
- Mayor's Permit: 1-2 weeks
- FDA LTO: 2-4 weeks
- **Total: 4-6 weeks minimum**`,
          philippineContext: 'Many businesses skip FDA license and hope not to get caught. DON\'T DO THIS! If reported, your friend faces fines and business closure. Get properly licensed!',
          resources: [
            { title: 'DTI Business Registration', url: 'https://bnrs.dti.gov.ph/' },
            { title: 'BIR Registration Guide', url: 'https://www.bir.gov.ph/' }
          ],
          practical: 'Create checklist: DTI → Barangay → Mayor → BIR → FDA. Track each step and keep copies of ALL documents.'
        },
        {
          id: 'ph-legal-3',
          title: 'Enhanced Age Verification System',
          content: `Your current popup is NOT enough for legal compliance. You need robust age verification:

**Required Age Verification Layers:**

**Layer 1: Website Popup (You have this)**
- First barrier
- Not legally sufficient alone
- Shows you're making effort

**Layer 2: Checkout Verification**
- Require date of birth entry
- Calculate age in real-time
- Block checkout if under 18
- Require checkbox: "I certify I am 18+"

**Layer 3: ID Verification**
- During account creation OR first purchase
- Customer uploads photo of valid ID
- Manual review before order approval
- Keep records for 2 years

**Layer 4: Delivery Verification (CRITICAL!)**
- Delivery driver MUST verify age
- Check valid government ID
- Cannot hand over to minors
- Driver marks order as "Age Verified"
- No contactless delivery for alcohol

**Implementation for Vino Arsan:**

Add to checkout page:
- Date of birth input field
- Valid ID upload (use Shopify app or custom field)
- Checkbox confirmations

Choose courier that supports:
- Age verification at delivery
- ID checking by drivers
- Proof of delivery with age confirmation

**Shopify Apps for Age Verification:**
- "Age Checker" app
- "Wholesale Club" (has age gate)
- Custom development for ID upload

**Documentation to Keep:**
- ID upload from customer
- Age verification timestamp
- Delivery confirmation with driver signature
- Store for 2 years (legal requirement)`,
          philippineContext: 'In Philippines, drivers may not be trained for age verification. Create simple script: "Good day! This package contains alcohol. I need to verify your age with a valid ID before handing over. May I see your ID please?"',
          resources: [
            { title: 'Age Verification Apps', url: 'https://apps.shopify.com/search?q=age+verification' }
          ],
          practical: 'Test your age verification flow: Try to buy while saying you\'re 17. System should block you at EVERY layer.'
        }
      ]
    }
  ];

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const toggleLesson = (lessonId) => {
    setExpandedLesson(expandedLesson === lessonId ? null : lessonId);
  };

  const markComplete = (lessonId) => {
    const newCompleted = new Set(completedLessons);
    if (newCompleted.has(lessonId)) {
      newCompleted.delete(lessonId);
    } else {
      newCompleted.add(lessonId);
    }
    setCompletedLessons(newCompleted);
  };

  const calculateProgress = () => {
    const totalLessons = learningPath.reduce((acc, module) => acc + module.lessons.length, 0);
    return Math.round((completedLessons.size / totalLessons) * 100);
  };

  const Overview = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🚀 Your Web Development Learning Path</h2>
        <p className="text-lg mb-4">
          Master everything you need to transform your Vino Arsan site from a beautiful design into a fully functional e-commerce store - with Philippine-specific guidance!
        </p>
        <div className="bg-white/20 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Overall Progress</span>
            <span className="font-bold">{calculateProgress()}%</span>
          </div>
          <div className="w-full bg-white/30 rounded-full h-3">
            <div 
              className="bg-white h-3 rounded-full transition-all duration-300"
              style={{ width: `${calculateProgress()}%` }}
            />
          </div>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <span>🇵🇭</span> PHILIPPINE CONTEXT ADDED!
        </h3>
        <p className="text-gray-700 mb-2">
          This learning platform now includes Philippines-specific guidance for:
        </p>
        <ul className="space-y-1 text-gray-700">
          <li>✅ FDA compliance and alcohol regulations</li>
          <li>✅ PayMongo integration (since Shopify Payments unavailable)</li>
          <li>✅ GCash and local payment methods</li>
          <li>✅ DTI, BIR, and business registration</li>
          <li>✅ Philippine shipping and logistics</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
          <h3 className="font-bold text-lg mb-2 text-blue-900">🎯 Your Goal</h3>
          <p className="text-gray-700">Launch Vino Arsan as a legal, fully-functional wine e-commerce site in the Philippines</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-lg mb-2 text-green-900">⏱️ Timeline</h3>
          <p className="text-gray-700">6-8 weeks (includes 2-4 weeks for FDA license approval)</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
          <h3 className="font-bold text-lg mb-2 text-purple-900">💰 Budget</h3>
          <p className="text-gray-700">₱21,000-48,000 for legal compliance + licenses</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
        <h3 className="font-bold text-lg mb-2">⚠️ BEFORE You Start Building</h3>
        <ol className="space-y-2 text-gray-700 list-decimal list-inside">
          <li><strong>Legal consultation:</strong> Your friend should talk to a lawyer about alcohol online sales (₱10,000-20,000)</li>
          <li><strong>FDA application:</strong> Start FDA License to Operate process NOW (takes 2-4 weeks)</li>
          <li><strong>Business registration:</strong> Get DTI, Mayor's Permit, BIR registration</li>
          <li><strong>Then</strong> start technical integration</li>
        </ol>
      </div>
    </div>
  );

  const Lessons = () => (
    <div className="space-y-4">
      {learningPath.map((module) => {
        const isExpanded = expandedModule === module.id;
        const completedInModule = module.lessons.filter(l => completedLessons.has(l.id)).length;
        const progressPercent = (completedInModule / module.lessons.length) * 100;

        return (
          <div key={module.id} className="border-2 border-gray-200 rounded-lg overflow-hidden bg-white">
            <div 
              className="bg-gray-50 p-4 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => toggleModule(module.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-blue-600">{module.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg">{module.title}</h3>
                    <p className="text-sm text-gray-600">{module.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-700">
                      {completedInModule}/{module.lessons.length} completed
                    </div>
                    <div className="text-xs text-gray-500">⏱️ {module.duration}</div>
                  </div>
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>
              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {isExpanded && (
              <div className="p-4 space-y-3 bg-white">
                {module.lessons.map((lesson) => {
                  const isCompleted = completedLessons.has(lesson.id);
                  const isLessonExpanded = expandedLesson === lesson.id;
                  
                  return (
                    <div key={lesson.id} className="border-2 border-gray-100 rounded-lg overflow-hidden">
                      <div 
                        className="flex items-start gap-3 p-4 cursor-pointer hover:bg-gray-50"
                        onClick={() => toggleLesson(lesson.id)}
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            markComplete(lesson.id);
                          }}
                          className="mt-1 flex-shrink-0"
                        >
                          {isCompleted ? (
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          ) : (
                            <Circle className="w-6 h-6 text-gray-300" />
                          )}
                        </button>
                        <div className="flex-grow">
                          <h4 className="font-bold text-lg">{lesson.title}</h4>
                          <p className="text-sm text-gray-500">Click to {isLessonExpanded ? 'collapse' : 'expand'}</p>
                        </div>
                        {isLessonExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                      </div>
                      
                      {isLessonExpanded && (
                        <div className="px-4 pb-4 space-y-4">
                          <div className="prose prose-sm max-w-none">
                            <div className="whitespace-pre-line text-gray-700 bg-gray-50 p-4 rounded-lg">
                              {lesson.content}
                            </div>
                          </div>

                          {lesson.philippineContext && (
                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                              <h5 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                                🇵🇭 Philippine Context
                              </h5>
                              <p className="text-gray-700">{lesson.philippineContext}</p>
                            </div>
                          )}

                          {lesson.practical && (
                            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                              <h5 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                                <Code className="w-4 h-4" />
                                🛠️ Practical Exercise
                              </h5>
                              <p className="text-gray-700">{lesson.practical}</p>
                            </div>
                          )}

                          {lesson.resources && lesson.resources.length > 0 && (
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <h5 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                📚 Resources
                              </h5>
                              <ul className="space-y-2">
                                {lesson.resources.map((resource, idx) => (
                                  <li key={idx}>
                                    <a 
                                      href={resource.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                                    >
                                      <ExternalLink className="w-4 h-4" />
                                      {resource.title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-lg">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Web Dev Learning Platform 🇵🇭</h1>
              <p className="text-gray-600">Complete guide to launching Vino Arsan in the Philippines</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">Your Progress</span>
              <span className="text-sm font-bold text-purple-600">{calculateProgress()}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${calculateProgress()}%` }}
              />
            </div>
            <div className="mt-2 text-xs text-gray-600">
              {completedLessons.size} of {learningPath.reduce((acc, m) => acc + m.lessons.length, 0)} lessons completed
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-lg mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                activeTab === 'overview'
                  ? 'border-b-2 border-purple-600 text-purple-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📋 Overview
            </button>
            <button
              onClick={() => setActiveTab('lessons')}
              className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                activeTab === 'lessons'
                  ? 'border-b-2 border-purple-600 text-purple-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📚 Lessons (Click to Expand!)
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {activeTab === 'overview' && <Overview />}
          {activeTab === 'lessons' && <Lessons />}
        </div>

        {/* Help Text */}
        <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-center">
          <p className="text-blue-900 font-semibold mb-2">💡 How to Use This Platform:</p>
          <ol className="text-sm text-blue-800 space-y-1 text-left max-w-2xl mx-auto">
            <li>1️⃣ Click on a module to expand/collapse it</li>
            <li>2️⃣ Click on a lesson title to see the full content</li>
            <li>3️⃣ Click the circle icon to mark lessons as complete</li>
            <li>4️⃣ Look for 🇵🇭 Philippine Context boxes - these are critical!</li>
          </ol>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>💪 You've got this! Every expert was once a beginner.</p>
          <p className="mt-2">🚀 Take it one lesson at a time. Focus on legal compliance FIRST, then technical integration.</p>
        </div>
      </div>
    </div>
  );
}


// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WebDevLearningPlatform />);
