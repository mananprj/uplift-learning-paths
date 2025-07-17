import { Brain, Target, BarChart3, Users, BookOpen, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Tutoring',
    description: 'Get instant, personalized help from our AI tutor that adapts to your learning style and pace.',
    color: 'text-primary'
  },
  {
    icon: Target,
    title: 'Adaptive Learning Paths',
    description: 'Custom learning journeys that adjust based on your progress, strengths, and areas for improvement.',
    color: 'text-secondary'
  },
  {
    icon: BarChart3,
    title: 'Progress Analytics',
    description: 'Detailed insights into learning progress with visual charts and achievement tracking.',
    color: 'text-accent'
  },
  {
    icon: Users,
    title: 'Collaborative Learning',
    description: 'Connect with peers, join study groups, and learn together in a supportive environment.',
    color: 'text-success'
  },
  {
    icon: BookOpen,
    title: 'Rich Content Library',
    description: 'Access thousands of interactive lessons, videos, and exercises across all subjects.',
    color: 'text-warning'
  },
  {
    icon: Zap,
    title: 'Instant Feedback',
    description: 'Get immediate feedback on your work to accelerate learning and correct mistakes quickly.',
    color: 'text-primary'
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Features for Better Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-driven platform provides everything students need to succeed, 
            from personalized tutoring to comprehensive progress tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-background rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};