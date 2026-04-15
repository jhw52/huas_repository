import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "基于深度学习的图像风格迁移",
      description: "利用卷积神经网络 (CNN) 实现艺术风格的自动迁移，支持多种艺术风格与实时处理。",
      tags: ["PyTorch", "CNN", "Computer Vision"],
      image: "https://picsum.photos/seed/ai-art/800/600",
      github: "#",
      demo: "#",
    },
    {
      title: "智能对话机器人系统",
      description: "基于 Transformer 架构的大语言模型微调，实现了具备多轮对话能力的智能客服助手。",
      tags: ["NLP", "Transformer", "Python"],
      image: "https://picsum.photos/seed/chatbot/800/600",
      github: "#",
      demo: "#",
    },
    {
      title: "自动驾驶环境感知系统",
      description: "集成目标检测与语义分割算法，用于识别道路场景中的行人、车辆及交通标志。",
      tags: ["YOLOv8", "Deep Learning", "OpenCV"],
      image: "https://picsum.photos/seed/autonomous/800/600",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">精选项目</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col border-border/50 hover:border-primary/50 transition-colors">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-0 flex gap-4">
                  <Button variant="outline" size="sm" className="flex-1 gap-2">
                    <Github className="w-4 h-4" /> 代码
                  </Button>
                  <Button size="sm" className="flex-1 gap-2">
                    <ExternalLink className="w-4 h-4" /> 演示
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
