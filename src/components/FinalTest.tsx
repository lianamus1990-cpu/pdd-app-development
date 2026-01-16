import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const questions = [
  {
    question: 'На какой сигнал светофора можно переходить дорогу?',
    options: ['Красный', 'Жёлтый', 'Зелёный', 'Любой'],
    correct: 2,
  },
  {
    question: 'Где безопаснее всего переходить дорогу?',
    options: ['Где удобно', 'По пешеходному переходу', 'Между машинами', 'За углом'],
    correct: 1,
  },
  {
    question: 'Что нужно сделать перед переходом дороги?',
    options: ['Побежать быстрее', 'Посмотреть налево и направо', 'Закрыть глаза', 'Позвонить другу'],
    correct: 1,
  },
  {
    question: 'С какого возраста можно ездить на велосипеде по дороге?',
    options: ['С 10 лет', 'С 12 лет', 'С 14 лет', 'С 16 лет'],
    correct: 2,
  },
  {
    question: 'Что означает красный сигнал светофора?',
    options: ['Внимание', 'Стоп, движение запрещено', 'Можно идти', 'Приготовиться'],
    correct: 1,
  },
  {
    question: 'Можно ли играть рядом с дорогой?',
    options: ['Да, всегда', 'Нет, нельзя', 'Только днём', 'Только с родителями'],
    correct: 1,
  },
  {
    question: 'Какой знак означает "Пешеходный переход"?',
    options: ['Красный круг', 'Синий квадрат с человеком', 'Жёлтый треугольник', 'Зелёный круг'],
    correct: 1,
  },
  {
    question: 'Что нужно надеть при езде на велосипеде?',
    options: ['Шапку', 'Шлем', 'Кепку', 'Ничего'],
    correct: 1,
  },
  {
    question: 'Можно ли переходить дорогу на красный свет, если машин нет?',
    options: ['Да, можно', 'Нет, нельзя', 'Только быстро', 'Если спешишь'],
    correct: 1,
  },
  {
    question: 'Где должны идти пешеходы, если нет тротуара?',
    options: ['По правой стороне', 'По левой стороне навстречу машинам', 'По середине дороги', 'Где угодно'],
    correct: 1,
  },
  {
    question: 'Что означает жёлтый сигнал светофора?',
    options: ['Стоп', 'Внимание, приготовься', 'Иди быстрее', 'Беги'],
    correct: 1,
  },
  {
    question: 'Можно ли перебегать дорогу?',
    options: ['Да, так быстрее', 'Нет, нужно переходить спокойно', 'Только утром', 'Если опаздываешь'],
    correct: 1,
  },
  {
    question: 'Какие переходы самые безопасные?',
    options: ['Обычные', 'Надземные и подземные', 'Нерегулируемые', 'Узкие'],
    correct: 1,
  },
  {
    question: 'Что делать, если мяч выкатился на дорогу?',
    options: ['Быстро побежать за ним', 'Остановиться и попросить взрослого', 'Крикнуть водителю', 'Ничего'],
    correct: 1,
  },
  {
    question: 'Зачем нужны правила дорожного движения?',
    options: ['Для красоты', 'Для безопасности всех участников движения', 'Чтобы было что учить', 'Не знаю'],
    correct: 1,
  },
];

export const FinalTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAnswer = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    
    setTimeout(() => {
      const newAnswers = [...answers, optionIndex];
      setAnswers(newAnswers);
      
      if (optionIndex === questions[currentQuestion].correct) {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZUQ8SV6zn77BdGAg+l9z0yHwrBSJ7zPDZjT8JE2Gx6+yfUQ0PUqXj87BfGwk7k9n0zn4uBSCAy/HajUIIEly06+ugUg0OTaLh8bZiHAdAmdz0wXkkBSR+yO/bjkcIEGGy7OyfTw0QUKPi8bZjHAlAnd7zwHwrBSF/yO/cjkUIDl+16+mfUA0QTaHh8bdjHgpAneD0wn4rBSF+xu7cjkUIDV2y6+qfUw0ST6Hi8rZjHgpBneD0w38sBS==');
        audio.play().catch(() => {});
      }
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        score++;
      }
    });
    return score;
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedOption(null);
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;
    const passed = score >= 12;

    return (
      <div className="space-y-4 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="text-5xl sm:text-7xl animate-bounce">
            {passed ? '🏆' : '📚'}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
            {passed ? 'Поздравляем!' : 'Продолжай учиться!'}
          </h3>
          
          <Card className="p-4 sm:p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-4xl sm:text-6xl font-bold text-primary mb-2">
                  {score} / {questions.length}
                </p>
                <p className="text-base sm:text-xl text-gray-600">
                  {percentage.toFixed(0)}% правильных ответов
                </p>
              </div>

              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${
                    passed ? 'bg-green-500' : 'bg-yellow-500'
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>

              {passed ? (
                <div className="bg-green-50 border-2 border-green-300 p-4 rounded-xl">
                  <p className="font-bold text-green-700 text-center mb-2">
                    ✅ Тест пройден успешно!
                  </p>
                  <p className="text-sm text-gray-700 text-center">
                    Ты получил сертификат "Юный знаток ПДД"! 🎓
                  </p>
                </div>
              ) : (
                <div className="bg-yellow-50 border-2 border-yellow-300 p-4 rounded-xl">
                  <p className="font-bold text-yellow-700 text-center mb-2">
                    📖 Нужно ещё немного позаниматься
                  </p>
                  <p className="text-sm text-gray-700 text-center">
                    Для получения сертификата нужно набрать минимум 12 баллов
                  </p>
                </div>
              )}
            </div>
          </Card>

          <div className="space-y-2">
            <Button onClick={restart} className="w-full hover-scale">
              <Icon name="RotateCcw" size={20} className="mr-2" />
              Пройти тест заново
            </Button>
            
            {passed && (
              <Button 
                variant="outline" 
                className="w-full hover-scale"
                onClick={() => {
                  alert('Сертификат будет отправлен на вашу почту! 📧');
                }}
              >
                <Icon name="Award" size={20} className="mr-2" />
                Получить сертификат
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Вопрос {currentQuestion + 1} / {questions.length}</span>
          <span>{progress.toFixed(0)}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <Card className="p-4 sm:p-6 bg-gradient-to-br from-yellow-50 to-orange-50">
        <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-4 sm:mb-6">
          {question.question}
        </h4>

        <div className="space-y-2 sm:space-y-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedOption === index ? 
                (index === question.correct ? "default" : "destructive") : 
                "outline"}
              className={`w-full h-auto py-3 sm:py-4 px-3 sm:px-4 text-left justify-start hover-scale text-sm sm:text-base ${
                selectedOption !== null && index === question.correct ? 
                'bg-green-500 hover:bg-green-600 text-white' : ''
              }`}
              onClick={() => handleAnswer(index)}
              disabled={selectedOption !== null}
            >
              <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
              <span>{option}</span>
            </Button>
          ))}
        </div>
      </Card>

      <div className="text-center text-sm text-gray-500">
        💡 Для получения сертификата нужно ответить правильно на 12+ вопросов
      </div>
    </div>
  );
};