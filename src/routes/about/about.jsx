import React from "react";
import HighlightText from "../../components/highlight-text/highlight-text.jsx";
import Main from "../../components/main/main.jsx";

export default function About() {
  return (
    <Main className="px-4">
      <h1 className="text-3xl md:text-4xl text-center font-semibold ">
        الأسئلة الأكثر شيوعاً
      </h1>
      <Wrapper>
        <Question>من نحن؟</Question>
        <Answer>
          مؤسسة
          <HighlightText> قرآنية </HighlightText>
          غير ربحية لا تتبنى أي فكر سياسي او تنظيمي، متخصصة في خدمة كتاب الله
          تعالى، تم تأسيسها عام [1442 هجرية - 2020 ميلادي]، تقع في{" "}
          <HighlightText>النصيرات</HighlightText> وسط قطاع غزة.
        </Answer>
      </Wrapper>
      <Wrapper>
        <Question>أين نُقَدِّمُ خدماتِنا؟</Question>
        <Answer>
          ننشط حالياً بشكلٍ مركزي في
          <HighlightText> مسجد القسَّام </HighlightText>
          في النصيرات، بالإضافة إلى مسجدي حسن حمد والأمين.
        </Answer>
      </Wrapper>
      <Wrapper>
        <Question>ما هي آخر برامجنا؟</Question>
        <Answer>
          على طريقة الكُتَّاب الطريقة الأشهر في تعليم كتاب الله، والتي خرَّجت
          أشهر القُرَّاء في عالمنا الإسلامي، قمنا مؤخرا ً بإنشاء برنامج
          <HighlightText> القارئ الصغير </HighlightText>، والذي يستهدف الفئات
          العمرية الدنيا بهدف تعليمهم وتحفيظهم القرآن الكريم بالتلقين.{" "}
        </Answer>
      </Wrapper>
    </Main>
  );
}

const Wrapper = ({ children }) => (
  <div className="px-3 py-6 my-8 bg-slate-50 shadow-md rounded-md ">
    {children}
  </div>
);

const Question = ({ children }) => (
  <h2 className="text-slate-900 text-xl md:text-2xl font-semibold mb-3">
    {children}
  </h2>
);

const Answer = ({ children }) => (
  <p className="text-lg md:text-xl">{children}</p>
);
