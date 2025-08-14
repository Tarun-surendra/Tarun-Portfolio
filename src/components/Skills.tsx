
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Angular", "Flask", "TensorFlow", "PyTorch"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Databases",
      skills: ["SQL", "MySQL", "MongoDB"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Tools & Technologies",
      skills: ["OpenCV", "Scikit-learn", "Pandas", "NumPy", "Azure", "Bootstrap"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "Operating Systems",
      skills: ["MacOS", "Linux", "Windows"],
      color: "bg-gray-100 text-gray-800"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className={`${category.color} hover:shadow-md transition-shadow duration-200 text-sm py-2 px-3`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
