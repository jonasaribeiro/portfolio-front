import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { socialLinksData } from "../data/contact";
import styles from "../styles/components/Contact.module.css";
import Link from "next/link";
import toast from "react-hot-toast";

const Contact: React.FC = () => {
  const { t } = useTranslation("contact");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success(t("form.success"));
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error(t("form.error"));
      }
    } catch (error) {
      toast.error(t("form.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2>{t("title")}</h2>
      <div className={styles.contact__socials}>
        {socialLinksData.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              href={link.url}
              key={link.id}
              target="_blank"
              className={styles.contact__social_button}
            >
              <Icon />
              <span>{t(link.nameKey)}</span>
            </Link>
          );
        })}
      </div>
      <form onSubmit={handleSubmit} className={styles.contact__form}>
        <div className={styles.contact__form_row}>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder={t("form.firstName")}
            required
            disabled={isSubmitting}
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder={t("form.lastName")}
            required
            disabled={isSubmitting}
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t("form.email")}
          required
          disabled={isSubmitting}
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={t("form.phone")}
          disabled={isSubmitting}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t("form.message")}
          rows={7}
          required
          disabled={isSubmitting}
        ></textarea>
        <button
          type="submit"
          className={styles.contact__submit_button}
          disabled={isSubmitting}
        >
          {isSubmitting ? t("form.submitting") : t("form.submit")}
        </button>
      </form>
    </section>
  );
};

export default Contact;
