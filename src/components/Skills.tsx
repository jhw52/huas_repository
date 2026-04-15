import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Skills() {
  const skillCategories = [
    {
      id: "ai",
      name: "人工智能",
      skills: ["机器学习", "深度学习", "强化学习", "自然语言处理 (NLP)", "计算机视觉 (CV)", "大语言模型 (LLM)", "生成式 AI", "神经网络架构"],
    },
    {
      id: "tech",
      name: "技术栈",
      skills: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "NumPy", "Pandas", "Hugging Face"],
    },
    {
      id: "dev",
      name: "软件开发",
      skills: ["Git", "Docker", "Linux", "SQL", "React", "TypeScript", "FastAPI", "RESTful API"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">专业技能</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Badge variant="outline" className="px-4 py-2 text-sm md:text-base bg-background hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
