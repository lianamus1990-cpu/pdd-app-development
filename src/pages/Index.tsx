import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { SignQuiz } from '@/components/SignQuiz';
import { FindMistake } from '@/components/FindMistake';
import { FinalTest } from '@/components/FinalTest';
import { VideoEmbed } from '@/components/VideoEmbed';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignQuiz, setShowSignQuiz] = useState(false);
  const [showFindMistake, setShowFindMistake] = useState(false);
  const [showFinalTest, setShowFinalTest] = useState(false);
  const [completedSections, setCompletedSections] = useState<number[]>([]);

  const sections = [
    {
      id: 0,
      emoji: '🚦',
      title: 'Добро пожаловать!',
      subtitle: 'Изучаем ПДД весело',
      content: (
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="text-6xl sm:text-8xl pulse-slow">🚗🚦🚸</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Правила дорожного движения
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
            Привет! Я помогу тебе изучить правила дорожного движения. 
            Это важно для твоей безопасности на дороге! 🎓
          </p>
          <div className="bg-accent p-4 sm:p-6 rounded-2xl">
            <p className="text-sm sm:text-base font-medium text-gray-700">
              💡 Знание ПДД спасает жизни каждый день!
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      emoji: '📌',
      title: 'Раздел 1. Основы ПДД',
      subtitle: 'Что нужно знать',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Что такое ПДД?</h3>
          <p className="text-sm sm:text-base text-gray-600">
            Правила дорожного движения — это законы, которые помогают всем 
            участникам движения безопасно передвигаться по дорогам.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-xl space-y-3">
            <h4 className="font-semibold text-gray-800">🤔 Почему важно соблюдать ПДД?</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span>Защищает твою жизнь и здоровье</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span>Помогает избежать аварий</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span>Делает дороги безопаснее для всех</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-xl">
            <h4 className="font-semibold text-gray-800 mb-3">👥 Участники движения:</h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="text-4xl mb-2">🚶</div>
                <p className="text-sm font-medium">Пешеходы</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🚲</div>
                <p className="text-sm font-medium">Велосипедисты</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🚗</div>
                <p className="text-sm font-medium">Водители</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">📺 Обучающее видео:</h4>
            <VideoEmbed 
              url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
              title="Основы ПДД для начинающих"
            />
            <p className="text-xs text-gray-500 text-center">
              Вставьте ссылку на ваше видео из YouTube, VK, Rutube или Яндекс.Дзен
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      emoji: '🚥',
      title: 'Раздел 2. Дорожные знаки',
      subtitle: 'Учимся распознавать',
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">Категории знаков</h3>
          
          <div className="space-y-3">
            <Card className="p-4 bg-yellow-50 border-yellow-200">
              <div className="flex items-center gap-3">
                <div className="text-4xl">⚠️</div>
                <div>
                  <h4 className="font-bold text-gray-800">Предупреждающие</h4>
                  <p className="text-sm text-gray-600">Предупреждают об опасности</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-red-50 border-red-200">
              <div className="flex items-center gap-3">
                <div className="text-4xl">🚫</div>
                <div>
                  <h4 className="font-bold text-gray-800">Запрещающие</h4>
                  <p className="text-sm text-gray-600">Запрещают определённые действия</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-blue-50 border-blue-200">
              <div className="flex items-center gap-3">
                <div className="text-4xl">➡️</div>
                <div>
                  <h4 className="font-bold text-gray-800">Предписывающие</h4>
                  <p className="text-sm text-gray-600">Указывают, как нужно действовать</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-green-50 border-green-200">
              <div className="flex items-center gap-3">
                <div className="text-4xl">ℹ️</div>
                <div>
                  <h4 className="font-bold text-gray-800">Информационные</h4>
                  <p className="text-sm text-gray-600">Дают полезную информацию</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-purple-50 p-4 rounded-xl text-center">
            <p className="font-semibold text-purple-800">
              🎯 Скоро здесь будет тест на знание знаков!
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      emoji: '🛑',
      title: 'Раздел 3. Светофоры',
      subtitle: 'Сигналы и правила',
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">Сигналы светофора</h3>
          
          <div className="space-y-3">
            <div className="bg-red-100 p-4 rounded-xl border-2 border-red-300">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-500 rounded-full animate-pulse flex items-center justify-center text-2xl">
                  🔴
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Красный свет</h4>
                  <p className="text-sm text-gray-700">СТОЙ! Движение запрещено</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-100 p-4 rounded-xl border-2 border-yellow-300">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
                  🟡
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Жёлтый свет</h4>
                  <p className="text-sm text-gray-700">ВНИМАНИЕ! Приготовься</p>
                </div>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded-xl border-2 border-green-300">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl">
                  🟢
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Зелёный свет</h4>
                  <p className="text-sm text-gray-700">ИДИ! Можно переходить</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl">
            <h4 className="font-semibold text-gray-800 mb-2">👮 Сигналы регулировщика</h4>
            <p className="text-sm text-gray-600">
              Если на перекрёстке стоит регулировщик, его сигналы важнее светофора!
              Нужно внимательно следить за движениями его рук и жезла.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      emoji: '☝️',
      title: 'Раздел 4. Безопасность пешехода',
      subtitle: 'Как переходить дорогу',
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">Правила безопасного перехода</h3>
          
          <Card className="p-4 bg-gradient-to-r from-green-50 to-blue-50">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span>🚸</span>
              <span>Пешеходный переход</span>
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-600">1.</span>
                <span>Подойди к переходу и остановись</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-600">2.</span>
                <span>Посмотри налево, потом направо</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-600">3.</span>
                <span>Убедись, что все машины остановились</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-600">4.</span>
                <span>Переходи быстрым шагом, не беги!</span>
              </li>
            </ul>
          </Card>

          <div className="grid grid-cols-2 gap-3">
            <Card className="p-3 bg-blue-50 text-center">
              <div className="text-3xl mb-2">🌉</div>
              <p className="text-sm font-semibold">Надземный переход</p>
              <p className="text-xs text-gray-600 mt-1">Самый безопасный!</p>
            </Card>
            <Card className="p-3 bg-purple-50 text-center">
              <div className="text-3xl mb-2">🚇</div>
              <p className="text-sm font-semibold">Подземный переход</p>
              <p className="text-xs text-gray-600 mt-1">Тоже очень безопасно!</p>
            </Card>
          </div>

          <div className="bg-red-50 border-2 border-red-200 p-4 rounded-xl">
            <h4 className="font-bold text-red-700 mb-2">⚠️ НИКОГДА:</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>❌ Не перебегай дорогу в неположенном месте</li>
              <li>❌ Не играй рядом с дорогой</li>
              <li>❌ Не выходи на дорогу из-за машин или кустов</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      emoji: '🚲',
      title: 'Раздел 5. Велосипед и безопасность',
      subtitle: 'Правила для велосипедистов',
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">Езда на велосипеде</h3>
          
          <Card className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50">
            <h4 className="font-bold text-gray-800 mb-3">📋 Основные правила:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span>🔸</span>
                <span>До 14 лет можно ездить только по тротуарам и велодорожкам</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🔸</span>
                <span>Велосипед должен быть исправным (тормоза, руль, колёса)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🔸</span>
                <span>Нужно подавать сигналы рукой при поворотах</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🔸</span>
                <span>Слезай с велосипеда при переходе дороги</span>
              </li>
            </ul>
          </Card>

          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-xl">
            <h4 className="font-bold text-green-800 mb-3">🛡️ Защитное снаряжение:</h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="text-4xl mb-1">🪖</div>
                <p className="text-xs font-semibold">Шлем</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-1">🦺</div>
                <p className="text-xs font-semibold">Жилет</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-1">🧤</div>
                <p className="text-xs font-semibold">Перчатки</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl">
            <p className="text-sm text-gray-700 text-center">
              💡 <span className="font-semibold">Помни:</span> Шлем может спасти твою жизнь при падении!
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      emoji: '🔍',
      title: 'Раздел 6. Практическое обучение',
      subtitle: 'Игры и задания',
      content: showSignQuiz ? (
        <div>
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => setShowSignQuiz(false)}
          >
            <Icon name="ChevronLeft" size={20} className="mr-2" />
            Назад к играм
          </Button>
          <SignQuiz />
        </div>
      ) : showFindMistake ? (
        <div>
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => setShowFindMistake(false)}
          >
            <Icon name="ChevronLeft" size={20} className="mr-2" />
            Назад к играм
          </Button>
          <FindMistake />
        </div>
      ) : (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">Проверь свои знания!</h3>
          
          <Card className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 hover-scale cursor-pointer"
            onClick={() => setShowSignQuiz(true)}
          >
            <div className="text-center space-y-3">
              <div className="text-5xl">🚥</div>
              <h4 className="font-bold text-gray-800 text-lg">Тест на знание знаков</h4>
              <p className="text-sm text-gray-600">Проверь, знаешь ли ты дорожные знаки!</p>
              <Button className="w-full">
                <Icon name="Play" size={20} className="mr-2" />
                Начать тест
              </Button>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 hover-scale cursor-pointer"
            onClick={() => setShowFindMistake(true)}
          >
            <div className="text-center space-y-3">
              <div className="text-5xl">🔎</div>
              <h4 className="font-bold text-gray-800 text-lg">Найди ошибку</h4>
              <p className="text-sm text-gray-600">Игра на внимательность</p>
              <Button className="w-full">
                <Icon name="Play" size={20} className="mr-2" />
                Начать игру
              </Button>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="text-center space-y-3">
              <div className="text-5xl">🏆</div>
              <h4 className="font-bold text-gray-800 text-lg">Твой прогресс</h4>
              <p className="text-sm text-gray-600">
                Пройдено разделов: {completedSections.length} / 8
              </p>
              <div className="flex gap-2 justify-center flex-wrap">
                {[1,2,3,4,5,6,7,8].map(num => (
                  <div key={num} className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: completedSections.includes(num) ? '#10b981' : '#e5e7eb' }}
                  >
                    {completedSections.includes(num) ? '✓' : num}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      id: 7,
      emoji: '💬',
      title: 'Раздел 7. История и факты о ПДД',
      subtitle: 'Интересные истории',
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">Знаешь ли ты?</h3>
          
          <Card className="p-4 bg-yellow-50 border-yellow-200">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span>📜</span>
              <span>История ПДД</span>
            </h4>
            <p className="text-sm text-gray-700">
              Первые правила дорожного движения появились ещё в Древнем Риме! 
              Юлий Цезарь запретил въезд колесниц в центр города в дневное время из-за пробок.
            </p>
          </Card>

          <Card className="p-4 bg-blue-50 border-blue-200">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span>🌍</span>
              <span>Факт о светофорах</span>
            </h4>
            <p className="text-sm text-gray-700">
              Первый светофор был установлен в Лондоне в 1868 году. Он был газовым 
              и взорвался через месяц! Электрические светофоры появились только в 1912 году.
            </p>
          </Card>

          <Card className="p-4 bg-green-50 border-green-200">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span>🚗</span>
              <span>Интересно</span>
            </h4>
            <p className="text-sm text-gray-700">
              В Японии зелёный сигнал светофора называют "синим" из-за особенностей языка. 
              А в некоторых странах пешеходные переходы делают разноцветными и яркими!
            </p>
          </Card>

          <Card className="p-4 bg-purple-50 border-purple-200">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span>⚠️</span>
              <span>Важный факт</span>
            </h4>
            <p className="text-sm text-gray-700">
              90% дорожных аварий происходит из-за невнимательности и нарушения правил. 
              Знание ПДД реально спасает жизни каждый день!
            </p>
          </Card>
        </div>
      ),
    },
    {
      id: 8,
      emoji: '📝',
      title: 'Раздел 8. Итоговое тестирование',
      subtitle: 'Проверь свои знания',
      content: showFinalTest ? (
        <div>
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => setShowFinalTest(false)}
          >
            <Icon name="ChevronLeft" size={20} className="mr-2" />
            Назад к информации
          </Button>
          <FinalTest />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-center space-y-4">
            <div className="text-6xl animate-bounce">🎓</div>
            <h3 className="text-2xl font-bold text-gray-800">Пройди финальный тест!</h3>
            <p className="text-gray-600">
              Ответь на 15 вопросов и получи сертификат юного знатока ПДД!
            </p>
          </div>

          <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Вопросов:</span>
                <span className="text-lg font-bold text-primary">15</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Проходной балл:</span>
                <span className="text-lg font-bold text-primary">12+ правильных</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Награда:</span>
                <span className="text-lg font-bold text-green-600">🏆 Сертификат</span>
              </div>
            </div>
          </Card>

          <Button 
            className="w-full text-lg py-6 hover-scale"
            onClick={() => setShowFinalTest(true)}
          >
            <Icon name="Play" size={20} className="mr-2" />
            Начать тестирование
          </Button>

          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-xl text-center">
            <p className="text-sm text-gray-700">
              ✨ После успешного прохождения теста ты получишь сертификат!
            </p>
          </div>
        </div>
      ),
    },
  ];

  const menuItems = [
    { id: 1, emoji: '📌', title: 'Основы ПДД' },
    { id: 2, emoji: '🚥', title: 'Дорожные знаки' },
    { id: 3, emoji: '🛑', title: 'Светофоры' },
    { id: 4, emoji: '☝️', title: 'Безопасность пешехода' },
    { id: 5, emoji: '🚲', title: 'Велосипед' },
    { id: 6, emoji: '🔍', title: 'Практика' },
    { id: 7, emoji: '💬', title: 'История ПДД' },
    { id: 8, emoji: '📝', title: 'Тестирование' },
  ];

  const handleNext = () => {
    if (!completedSections.includes(currentSection) && currentSection > 0) {
      setCompletedSections([...completedSections, currentSection]);
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZUQ8SV6zn77BdGAg+l9z0yHwrBSJ7zPDZjT8JE2Gx6+yfUQ0PUqXj87BfGwk7k9n0zn4uBSCAy/HajUIIEly06+ugUg0OTaLh8bZiHAdAmdz0wXkkBSR+yO/bjkcIEGGy7OyfTw0QUKPi8bZjHAlAnd7zwHwrBSF/yO/cjkUIDl+16+mfUA0QTaHh8bdjHgpAneD0wn4rBSF+xu7cjkUIDV2y6+qfUw0ST6Hi8rZjHgpBneD0w38sBS==');
      audio.play().catch(() => {});
    }
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setShowSignQuiz(false);
      setShowFindMistake(false);
      setShowFinalTest(false);
    }
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setShowSignQuiz(false);
      setShowFindMistake(false);
      setShowFinalTest(false);
    }
  };

  const handleMenuClick = (id: number) => {
    setCurrentSection(id);
    setMenuOpen(false);
    setShowSignQuiz(false);
    setShowFindMistake(false);
    setShowFinalTest(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="hover-scale">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 overflow-y-auto">
              <div className="py-6 space-y-2">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span>📚</span>
                  <span>Содержание</span>
                </h2>
                {menuItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={currentSection === item.id ? "default" : "ghost"}
                    className="w-full justify-start text-left hover-scale relative"
                    onClick={() => handleMenuClick(item.id)}
                  >
                    <span className="text-2xl mr-3">{item.emoji}</span>
                    <span className="text-sm flex-1">{item.title}</span>
                    {completedSections.includes(item.id) && (
                      <span className="text-green-500 text-lg">✓</span>
                    )}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-2 max-w-[60vw] sm:max-w-none">
            <span className="text-xl sm:text-2xl">{sections[currentSection].emoji}</span>
            <div className="min-w-0">
              <h1 className="font-bold text-xs sm:text-sm text-gray-800 truncate">
                {sections[currentSection].title}
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">
                {sections[currentSection].subtitle}
              </p>
            </div>
          </div>

          <div className="w-10" />
        </div>
      </div>

      <div className="pt-20 pb-24 px-3 sm:px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="p-4 sm:p-6 animate-fade-in shadow-lg">
            {sections[currentSection].content}
          </Card>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg border-t">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4 max-w-2xl mx-auto">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentSection === 0}
              className="hover-scale"
            >
              <Icon name="ChevronLeft" size={20} className="mr-1" />
              Назад
            </Button>

            <div className="flex gap-1">
              {sections.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSection
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              disabled={currentSection === sections.length - 1}
              className="hover-scale"
            >
              Далее
              <Icon name="ChevronRight" size={20} className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;