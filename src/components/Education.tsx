import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  const education = [
    {
      school: "某知名理工大学",
      degree: "人工智能 (本科)",
      period: "2022 - 2026 (预计)",
      description: "主修课程：高等数学、线性代数、概率论、数据结构与算法、机器学习、深度学习、计算机视觉、自然语言处理等。",
      achievements: ["GPA: 3.9/4.0", "国家奖学金获得者", "校级优秀学生"],
    },
    {
      school: "在线课程 / 认证",
      degree: "深度学习专项课程 (DeepLearning.AI)",
      period: "2023",
      description: "系统学习了卷积神经网络、循环神经网络、序列模型等核心概念。",
      achievements: ["完成 5 门专项课程", "获得 Coursera 认证证书"],
    },
  ];

  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">学习经历</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="mt-1 p-2 bg-primary/10 text-primary rounded-lg">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                      <CardTitle className="text-xl">{item.school}</CardTitle>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground font-medium">
                        <Calendar className="w-4 h-4" /> {item.period}
                      </span>
                    </div>
                    <p className="text-primary font-medium">{item.degree}</p>
                  </div>
                </CardHeader>
                <CardContent className="pl-16">
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-md border border-primary/10">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
