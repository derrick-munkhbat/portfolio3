"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Loader2 } from "lucide-react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+976 8818-1074",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "derrick.munkhbat@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Central Tower, Ulaanbaatar",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.first_name.trim() === "" ||
      formData.last_name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.comment.trim() === ""
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    // Give React time to render loading state
    await new Promise((resolve) => setTimeout(resolve, 300));

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");

        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          comment: "",
        });

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        setErrorMessage("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-slate-100 dark:bg-slate-800 rounded-xl"
            >
              <h3 className="text-4xl text-black dark:text-white">
                Let's work together
              </h3>

              <p className="text-black dark:text-white/60">
                Need a full stack web developer for your next project? I can
                help you design and build a fast, secure, and scalable web
                application. Let's chat and bring your vision to life!
              </p>

              {errorMessage && <p className="text-red-500">{errorMessage}</p>}

              {successMessage && (
                <p className="text-green-500">{successMessage}</p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="first_name"
                  placeholder="First name"
                  value={formData.first_name}
                  onChange={handleChange}
                />

                <Input
                  name="last_name"
                  placeholder="Last name"
                  value={formData.last_name}
                  onChange={handleChange}
                />

                <Input
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />

                <Input
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <Textarea
                name="comment"
                className="h-[200px]"
                placeholder="Type your message here"
                value={formData.comment}
                onChange={handleChange}
              />

              <Button
                variant="outline"
                type="submit"
                disabled={isLoading}
                className="max-w-40"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-slate-100 dark:bg-slate-800 text-black dark:text-white rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>

                  <div className="flex-1">
                    <p className="text-black dark:text-white/60">
                      {item.title}
                    </p>

                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
