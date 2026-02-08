import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, Link} from "react-router-dom";
import { toast } from 'react-toastify';
import Gravatar from 'react-gravatar';
import { Eye, EyeOff } from 'lucide-react';

import { loginUser } from "../store/client/clientThunks";

const LoginPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    
    const user = useSelector(state => state.client.user);

    useEffect(() => {
        if (user && location.pathname === "/login") {
            history.replace("/");
        }
    }, [user, history, location.pathname]);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting, isValid },
    } = useForm({ mode: "onChange"});

    const [showPassword, setShowPassword] = useState(false);

    const emailValue = watch("email");
    const isDisabled = isSubmitting;
    const isEmailValid = !errors.email && emailValue;

    const onSubmit = async (data) => {
        try {
            await dispatch(
                loginUser(
                    { email: data.email, password: data.password },
                    data.rememberMe
                )
            );

            toast.success("Welcome back!", {
                autoClose: 1500,
            });

            const redirectTo = location.state?.from?.pathname || "/";

            history.push(redirectTo);

        } catch (error) {
            const message = 
                typeof error === "string"
                    ? error
                    : "Login failed";

            toast.error(message);
        }
    };

    return (
        <section className='min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#FAFAFA]'>
            <div className='flex items-center justify-center px-6'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-md space-y-5"
                >
                    <h2 className='text-3xl font-bold text-[#252B42]'>
                        Welcome back!
                    </h2>

                    <p className='text-sm text-[#737373] mb-6'>
                        Enter your credentials to access your account
                    </p>

                    <label className='label-text'>Email Address</label>
                    <input
                        placeholder="Enter your email"
                        className='input-style'
                        disabled={isDisabled}
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Invalid email address"
                            },
                        })}
                    />
                    {errors.email && (
                        <p className='error-text'>{errors.email.message}</p>
                    )}

                    <label className='label-text flex justify-between'>
                        Password
                        <span className='text-xs text-[#236AF0] cursor-pointer'>
                            Forgot Password?
                        </span>
                    </label>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            disabled={isDisabled}
                            className='input-style pr-10'
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(prev => !prev)}
                            className='absolute right-3 top-1/2 -translate-y-1/2 text-[#737373]'
                            tabIndex={-1}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {errors.password && (
                        <p className='error-text'>{errors.password.message}</p>
                    )}

                    <div className='flex items-center gap-2'>
                        <input
                            type='checkbox'
                            disabled={isDisabled}
                            {...register("rememberMe")}
                        />
                        <span className='text-sm text-[#737373]'>
                            Remember me for 30 days
                        </span>
                    </div>

                    <button
                        disabled={isSubmitting || !isValid}
                        className='w-full bg-[#3E5F2C] text-white py-3 rounded-lg font-semibold hover:bg-[#2F4A22] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                    >
                        {isSubmitting && (
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        )}
                        {isSubmitting ? "Logging in..." : "Login"}
                    </button>

                    {isEmailValid && (
                        <div className='flex items-center justify-center gap-2 pt-4'>
                            <Gravatar
                                email={emailValue || "example@example.com"}
                                size={32}
                                className='rounded-full'
                            />
                            <span className='text-sm text-[#737373]'>
                                {emailValue}
                            </span>
                        </div>
                    )}

                    <p className='text-sm text-center text-[#737373] pt-4'>
                        Don't have an account?{" "}
                        <Link
                            to='/signup'
                            className='text-[#236AF0] font-medium'
                        >
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>

            <div className='hidden lg:block relative'>
                <img
                    src='/images/signup_bg.png'
                    alt="signup leaves"
                    className='absolute inset-0 w-full h-full object-cover'
                />
            </div>
        </section>
    );
};

export default LoginPage;