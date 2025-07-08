import Image from 'next/image'
import React from 'react'

export default function ProductsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 space-y-8">
      <h2 className="text-3xl font-semibold">Our Services</h2>
      <Image
        src="https://images.pexels.com/photos/3057960/pexels-photo-3057960.jpeg"
        alt="Container Cargo"
        width={1000}
        height={500}
        className="rounded-md"
      />
      <p className="text-gray-700">
        We offer reliable shipping and cargo solutions for energy products including crude oil, LNG, and refined fuels.
      </p>
    </section>
  )
}
