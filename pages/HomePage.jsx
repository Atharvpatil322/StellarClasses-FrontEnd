import React from 'react';
import { ChevronDown, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Button = ({ children, className, variant = "default" }) => (
  <button className={`px-4 py-2 rounded ${variant === "outline"
      ? "border border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white"
      : "bg-[#1e3a8a] text-white hover:bg-[#1e40af]"
    } ${className}`}>
    {children}
  </button>
);

export default function StellarClasses() {
  return (
    <div className="bg-white font-sans">
      <header className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center space-x-2">
          <img src="/placeholder.svg" alt="Stellar Classes Logo" className="w-10 h-10" />
          <span className="text-[#1e3a8a] text-xl font-bold">Stellar Classes</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-[#60a5fa] hover:text-[#1e3a8a]">Home</a>
          <a href="#" className="text-[#1e3a8a] hover:text-[#60a5fa] flex items-center">
            Courses <ChevronDown className="ml-1 h-4 w-4" />
          </a>
          <a href="#" className="text-[#1e3a8a] hover:text-[#60a5fa]">Login</a>
          <Button>SIGN UP</Button>
        </nav>
      </header>
      <main>
        <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-[#f0f9ff]">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] leading-tight">
              The Trusted Name for In-Home Tutoring
            </h1>
            <p className="text-[#475569] text-lg">
              Join us at Stellar Classes and embark on an educational journey. Let's unlock your true potential together and pave the way for a brighter future.
            </p>
            <div className="space-x-4">
              <Button>EXPLORE COURSES</Button>
              <Button variant="outline">KNOW MORE</Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="/placeholder.svg" alt="Students studying" className="rounded-lg w-full" />
          </div>
        </section>
        <section className="bg-[#f0f9ff] py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "7+", description: "Online Courses" },
                { number: "8+", description: "Lessons in Courses" },
                { number: "12+", description: "Topics in Lessons" },
                { number: "100+", description: "Student's Enroll" }
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-[#1e3a8a]">{stat.number}</div>
                  <div className="text-[#475569]">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="p-8 md:p-16">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Popular Online Courses</h2>
          <p className="text-[#475569] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu libero urna. Maecenas malesuada id urna id mattis.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            {["Class IX", "Class X", "Class XI", "Class XII"].map((cls, index) => (
              <Button
                key={cls}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-[#1e3a8a] text-white" : "text-[#1e3a8a] border-[#1e3a8a]"}
              >
                {cls}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Physics - Class IX (CBSE)",
                description: "This course has been prepared as per syllabus prescribed by CBSE for Class 9 Students"
              },
              {
                title: "Chemistry - Class IX (CBSE)",
                description: "Comprehensive chemistry course aligned with CBSE syllabus for Class 9 Students"
              },
              {
                title: "Mathematics - Class IX (CBSE)",
                description: "In-depth mathematics course following CBSE guidelines for Class 9 Students"
              }
            ].map((course, i) => (
              <div key={i} className="border rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img src="/placeholder.svg" alt={`${course.title} image`} className="w-full h-48 object-cover" />
                  <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded">INR499</span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">{course.title}</h3>
                  <p className="text-[#475569] mb-4">{course.description}</p>
                  <Button className="w-full">Enroll Now</Button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="p-8 md:p-16 bg-[#f0f9ff]">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4 text-center">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-8 text-center">Hear From Our Students</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-[#475569] mb-4">
                "Asad sir helped me a lot throughout the year. I've been an average student, and numbers was a little tough for me, and COVID-19 made it worse. The guidance and support I got from Asad sir has been extremely helpful. He is extremely patient, gentle, and motivating all at the same time. Joining Stellar Classes will indeed be one of the best decisions you make."
              </p>
              <div className="flex items-center">
                <img src="/placeholder.svg" alt="Annanya Srivastava" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-[#1e3a8a]">Annanya Srivastava</h4>
                  <p className="text-[#475569]">Student</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            <div className="w-2 h-2 rounded-full bg-[#1e3a8a]"></div>
            <div className="w-2 h-2 rounded-full bg-[#60a5fa]"></div>
            <div className="w-2 h-2 rounded-full bg-[#60a5fa]"></div>
          </div>
        </section>
        <section className="p-8 md:p-16">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Launch Your Learning Journey</h2>
          <p className="text-[#475569] mb-8">
            A place where innovation meets imagination, transporting you to a realm where knowledge knows no bounds.
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img src="/placeholder.svg" alt="Students collaborating" className="rounded-lg w-full" />
            </div>
            <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: "🖥️",
                  title: "Alternative Learning Formats",
                  description: "From interactive video lessons to gamified modules and collaborative virtual classrooms, an approach that suits your learning style."
                },
                {
                  icon: "🖥️",
                  title: "Alternative Learning Formats",
                  description: "From interactive video lessons to gamified modules and collaborative virtual classrooms, an approach that suits your learning style."
                },
                {
                  icon: "📚",
                  title: "Allocate Time for Study",
                  description: "Flexibility to learn at your own pace, allowing you to fit education into your schedule seamlessly."
                },
                {
                  icon: "🎓",
                  title: "Follow Training Program",
                  description: "Training programs are designed to foster a structured and comprehensive learning experience."
                }
              ].map((feature, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <h3 className="font-semibold text-[#1e3a8a] mb-2">{feature.title}</h3>
                  <p className="text-[#475569]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#1e3a8a] text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/placeholder.svg" alt="Stellar Classes Logo" className="w-10 h-10 mr-2" />
              <span className="text-xl font-bold">Stellar Classes</span>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <nav className="flex space-x-4">
                <a href="#" className="hover:text-[#60a5fa]">Home</a>
                <a href="#" className="hover:text-[#60a5fa]">About</a>
                <a href="#" className="hover:text-[#60a5fa]">Courses</a>
                <a href="#" className="hover:text-[#60a5fa]">Contact</a>
              </nav>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#60a5fa]"><Facebook size={24} /></a>
                <a href="#" className="hover:text-[#60a5fa]"><Instagram size={24} /></a>
                <a href="#" className="hover:text-[#60a5fa]"><Youtube size={24} /></a>
                <a href="#" className="hover:text-[#60a5fa]"><Linkedin size={24} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#60a5fa] pt-4 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 All rights Reserved | Stellar Classes</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-[#60a5fa]">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-[#60a5fa]">Terms of Use</a>
              <a href="#" className="text-sm hover:text-[#60a5fa]">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}