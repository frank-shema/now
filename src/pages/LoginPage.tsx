
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import GradientBlob from '@/components/animations/GradientBlob';
import { useToast } from '@/hooks/use-toast';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login integration coming soon",
      description: "Internet Identity (II) integration will be available in the next update.",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <GradientBlob className="opacity-30" />
      
      <div className="absolute top-4 left-4">
        <Button variant="ghost" asChild>
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
      
      <Card className="w-full max-w-md glass-card animate-slide-up">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Sign In to DeCoFi</CardTitle>
          <CardDescription className="text-center">
            Access your decentralized cooperative finance account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember" className="rounded text-decofi-blue focus:ring-decofi-blue" />
                <Label htmlFor="remember" className="text-sm font-normal">Remember me</Label>
              </div>
              <Link to="/forgot-password" className="text-decofi-blue hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full bg-decofi-blue hover:bg-decofi-blue/90">
              Sign In
            </Button>
          </form>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-decofi-dark text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-2">
            <Button variant="outline" className="w-full" onClick={() => toast({
              title: "Internet Identity",
              description: "Internet Identity (II) integration coming soon!",
              variant: "default",
            })}>
              <img src="https://internetcomputer.org/img/IC_logo_horizontal.svg" alt="Internet Identity" className="h-5 mr-2" />
              Internet Identity
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 text-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?{' '}
            <Link to="/register" className="text-decofi-blue hover:underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
