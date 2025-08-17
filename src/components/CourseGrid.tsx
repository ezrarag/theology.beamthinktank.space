'use client';

import { useState } from 'react';
import { BookOpen, Clock, Users, Star, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Introduction to Islamic Theology',
    category: 'Islam',
    description: 'Explore the fundamental principles of Islamic theology, including the Five Pillars, Quranic studies, and Islamic philosophy.',
    duration: '8 weeks',
    students: 45,
    rating: 4.8,
    price: 299,
    image: '🕌',
    instructor: 'Dr. Aisha Rahman',
    level: 'Beginner',
    topics: ['Quranic Studies', 'Islamic Philosophy', 'Five Pillars', 'Hadith']
  },
  {
    id: 2,
    title: 'Christian Theology & History',
    category: 'Christianity',
    description: 'Journey through Christian theology from its origins to modern interpretations, covering key doctrines and historical developments.',
    duration: '10 weeks',
    students: 52,
    rating: 4.7,
    price: 349,
    image: '⛪',
    instructor: 'Dr. Michael Chen',
    level: 'Beginner',
    topics: ['Biblical Studies', 'Church History', 'Systematic Theology', 'Ecumenism']
  },
  {
    id: 3,
    title: 'Esoteric Traditions & Mysticism',
    category: 'Esoteric Studies',
    description: 'Discover hidden spiritual traditions, mystical practices, and esoteric knowledge across various religious and philosophical systems.',
    duration: '12 weeks',
    students: 38,
    rating: 4.9,
    price: 399,
    image: '🔮',
    instructor: 'Dr. Elena Santos',
    level: 'Intermediate',
    topics: ['Mysticism', 'Kabbalah', 'Alchemy', 'Hermeticism']
  },
  {
    id: 4,
    title: 'Comparative Religion',
    category: 'Interfaith',
    description: 'Analyze and compare major world religions, understanding their similarities, differences, and shared human experiences.',
    duration: '6 weeks',
    students: 67,
    rating: 4.6,
    price: 249,
    image: '🌍',
    instructor: 'Dr. James Wilson',
    level: 'Beginner',
    topics: ['World Religions', 'Comparative Analysis', 'Interfaith Dialogue', 'Cultural Context']
  },
  {
    id: 5,
    title: 'Advanced Islamic Philosophy',
    category: 'Islam',
    description: 'Deep dive into Islamic philosophical traditions, including Sufism, Islamic ethics, and contemporary Islamic thought.',
    duration: '14 weeks',
    students: 28,
    rating: 4.9,
    price: 449,
    image: '📚',
    instructor: 'Dr. Omar Hassan',
    level: 'Advanced',
    topics: ['Sufism', 'Islamic Ethics', 'Contemporary Thought', 'Philosophical Debates']
  },
  {
    id: 6,
    title: 'Christian Mysticism & Contemplation',
    category: 'Christianity',
    description: 'Explore Christian mystical traditions, contemplative practices, and the inner spiritual journey within Christianity.',
    duration: '8 weeks',
    students: 34,
    rating: 4.7,
    price: 299,
    image: '🕊️',
    instructor: 'Dr. Sarah Johnson',
    level: 'Intermediate',
    topics: ['Contemplative Prayer', 'Mystical Theology', 'Desert Fathers', 'Modern Contemplatives']
  }
];

export default function CourseGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');


  const categories = ['All', 'Islam', 'Christianity', 'Esoteric Studies', 'Interfaith'];
  
  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Explore Our Courses
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover comprehensive courses in theology, world religions, and spiritual studies. 
            Learn from expert scholars and practitioners in an inclusive, respectful environment.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Course Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{course.image}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    course.category === 'Islam' ? 'bg-green-100 text-green-800' :
                    course.category === 'Christianity' ? 'bg-blue-100 text-blue-800' :
                    course.category === 'Esoteric Studies' ? 'bg-purple-100 text-purple-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {course.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>

                <p className="text-slate-600 mb-4 line-clamp-3">
                  {course.description}
                </p>

                {/* Course Meta */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-500">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-500">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{course.students} students enrolled</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-500">
                    <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                    <span>{course.rating} rating</span>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.slice(0, 3).map((topic, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md"
                      >
                        {topic}
                      </span>
                    ))}
                    {course.topics.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                        +{course.topics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">
                    ${course.price}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center group-hover:bg-blue-700">
                    Enroll Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
                      <p className="text-lg text-slate-600 mb-6">
              Can&apos;t find what you&apos;re looking for? Contact us about custom courses or private study.
            </p>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
            Request Custom Course
          </button>
        </div>
      </div>
    </section>
  );
}
