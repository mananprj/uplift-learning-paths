import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-learning.jpg';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted/30 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4" />
                <span>AI-Powered Learning Platform</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Personalized Learning
                <span className="text-primary block">For Every Child</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Unlock every student's potential with AI-driven personalized learning paths, 
                adaptive assessments, and intelligent tutoring designed to bridge educational gaps.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-secondary" />
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">10,000+</span> Students Helped
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">95%</span> Improvement Rate
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dashboard">
                <Button size="lg" className="text-lg px-8">
                  Start Learning Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/tutor">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Try AI Tutor
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Children learning together with AI technology"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-lg border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">AI Tutor Active</p>
                  <p className="text-sm text-muted-foreground">Adapting to your pace</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-lg shadow-lg border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Level Up!</p>
                  <p className="text-sm text-muted-foreground">Math skills improved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};