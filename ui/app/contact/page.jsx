"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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

import { motion } from "framer-motion";

const Contact = () => {
  // Step 1: State for form inputs
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  // Step 2: Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Step 3: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });
      if (response.ok) {
        // Handle success
        console.log("Message sent successfully!");
      } else {
        // Handle error
        console.error("Error sending message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit} // Step 4: Attach submit handler
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
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="first_name" // Use name attribute for state management
                  placeholder="First name"
                  value={formData.first_name} // Bind value to state
                  onChange={handleChange} // Handle input change
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
                  name="phone_number"
                  placeholder="Phone number"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
              </div>

              {/* textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here"
                value={formData.message} // Bind value to state
                onChange={handleChange} // Handle input change
              />
              {/* btn  */}

              <Button variant="outline" className="max-w-40" type="submit">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-slate-100 dark:bg-slate-800 text-black dark:text-white rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1 ">
                      <p className="text-black dark:text-white/60">
                        {item.title}
                      </p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
