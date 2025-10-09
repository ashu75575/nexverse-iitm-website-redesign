'use client'
import { motion } from "framer-motion";
import Image from "next/image";
// import teamPhoto from '/public/team-photo.jpg'; // Replace with your image path

const Team =() =>{
  return (
    <section className="bg-black text-stone-100 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Team Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <Image
            src={'/celebration_img.jpg'}
            alt="NexVerse Team"
            className="rounded-lg shadow-lg"
            width={600}
            height={400}
            priority
          />
        </motion.div>

        {/* Right Side: Tribute + Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-4xl font-bold  mb-6">
             The Team Behind NexVerse
          </h2>
          <p className="text-stone-300 mb-6">
            At NexVerse, our passionate team of students thrives on innovation, collaboration, and building the future of technology.  
            From organizing workshops to empowering developers and running hackathons, our mission is to cultivate a community where tech ideas turn into real solutions.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-900 p-4 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-purple-400">50+</h3>
              <p className="text-stone-300">Active Members</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-purple-400">15+</h3>
              <p className="text-stone-300">Events Organized</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-purple-400">5+</h3>
              <p className="text-stone-300">Hackathons Conducted</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-purple-400">3</h3>
              <p className="text-stone-300">Years of Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Team;