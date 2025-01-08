"use client";
import { useEffect, useRef, useState } from "react";
import style from "./style.module.css";

export default function ContactForm() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  return (
    <div>
      <div className={style.contact_wrapper}>
        <h1 className={style.header}>Get Started Today</h1>
        <div className={style.contact_inner_wrapper}>
          <div className={style.left_card}>
            <p>
              Ready to elevate your journey in entertainment and sports
              management? Partner with Baron-inc Events and unlock a world
              of possibilities. Let us bring your vision to life, amplify your
              talents, and create moments that leave a lasting impact. Reach out
              to us today and take the first step toward excellence!
            </p>


            <div className={style.contact_info}>
              <p>Call us on: 07448231468</p>
              <p>Email: olamidebaron@gmail.com</p>
            </div>
          </div>

          <div className={style.right_card}>
            <h2>Alternatively, you can fill the form below</h2>
            <form ref={form} className={style.form}>
              <label className={style.label}>Name</label>
              <input className={style.input} type="text" name="user_name" />
              <label className={style.label}>Email</label>
              <input className={style.input} type="email" name="user_email" />
              <label className={style.label}>Message</label>
              <textarea className={style.textarea} name="message" />
              <input className={style.submit} type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
