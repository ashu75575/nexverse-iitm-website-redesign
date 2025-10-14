"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { FaLinkedin } from "react-icons/fa"
import Link from "next/link"

const Background = () => {
    return (
        <div className="absolute inset-0 z-[-2] bg-black w-full h-full">
            <svg
                className="w-full h-full"
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 1400 10000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_243_2)">
                    <rect width="1512" height="16397" fill="#0c0c0c" />
                    <g opacity="0.4" filter="url(#filter0_f_243_2)">
                        <path
                            d="M387.38 137.553C355.297 -107.774 513.625 -371.892 752.935 -403.188C992.246 -434.485 1087.35 -273.117 1119.44 -27.7906C1151.52 217.536 993.208 -36.6224 796.88 -10.947C557.569 20.3495 419.463 382.88 387.38 137.553Z"
                            fill="#30bfdc"
                        />
                    </g>
                    <g filter="url(#filter1_f_243_2)">
                        <circle cx="15" cy="3176" r="185" fill="#30bfdc" />
                    </g>
                    <g filter="url(#filter2_f_243_2)">
                        <circle cx="1275" cy="840" r="64" fill="#30bfdc" />
                    </g>
                </g>
                <defs>
                    <filter id="filter0_f_243_2" x="239.258" y="-551.062" width="1028.33" height="917.31" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="72" result="effect1_foregroundBlur_243_2" />
                    </filter>
                    <filter id="filter1_f_243_2" x="-774" y="2387" width="1578" height="1578" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="302" result="effect1_foregroundBlur_243_2" />
                    </filter>
                    <filter id="filter2_f_243_2" x="967" y="532" width="616" height="616" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="122" result="effect1_foregroundBlur_243_2" />
                    </filter>
                    <clipPath id="clip0_243_2">
                        <rect width="1512" height="6397" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default function Page() {
    return (
        <div className="font-sans text-gray-50 relative overflow-hidden min-h-screen">
            <Background />

            {/* About Section */}
            <section className="p-6 sm:p-8 max-w-7xl mt-9 mx-auto">
                <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-medium mt-14 mb-16 sm:mb-24 uppercase leading-tight">
                    ABOUT <br /> NEXVERSE
                </h2>
                <h3 className="border-b ml-auto max-w-3xl border-zinc-100 pb-3 sm:pb-4 text-2xl sm:text-3xl mb-6 sm:mb-8">
                    Our Vision
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl ml-auto max-w-3xl leading-relaxed">
                    Nexverse is IITM's vibrant tech and innovation society, built to spark creativity, collaboration, and growth. We believe college is more than classrooms—it’s a launchpad for ideas that can change the world. Our mission is to empower students to explore cutting-edge technology, gain real-world skills, and connect with like-minded innovators ready to shape the future.
                </p>
            </section>

            {/* What We Do Section */}
            <section className="p-6 sm:p-8 max-w-7xl mt-9 mx-auto">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium mt-14 mb-8 sm:mb-12 uppercase text-left">
                    WHAT WE DO?
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mb-8 sm:mb-10 leading-relaxed">
                    At Nexverse, we turn curiosity into action. From hands-on workshops to high-energy hackathons, every event is designed to inspire and challenge. We host interactive seminars with industry leaders, organize technical and non-technical competitions, and run skill-building sessions to help students stay ahead in today’s fast-moving tech landscape.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {[
                        { title: "Workshops", desc: "Hands-on sessions in AI, Web, Data Science and more." },
                        { title: "Hackathons", desc: "24-hour sprints like NexHack to build and innovate." },
                        { title: "Seminars", desc: "Talks with industry leaders and innovators." },
                        { title: "Community", desc: "Fun meetups and networking to connect peers." },
                    ].map((item, i) => (
                        <div key={i} className="bg-zinc-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="flex flex-col items-start p-5 sm:p-6">
                                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-cyan-400">{item.title}</h3>
                                <p className="text-gray-200 text-base sm:text-lg">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="p-6 sm:p-8 max-w-7xl mt-32 mx-auto">
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold pb-4 sm:pb-6 w-fit border-b-2 border-b-white leading-tight">
                    PEOPLE WHO MAKE US A TEAM
                </h2>
                <div className="bg-gray-300 mt-12 sm:mt-24 h-[400px] sm:h-[600px] md:h-[700px] flex items-center justify-center rounded-xl overflow-hidden">
                    <Image
                        src="/team_img_2.webp"
                        alt="Team"
                        width={680}
                        height={700}
                        className="w-full h-full object-cover object-bottom brightness-125"
                    />
                </div>
            </section>

            {/* Faculty Section */}
            <section className="p-6 sm:p-8 max-w-7xl mx-auto mt-24 sm:mt-32 text-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold uppercase pb-4 sm:pb-6 w-fit border-b-2 border-b-white">
                    OUR Faculty Coordinators
                </h2>
                <div className="grid md:grid-cols-2 mt-10 sm:mt-12 gap-8 sm:gap-16 md:px-16 lg:px-32">
                    {[
                        {
                            name: "Mr. Gautam Kumar",
                            img: "https://www.iitmjanakpuri.com/faculty/images/commerce/DSC06609.jpg",
                        },
                        {
                            name: "Dr. Saima Saleem",
                            img: "https://www.iitmjanakpuri.com/faculty/images/commerce/DSC06500.jpg",
                        },
                    ].map((f, i) => (
                        <div key={i} className="group overflow-hidden">
                            <img
                                className="h-[350px] sm:h-[450px] md:h-[500px] w-full rounded-md object-cover object-top transition-all duration-500 group-hover:h-[420px] group-hover:rounded-xl"
                                src={f.img}
                                alt="faculty coordinator"
                            />
                            <div className="px-2 pt-2 sm:pt-4">
                                <div className="flex justify-between">
                                    <h3 className="text-base sm:text-lg font-medium transition-all duration-500 group-hover:tracking-wider">{f.name}</h3>
                                </div>
                                <div className="mt-1">
                                    <span className="inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        Faculty Coordinator
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Team Section */}
            <section className="p-6 sm:p-8 max-w-7xl mx-auto mt-24 sm:mt-32 text-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold uppercase pb-4 sm:pb-6 w-fit border-b-2 border-b-white">
                    OUR Amazing Team
                </h2>
                <TeamSection />
            </section>
        </div>
    )
}

function TeamSection() {
    const members = [
        { name: "Amaani Arora", title: "President", image: "/amaanii.png", link: "https://www.linkedin.com/in/amaani-arora-65028a263/" },
        { name: "Chirag Jain", title: "Vice President", image: "/chirag.png", link: "https://www.linkedin.com/in/chirag-jain-6574902a0/" },
        { name: "Stuti Sharma", title: "General Secretary", image: "/stuti.jpg", link: "https://www.linkedin.com/in/stuti-sharma240506/" },
        { name: "Tushar Sharma", title: "Web Development Head", image: "/tushar.png", link: "https://www.linkedin.com/in/tushar-sharma-6a037a281/" },
        { name: "Tejveer Singh", title: "Web Development Co-Head", image: "/tejveer.jpg", link: "https://www.linkedin.com/in/tejveer-singh-3133a7323/" },
        { name: "Akshat Jain", title: "Graphic Designing Head", image: "/akshat.jpg", link: "https://www.linkedin.com/in/akshat-jain-b733b81b6" },
        { name: "Ayush Kumar", title: "PR and Sponsorship Head", image: "/ayushkumar.jpg", link: "#" },
        { name: "Tanya Gusain", title: "Event Management Head", image: "/taniya.png", link: "https://www.linkedin.com/in/taniyagusain/" },
        { name: "Hrishabh Raj", title: "Event Management Co-Head", image: "/hrishabh.jpg", link: "https://www.linkedin.com/in/hrishabhraj05/" },
        { name: "Sakshi Sharma", title: "Publicity Head", image: "/sakshi.png", link: "https://www.linkedin.com/in/sakshi-sharma-69b371314/" },
        { name: "Kunjal Kharb", title: "Publicity Co-Head", image: "/kunjal.jpg", link: "https://www.linkedin.com/in/kunjal-kharb-463986316/" },
    ]

    return (
        <section className="py-10 sm:py-16 md:py-24">
            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {members.map((member, index) => (
                    <div key={index} className="group overflow-hidden">
                        <img
                            className="h-[20rem] sm:h-[23rem] md:h-[25rem] w-full rounded-md object-cover object-top transition-all duration-500 group-hover:h-[21rem] sm:group-hover:h-[22.5rem] group-hover:rounded-xl"
                            src={member.image}
                            alt={member.name}
                        />
                        <div className="px-2 pt-2 sm:pt-4">
                            <div className="flex justify-between">
                                <h3 className="text-sm sm:text-base md:text-lg font-medium transition-all duration-500 group-hover:tracking-wider">
                                    {member.name}
                                </h3>
                                <span className="text-xs md:text-sm">_0{index + 1}</span>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                                <span className="inline-block translate-y-6 text-xs sm:text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    {member.title}
                                </span>
                                <Link
                                    href={member.link}
                                    className="translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-cyan-300 transition-colors duration-300" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
