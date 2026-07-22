import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      toast.error("Please enter your name.");
      return false;
    }

    if (form.name.trim().length < 3) {
      toast.error("Name should be at least 3 characters.");
      return false;
    }

    if (!form.email.trim()) {
      toast.error("Please enter your email.");
      return false;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email.");
      return false;
    }

    if (!form.subject.trim()) {
      toast.error("Please enter a subject.");
      return false;
    }

    if (!form.message.trim()) {
      toast.error("Please enter your message.");
      return false;
    }

    if (form.message.trim().length < 20) {
      toast.error("Message should be at least 20 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-2xl
        shadow-[0_15px_60px_rgba(0,0,0,.35)]
      "
    >
      {/* Name & Email */}

      <div className="grid gap-6 md:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-4
            text-white
            placeholder:text-gray-500
            outline-none
            transition-all
            duration-300
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-500/20
          "
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-4
            text-white
            placeholder:text-gray-500
            outline-none
            transition-all
            duration-300
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-500/20
          "
        />
      </div>

      {/* Subject */}

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        className="
          mt-6
          w-full
          rounded-xl
          border
          border-white/10
          bg-white/5
          p-4
          text-white
          placeholder:text-gray-500
          outline-none
          transition-all
          duration-300
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-500/20
        "
      />

      {/* Message */}

      <textarea
        rows={6}
        name="message"
        placeholder="Write your message..."
        value={form.message}
        onChange={handleChange}
        className="
          mt-6
          w-full
          resize-none
          rounded-xl
          border
          border-white/10
          bg-white/5
          p-4
          text-white
          placeholder:text-gray-500
          outline-none
          transition-all
          duration-300
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-500/20
        "
      />

      {/* Button */}

      <motion.button
        type="submit"
        whileHover={{
          scale: 1.02,
          y: -2,
        }}
        whileTap={{
          scale: 0.98,
        }}
        disabled={loading}
        className="
          mt-8
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-gradient-to-r
          from-indigo-500
          via-purple-500
          to-cyan-500
          px-8
          py-4
          font-semibold
          text-white
          transition-all
          duration-300
          hover:shadow-[0_0_35px_rgba(6,182,212,.35)]
          disabled:cursor-not-allowed
          disabled:opacity-70
        "
      >
        <FiSend className="text-lg" />

        {loading ? "Sending..." : "Send Message"}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;