const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">About Us</h1>
        <div className="flex flex-col gap-8">
          <div className="bg-base-200 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              We are a forward-thinking company committed to pushing the boundaries of innovation. Our passionate team of experts combines cutting-edge technology with creative solutions to deliver exceptional results that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-base-200 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✦</span>
                  <span>Excellence in everything we do</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✦</span>
                  <span>Innovation at our core</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✦</span>
                  <span>Customer success first</span>
                </li>
              </ul>
            </div>

            <div className="bg-base-200 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
              <p className="leading-relaxed">
                Through our commitment to excellence and innovation, we've helped countless organizations transform their digital presence and achieve remarkable growth. Our solutions have enabled businesses to thrive in the modern digital landscape.
              </p>
            </div>
          </div>

          <div className="bg-primary/10 rounded-xl p-8">
            <p className="text-lg font-medium text-center italic">
              "Dedicated to creating technology that makes a difference, we're building the future of digital solutions, one innovation at a time."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;