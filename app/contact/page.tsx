import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Get in touch"
};

export default function ContactPage() {
  return (
    <section className="container py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight">Get in touch</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">
          Send a quick note about your project, role, or idea. I usually reply within a day.
        </p>
      </div>
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}

