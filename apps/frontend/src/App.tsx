import { Phone, MapPin, Clock, Wrench, Shield, Users, Star, CreditCard, DollarSign } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { QuoteForm } from './components/QuoteForm';
import { StaticMap } from './components/StaticMap';

export default function App() {
  function formatPhoneNumber(phoneNumberString: string) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}
  const rawPhoneNumber = '7709420083';
  const phoneNumber = formatPhoneNumber(rawPhoneNumber);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 sticky top-0 z-50 shadow-lg border-t-4 border-red-600">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Wrench className="w-8 h-8 text-red-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h2 className="font-bold">Expert local Transmission Service</h2>
              <p className="text-sm text-slate-300">Proudly Serving Our Community Since 1977</p>
            </div>
          </div>
          <a href={`tel:${rawPhoneNumber}`} className="hidden md:flex bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-colors font-bold flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </header>
    <main>
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/55 to-slate-900/90 z-10"></div>
        <ImageWithFallback
          src="https://res.cloudinary.com/dwzatjoyv/image/upload/v1779031676/copy_of_transmission_shirt_gtvihp.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 z-20 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1499696562547-dbe51006e1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            alt=""
            className="w-32 h-32 object-cover rounded-lg"
          />
        </div>
        <div className="container mx-auto px-4 z-20 text-white">
          <div className="max-w-2xl">
            <div className=" inline-block px-6 py-3 mb-4">
              <h1 style={{
                textShadow: 
    `-1px -5px 0 #000,  
     1px -5px 0 #000,
    -1px  5px 0 #000,
     1px  5px 0 #000`
              }} className="text-5xl text-red-600 font-bold">Fairburn Rd Transmission & Auto Service</h1>
            </div>
            <p className="text-2xl mb-6 text-white font-semibold">
              Three generations of honest, reliable service. Your neighbors, your friends, your transmission experts.
            </p>
            <div className="hidden md:flex gap-4 mb-8 flex-wrap">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Shield className="w-6 h-6 text-red-500" />
                <span>Work is Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Users className="w-6 h-6 text-red-500" />
                <span>American Family Owned</span>
              </div>
            </div>

            {/* Large Call to Action */}
            <div className="bg-red-600 p-8 rounded-lg border-4 border-white shadow-2xl mb-6">
              <p className="text-lg mb-4 font-semibold">CALL US NOW FOR IMMEDIATE ASSISTANCE</p>
              <a href={`tel:${rawPhoneNumber}`} className="flex items-center justify-center gap-3 bg-white text-red-600 hover:bg-slate-100 px-8 py-6 rounded-lg text-3xl font-bold transition-colors">
                <Phone className="hidden md:block w-10 h-10" />
                {phoneNumber}
              </a>
              <div>
                  <div>
                    <p className="text--300">8521 Hospital Dr Douglasville, GA 30134</p>
                  </div>
                </div>
              <p className="text-center mt-4 text-sm">Open Mon-Fri 8:00 AM - 5:00 PM</p>
            </div>

            <p className="text-center text-lg">Expert Diagnosis • Same-Day Service Available</p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gradient-to-r from-red-50 via-white to-blue-50 py-12 border-y-4 border-red-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-600">
              <div className="text-5xl font-bold text-red-600 mb-2">{ new Date().getFullYear() - 1977}+ </div>
              <div className="text-slate-700 font-semibold">Years in Business</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600">
              <div className="text-5xl font-bold text-blue-600 mb-2">15,000+</div>
              <div className="text-slate-700 font-semibold">Happy Customers</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-600">
              <div className="text-5xl font-bold text-red-600 mb-2">4.9★</div>
              <div className="text-slate-700 font-semibold">Average Rating</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600">
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-slate-700 font-semibold">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-red-600 inline-block px-8 py-4 mb-12">
            <h2 className="text-4xl font-bold text-white">OUR SERVICES</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Transmission Repair',
                description: 'Expert diagnosis and repair of all transmission types, from manual to automatic and CVT.',
                icon: Wrench
              },
              {
                title: 'Transmission Rebuild',
                description: 'Complete transmission rebuilds with OEM parts.',
                icon: Shield
              },
              {
                title: 'Preventive Maintenance',
                description: 'Regular fluid changes and inspections to keep your transmission running smoothly.',
                icon: Clock
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white border-4 border-slate-200 rounded-lg p-6 hover:shadow-xl hover:border-red-600 transition-all">
                <service.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <a href={`tel:${rawPhoneNumber}`} className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-bold">
                  <Phone className="w-4 h-4" />
                  Call for Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Snap Financing Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1626836014893-37663794dca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="American flag"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-600 inline-block px-8 py-4 mb-8">
              <h2 className="text-4xl font-bold">FINANCING AVAILABLE</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-white text-slate-900 p-8 rounded-lg">
                  <CreditCard className="w-16 h-16 text-red-600 mb-4" />
                  <h3 className="text-3xl font-bold mb-4 text-red-600">Snap Finance</h3>
                  <p className="text-lg mb-4">
                    Don't let finances stop you from getting your transmission fixed! We partner with Snap Finance to offer flexible payment options.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>Fast approval process - Get approved in minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>No perfect credit required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>Flexible payment plans up to 12 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>Apply online or in-store</span>
                    </li>
                  </ul>
                  learn more about <a href="https://www.snapfinance.com/" target="_blank" className="text-blue-400 hover:underline">snap financing </a>.
                </div>
              </div>
              <div className="text-center md:text-left">
                <DollarSign className="w-20 h-20 text-red-500 mb-6 mx-auto md:mx-0" />
                <h3 className="text-3xl font-bold mb-4">Get Back on the Road Today!</h3>
                <p className="text-xl mb-6">
                  With Snap financing, you can get your transmission repaired now and pay over time. No waiting, no worries.
                </p>
                <div className="bg-red-600 p-6 rounded-lg inline-block">
                  <p className="text-lg mb-3 font-semibold">CALL US TO LEARN MORE</p>
                  <a href={`tel:${rawPhoneNumber}`} className="flex items-center justify-center gap-3 bg-white text-red-600 hover:bg-slate-100 px-8 py-4 rounded-lg text-2xl font-bold transition-colors">
                    <Phone className="w-8 h-8" />
                    {phoneNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Story Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1613206485381-b028e578e791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Tools arranged in circle"
                className="rounded-lg shadow-lg w-full border-4 border-red-600"
              />
            </div>
            <div>
              <div className="bg-red-600 inline-block px-8 py-4 mb-6">
                <h2 className="text-4xl font-bold text-white">FAMILY TRADITION</h2>
              </div>
              <p className="text-lg text-slate-700 mb-4">
              For nearly half a century, our shop has been Douglasville’s trusted source for expert transmission repair and dependable auto care. With <strong>49 years of experience </strong>, we’ve built our reputation on honesty, quality workmanship, and a commitment to keeping our community safely on the road. Whether you’re dealing with slipping gears, strange noises, or routine maintenance needs, our team has the knowledge and tools to diagnose and repair your vehicle with precision.

While we’re known as <strong>Fairburn’s local transmission specialists</strong>, our expertise goes far beyond drivetrain work. We provide <strong>full-service auto repair</strong>, including brakes, engine diagnostics, suspension, tune-ups, and preventative maintenance—everything your vehicle needs to stay reliable for the long haul. No matter the make or model, we deliver dealership‑level service without the dealership price.

If you’re looking for <strong>reliable, affordable, and experienced auto care</strong>, you’re in the right place. Contact us today to schedule service or get a free estimate—your car will be in the hands of Douglasville’s most trusted professionals.</p>
              <p className="text-lg text-slate-700 mb-4">
                We treat every customer like family because in our small community, many of you are. We've repaired transmissions for multiple generations of families, and that trust means everything to us.
              </p>
              <div className="flex items-start gap-4 bg-gradient-to-r from-red-50 to-blue-50 p-6 rounded-lg border-l-4 border-red-600">
                <Shield className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2 text-xl">Our Promise to You</h3>
                  <p className="text-slate-700 mb-3">
                    Honest diagnostics, fair pricing, and quality work that lasts. We'll never recommend a repair you don't need.
                  </p>
                  <a href={`tel:${rawPhoneNumber}`} className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-bold">
                    <Phone className="w-5 h-5" />
                    Call {phoneNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="bg-red-600 inline-block px-8 py-4">
              <h2 className="text-4xl font-bold text-white">WHAT OUR NEIGHBORS SAY</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Karrie Ann P.',
                text: 'Fairburn Rd Transmission has wonderfully quality and fabulous service. They went out of their way to get things done. I would highly recommend them.',
                rating: 5
              },
              {
                name: 'Phyllis L.',
                text: 'I took my car there on Monday, it was ready on Tuesday. The staff is very professional and friendly. They were highly recommended, and I live in Jonesboro. Respectful and trustworthy. I found my new mechanic shop. Thank you Ansley, Bobby, Mike, and Max. You definitely have a new customer. When Charles referred you guys, I did not hesitate to bring my car there. Thank you for taking care of me. May God continue to bless you and your Business.',
                rating: 5
              },
              {
                name: 'Venice M.',
                text: 'Shout out to Jason and Ansley first and foremost. These 2 went above and beyond to help me navigate a decision around a transmission concern I had. I came in right at closing time and they stayed over to help me work through it. The issue was around a check engine code and dashboard notification. Earlier in the day, a couple locations recommended I reset the code and see if it came back on. I did this but was very uncomfortable doing so considering I had a 900 mile round trip coming up a couple days later. Together, we agreed that we would perform a full transmission service which included changing out a solenoid that was the suspected culprit for the code. They ordered the part the following morning and thankfully, they had me back on the road right at closing time later that day. This was nearly a month ago. I was able to make my trip, and have driven a 1-2K more since my return. Thanks again for jumping on this and giving me some peace of mind. Y`all are rock stars. Also, be advised, not only do they work on transmissions, they are a full service shop. Stop by a see them.',
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white border-4 border-slate-200 rounded-lg p-6 hover:border-red-600 transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">Local Customer</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl mb-4 font-semibold">Join Thousands of Satisfied Customers!</p>
            <a href={`tel:${rawPhoneNumber}`} className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors">
              <Phone className="w-6 h-6" />
              Call {phoneNumber} Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-900 text-white py-16 border-t-8 border-red-600">
        <div className="container mx-auto px-4">
          {/* Large Call CTA at top */}
          <div className="bg-red-600 p-8 rounded-lg mb-12 text-center border-4 border-white">
            <h2 className="text-5xl font-bold mb-4">CALL US NOW!</h2>
            <p className="text-2xl mb-6">Speak Directly with a Transmission Expert</p>
            <a href={`tel:${rawPhoneNumber}`} className="inline-flex items-center gap-4 bg-white text-red-600 hover:bg-slate-100 px-12 py-6 rounded-lg text-4xl font-bold transition-colors shadow-2xl">
              <Phone className="hidden md:block w-12 h-12" />
              {phoneNumber}
            </a>
            <p className="mt-6 text-xl">Expert Diagnosis • Same-Day Service • Snap Financing Available</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-red-600 inline-block px-6 py-3 mb-6">
                <h3 className="text-3xl font-bold">VISIT US TODAY</h3>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Stop by for a diagnosis and honest assessment. No appointment needed for estimates.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-slate-800 p-4 rounded-lg border-l-4 border-red-600">
                  <MapPin className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1 text-lg">Location</h3>
                    <p className="text-slate-300">8521 Hospital Dr<br />Douglasville, GA 30134</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-slate-800 p-4 rounded-lg border-l-4 border-blue-600">
                  <Clock className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1 text-lg">Hours</h3>
                    <p className="text-slate-300">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: Closed<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-slate-800 p-4 rounded-lg border-l-4 border-red-600">
                  <Phone className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1 text-lg">Phone - Call Anytime!</h3>
                    <a href={`tel:${rawPhoneNumber}`} className="text-red-500 hover:text-red-400 text-2xl font-bold">{phoneNumber}</a>
                  </div>
                </div>
              </div>
            </div>
            <StaticMap />
            <div className="hidden bg-slate-800 rounded-lg p-8 border-4 border-red-600">
              <h3 className="text-2xl mb-2 font-bold">Prefer to Request a Quote Online?</h3>
              <p className="text-slate-400 mb-6">Or just call us at {phoneNumber} for faster service!</p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-12 border-t-4 border-red-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Wrench className="w-10 h-10 text-red-600" />
              <h3 className="text-2xl font-bold">Fairburn Rd Transmission & Auto Service</h3>
            </div>
            <div className="bg-red-600 inline-block px-6 py-3 mb-4">
              <a href={`tel:${rawPhoneNumber}`} className="text-3xl font-bold hover:text-slate-200 flex items-center gap-3">
                <Phone className="w-8 h-8" />
                {phoneNumber}
              </a>
            </div>
          </div>
          <div className="text-center text-slate-300">
            <p className="text-lg mb-2">&copy; {new Date().getFullYear()} Fairburn Rd Transmission & Auto Service</p>
            <p className="mb-4">Proudly Serving Our Community Since 1977</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-red-500" />
                Licensed & Insured
              </span>
              <span className="text-slate-500">•</span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-red-500" />
                ASE Certified Technicians
              </span>
              <span className="text-slate-500">•</span>
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-red-500" />
                Warranty on Rebuilds
              </span>
              <span className="text-slate-500">•</span>
              <span className="flex items-center gap-1">
                <CreditCard className="w-4 h-4 text-red-500" />
                Snap Financing Available
              </span>
              <span className="flex items-center gap-1">
                <CreditCard className="w-4 h-4 text-red-500" />
                <a href="https://openlaunchworks.com/accessibility-statement" target="_blank" rel="noopener noreferrer">Accessibility Statement <span className="sr-only"> Opens a new tab</span></a>
              </span>
            </div>
          </div>
          <div style={{ fontSize: '0.75rem' }} className="text-center text-slate-500 mt-6">
            powered by <a href="https://openlaunchworks.com" target="_blank" rel="noopener noreferrer" >openlaunchworks <span className="sr-only"> Opens a new tab</span></a>
          </div>
        </div>
        <img style={{ width: '100px'}} src="https://media.secondstreetapp.com/7311937" alt="Best of Douglasville 2026" />
      </footer>
    </div>
  );
}