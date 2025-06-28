const ContactPage = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Get in Touch</h1>
                            <p className="mt-4 text-lg leading-relaxed">
                                Have questions or want to learn more? We'd love to hear from you. Our team is ready to help you achieve your goals and provide the solutions you need.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-sm">contact@company.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <p className="text-sm">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl border">
                        <div className="card-body space-y-6">
                            <div className="form-control flex flex-col">
                                <label className="label">
                                    <span className="label-text font-medium">Full Name</span>
                                </label>
                                <input type="text" placeholder="Enter your full name" className="input input-bordered focus:input-primary transition-colors duration-200" />
                            </div>
                            <div className="form-control flex flex-col">
                                <label className="label">
                                    <span className="label-text font-medium">Email Address</span>
                                </label>
                                <input type="email" placeholder="Enter your email address" className="input input-bordered focus:input-primary transition-colors duration-200" />
                            </div>
                            <div className="form-control flex flex-col">
                                <label className="label">
                                    <span className="label-text font-medium">Your Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered focus:textarea-primary h-32 transition-colors duration-200" placeholder="Tell us how we can help you today"></textarea>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary hover:btn-primary-focus transition-colors duration-200">
                                    Send Message
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;