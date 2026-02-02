import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const instance = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
    timeout: 1000,
});

const SignUpPage = () => {

    const history = useHistory();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
    const turkishPhoneRegex = /^(\+90|0)?5\d{9}$/;
    const taxNoRegex = /^T\d{4}V\d{6}$/;
    const ibanRegex = /^TR\d{24}$/;

    const [roles, setRoles] = useState([]);

    useEffect(() => {
        instance.get("/roles")
        .then((response) => setRoles(response.data))
        .catch(() => setError("root", { message: "Roles could not be loaded." }));
    }, []);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
        setError
    } = useForm({
        defaultValues: {
            role_id: 2
        }
    });

    const selectedRole = watch("role_id");
    const isStored = Number(selectedRole) === 3;

    const onSubmit = async (data) => {
        try {
            let payload = {
                name: data.name,
                email: data.email,
                password: data.password,
                role_id: data.role_id,
            };

            if (isStored) {
                payload.store = {
                    name: data.store_name,
                    phone: data.store_phone,
                    tax_no: data.tax_no,
                    bank_account: data.bank_account,
                };
            }

            await instance.post("/signup", payload);

            alert("You need to click link in email to activate your account!");
            history.goBack();

        } catch (err) {
            setError("root", {
                message: err.response?.data?.message || "signup failed"
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='max-w-md mx-auto py-6 space-y-4'
        >
            <input
                placeholder="Name"
                {...register("name", {
                    required: "Name is required",
                    minLength: { value: 3, message: "Min 3 characters"},
                })} 
            />
            <p>{errors.name?.message}</p>

            <input
                placeholder="Email"
                {...register("email", {
                    required: "Email is required",
                })} 
            />
            <p>{errors.email?.message}</p>

            <input
                type="password"
                placeholder="Password"
                {...register("password", {
                    required: true,
                    pattern: {
                        value: passwordRegex,
                        message: "Weak password",
                    },
                })} 
            />
            <p>{errors.password?.message}</p>

            <select {...register("role_id")}>
                {roles.map(r => (
                    <option key={r.id} value={r.id}>{r.name}</option>
                ))}
            </select>

            {isStored && (
                <>
                    <input
                        placeholder="Store Name"
                        {...register("store_name", {
                            required: "Store name is required",
                            minLength: { value: 3, message: "Min 3 characters" }
                        })}
                    />
                    {errors.store_name && <p>{errors.store_name.message}</p>}

                    <input
                        placeholder="Store Phone"
                        {...register("store_phone", {
                            required: "Store phone is required",
                            pattern: {
                            value: turkishPhoneRegex,
                            message: "Invalid Turkish phone number"
                            }
                        })}
                    />
                    {errors.store_phone && <p>{errors.store_phone.message}</p>}

                    <input
                        placeholder="Tax No"
                        {...register("tax_no", {
                            required: "Tax number is required",
                            pattern: {
                            value: taxNoRegex,
                            message: "Tax number format must be TXXXXVXXXXXX"
                            }
                        })}
                    />
                    {errors.tax_no && <p>{errors.tax_no.message}</p>}

                    <input
                        placeholder="IBAN"
                        {...register("bank_account", {
                            required: "Bank account is required",
                            pattern: {
                            value: ibanRegex,
                            message: "Invalid IBAN"
                            }
                        })}
                    />
                    {errors.bank_account && <p>{errors.bank_account.message}</p>}
                </>
            )}

            {errors.root && <p>{errors.root.message}</p>}

            <button disabled={isSubmitting}>
                {isSubmitting ? "Signing up..." : "Sign Up"}
            </button>
        </form>
    );
};

export default SignUpPage;