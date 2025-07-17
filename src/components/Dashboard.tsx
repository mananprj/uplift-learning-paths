import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp, 
  Play, 
  Brain,
  Target,
  Star
} from 'lucide-react';

const learningPaths = [
  {
    id: 1,
    title: 'Mathematics Fundamentals',
    subject: 'Math',
    progress: 75,
    level: 'Intermediate',
    timeSpent: '2h 30m',
    nextLesson: 'Algebra Basics',
    difficulty: 'Medium',
    color: 'bg-primary'
  },
  {
    id: 2,
    title: 'English Grammar & Writing',
    subject: 'English',
    progress: 60,
    level: 'Beginner',
    timeSpent: '1h 45m',
    nextLesson: 'Sentence Structure',
    difficulty: 'Easy',
    color: 'bg-secondary'
  },
  {
    id: 3,
    title: 'Science Exploration',
    subject: 'Science',
    progress: 45,
    level: 'Beginner',
    timeSpent: '1h 20m',
    nextLesson: 'The Solar System',
    difficulty: 'Easy',
    color: 'bg-accent'
  }
];

const achievements = [
  { title: 'First Lesson Complete', icon: Play, color: 'text-success' },
  { title: 'Quick Learner', icon: Brain, color: 'text-primary' },
  { title: 'Goal Achiever', icon: Target, color: 'text-accent' },
  { title: 'Rising Star', icon: Star, color: 'text-warning' }
];

export const Dashboard = () => {
  const [selectedPath, setSelectedPath] = useState(learningPaths[0]);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Alex! 👋</h1>
          <p className="text-muted-foreground">Continue your learning journey with personalized AI guidance.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Lessons</p>
                  <p className="text-2xl font-bold text-foreground">127</p>
                </div>
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Time Spent</p>
                  <p className="text-2xl font-bold text-foreground">24h 15m</p>
                </div>
                <Clock className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Achievements</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
                <Award className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Streak</p>
                  <p className="text-2xl font-bold text-foreground">7 days</p>
                </div>
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Learning Paths */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Your Learning Paths</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {learningPaths.map((path) => (
                  <div 
                    key={path.id}
                    className="p-6 rounded-lg border bg-card/50 hover:bg-card transition-colors cursor-pointer"
                    onClick={() => setSelectedPath(path)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${path.color}`}></div>
                        <h3 className="font-semibold text-foreground">{path.title}</h3>
                        <Badge variant="secondary">{path.level}</Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{path.timeSpent}</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-foreground font-medium">{path.progress}%</span>
                      </div>
                      <Progress value={path.progress} className="h-2" />
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Next: {path.nextLesson}
                        </span>
                        <Button size="sm" variant="outline">
                          Continue
                          <Play className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* AI Tutor */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <span>AI Tutor</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-foreground mb-3">
                    "Great progress on your math lessons! Ready to tackle some algebra challenges?"
                  </p>
                  <Button size="sm" className="w-full">
                    Chat with AI Tutor
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span>Recent Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-muted/30">
                      <achievement.icon className={`h-5 w-5 ${achievement.color}`} />
                      <span className="text-sm text-foreground">{achievement.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Take Assessment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  View Progress Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Target className="mr-2 h-4 w-4" />
                  Set Learning Goals
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};