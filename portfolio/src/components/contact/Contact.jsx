import SectionHeading from "../common/SectionHeading";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          badge="Contact"
          title="Let's Build Something Amazing Together"
          description="Whether it's an internship, projects, collaboration, or just a conversation, I'd love to hear from you."
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          <ContactForm />

          <ContactInfo />

        </div>

      </div>
    </section>
  );
};

export default Contact;