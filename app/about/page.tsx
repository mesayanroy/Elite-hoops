export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-purple-500">About EliteHoops</h1>
      <div className="bg-purple-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Our History</h2>
        <p className="mb-4">
          Founded in 2005, EliteHoops started as a small basketball equipment store in downtown Hoopsville. Our passion
          for the game and commitment to quality quickly made us a favorite among local players and teams.
        </p>
        <p className="mb-4">
          Over the years, we've grown from a single store to a nationwide brand, known for our innovative designs and
          top-tier basketball gear.
        </p>
        <h2 className="text-2xl font-bold mb-4 mt-8">Our Achievements</h2>
        <ul className="list-disc list-inside mb-4">
          <li>2010: Named "Best Basketball Equipment Retailer" by Hoops Magazine</li>
          <li>2015: Launched our signature line of basketballs, now used in college leagues across the country</li>
          <li>2018: Opened our 50th store, marking our expansion to all 50 states</li>
          <li>2020: Introduced our eco-friendly basketball court materials, setting a new industry standard</li>
          <li>2022: Partnered with the National Basketball Association as an official equipment supplier</li>
        </ul>
        <p>
          At EliteHoops, we're not just selling basketball gear - we're fostering a community of players, coaches, and
          fans who share our love for the game. Our journey continues, and we're excited to keep innovating and serving
          basketball enthusiasts for years to come.
        </p>
      </div>
    </div>
  )
}

