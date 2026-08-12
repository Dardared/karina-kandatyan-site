"use client";

import { useState } from "react";

const steps = [
  {
    count: 5,
    sense: "видите",
    title: "Посмотрите вокруг",
    prompt: "Назовите пять вещей, которые видите прямо сейчас. Цвет, форма, свет — подойдёт любая деталь.",
  },
  {
    count: 4,
    sense: "ощущаете",
    title: "Вернитесь в тело",
    prompt: "Заметьте четыре физических ощущения: опору под ногами, ткань на коже, температуру воздуха.",
  },
  {
    count: 3,
    sense: "слышите",
    title: "Прислушайтесь",
    prompt: "Выделите три звука — близких или далёких. Не оценивайте их, просто отметьте.",
  },
  {
    count: 2,
    sense: "чувствуете по запаху",
    title: "Заметьте запахи",
    prompt: "Найдите два запаха рядом. Если сейчас ничего не чувствуете, вспомните два знакомых запаха.",
  },
  {
    count: 1,
    sense: "чувствуете на вкус",
    title: "Останьтесь здесь",
    prompt: "Назовите один вкус во рту — или вкус, который хорошо помните и любите.",
  },
];

export default function GroundingPractice() {
  const [started, setStarted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [noticed, setNoticed] = useState(0);
  const [finished, setFinished] = useState(false);

  const step = steps[stepIndex];
  const progress = finished ? 100 : ((stepIndex + noticed / step.count) / steps.length) * 100;

  function markOne() {
    setNoticed((current) => Math.min(current + 1, step.count));
  }

  function goNext() {
    if (noticed < step.count) return;
    if (stepIndex === steps.length - 1) {
      setFinished(true);
      return;
    }
    setStepIndex((current) => current + 1);
    setNoticed(0);
  }

  function restart() {
    setStarted(false);
    setStepIndex(0);
    setNoticed(0);
    setFinished(false);
  }

  return (
    <section className="grounding" aria-labelledby="grounding-title">
      <div className="groundingTop">
        <p>Попробовать прямо сейчас</p>
        <span>5–4–3–2–1 / заземление</span>
      </div>
      <div className="groundingProgress" aria-hidden="true">
        <i style={{ width: `${progress}%` }} />
      </div>

      {!started ? (
        <div className="practiceStart">
          <p className="practiceNumber" aria-hidden="true">01:30</p>
          <div>
            <h3 id="grounding-title">Когда тревога уводит<br />в «а вдруг» — вернитесь<br />в то, что есть сейчас.</h3>
            <p>
              Эта короткая практика переключает внимание с тревожных мыслей
              на реальные ощущения. Ничего вводить и сохранять не нужно.
            </p>
            <button type="button" onClick={() => setStarted(true)}>
              Начать практику <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      ) : finished ? (
        <div className="practiceFinish" aria-live="polite">
          <p className="practiceNumber" aria-hidden="true">ЗДЕСЬ</p>
          <div>
            <h3>Вы снова заметили<br />пространство вокруг себя.</h3>
            <p>
              Сделайте спокойный, мягкий выдох. Упражнение не решает причину
              тревоги, но может помочь вернуть внимание в настоящий момент.
            </p>
            <button type="button" onClick={restart}>Пройти ещё раз ↺</button>
          </div>
        </div>
      ) : (
        <div className="practiceStep" aria-live="polite">
          <div className="stepCount">
            <strong>{step.count}</strong>
            <span>вещей, которые<br />вы {step.sense}</span>
          </div>
          <div className="stepTask">
            <p>Шаг {stepIndex + 1} из {steps.length}</p>
            <h3>{step.title}</h3>
            <p className="stepPrompt">{step.prompt}</p>
            <div className="noticedLine" aria-label={`Отмечено ${noticed} из ${step.count}`}>
              {Array.from({ length: step.count }).map((_, index) => (
                <span className={index < noticed ? "done" : ""} key={index}>{index + 1}</span>
              ))}
            </div>
            <div className="stepActions">
              <button type="button" className="markButton" onClick={markOne} disabled={noticed === step.count}>
                {noticed === step.count ? "Готово" : "Отметить одну"}
              </button>
              <button type="button" className="nextButton" onClick={goNext} disabled={noticed < step.count}>
                {stepIndex === steps.length - 1 ? "Завершить" : "Следующий шаг"} <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <p className="practiceNote">
        Основано на технике заземления, описанной <a href="https://www.nhsinform.scot/healthy-living/mental-wellbeing/breathing-and-relaxation-exercises/grounding-exercises/" target="_blank" rel="noreferrer">NHS</a> и в руководстве <a href="https://www.who.int/publications/i/item/9789240003927" target="_blank" rel="noreferrer">ВОЗ</a>. Если тревога повторяется или мешает жить, обсудите её со специалистом.
      </p>
    </section>
  );
}
