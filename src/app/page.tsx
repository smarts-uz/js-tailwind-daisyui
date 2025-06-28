import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="hero min-h-[80vh] bg-gradient-to-br from-base-200 to-base-300">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          <div className="text-center lg:text-left lg:max-w-xl">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Transform Your Business Today</h1>
            <p className="py-6 text-lg leading-relaxed">Experience enterprise-grade solutions designed to scale with your business. Join thousands of successful companies who trust our platform.</p>
          </div>
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100 border-2 border-primary/10">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Business Email</span>
                </label>
                <input type="email" placeholder="you@company.com" className="input input-bordered focus:input-primary transition-colors duration-200" required />
              </div>
              <div className="form-control flex flex-col">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input type="password" placeholder="••••••••" className="input input-bordered focus:input-primary transition-colors duration-200" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-primary">Reset password</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Stay signed in</span>
                  <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Select Package</span>
                </label>
                <select className="select select-bordered focus:select-primary transition-colors duration-200" defaultValue="Choose your package">
                  <option disabled>Choose your package</option>
                  <option>Professional</option>
                  <option>Business</option>
                  <option>Enterprise</option>
                </select>
              </div>
              <div className="form-control mt-6 space-y-4">
                <button className="btn btn-primary hover:btn-primary-focus transition-colors duration-200">
                  Start Free Trial
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="divider">OR</div>
                <button className="btn btn-outline hover:bg-base-200 transition-colors duration-200">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Continue with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-4 bg-base-100">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Enterprise Solutions</h2>
        <p className="text-center text-lg mb-16 max-w-2xl mx-auto">Powerful features designed to help your business thrive in the digital age.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-primary/10">
            <div className="card-body">
              <div className="badge badge-primary badge-lg mb-4">Enterprise-grade</div>
              <h3 className="card-title text-2xl mb-2">Advanced Security</h3>
              <p className="text-base-content/80">Military-grade encryption and compliance with global security standards.</p>
              <div className="card-actions justify-end mt-4">
                <div className="badge badge-outline">ISO 27001</div>
                <div className="badge badge-outline">GDPR</div>
              </div>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-primary/10">
            <div className="card-body">
              <div className="badge badge-secondary badge-lg mb-4">Premium</div>
              <h3 className="card-title text-2xl mb-2">Dedicated Support</h3>
              <p className="text-base-content/80">24/7 priority support with dedicated account managers and technical experts.</p>
              <div className="card-actions justify-end mt-4">
                <div className="badge badge-outline">Priority</div>
                <div className="badge badge-outline">Expert</div>
              </div>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-primary/10">
            <div className="card-body">
              <div className="badge badge-accent badge-lg mb-4">Exclusive</div>
              <h3 className="card-title text-2xl mb-2">Custom Solutions</h3>
              <p className="text-base-content/80">Tailored enterprise solutions with advanced analytics and AI capabilities.</p>
              <div className="card-actions justify-end mt-4">
                <div className="badge badge-outline">AI</div>
                <div className="badge badge-outline">Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="alert alert-success max-w-2xl mx-auto mb-12 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="font-medium">Limited time offer: Get 3 months free on annual enterprise plans</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-12">Schedule a personalized demo with our solutions team to discover how we can help you achieve your business goals.</p>
          <div className="flex gap-6 justify-center">
            <button className="btn btn-primary btn-lg hover:btn-primary-focus transition-colors duration-200">Schedule Demo</button>
            <button className="btn btn-outline btn-lg hover:bg-base-200 transition-colors duration-200">Explore Features</button>
          </div>
        </div>
      </div>
    </div>
  );
}
