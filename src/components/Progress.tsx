import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress as ProgressBar } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Calendar, 
  Target, 
  Award, 
  BarChart3,
  Clock,
  BookOpen,
  Brain
} from 'lucide-react';

const progressData = [
  { subject: 'Mathematics', progress: 78, trend: '+12%', color: 'bg-primary' },
  { subject: 'English', progress: 65, trend: '+8%', color: 'bg-secondary' },
  { subject: 'Science', progress: 52, trend: '+15%', color: 'bg-accent' },
  { subject: 'History', progress: 43, trend: '+6%', color: 'bg-success' },
];

const weeklyActivity = [
  { day: 'Mon', hours: 2.5, lessons: 4 },
  { day: 'Tue', hours: 1.8, lessons: 3 },
  { day: 'Wed', hours: 3.2, lessons: 6 },
  { day: 'Thu', hours: 2.1, lessons: 4 },
  { day: 'Fri', hours: 1.5, lessons: 2 },
  { day: 'Sat', hours: 4.0, lessons: 8 },
  { day: 'Sun', hours: 2.8, lessons: 5 },
];

const achievements = [
  { title: 'Math Streak', description: '10 days in a row', icon: Target, earned: true },
  { title: 'Quick Learner', description: 'Complete 5 lessons in 1 hour', icon: Brain, earned: true },
  { title: 'Consistency', description: 'Learn every day for a week', icon: Calendar, earned: true },
  { title: 'Excellence', description: 'Score 95% on 3 assessments', icon: Award, earned: false },
];

export const Progress = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            <span>Learning Progress</span>
          </h1>
          <p className="text-muted-foreground">Track your learning journey and celebrate your achievements</p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Progress</p>
                  <p className="text-2xl font-bold text-foreground">73%</p>
                  <p className="text-xs text-success">↑ 8% this week</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Study Time</p>
                  <p className="text-2xl font-bold text-foreground">18.2h</p>
                  <p className="text-xs text-success">↑ 2.1h this week</p>
                </div>
                <Clock className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Lessons Done</p>
                  <p className="text-2xl font-bold text-foreground">127</p>
                  <p className="text-xs text-success">↑ 15 this week</p>
                </div>
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Streak</p>
                  <p className="text-2xl font-bold text-foreground">12 days</p>
                  <p className="text-xs text-success">Personal best!</p>
                </div>
                <Award className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Subject Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Subject Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {progressData.map((subject) => (
                <div key={subject.subject} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${subject.color}`}></div>
                      <span className="font-medium text-foreground">{subject.subject}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {subject.trend}
                      </Badge>
                      <span className="text-sm font-medium text-foreground">
                        {subject.progress}%
                      </span>
                    </div>
                  </div>
                  <ProgressBar value={subject.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Weekly Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyActivity.map((day) => (
                  <div key={day.day} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-primary">
                          {day.day}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {day.lessons} lessons
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {day.hours}h study time
                        </p>
                      </div>
                    </div>
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(day.hours / 4) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-accent" />
              <span>Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.title}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    achievement.earned 
                      ? 'border-success bg-success/5 shadow-sm' 
                      : 'border-muted bg-muted/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <achievement.icon className={`h-6 w-6 ${
                      achievement.earned ? 'text-success' : 'text-muted-foreground'
                    }`} />
                    {achievement.earned && (
                      <Badge variant="secondary" className="text-xs">
                        Earned
                      </Badge>
                    )}
                  </div>
                  <h3 className={`font-medium text-sm ${
                    achievement.earned ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};