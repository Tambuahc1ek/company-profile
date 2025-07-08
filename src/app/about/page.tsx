export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900 px-6 md:px-24 py-16 space-y-24">
      {/* Company History */}
      <section className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h1>
        <p className="text-gray-700 text-lg">
          Founded in 2005, our company started with a mission to provide efficient and innovative energy solutions for Southeast Asia. 
          Over the years, we have grown into a trusted name in the energy sector, delivering reliable services and sustainable technologies to industrial, commercial, and public sectors.
        </p>
      </section>

      {/* Company Culture */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Culture</h2>
        <p className="text-gray-700 text-lg">
          We believe in collaboration, innovation, and integrity. Our workplace culture encourages open communication, continuous learning, and a shared sense of purpose toward a sustainable future.
          Every member of our team is empowered to grow and contribute meaningfully to both the organization and society.
        </p>
      </section>

      {/* Team Intro */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Meet Our Team</h2>
        <p className="text-gray-700 text-lg">
          Our diverse and passionate team brings together expertise from across the globe. 
          Together, we are committed to driving impact through clean energy innovation, strategic thinking, and operational excellence.
        </p>
        <p className="text-gray-500 text-sm mt-2 italic">
          (Full team list available on the Teams page.)
        </p>
      </section>
    </main>
  )
}
