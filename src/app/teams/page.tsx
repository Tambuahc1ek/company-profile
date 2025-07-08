'use client'

import { useEffect, useState } from 'react'

type TeamMember = {
  name: string
  picture: string
  email: string
  role: string
  bio: string
}

export default function TeamsPage() {
  const [team, setTeam] = useState<TeamMember[]>([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=6')
      .then(res => res.json())
      .then(data => {
        const members = data.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          picture: user.picture.large,
          email: user.email,
          role: getRandomRole(),
          bio: 'A passionate professional committed to delivering sustainable energy solutions.'
        }))
        setTeam(members)
      })
  }, [])

  const getRandomRole = () => {
    const roles = ['Project Manager', 'Energy Analyst', 'Field Engineer', 'Business Dev', 'Sustainability Officer', 'Tech Lead']
    return roles[Math.floor(Math.random() * roles.length)]
  }

  return (
    <main className="bg-white text-gray-900 px-6 md:px-24 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet Our Team</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {team.map((member, idx) => (
          <div key={idx} className="bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <img src={member.picture} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
            <p className="text-green-700 text-sm text-center">{member.role}</p>
            <p className="text-sm text-gray-600 mt-2 text-center">{member.bio}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
