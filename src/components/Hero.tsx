
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";

const Hero = () => {
 const handleResumeDownload = () => {
  const link = document.createElement("a");
  link.href = "/MyResume.docx"; // Path relative to public/
  link.download = "Tarun_Mothukuru_Resume.docx";
  link.click();
};


  const handleGithubClick = () => {
    window.open("https://github.com", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open("https://linkedin.com", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{" "}
              <span className="text-blue-600">Tarun Surendra Mothukuru</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-600 mb-6">
              Full-Stack Developer
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              I'm passionate about building scalable web applications using React, Node.js, MongoDB, and Python. 
              Currently pursuing my Master's in Computer Science at UMass Lowell (graduating May 2025) with a 3.7 CGPA. 
              I love learning new technologies and am actively seeking full-time opportunities to contribute to innovative projects.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
               <Button 
                 onClick={handleResumeDownload}
                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
>
                 <Download className="mr-2 h-4 w-4" />
                 Download Resume
                </Button>

              <Button 
                variant="outline" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleGithubClick}
                className="hover:bg-blue-50 hover:text-blue-600"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLinkedinClick}
                className="hover:bg-blue-50 hover:text-blue-600"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-400 to-purple-500">
    <img
      src="/Images/myImage.png"
      alt="Tarun Surendra Mothukuru"
      className="w-full h-full object-cover"
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
