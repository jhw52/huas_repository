import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Code, Database } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider uppercase bg-secondary text-secondary-foreground rounded-full">
            人工智能专业学生
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            探索 <span className="text-primary">AI</span> 的无限可能
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
            专注于深度学习、自然语言处理和计算机视觉。致力于将前沿技术转化为解决现实问题的创新方案。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              查看项目 <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              了解更多
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="p-6 bg-card border border-border rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">深度学习</h3>
            <p className="text-sm text-muted-foreground">精通神经网络架构设计与优化</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">算法开发</h3>
            <p className="text-sm text-muted-foreground">熟练使用 Python, PyTorch 和 TensorFlow</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">数据科学</h3>
            <p className="text-sm text-muted-foreground">擅长大规模数据集的处理与特征工程</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
