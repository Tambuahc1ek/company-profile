'use client';

export default function HomePage() {
  return (
    <>
      {/* 🔹 Hero Section */}
      <section className="relative w-full h-[90vh] bg-gray-900 text-white overflow-hidden">
        <img
          src="https://images.pexels.com/photos/4254530/pexels-photo-4254530.jpeg"
          alt="Oil Tanker Ship"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-0" />

        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left px-6 md:px-24">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Passionate about Progress
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200">
            Our passion for progress drives us to create better solutions that
            benefit people, our partners, and the planet.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-semibold transition">
            Read More
          </button>
        </div>
      </section>

      {/* 🔹 Vision & Mission Section */}
      <section className="bg-white text-gray-900 py-16 px-6 md:px-24">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-gray-600 text-lg">
            Driving sustainable progress through innovative energy solutions
            that power industries, communities, and future generations.
          </p>
        </div>

        {/* 🔹 Products & Services Section */}
        <section className="bg-gray-50 py-16 px-6 md:px-24">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Products & Services
            </h2>
            <p className="text-gray-600 text-lg">
              Delivering reliable and innovative energy solutions tailored to
              your needs.
            </p>
          </div>

          {/* 🔹 Testimonial Section */}
          <section className="bg-white py-16 px-6 md:px-24">
            <div className="max-w-5xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-gray-600 text-lg">
                Real voices from people who have experienced the value of our
                solutions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Testimonial 1 */}
              <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition">
                <p className="text-gray-700 italic">
                  "Their innovative approach helped us reduce our energy costs
                  by 30%!"
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-green-700">Alex Johnson</p>
                  <p className="text-sm text-gray-500">CTO, GreenTech Co.</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition">
                <p className="text-gray-700 italic">
                  "Reliable, responsive, and professional. A true partner in our
                  growth."
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-green-700">Maria Tan</p>
                  <p className="text-sm text-gray-500">
                    Operations Manager, Hydro Solutions
                  </p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition">
                <p className="text-gray-700 italic">
                  "Their team truly understands the meaning of sustainable
                  innovation."
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-green-700">Daniel Park</p>
                  <p className="text-sm text-gray-500">CEO, SolarOne</p>
                </div>
              </div>
            </div>
          </section>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Product 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <img
                src="https://images.pexels.com/photos/5990664/pexels-photo-5990664.jpeg"
                alt="Renewable Energy"
                className="w-full h-40 object-cover rounded mb-4"
              />

              <h3 className="text-xl font-semibold mb-2">Renewable Energy</h3>
              <p className="text-gray-700 text-sm">
                Harnessing solar, wind, and bioenergy to support a sustainable
                future.
              </p>
            </div>

            {/* Product 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <img
                src="https://images.pexels.com/photos/3855965/pexels-photo-3855965.jpeg"
                alt="Industrial Lubricants"
                className="w-full h-40 object-cover rounded mb-4"
              />

              <h3 className="text-xl font-semibold mb-2">
                Industrial Lubricants
              </h3>
              <p className="text-gray-700 text-sm">
                High-performance solutions for manufacturing, transport, and
                heavy equipment.
              </p>
            </div>

            {/* Product 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <img
                src="https://images.pexels.com/photos/3855967/pexels-photo-3855967.jpeg"
                alt="Energy Consulting"
                className="w-full h-40 object-cover rounded mb-4"
              />

              <h3 className="text-xl font-semibold mb-2">Energy Consulting</h3>
              <p className="text-gray-700 text-sm">
                Expertise to optimize energy use and reduce environmental
                footprint.
              </p>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Vision
            </h3>
            <p className="text-gray-700">
              To be a leading global energy company delivering sustainable value
              to stakeholders through innovation, operational excellence, and
              environmental responsibility.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Mission
            </h3>
            <p className="text-gray-700">
              To responsibly develop and deliver reliable energy solutions while
              fostering positive impact for communities and contributing to a
              greener planet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
