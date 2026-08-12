import Image from "next/image";

const courseUrl = "https://karinakandatyan.getcourse.ru/course";
const telegramUrl = "https://t.me/Karkants";

const focus = [
  ["01", "Тревога", "Когда мысли не выключаются, а будущее пугает неопределённостью."],
  ["02", "Самооценка", "Когда внутренний критик звучит громче собственных желаний."],
  ["03", "Отношения", "Когда трудно обозначать границы, просить и выдерживать близость."],
  ["04", "Выгорание", "Когда сил всё меньше, а требований к себе — всё больше."],
];

const socials = [
  {
    index: "01",
    name: "Instagram",
    note: "мысли, наблюдения, жизнь",
    href: "https://www.instagram.com/karina_kanda/",
    className: "instagram",
  },
  {
    index: "02",
    name: "YouTube",
    note: "разговоры о психологии",
    href: "https://www.youtube.com/@%D0%9A%D0%B0%D1%80%D0%B8%D0%BD%D0%B0%D0%9A%D0%B0%D0%BD%D0%B4%D0%B0%D1%82%D1%8C%D1%8F%D0%BD",
    className: "youtube",
  },
  {
    index: "03",
    name: "B17",
    note: "образование и специализация",
    href: "https://www.b17.ru/tsatskina_karina/",
    className: "b17",
  },
];

