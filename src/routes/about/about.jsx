import React from "react";
import HighlightText from "../../components/highlight-text/highlight-text.jsx";

export default function About() {
  return (
    <main className="px-4">
      <Wrapper>
        <Question>من نحن؟</Question>
        <Answer>
          نحن مركز مختص بتعليم وتحفيظ القرآن الكريم والسنة النبوية. في
          <HighlightText> مخيم النصيرات </HighlightText>
          وسط قطاع غزة.
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
    </main>
  );
}

const Wrapper = ({ children }) => (
  <div className="px-3 mx-4 py-6 my-8 bg-white shadow-md rounded-md max-w-lg mx-auto">
    {children}
  </div>
);

const Question = ({ children }) => (
  <h2 className="text-slate-900 text-xl font-semibold mb-3">{children}</h2>
);

const Answer = ({ children }) => <p className="text-lg">{children}</p>;
