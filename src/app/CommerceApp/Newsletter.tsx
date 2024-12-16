import * as React from "react";

const NewsletterForm: React.FC = () => (
  <form className="flex flex-col max-md:max-w-full">
    <label htmlFor="newsletterEmail" className="sr-only">Your email</label>
    <div className="flex gap-3 mt-5 w-full text-base max-md:max-w-full">
      <input
        type="email"
        id="newsletterEmail"
        className="grow px-5 py-4 leading-none bg-white rounded-lg border border-solid border-zinc-200 text-zinc-400 w-fit"
        placeholder="Your email"
        aria-label="Your email"
      />
      <button type="submit" className="gap-5 self-stretch px-6 py-3.5 font-semibold leading-none text-center text-white capitalize whitespace-nowrap bg-cyan-600 rounded-lg max-md:px-5">
        Subscribe
      </button>
    </div>
    <div className="mt-4 text-base leading-6 opacity-60 text-slate-800 max-md:max-w-full">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
    </div>
  </form>
);

export default NewsletterForm;