"use client"
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"

const Background = () => {
    return (
        <div className="absolute inset-0 z-[-2]">
            <svg
                width="1512"
                viewBox="0 0 1512 10397"
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
const teamMembers = [
    {
        name: "Amaani Arora",
        title: "President",
        socials: [{
            name: 'linkedin',
            icon: (<FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-cyan-300 transition-colors duration-300" />),
            link: "https://www.linkedin.com/in/amaani-arora-65028a263/"
        }],
        image: "/amaanii.png",
    },
    {
        name: "Chirag Jain",
        title: "Vice President",
        socials: [{
            name: 'linkedin',
            icon: (<FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-cyan-300 transition-colors duration-300" />),
            link: "https://www.linkedin.com/in/chirag-jain-6574902a0/"
        }],
        featured: true,
        image: "/chirag.png",
    },
    {
        name: "Stuti Sharma",
        title: "General Secretary",
        socials: [{
            name: 'linkedin',
            icon: (<FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-cyan-300 transition-colors duration-300" />),
            link: "https://www.linkedin.com/in/stuti-sharma240506/"
        }],
        image: "/stuti.jpg",
    },
    {
        name: "Tushar Sharma",
        title: "Web Development Head",
        socials: [{
            name: 'linkedin',
            icon: (<FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-cyan-300 transition-colors duration-300" />),
            link: "https://www.linkedin.com/in/tushar-sharma-6a037a281/"
        }],
        image: "/tushar.png",
    },
    {
        name: "Tejveer Singh",
        title: "Web Development Co-Head",
        socials: [{
            name: 'linkedin',
            icon: (<FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-cyan-300 transition-colors duration-300" />),
            link: "https://www.linkedin.com/in/tejveer-singh-3133a7323/"
        }],
        image: "/tejveer.jpg",
    },
    {
        name: "Akshat Jain",
        title: "Graphic Designing Head",
        socials: [{
            name: 'linkedin',
            icon: (<FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-cyan-300 transition-colors duration-300" />),
            link: "https://www.linkedin.com/in/akshat-jain-b733b81b6"
        }],
        image: "/akshat.jpg",
    },
    {
        name: "Ayush Kumar",
        title: "PR and Sponsorship Head",
        socials: [{
            name: 'linkedin',
            icon: (<FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-cyan-300 transition-colors duration-300" />),
            link: "#"
        }],
        image: "/ayushkumar.jpg",
    },
    {
        name: "Tanya Gusain",
        title: "Event Management Head",
        socials: [{
            name: 'linkedin',
            icon: (<FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-cyan-300 transition-colors duration-300" />),
            link: "https://www.linkedin.com/in/taniyagusain/"
        }],
        image: "/taniya.png",
    },
    {
        name: "Hrishabh Raj",
        title: "Event Management Co-Head",
        socials: [{
            name: 'linkedin',
            icon: (<FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-cyan-300 transition-colors duration-300" />),
            link: "https://www.linkedin.com/in/hrishabhraj05/"
        }],
        image: "/hrishabh.jpg",
    },
    {
        name: "Sakshi Sharma",
        title: "Publicity Head",
        socials: [{
            name: 'linkedin',
            icon: (<FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-cyan-300 transition-colors duration-300" />),
            link: "https://www.linkedin.com/in/sakshi-sharma-69b371314/"
        }],
        image: "/sakshi.png",
    },
    {
        name: "Kunjal Kharb",
        title: "Publicity Co-Head",
        socials: [{
            name: 'linkedin',
            icon: (<FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-cyan-300 transition-colors duration-300" />),
            link: "https://www.linkedin.com/in/kunjal-kharb-463986316/"
        }],
        image: "/kunjal.jpg",
    },
]
const coordinators = [
    {
        name: "Mr. Gautam Kumar",
        role: "Assistant Professor",
        image: "/chirag.png", // Put the correct image path
    },
    {
        name: "Dr. Saima Saleem",
        role: "Assistant Professor",
        image: "/chirag.png", // Put the correct image path
    },
];
export default function Page() {
    return (
        <div className="font-sans  text-gray-50 relative h-fit overflow-hidden">
                <Background />

                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        className="mt-6 max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-100"
                    >
                        Where innovation meets impact
                    </motion.h1>
                    <motion.div
                        className="text-5xl md:text-6xl lg:text-7xl xl:text-[7.5rem] text-center font-bold max-w-9xl leading-tight sm:leading-tight md:leading-[1.025] tracking-wide sm:tracking-wider uppercase mt-4 sm:mt-6 relative"
                    >
                        <span className="w-full inline text-center">A community of</span>
                        <span className="w-full inline-flex items-end justify-end gap-5 text-right">
                            <span className="w-32 h-32 flex items-center justify-center " > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480"><path d="M371.3 294.4 480 240l-108.7-54.4 38.4-115.3-115.3 38.4L240 0l-54.4 108.7L70.3 70.3l38.4 115.3L0 240l108.7 54.4-38.4 115.3 115.3-38.4L240 480l54.4-108.7 115.3 38.4-38.4-115.3z" fill="#15CFC0"></path></svg></span>
                            innovators</span>
                        <span className="w-fit inline-block text-left">& creators</span>
                    </motion.div>
                </section>


                {/* Video Placeholder */}
                <div className="mt-8 w-full mx-auto max-w-7xl aspect-video bg-gray-300 flex items-center justify-center">
                    <span>Intro Video Coming Soon</span>
                </div>

                {/* About Section */}
                <section className="p-8 max-w-7xl mt-9 mx-auto">
                    <h2 className="text-9xl font-medium mt-14 mb-24 uppercase">ABOUT <br /> NEXVERSE</h2>

                    <h3 className="border-b ml-auto max-w-3xl border-zinc-100 pb-4 text-3xl mb-8">Our Vision</h3>
                    <p className="text-2xl ml-auto max-w-3xl">
                        Nexverse is IITM's vibrant tech and innovation society, built to spark creativity, collaboration, and growth. We believe college is more than classrooms—it’s a launchpad for ideas that can change the world. Our mission is to empower students to explore cutting-edge technology, gain real-world skills, and connect with like-minded innovators ready to shape the future.
                    </p>
                </section>

                {/* What We Do Section */}
                <section className="p-8 max-w-7xl mt-9 mx-auto">
                    <h2 className="text-7xl font-medium mt-14 mb-12 uppercase text-left">WHAT WE DO?</h2>
                    <p className="text-2xl max-w-4xl mb-10">
                        At Nexverse, we turn curiosity into action. From hands-on workshops to high-energy hackathons, every event is designed to inspire and challenge. We host interactive seminars with industry leaders, organize technical and non-technical competitions, and run skill-building sessions to help students stay ahead in today’s fast-moving tech landscape.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-zinc-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="flex flex-col items-start p-6">
                                <h3 className="text-2xl font-bold mb-2 text-cyan-400">Workshops</h3>
                                <p className="text-gray-200 text-lg">Hands-on sessions in AI, Web, Data Science and more.</p>
                            </div>
                        </div>
                        <div className="bg-zinc-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="flex flex-col items-start p-6">
                                <h3 className="text-2xl font-bold mb-2 text-cyan-400">Hackathons</h3>
                                <p className="text-gray-200 text-lg">24-hour sprints like NexHack to build and innovate.</p>
                            </div>
                        </div>
                        <div className="bg-zinc-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="flex flex-col items-start p-6">
                                <h3 className="text-2xl font-bold mb-2 text-cyan-400">Seminars</h3>
                                <p className="text-gray-200 text-lg">Talks with industry leaders and innovators.</p>
                            </div>
                        </div>
                        <div className="bg-zinc-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="flex flex-col items-start p-6">
                                <h3 className="text-2xl font-bold mb-2 text-cyan-400">Community</h3>
                                <p className="text-gray-200 text-lg">Fun meetups and networking to connect peers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="p-8 max-w-7xl  mt-32 mx-auto">
                    <h2 className="text-7xl font-semibold pb-6 w-fit border-b-2 border-b-white">PEOPLE WHO MAKE US A TEAM</h2>
                    <div className="bg-gray-300  mt-24 h-[500px] flex items-center justify-center">Team Group Photo Placeholder</div>
                </section>

                <section className="p-8 max-w-7xl bg-zinc-950 mx-auto mt-32 text-white">
                    <h2 className="text-5xl font-semibold uppercase  pb-6 w-fit border-b-2 border-b-white">OUR Facultiy Coordinator</h2>
                    <div className="grid md:grid-cols-2 mt-12 gap-16">
                        <div className="bg-zinc-400 h-[600px] rounded-2xl "></div>
                        <div className="bg-zinc-400 h-[600px] rounded-2xl mt-24 "></div>
                    </div>
                </section>
                <section className="p-8 max-w-7xl  mx-auto mt-32 text-white">
                    <h2 className="text-5xl font-semibold uppercase pb-6 w-fit border-b-2 border-b-white">OUR Amazing team</h2>
                    <div className="grid md:grid-cols-2 mx-24 mt-12 gap-16">
                        <div className="bg-zinc-400 h-[400px] rounded-2xl"></div>
                        <div className="bg-zinc-400 h-[400px] rounded-2xl mt-24 "></div>
                    </div>
                    <div className="grid md:grid-cols-2 mx-24 mt-12 gap-16">
                        <div className="bg-zinc-400 h-[400px] rounded-2xl"></div>
                        <div className="bg-zinc-400 h-[400px] rounded-2xl mt-24 "></div>
                    </div>
                    <div className="grid md:grid-cols-2 mx-24 mt-12 gap-16">
                        <div className="bg-zinc-400 h-[400px] rounded-2xl"></div>
                        <div className="bg-zinc-400 h-[400px] rounded-2xl mt-24 "></div>
                    </div>
                    <div className="grid md:grid-cols-2 mx-24 mt-12 gap-16">
                        <div className="bg-zinc-400 h-[400px] rounded-2xl"></div>
                        <div className="bg-zinc-400 h-[400px] rounded-2xl mt-24 "></div>
                    </div>
                </section>

        </div>
    )
}