export default function Home() {
  return (
    <main id="top">
      <nav className="nav shell" aria-label="Основная навигация">
        <a className="brand" href="#top" aria-label="Карина Кандатьян — наверх">
          <span>Карина</span>
          <span>Кандатьян</span>
        </a>
        <div className="navLinks">
          <a href="#about">О Карине</a>
          <a href="#course">Курс</a>
          <a href="#media">Медиа</a>
        </div>
        <a className="navCourse" href={courseUrl} target="_blank" rel="noreferrer">
          Курс <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="heroPortrait" aria-hidden="true">
          <Image
            src="/karina-hero.jpeg"
            alt=""
            width={601}
            height={900}
            priority
          />
        </div>
        <div className="heroGlow" />
        <div className="heroGrid" />
        <div className="shell heroInner">
          <p className="heroKicker"><span>КПТ</span> Клинический психолог / коуч ICF</p>
          <h1 id="hero-title">
            Понять<br />
            <span>себя —</span><br />
            <em>и действовать.</em>
          </h1>
          <p className="heroLead">
            Доказательная психология без обещаний «новой жизни за неделю».
            Ясно. Честно. С инструментами, которые можно применять.
          </p>
          <div className="heroActions">
            <a className="primaryAction" href={courseUrl} target="_blank" rel="noreferrer">
              <span>Перейти на курс</span><b aria-hidden="true">↗</b>
            </a>
            <a className="quietAction" href={telegramUrl} target="_blank" rel="noreferrer">
              Личная консультация <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <p className="heroName" aria-hidden="true">KARINA KANDATYAN</p>
        <p className="heroSide" aria-hidden="true">психология × ясность × действие</p>
      </section>

      <div className="pulse" aria-hidden="true">
        <div>
          <span>НЕ ОБЯЗАТЕЛЬНО ЗНАТЬ ВСЕ ОТВЕТЫ</span><i>✦</i><span>МОЖНО НАЧАТЬ С ВОПРОСА</span><i>✦</i>
          <span>НЕ ОБЯЗАТЕЛЬНО ЗНАТЬ ВСЕ ОТВЕТЫ</span><i>✦</i><span>МОЖНО НАЧАТЬ С ВОПРОСА</span><i>✦</i>
        </div>
      </div>

      <section className="about shell" id="about">
        <div className="chapter">
          <span>01</span>
          <p>О Карине</p>
        </div>
        <div className="aboutStatement">
          <p className="overline">Клинический психолог · КПТ-терапевт · семейный консультант</p>
          <h2>
            «Разумом всё понимаю» —<br />
            <em>не значит, что легко изменить.</em>
          </h2>
          <div className="aboutCopy">
            <p className="aboutIntro">
              Карина помогает увидеть, что именно поддерживает тревогу,
              напряжение или повторяющийся сценарий — и превратить понимание
              в новое действие.
            </p>
            <p>
              В центре работы не диагноз и не универсальный совет, а конкретный
              человек, его ситуация и честный разговор. Доказательный подход
              здесь не отменяет живого контакта.
            </p>
          </div>
        </div>

        <div className="photoEssay" aria-label="Фотографии Карины Кандатьян">
          <figure className="photoCandid">
            <Image src="/karina-candid.jpeg" alt="Карина Кандатьян" width={640} height={640} />
            <figcaption>В работе важен не образ «идеального себя», а живой человек.</figcaption>
          </figure>
          <p className="photoWord" aria-hidden="true">CONTACT</p>
          <figure className="photoProfile">
            <Image src="/karina-profile.jpeg" alt="Карина Кандатьян во время беседы" width={640} height={640} />
            <figcaption>Доказательный подход.<br />Живой контакт.</figcaption>
          </figure>
        </div>

        <div className="focusFlow" aria-label="Темы работы">
          {focus.map(([index, title, text]) => (
            <article key={index}>
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="course" id="course" aria-labelledby="course-title">
        <div className="anxietyLoop" aria-hidden="true">
          <span className="loopRing ringOne" />
          <span className="loopRing ringTwo" />
          <span className="loopRing ringThree" />
          <b>?</b>
          <i className="thought thoughtOne">мысль</i>
          <i className="thought thoughtTwo">контроль</i>
          <i className="thought thoughtThree">облегчение</i>
          <i className="thought thoughtFour">повтор</i>
        </div>
        <div className="shell courseInner">
          <div className="courseTopline">
            <span>02 / Онлайн-курс</span>
            <span>КПТ · практика · самопомощь</span>
          </div>
          <p className="coursePre">Когда внутри снова звучит:</p>
          <h2 id="course-title">
            «А вдруг?»<br />
            <em>Тревожность</em><br />
            и неопределённость
          </h2>
          <div className="courseBody">
            <p>
              Курс помогает не подавлять тревогу, а понимать её механику.
              Вы соберёте личную систему самопомощи и научитесь действовать,
              даже когда полной определённости нет.
            </p>
            <div className="courseNumbers" aria-label="Состав курса">
              <p><b>11</b><span>модулей</span></p>
              <p><b>24</b><span>урока</span></p>
              <p><b>7</b><span>инструментов</span></p>
            </div>
          </div>
          <a className="courseAction" href={courseUrl} target="_blank" rel="noreferrer">
            <span>Вся программа<br />и доступ к курсу</span>
            <b aria-hidden="true">↗</b>
          </a>
        </div>
        <p className="courseGhost" aria-hidden="true">UNCERTAINTY</p>
      </section>

      <section className="method shell" aria-labelledby="method-title">
        <div className="chapter">
          <span>03</span>
          <p>Подход</p>
        </div>
        <div className="methodIntro">
          <h2 id="method-title">Не «исправить себя».<br /><em>Разобраться с собой.</em></h2>
          <p>Три движения, из которых складываются устойчивые изменения.</p>
        </div>
        <div className="methodLine">
          <article><span>1</span><h3>Понять</h3><p>Что происходит и что поддерживает напряжение.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>2</span><h3>Проверить</h3><p>Где тревожный прогноз, а где факты и реальная задача.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>3</span><h3>Действовать</h3><p>Выбрать инструмент и закрепить новый способ реагировать.</p></article>
        </div>
      </section>

      <section className="media" id="media" aria-labelledby="media-title">
        <div className="shell mediaIntro">
          <p>Карина вне кабинета</p>
          <h2 id="media-title">Смотреть.<br /><em>Читать.</em> Узнавать.</h2>
        </div>
        <div className="socialStage">
          {socials.map((social) => (
            <a
              className={`socialRow ${social.className}`}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              key={social.name}
            >
              <span className="socialIndex">{social.index}</span>
              <strong>{social.name}</strong>
              <span className="socialNote">{social.note}</span>
              <span className="socialArrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contactHalo" aria-hidden="true" />
        <div className="shell contactInner">
          <p>Индивидуальная работа</p>
          <h2 id="contact-title">Есть ситуация,<br />которую хочется <em>разобрать?</em></h2>
          <a href={telegramUrl} target="_blank" rel="noreferrer">
            <span>Написать Карине<br /><small>в Telegram</small></span>
            <b aria-hidden="true">↗</b>
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <p className="footerName">Карина<br />Кандатьян</p>
        <p>Клинический психолог<br />КПТ-терапевт · коуч ICF</p>
        <a href="#top">Наверх ↑</a>
      </footer>

      <a className="mobileAction" href={courseUrl} target="_blank" rel="noreferrer">
        Перейти на курс <span aria-hidden="true">↗</span>
      </a>
    </main>
  );
}
