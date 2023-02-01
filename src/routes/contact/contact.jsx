import React from "react";
import Main from "../../components/main/main";
import {
  Email,
  Facebook,
  Instagram,
  Youtube,
} from "../../components/social-icons/social-icons";

export default function Contact() {
  return (
    <Main className="">
      <Title>تواصل معنا عبر مواقع التواصل الإجتماعى التالية:</Title>
      <Section className=" ">
        <ContactCard link="https://www.facebook.com/people/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8-%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85-%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86-%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85-%D9%88%D8%A7%D9%84%D8%B3%D9%86%D8%A9-%D8%A7%D9%84%D9%86%D8%A8%D9%88%D9%8A%D8%A9/100064249261031/">
          <Facebook />
        </ContactCard>
        <ContactCard link="https://www.youtube.com/@user-lu9tt2rm1k">
          <Youtube />
        </ContactCard>
        <ContactCard>
          <Instagram />
        </ContactCard>
      </Section>
      <Title>
        نسعد باستقبال اقتراحاتِكُم واستفساراتِكُم عبر البريد الإلكتروني التالي:
      </Title>
      <Section>
        <ContactCard link="mailto:">
          <Email className="mx-auto" />
          hello@alkitab.ps
        </ContactCard>
      </Section>
      <Title>
        نستقبل مساهماتكم وصدقاتكم على حساب المحفظة الإلكترونية التالي:
      </Title>
    </Main>
  );
}

const ContactCard = ({ children, link }) => (
  <div className="bg-white w-max p-1 md:p-2 rounded-md shadow-xl cursor-pointer hover:bg-slate-100 active:shadow-md active:bg-slate-50 transition-all duration-100">
    <a href={link} target="_blank">
      {children}
    </a>
  </div>
);

const Title = ({ children }) => (
  <h2 className="text-xl md:text-2xl mb-3 font-semibold">{children}</h2>
);

const Section = ({ children }) => (
  <section className="flex gap-4 mb-12  ">{children}</section>
);
