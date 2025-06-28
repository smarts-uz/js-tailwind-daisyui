import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Join us today!</h1>
            <p className="py-6">Start your journey with our platform - fill out the form to get started.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Remember me</span>
                  <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select Plan</span>
                </label>
                <select className="select select-bordered w-full" defaultValue="Pick your plan">
                  <option disabled>Pick your plan</option>
                  <option>Basic</option>
                  <option>Pro</option>
                  <option>Enterprise</option>
                </select>
              </div>
              <div className="form-control mt-6 space-y-4">
                <button className="btn btn-primary">Sign Up</button>
                <div className="divider">OR</div>
                <button className="btn btn-outline btn-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="badge badge-primary mb-2">New</div>
              <h3 className="card-title">Secure Platform</h3>
              <p>State-of-the-art security for your peace of mind.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Security</div>
                <div className="badge badge-outline">SSL</div>
              </div>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="badge badge-secondary mb-2">Popular</div>
              <h3 className="card-title">24/7 Support</h3>
              <p>Round-the-clock assistance whenever you need it.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Support</div>
                <div className="badge badge-outline">24/7</div>
              </div>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="badge badge-accent mb-2">Premium</div>
              <h3 className="card-title">Advanced Features</h3>
              <p>Cutting-edge tools to boost your productivity.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Features</div>
                <div className="badge badge-outline">Pro</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-base-200 py-16">
        <div className="text-center">
          <div className="alert alert-success max-w-2xl mx-auto mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Join now and get 20% off your first month!</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-8">Our team is here to help you make the right choice.</p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-primary">Contact Sales</button>
            <button className="btn btn-outline">View Documentation</button>
          </div>
        </div>
      </div>
    </div>
  );
}
