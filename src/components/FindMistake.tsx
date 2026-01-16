import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const scenarios = [
  {
    description: 'Мальчик переходит дорогу. Что не так?',
    image: '🚸🏃💨🚗',
    mistakes: ['Бежит через дорогу (нужно идти спокойно)', 'Не смотрит по сторонам'],
    correct: 'Нельзя бегать через дорогу! Нужно переходить спокойным шагом и смотреть по сторонам.',
  },
  {
    description: 'Девочка на велосипеде. Что не так?',
    image: '👧🚲🛣️',
    mistakes: ['Едет без шлема', 'Едет по проезжей части (нужно по велодорожке)'],
    correct: 'Нужно надеть шлем и ездить по велодорожке или тротуару, а не по дороге!',
  },
  {
    description: 'Пешеходы на светофоре. Что не так?',
    image: '🚦🔴👨‍👩‍👧‍👦➡️',
    mistakes: ['Идут на красный свет'],
    correct: 'На красный свет переходить нельзя! Нужно ждать зелёный сигнал.',
  },
  {
    description: 'Ребёнок играет. Что не так?',
    image: '⚽🏀🛣️👦',
    mistakes: ['Играет рядом с дорогой'],
    correct: 'Нельзя играть рядом с дорогой! Играть нужно на детской площадке или в парке.',
  },
];

export const FindMistake = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
    setScore(score + 1);
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZUQ8SV6zn77BdGAg+l9z0yHwrBSJ7zPDZjT8JE2Gx6+yfUQ0PUqXj87BfGwk7k9n0zn4uBSCAy/HajUIIEly06+ugUg0OTaLh8bZiHAdAmdz0wXkkBSR+yO/bjkcIEGGy7OyfTw0QUKPi8bZjHAlAnd7zwHwrBSF/yO/cjkUIDl+16+mfUA0QTaHh8bdjHgpAneD0wn4rBSF+xu7cjkUIDV2y6+qfUw0ST6Hi8rZjHgpBneD0w38sBS==');
    audio.play().catch(() => {});
  };

  const handleNext = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setShowAnswer(false);
    } else {
      setGameFinished(true);
    }
  };

  const restart = () => {
    setCurrentScenario(0);
    setScore(0);
    setShowAnswer(false);
    setGameFinished(false);
  };

  if (gameFinished) {
    return (
      <div className="space-y-4">
        <div className="text-center space-y-4">
          <div className="text-5xl sm:text-6xl animate-bounce">🎓</div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Молодец!</h3>
          <Card className="p-4 sm:p-6 bg-gradient-to-br from-green-50 to-blue-50">
            <p className="text-lg text-gray-700 mb-2">
              Ты нашёл все ошибки!
            </p>
            <p className="text-4xl font-bold text-primary">
              {score} / {scenarios.length}
            </p>
          </Card>
          <Button onClick={restart} className="w-full hover-scale">
            <Icon name="RotateCcw" size={20} className="mr-2" />
            Играть снова
          </Button>
        </div>
      </div>
    );
  }

  const scenario = scenarios[currentScenario];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-gray-600">
          Ситуация {currentScenario + 1} / {scenarios.length}
        </span>
        <span className="text-sm font-semibold text-primary">
          Найдено: {score}
        </span>
      </div>

      <Card className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <h4 className="text-base sm:text-lg font-bold text-gray-800 text-center mb-4">
          {scenario.description}
        </h4>

        <div className="text-center text-5xl sm:text-7xl mb-4 sm:mb-6 bg-white rounded-xl p-4 sm:p-6">
          {scenario.image}
        </div>

        {!showAnswer ? (
          <Button onClick={handleShowAnswer} className="w-full hover-scale">
            <Icon name="Eye" size={20} className="mr-2" />
            Показать ошибку
          </Button>
        ) : (
          <div className="space-y-4">
            <div className="bg-red-50 border-2 border-red-300 p-4 rounded-xl">
              <h5 className="font-bold text-red-700 mb-2">⚠️ Ошибки:</h5>
              <ul className="space-y-1">
                {scenario.mistakes.map((mistake, idx) => (
                  <li key={idx} className="text-sm text-gray-700">
                    • {mistake}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-300 p-4 rounded-xl">
              <h5 className="font-bold text-green-700 mb-2">✅ Правильно:</h5>
              <p className="text-sm text-gray-700">{scenario.correct}</p>
            </div>

            <Button onClick={handleNext} className="w-full hover-scale">
              {currentScenario < scenarios.length - 1 ? (
                <>
                  Следующая ситуация
                  <Icon name="ChevronRight" size={20} className="ml-2" />
                </>
              ) : (
                <>
                  Завершить
                  <Icon name="Check" size={20} className="ml-2" />
                </>
              )}
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};