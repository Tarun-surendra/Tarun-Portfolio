
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "University of Massachusetts Lowell",
      degree: "Master of Science in Computer Science",
      duration: "Expected May 2025",
      cgpa: "3.7/4.0",
      location: "Lowell, MA"
    },
    {
      institution: "Acharya Nagarjuna University",
      degree: "Bachelor of Science in Computer Science",
      duration: "June 2022",
      cgpa: "3.6/4.0",
      location: "India"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey in computer science and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900 mb-2">
                      {edu.institution}
                    </CardTitle>
                    <h3 className="text-lg font-medium text-blue-600 mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.duration}
                      </div>
                      <div className="font-medium text-green-600">
                        CGPA: {edu.cgpa}
                      </div>
                      <div>
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
