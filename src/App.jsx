import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronRight, Star, Quote,
  Dumbbell, Heart, Wind, Flame, Users, Calendar,
  Camera, Globe, Phone, MapPin, CheckCircle2
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  // Обработка скролла для изменения стиля хедера
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Плавный скролл к секциям
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 5000);
    e.target.reset();
  };

  const services = [
    {
      title: 'Индивидуальные тренировки',
      description: 'Персональный подход, контроль техники и программа, созданная специально под ваши цели и физиологию.',
      image: 'Girl2.jpg',
      icon: <Dumbbell className="w-6 h-6 text-red-600" />
    },
    {
      title: 'Групповые тренинги',
      description: 'Интенсивные, круговые и силовые форматы. Энергия группы, которая заставит вас выложиться на 100%.',
      image: 'Victor2.jpg',
      icon: <Users className="w-6 h-6 text-red-600" />
    },
    {
      title: 'Онлайн консультации',
      description: 'Разбор питания, подбор добавок (нутрицевтиков) и корректировка образа жизни из любой точки мира.',
      image: 'Girl4.jpg',
      icon: <Heart className="w-6 h-6 text-red-600" />
    },
    {
      title: 'Дыхательные практики',
      description: 'Улучшение оксигенации, снижение стресса и повышение выносливости через осознанное дыхание.',
      image: 'ball_girl_2.jpg',
      icon: <Wind className="w-6 h-6 text-red-600" />
    },
    {
      title: 'Массаж (Спортивный и Тайский)',
      description: 'Глубокое восстановление мышц, снятие зажимов и улучшение мобильности после тяжелых нагрузок.',
      image: 'Victor3.jpg',
      icon: <Flame className="w-6 h-6 text-red-600" />
    }
  ];

  const teamMembers = [
    { name: 'Виктор Николаев', role: 'Главный Тренер', desc: 'Специалист по силовому тренингу и биомеханике.', img: 'Victor1.jpg' },
    { name: 'Анна Сергеева', role: 'Нутрициолог', desc: 'Эксперт по спортивным добавкам и коррекции веса.', img: 'Girl1.jpg' },
    { name: 'Дмитрий Соколов', role: 'Тренер по функционалу', desc: 'Мастер круговых и высокоинтенсивных тренировок.', img: 'Victor2.jpg' },
    { name: 'Елена Маркова', role: 'Тренер по растяжке', desc: 'Специалист по мобильности и восстановлению.', img: 'Girl2.jpg' },
    { name: 'Игорь Калин', role: 'Мастер массажа', desc: 'Эксперт по спортивному и восстановительному массажу.', img: 'Victor3.jpg' }
  ];

  const testimonials = [
    { name: 'Алексей С.', text: 'Благодаря VictoryNutrition я не только скинул 15 кг, но и полностью изменил свой образ жизни. Индивидуальный подход здесь на высшем уровне!' },
    { name: 'Мария К.', text: 'Групповые круговые тренировки — это огонь! Тренеры не дают сдаться, атмосфера просто невероятная. И отдельное спасибо за советы по питанию.' },
    { name: 'Евгений Д.', text: 'Спортивный массаж после соревнований буквально вернул меня к жизни. Очень грамотные специалисты, которые понимают тело спортсмена.' },
  ];

  return (
      <div className="w-full min-h-screen bg-white text-zinc-900 selection:bg-red-600 selection:text-white overflow-x-hidden m-0 p-0">
        {/* Навигация */}
        <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'}`}>
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="text-2xl font-black tracking-tighter uppercase cursor-pointer" onClick={() => scrollTo('hero')}>
              <span className="text-white">Victory</span><span className="text-red-600">Nutrition</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              {['Услуги', 'О нас', 'Команда', 'Отзывы'].map((item, index) => (
                  <button key={index} onClick={() => scrollTo(item === 'О нас' ? 'about' : item === 'Услуги' ? 'services' : item === 'Команда' ? 'team' : 'testimonials')} className="text-sm font-semibold text-zinc-300 hover:text-white transition-colors uppercase tracking-wide">
                    {item}
                  </button>
              ))}
            </nav>

            <button onClick={() => scrollTo('contact')} className="hidden md:flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 font-bold uppercase tracking-wide transition-all transform hover:scale-105">
              Оставить заявку
            </button>

            <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Мобильное меню */}
          {isMobileMenuOpen && (
              <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-zinc-800 flex flex-col items-center py-6 space-y-4 shadow-xl">
                {['Услуги', 'О нас', 'Команда', 'Отзывы'].map((item, index) => (
                    <button key={index} onClick={() => scrollTo(item === 'О нас' ? 'about' : item === 'Услуги' ? 'services' : item === 'Команда' ? 'team' : 'testimonials')} className="text-white font-semibold uppercase tracking-wide text-lg w-full py-2 hover:text-red-600">
                      {item}
                    </button>
                ))}
                <button onClick={() => scrollTo('contact')} className="w-11/12 bg-red-600 text-white px-6 py-3 font-bold uppercase tracking-wide mt-4">
                  Записаться сейчас
                </button>
              </div>
          )}
        </header>

        {/* Главный экран (Hero) */}
        <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full z-0">
            <img src="Victor1.jpg" alt="Тренировка в зале" className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
            <div className="max-w-2xl">
              <div className="inline-block bg-red-600 text-white px-3 py-1 text-sm font-bold uppercase tracking-wider mb-6">
                Трансформация начинается
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-[1.1] mb-6">
                Победа над собой <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Твой новый стандарт</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-lg leading-relaxed">
                Индивидуальный подход к тренировкам, выверенное питание и эффективное восстановление. Мы создаем чемпионов в повседневной жизни.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollTo('contact')} className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold uppercase tracking-wide text-lg transition-all flex items-center justify-center gap-2 group">
                  Начать тренировки
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={() => scrollTo('services')} className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-bold uppercase tracking-wide text-lg transition-all flex items-center justify-center">
                  Изучить услуги
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* О нас */}
        <section id="about" className="w-full py-24 bg-zinc-950 text-white overflow-hidden">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 border-l-4 border-red-600 pl-6 text-zinc-100">
                  Философия <br/> VictoryNutrition
                </h2>
                <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                  Мы верим, что истинный результат рождается на стыке дисциплины, научного подхода и поддержки. Наша задача — не просто дать вам штангу, а перестроить ваше мышление, питание и привычки.
                </p>
                <ul className="space-y-4 mt-8">
                  {[
                    'Тренировки на результат без вреда для здоровья',
                    'Доказательная нутрициология и подбор добавок',
                    'Комплексное восстановление (массаж, дыхание)',
                    'Сопровождение и поддержка 24/7'
                  ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-lg font-medium">
                        <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0" />
                        <span className="text-zinc-200">{item}</span>
                      </li>
                  ))}
                </ul>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-red-600 transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
                <img src="Girl1.jpg" alt="Тренер в зале" className="relative z-10 w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </section>

        {/* Услуги */}
        <section id="services" className="w-full py-24 bg-zinc-50">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase text-zinc-900 mb-4">Наши направления</h2>
              <p className="text-zinc-600 text-lg max-w-2xl mx-auto">Комплексный подход для достижения максимальных результатов. Выберите формат, который подходит именно вам.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                  <div key={index} className="group bg-white border border-zinc-200 overflow-hidden hover:shadow-2xl hover:border-red-600 transition-all duration-300">
                    <div className="h-64 overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all z-10"></div>
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute bottom-4 right-4 z-20 bg-white p-3 rounded-full shadow-lg">
                        {service.icon}
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold uppercase mb-3 text-zinc-900">{service.title}</h3>
                      <p className="text-zinc-600 mb-6 line-clamp-3 text-sm">{service.description}</p>
                      <button onClick={() => scrollTo('contact')} className="text-red-600 font-bold uppercase text-xs tracking-widest flex items-center gap-1 group-hover:gap-3 transition-all">
                        Записаться <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Динамичный баннер */}
        <section className="relative w-full py-48 bg-black overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full z-0 opacity-40">
            <img src="ball_girl.jpg" alt="Прыжок" className="w-full h-full object-cover object-center" />
          </div>
          <div className="relative z-10 text-center px-4 w-full">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-tight drop-shadow-2xl">
              "Твое тело может всё. <br/> <span className="text-red-600">Осталось убедить в этом разум."</span>
            </h2>
          </div>
        </section>

        {/* Команда */}
        <section id="team" className="w-full py-24 bg-white">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase text-zinc-900 mb-4 border-l-4 border-red-600 pl-6">Команда</h2>
                <p className="text-zinc-600 text-lg max-w-xl pl-6">Профессионалы, которые проведут вас от первой тренировки до поставленной цели.</p>
              </div>
              <button onClick={() => scrollTo('contact')} className="bg-zinc-900 hover:bg-red-600 text-white px-8 py-3 font-bold uppercase tracking-wide transition-colors">
                Стать частью команды
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {teamMembers.map((member, index) => (
                  <div key={index} className="bg-zinc-50 border border-zinc-100 hover:border-red-600 group transition-all duration-300 relative overflow-hidden flex flex-col h-full">
                    <div className="w-full pt-[130%] relative overflow-hidden bg-zinc-200">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/80 z-10"></div>
                      <img
                          src={member.img}
                          alt={member.name}
                          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                      />
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <div className="w-8 h-1 bg-red-600 mb-2 transform origin-left group-hover:scale-x-150 transition-transform"></div>
                        <h3 className="text-lg font-bold text-white uppercase leading-tight">{member.name}</h3>
                        <p className="text-red-400 text-xs font-semibold uppercase tracking-widest">{member.role}</p>
                      </div>
                    </div>
                    <div className="p-5 flex-grow bg-white">
                      <p className="text-zinc-600 text-xs leading-relaxed italic">{member.desc}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Отзывы */}
        <section id="testimonials" className="w-full py-24 bg-zinc-950 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-15 grayscale">
            <img src="Girl3.jpg" alt="Результат" className="w-full h-full object-cover object-center" />
          </div>

          <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-4 italic">Результаты говорят <span className="text-red-600">сами за себя</span></h2>
              <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-8 hover:-translate-y-2 transition-transform duration-300 relative">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-zinc-800" />
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                      ))}
                    </div>
                    <p className="text-zinc-300 text-lg mb-8 relative z-10 italic">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-bold uppercase tracking-wider">{testimonial.name}</h4>
                        <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest">Клиент VictoryNutrition</p>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Оформление заявки */}
        <section id="contact" className="w-full py-0 flex flex-col lg:flex-row bg-white">
          <div className="w-full lg:w-1/2 relative min-h-[600px]">
            <img src="Girl4.jpg" alt="Консультация" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-red-600/85 mix-blend-multiply"></div>
            <div className="absolute inset-0 flex flex-col justify-center p-12 lg:p-24 text-white">
              <h2 className="text-5xl md:text-7xl font-black uppercase mb-6 leading-tight drop-shadow-lg">Готов <br/>сделать <br/>первый шаг?</h2>
              <p className="text-xl font-medium opacity-95 mb-10 max-w-md leading-relaxed border-l-4 border-white pl-6">
                Оставьте заявку, и наш менеджер свяжется с вами для подбора идеальной программы тренировок и питания.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-2xl">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-xl">г. Москва, ул. Спортивная, д. 1</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-8 lg:p-24 bg-zinc-50 flex items-center relative">
            <div className="w-full max-w-md mx-auto">
              <h3 className="text-3xl font-black uppercase text-zinc-900 mb-2 italic">Оформить заявку</h3>
              <p className="text-zinc-500 mb-10 tracking-widest uppercase text-xs font-bold">Начни свою трансформацию сегодня</p>

              {formStatus === 'success' ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-10 text-center rounded shadow-xl">
                    <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-green-500" />
                    <p className="font-black text-2xl uppercase">Заявка принята!</p>
                    <p className="mt-2 font-medium">Мы перезвоним вам в ближайшее время.</p>
                  </div>
              ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-8">
                    <div className="group">
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-2 group-focus-within:text-red-600 transition-colors">Ваше имя</label>
                      <input required type="text" className="w-full bg-transparent border-b-2 border-zinc-200 px-0 py-3 text-lg focus:outline-none focus:border-red-600 transition-all font-medium" placeholder="Иван Иванов" />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-2 group-focus-within:text-red-600 transition-colors">Телефон</label>
                      <input required type="tel" className="w-full bg-transparent border-b-2 border-zinc-200 px-0 py-3 text-lg focus:outline-none focus:border-red-600 transition-all font-medium" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-2 group-focus-within:text-red-600 transition-colors">Интересующая услуга</label>
                      <select className="w-full bg-transparent border-b-2 border-zinc-200 px-0 py-3 text-lg focus:outline-none focus:border-red-600 transition-all cursor-pointer font-medium text-zinc-800">
                        <option>Индивидуальные тренировки</option>
                        <option>Групповые тренинги</option>
                        <option>Онлайн консультация (питание)</option>
                        <option>Дыхательные практики</option>
                        <option>Массаж (Спортивный / Тайский)</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full bg-black hover:bg-red-600 text-white font-black uppercase tracking-[0.3em] py-5 mt-4 shadow-xl transition-all transform hover:-translate-y-1">
                      Отправить данные
                    </button>
                    <p className="text-[10px] text-zinc-400 text-center leading-relaxed">
                      ОТПРАВЛЯЯ ФОРМУ, ВЫ СОГЛАШАЕТЕСЬ С ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ И ОБРАБОТКОЙ ДАННЫХ.
                    </p>
                  </form>
              )}
            </div>
          </div>
        </section>

        {/* Футер */}
        <footer className="w-full bg-black text-white pt-20 pb-10 border-t border-zinc-900">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-2">
                <div className="text-3xl font-black tracking-tighter uppercase mb-6">
                  <span>Victory</span><span className="text-red-600">Nutrition</span>
                </div>
                <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
                  Комплексный подход к вашему телу и здоровью. Мы объединили лучшие мировые практики тренировок, нутрициологии и физического восстановления.
                </p>
                {/* Соцсети в футере */}
                <div className="flex space-x-5">
                  {[
                    { id: 1, IconComponent: Camera, href: "#" },
                    { id: 2, IconComponent: Globe, href: "#" }
                  ].map((social) => {
                    const { IconComponent, href } = social;
                    return (
                        <a
                            key={social.id}
                            href={href}
                            className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-red-600 transition-all transform hover:-rotate-6 shadow-lg"
                        >
                          <IconComponent size={24} />
                        </a>
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className="font-black uppercase tracking-widest mb-6 text-sm">Навигация</h4>
                <ul className="space-y-3">
                  {['Услуги', 'О нас', 'Команда', 'Отзывы'].map((item, i) => (
                      <li key={i}>
                        <button onClick={() => scrollTo(item === 'О нас' ? 'about' : item === 'Услуги' ? 'services' : item === 'Команда' ? 'team' : 'testimonials')} className="text-zinc-500 hover:text-red-600 transition-colors uppercase text-xs font-bold tracking-widest">
                          {item}
                        </button>
                      </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-black uppercase tracking-widest mb-6 text-sm">Сервисы</h4>
                <ul className="space-y-3">
                  {['Индивидуальные тренировки', 'Спортивный массаж', 'Нутрициология', 'Подбор БАДов'].map((service, i) => (
                      <li key={i}>
                        <span className="text-zinc-500 text-xs font-bold tracking-widest uppercase hover:text-white transition-colors cursor-pointer">{service}</span>
                      </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em]">© 2026 VICTORYNUTRITION. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
              <div className="flex space-x-8">
                <a href="#" className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors">Политика</a>
                <a href="#" className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors">Оферта</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default App;