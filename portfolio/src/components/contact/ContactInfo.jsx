import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

import contact from "../../data/contact";

const ContactInfo = () => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-2xl
      "
    >
      <h3 className="text-3xl font-bold">
        Contact Information
      </h3>

      <div className="mt-10 space-y-8">

        <div className="flex gap-4">
          <FiMapPin className="text-cyan-400 text-xl" />
          {contact.location}
        </div>

        <div className="flex gap-4">
          <FiMail className="text-cyan-400 text-xl" />
          {contact.email}
        </div>

        <div className="flex gap-4">
          <FiPhone className="text-cyan-400 text-xl" />
          {contact.phone}
        </div>

        <div className="flex gap-4">
          <FiGithub className="text-cyan-400 text-xl" />
          GitHub
        </div>

        <div className="flex gap-4">
          <FiLinkedin className="text-cyan-400 text-xl" />
          LinkedIn
        </div>

      </div>

      <div
        className="
          mt-12
          rounded-2xl
          bg-green-500/10
          border
          border-green-500/20
          p-5
        "
      >
        🟢 Available for Internship & Full-time Roles
      </div>

    </div>
  );
};

export default ContactInfo;