'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { z } from 'zod';
import { zfd } from 'zod-form-data';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
//
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
//
import { signInByCredentials } from '@/core/auth/utils';

export const SignInForm = () => {
  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const { toast } = useToast();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function onSubmit(values: z.infer<typeof SignInFormSchema>) {
    try {
      const res = await signInByCredentials(values);
      console.log(res);
      router.push('/app');
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error.message,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-50">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="border-slate-500 bg-slate-800 bg-opacity-50 text-slate-50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-50">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="Enter your password"
                      className="border-slate-500 bg-slate-800 bg-opacity-50 text-slate-50"
                      {...field}
                    />
                    <span
                      className="absolute right-2 top-1/2 -translate-y-1/2 transform"
                      onClick={togglePasswordVisibility}
                      onKeyDown={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <EyeOff {...passwordIconProps} />
                      ) : (
                        <Eye {...passwordIconProps} />
                      )}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="link" className="h-auto p-0 font-medium text-purple-400">
            Forgot Password?
          </Button>
          <Button
            type="submit"
            className="w-full rounded-xl bg-slate-900 bg-opacity-80 text-white"
            loading={form.formState.isSubmitting}
            loadingText="Please wait..."
          >
            Log in
          </Button>
        </div>
      </form>
    </Form>
  );
};

const passwordIconProps = {
  size: 24,
  className: 'cursor-pointer text-slate-200',
};

const SignInFormSchema = zfd.formData({
  password: z.string().min(1, { message: "Password can't be empty." }),
  // .min(8, {
  //   message: 'Password must be mix 8 characters long.',
  // })
  // .max(20, {
  //   message: 'Password must be max 20 characters long.',
  // })
  // .regex(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  //   'Password must include one small letter, one uppercase letter and one number'
  // ),

  email: z
    .string()
    .email({
      message: 'Email is not in the correct format',
    })
    .min(1, {
      message: "Email can't be empty.",
    }),
});
