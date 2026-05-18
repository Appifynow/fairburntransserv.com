import { useSubmitQuote } from "../hooks/useSubmitQuote";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

export const QuoteForm = () => {
    const { mutate: submitQuote, error } = useSubmitQuote();
    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = async (data: any) => {

        // use fetch for now, but we can switch to a more robust solution like axios if needed
        await submitQuote(data);
    };
    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {error && <p className="text-red-500 text-sm mb-4">An error occurred while submitting your quote request. Please try again later.</p>}
                <div>
                  <label className="block mb-2 font-semibold">
                    Your Name
                    <input {...register('name', { required: true, maxLength: 20 })} name="name" type="text" className="w-full px-4 py-3 rounded bg-slate-700 border-2 border-slate-600 focus:outline-none focus:border-red-500" />
                    <ErrorMessage errors={errors} name="name" render={({ message }) => <p className="text-red-500 text-sm mt-1">{message}</p>} />
                  </label>
                </div>
                <div>
                  <label className="block mb-2 font-semibold">
                    Phone Number
                    <input {...register('phone', { required: true, validate: (value) => /^(\+?\d{1,3}[-.\s]?)?\(?\d{1,4}[\)]?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(value) || "Please enter a valid phone number" })} name="phone" type="tel" className="w-full px-4 py-3 rounded bg-slate-700 border-2 border-slate-600 focus:outline-none focus:border-red-500" />
                    <ErrorMessage errors={errors} name="phone" render={({ message }) => <p className="text-red-500 text-sm mt-1">{message}</p>} />
                  </label>
                </div>
                <div>
                  <label className="block mb-2 font-semibold">
                    Email Address
                    <input {...register('email', { required: true, validate: (value) => /\S+@\S+\.\S+/.test(value) || "Please enter a valid email address" })} name="email" type="email" className="w-full px-4 py-3 rounded bg-slate-700 border-2 border-slate-600 focus:outline-none focus:border-red-500" />
                    <ErrorMessage errors={errors} name="email" render={({ message }) => <p className="text-red-500 text-sm mt-1">{message}</p>} />
                  </label>
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Vehicle Information
                    <input {...register('vehicle', { required: true, validate: (value) => value.trim() !== '' || "Please enter your vehicle information" })} name="vehicle" type="text" placeholder="Year, Make, Model" className="w-full px-4 py-3 rounded bg-slate-700 border-2 border-slate-600 focus:outline-none focus:border-red-500" />
                    <ErrorMessage errors={errors} name="vehicle" render={({ message }) => <p className="text-red-500 text-sm mt-1">{message}</p>} />

                  </label>
                </div>
                <div>
                  <label className="block mb-2 font-semibold">What's going on with your transmission?
                    <textarea {...register('issue', { required: true })} name="issue" rows={4} className="w-full px-4 py-3 rounded bg-slate-700 border-2 border-slate-600 focus:outline-none focus:border-red-500"></textarea>
                    <ErrorMessage errors={errors} name="issue" render={({ message }) => <p className="text-red-500 text-sm mt-1">{message}</p>} />
                    
                  </label>
                </div>
                <button type="submit" className="w-full bg-red-600 pressed:bg-red-300 hover:bg-red-700 py-4 rounded-lg font-bold transition-colors text-lg">
                  Submit Quote Request
                </button>
                <p className="text-center text-sm text-slate-400">We'll call you back ASAP</p>
        </form>
    )
}