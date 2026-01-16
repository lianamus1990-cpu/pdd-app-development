import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const signs = [
  { emoji: '⚠️', name: 'Предупреждающий знак', correct: true, category: 'warning' },
  { emoji: '🚫', name: 'Запрещающий знак', correct: false, category: 'prohibit' },
  { emoji: '🚸', name: 'Пешеходный переход', correct: true, category: 'warning' },
  { emoji: '🛑', name: 'Знак "STOP"', correct: true, category: 'prohibit' },
  { emoji: '➡️', name: 'Предписывающий знак', correct: true, category: 'mandatory' },
  { emoji: 'ℹ️', name: 'Информационный знак', correct: true, category: 'info' },
];

export const SignQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const questions = [
    {
      question: 'Какой знак означает "Пешеходный переход"?',
      options: ['⚠️', '🚸', '➡️', '🚫'],
      correct: '🚸',
    },
    {
      question: 'Какой знак запрещает движение?',
      options: ['🚫', '⚠️', 'ℹ️', '➡️'],
      correct: '🚫',
    },
    {
      question: 'Какой знак предупреждает об опасности?',
      options: ['ℹ️', '⚠️', '➡️', '🚸'],
      correct: '⚠️',
    },
    {
      question: 'Какой знак означает "STOP"?',
      options: ['🚫', '⚠️', '🛑', '➡️'],
      correct: '🛑',
    },
    {
      question: 'Какой знак даёт информацию?',
      options: ['ℹ️', '🚫', '⚠️', '🛑'],
      correct: 'ℹ️',
    },
  ];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    
    setTimeout(() => {
      if (answer === questions[currentQuestion].correct) {
        setScore(score + 1);
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZUQ8SV6zn77BdGAg+l9z0yHwrBSJ7zPDZjT8JE2Gx6+yfUQ0PUqXj87BfGwk7k9n0zn4uBSCAy/HajUIIEly06+ugUg0OTaLh8bZiHAdAmdz0wXkkBSR+yO/bjkcIEGGy7OyfTw0QUKPi8bZjHAlAnd7zwHwrBSF/yO/cjkUIDl+16+mfUA0QTaHh8bdjHgpAneD0wn4rBSF+xu7cjkUIDV2y6+qfUw0ST6Hi8rZjHgpBneD0w38sBS==');
        audio.play().catch(() => {});
      }
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const restart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    return (
      <div className="space-y-4">
        <div className="text-center space-y-4">
          <div className="text-5xl sm:text-6xl animate-bounce">
            {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Результат!</h3>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-2xl">
            <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              {score} / {questions.length}
            </p>
            <p className="text-gray-600">
              {percentage >= 80 ? 'Отлично! Ты знаток ПДД! 🏆' : 
               percentage >= 60 ? 'Хорошо! Продолжай учиться! 💪' : 
               'Попробуй ещё раз! 📖'}
            </p>
          </div>
          <Button onClick={restart} className="w-full hover-scale">
            <Icon name="RotateCcw" size={20} className="mr-2" />
            Пройти заново
          </Button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-gray-600">
          Вопрос {currentQuestion + 1} / {questions.length}
        </span>
        <span className="text-sm font-semibold text-primary">
          Счёт: {score}
        </span>
      </div>

      <Card className="p-4 sm:p-6 bg-gradient-to-br from-yellow-50 to-orange-50">
        <h4 className="text-base sm:text-lg font-bold text-gray-800 text-center mb-4 sm:mb-6">
          {currentQ.question}
        </h4>

        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {currentQ.options.map((option) => (
            <Button
              key={option}
              variant={selectedAnswer === option ? 
                (option === currentQ.correct ? "default" : "destructive") : 
                "outline"}
              className={`h-20 sm:h-24 text-4xl sm:text-5xl hover-scale ${
                selectedAnswer && option === currentQ.correct ? 'bg-green-500 hover:bg-green-600' : ''
              }`}
              onClick={() => handleAnswer(option)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};