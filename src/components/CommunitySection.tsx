'use client';

import { useState } from 'react';
import { Quote, Award, Calendar, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Ahmed',
    role: 'Interfaith Educator',
    location: 'Toronto, Canada',
    content: 'BEAM has transformed my understanding of world religions. The courses are comprehensive, the instructors are knowledgeable, and the community is incredibly supportive.',
    avatar: '👩‍🏫',
    rating: 5
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Religious Studies Student',
    location: 'Los Angeles, USA',
    content: 'I\'ve taken three courses so far and each one has deepened my appreciation for different faith traditions. The comparative approach is eye-opening.',
    avatar: '👨‍🎓',
    rating: 5
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Community Leader',
    location: 'Mumbai, India',
    content: 'As someone working in interfaith dialogue, BEAM\'s programs have given me the tools and knowledge to build bridges between communities.',
    avatar: '👩‍💼',
    rating: 5
  }
];

const certificationPrograms = [
  {
    id: 1,
    title: 'Interfaith Leadership Certificate',
    duration: '6 months',
    level: 'Intermediate',
    description: 'Develop skills to lead interfaith initiatives, facilitate dialogue, and build inclusive communities.',
    features: [
      'Leadership workshops',
      'Dialogue facilitation training',
      'Community project development',
      'Mentorship program'
    ],
    price: 899
  },
  {
    id: 2,
    title: 'Religious Studies Specialist',
    duration: '12 months',
    level: 'Advanced',
    description: 'Comprehensive study of major world religions with focus on academic research and teaching.',
    features: [
      'Advanced theological studies',
      'Research methodology',
      'Teaching practicum',
      'Thesis project'
    ],
    price: 1299
  },
  {
    id: 3,
    title: 'Spiritual Care Practitioner',
    duration: '8 months',
    level: 'Intermediate',
    description: 'Learn to provide spiritual support and care across different faith traditions and cultural contexts.',
    features: [
      'Spiritual assessment skills',
      'Cross-cultural communication',
      'Ethics and boundaries',
      'Practical training'
    ],
    price: 699
  }
];

export default function CommunitySection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);

  return (
    <section id="community" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Hear from students, educators, and community leaders who have experienced 
              the transformative power of interfaith learning.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <Quote className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <p className="text-xl md:text-2xl text-slate-700 italic leading-relaxed">
                  &ldquo;{testimonials[activeTestimonial].content}&rdquo;
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                        index === activeTestimonial ? 'bg-blue-600' : 'bg-slate-300'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-4xl mr-4">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-slate-900">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-slate-600 text-sm">
                      {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certification Programs */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Professional Certification Programs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Take your interfaith knowledge to the next level with our comprehensive 
              certification programs designed for professionals and serious learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationPrograms.map((program) => (
              <div
                key={program.id}
                className={`bg-white rounded-xl shadow-lg p-6 border-2 transition-all duration-300 ${
                  selectedProgram === program.id
                    ? 'border-blue-500 shadow-xl scale-105'
                    : 'border-transparent hover:border-blue-200 hover:shadow-xl'
                }`}
                onClick={() => setSelectedProgram(program.id)}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {program.title}
                  </h3>
                  <div className="flex items-center justify-center space-x-4 text-sm text-slate-600">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {program.duration}
                    </span>
                    <span className="px-2 py-1 bg-slate-100 rounded-full">
                      {program.level}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 text-center">
                  {program.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Program Features:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    ${program.price}
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Community Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
              <p className="text-slate-600">Active Learners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <p className="text-slate-600">Certified Graduates</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-slate-600">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <p className="text-slate-600">Expert Instructors</p>
            </div>
          </div>

          {/* Join Community CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Connect with like-minded learners, participate in discussions, 
              and be part of a global network of interfaith practitioners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                Join Community
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
