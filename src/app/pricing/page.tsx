const PricingPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Simple, Transparent Pricing</h1>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto">Choose the perfect plan that fits your needs. All plans include our core features with additional perks as you scale.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border">
            <div className="card-body p-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Starter</h2>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">$10</span>
                  <span className="text-lg text-base-content/70 ml-2">/month</span>
                </div>
                <p className="text-base-content/70">Perfect for individuals and small projects</p>
              </div>
              
              <div className="divider my-6"></div>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Up to 5 projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center gap-3 text-base-content/50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  <span>Advanced features</span>
                </li>
              </ul>
              
              <div className="card-actions mt-8">
                <button className="btn btn-primary btn-block">Get Started</button>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-primary relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="badge badge-primary py-3 px-4">MOST POPULAR</span>
            </div>
            <div className="card-body p-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Professional</h2>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">$25</span>
                  <span className="text-lg text-base-content/70 ml-2">/month</span>
                </div>
                <p className="text-base-content/70">Ideal for growing businesses</p>
              </div>
              
              <div className="divider my-6"></div>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Priority support</span>
                </li>
              </ul>
              
              <div className="card-actions mt-8">
                <button className="btn btn-primary btn-block">Get Started</button>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border">
            <div className="card-body p-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Enterprise</h2>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">$50</span>
                  <span className="text-lg text-base-content/70 ml-2">/month</span>
                </div>
                <p className="text-base-content/70">For large-scale organizations</p>
              </div>
              
              <div className="divider my-6"></div>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>24/7 Premium Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Custom Solutions</span>
                </li>
              </ul>
              
              <div className="card-actions mt-8">
                <button className="btn btn-primary btn-block">Contact Sales</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-base-content/70">All plans include our core features. Need something different?</p>
          <button className="btn btn-link text-primary">Contact us for custom pricing</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;