import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navItems = [
    { name: "关于我", href: "#hero" },
    { name: "学习经历", href: "#education" },
    { name: "项目", href: "#projects" },
    { name: "技能", href: "#skills" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
          AI
        </div>
        <span className="font-bold tracking-tight text-xl">Portfolio</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>

      <Button variant="outline" size="sm" className="hidden md:flex">
        联系我
      </Button>
    </motion.nav>
  );
}
