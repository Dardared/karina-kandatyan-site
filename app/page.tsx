import Image from "next/image";

const courseUrl = "https://karinakandatyan.getcourse.ru/course";
const telegramUrl = "https://t.me/Karkants";

const focus = [
  "Тревога и панические атаки",
  "Самооценка и самокритика",
  "Отношения и границы",
  "Прокрастинация и выгорание",
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Основная навигация">
        <a className="wordmark" href="#top" aria-label="Карина Кандатьян — наверх">
          KK<span>•</span>
        </a>
        <div className="navLinks">
          <a href="#about">О Карине</a>
          <a href="#course">Курс</a>
          <a href="#contact">Контакты</a>
        </div>
        <a className="navCta" href={courseUrl} target="_blank" rel="noreferrer">
          Перейти на курс <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><i /> Клинический психолог · КПТ-терапевт · коуч ICF</p>
          <h1>
            Помогаю<br />
            <em>понять себя.</em><br />
            И действовать.
          </h1>
          <p className="lead">
            Без воды и обещаний «изменить жизнь за неделю». Только ясность,
            проверенные методы и инструменты, которые работают в реальной жизни.
          </p>
          <div className="heroActions">
            <a className="button buttonRed" href={courseUrl} target="_blank" rel="noreferrer">
              Начать с курса <span aria-hidden="true">↗</span>
            </a>
            <a className="textLink" href={telegramUrl} target="_blank" rel="noreferrer">
              Личная консультация <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="portraitWrap" aria-label="Карина Кандатьян">
          <div className="goldDisc" />
          <div className="redFrame" />
          <Image
            className="portrait"
            src="/karina-portrait.jpg"
            alt="Карина Кандатьян, клинический психолог"
            width={601}
            height={900}
            priority
          />
          <p className="sideNote">Доказательный подход <b>—</b> живой диалог</p>
          <div className="heroStamp"><span>КПТ</span><small>практика<br />и результат</small></div>
        </div>
      </section>

      <div className="ticker" aria-label="Принципы работы">
        <div>
          <span>Ясность</span><i>✦</i><span>Система</span><i>✦</i><span>Практика</span><i>✦</i>
          <span>Без воды</span><i>✦</i><span>Ясность</span><i>✦</i><span>Система</span><i>✦</i>
        </div>
      </div>

      <section className="about shell" id="about">
        <div className="sectionIndex">01 / О Карине</div>
        <div className="aboutMain">
          <p className="quote">
            «Разумом всё понимаю,<br />
            <span>но ничего не меняется»</span>
          </p>
          <div className="aboutGrid">
            <div>
              <h2>Я помогаю превратить понимание в изменения.</h2>
              <p>
                Карина Кандатьян — клинический психолог, когнитивно-поведенческий
                терапевт, семейный консультант и профессиональный коуч. В центре
                работы — конкретная ситуация человека, честный диалог и результат.
              </p>
            </div>
            <ul>
              {focus.map((item, index) => <li key={item}><b>0{index + 1}</b>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="course" id="course">
        <div className="shell courseGrid">
          <div className="courseIntro">
            <div className="sectionIndex light">02 / Практический курс</div>
            <p className="courseTag">КПТ-курс Карины Кандатьян</p>
            <h2>Тревожность<br />и <em>неопределённость</em></h2>
            <p className="courseLead">
              Научитесь справляться с тревогой, а не бороться с собой. Соберите
              понятную систему самопомощи для моментов, когда внутри звучит «а вдруг?».
            </p>
            <a className="button buttonGold" href={courseUrl} target="_blank" rel="noreferrer">
              Узнать всё о курсе <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="courseData">
            <div><strong>11</strong><span>модулей<br />по шагам</span></div>
            <div><strong>24</strong><span>коротких<br />урока</span></div>
            <div><strong>7</strong><span>КПТ-<br />инструментов</span></div>
            <blockquote>
              <span>«</span>
              Проблемой становится не сама тревога, а способы, которыми мы пытаемся с ней справиться.
            </blockquote>
          </div>
        </div>
        <div className="courseLine">МЫСЛЬ <i>→</i> КОНТРОЛЬ <i>→</i> ОБЛЕГЧЕНИЕ <i>→</i> ПОВТОР</div>
      </section>

      <section className="method shell">
        <div className="sectionIndex">03 / Подход</div>
        <div className="methodTitle">
          <p>Не бороться с собой.</p>
          <h2>Увидеть механизм.<br /><em>Выбрать действие.</em></h2>
        </div>
        <div className="methodCards">
          <article><b>01</b><h3>Понять</h3><p>Что происходит, почему повторяется и что поддерживает напряжение.</p></article>
          <article className="active"><b>02</b><h3>Проверить</h3><p>Отделить тревожный прогноз от фактов и реальной задачи.</p></article>
          <article><b>03</b><h3>Действовать</h3><p>Выбрать инструмент под ситуацию и закрепить новый способ реагировать.</p></article>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contactGrid">
          <div>
            <p className="eyebrow light"><i /> Индивидуальная работа</p>
            <h2>Хотите разобрать<br /><em>свою ситуацию?</em></h2>
          </div>
          <div className="contactAction">
            <p>Напишите Карине в Telegram. Коротко расскажите, с чем хотите поработать, и договоритесь о консультации.</p>
            <a href={telegramUrl} target="_blank" rel="noreferrer">@Karkants <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="wordmark">KK<span>•</span></div>
        <p>Карина Кандатьян<br /><small>Клинический психолог · КПТ-терапевт</small></p>
        <div className="socials">
          <a href="https://www.instagram.com/karina_kanda/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.youtube.com/@%D0%9A%D0%B0%D1%80%D0%B8%D0%BD%D0%B0%D0%9A%D0%B0%D0%BD%D0%B4%D0%B0%D1%82%D1%8C%D1%8F%D0%BD" target="_blank" rel="noreferrer">YouTube ↗</a>
          <a href="https://www.b17.ru/tsatskina_karina/" target="_blank" rel="noreferrer">B17 ↗</a>
        </div>
      </footer>
    </main>
  );
}
