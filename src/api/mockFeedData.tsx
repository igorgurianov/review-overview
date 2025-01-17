import { TReview } from '../components/ReviewCard'

const mockFeedData: TReview[] = [
  {
    id: 1,
    name: 'Иван Иванов',
    rating: 5,
    text: 'Потрясающий опыт! Персонал был очень дружелюбным, а номер чистым и комфортным.',
    date: '2024-07-20',
  },
  {
    id: 2,
    name: 'Анна Смирнова',
    rating: 4,
    text: 'Отличное расположение и хороший сервис. Завтрак мог бы быть лучше.',
    date: '2024-07-18',
  },
  {
    id: 3,
    name: 'Алексей Петров',
    rating: 3,
    text: 'Среднее пребывание. Номер был нормальный, но немного шумный.',
    date: '2024-07-15',
  },
  {
    id: 4,
    name: 'Екатерина Сидорова',
    rating: 5,
    text: 'Просто в восторге! Удобства на высшем уровне.',
    date: '2024-07-12',
  },
  {
    id: 5,
    name: 'Михаил Кузнецов',
    rating: 2,
    text: 'Не доволен обслуживанием. Номер был недостаточно чистым.',
    date: '2024-07-10',
  },
  {
    id: 6,
    name: 'София Козлова',
    rating: 4,
    text: 'В целом очень хорошо. Бассейн был замечательным.',
    date: '2024-07-08',
  },
  {
    id: 7,
    name: 'Дмитрий Орлов',
    rating: 5,
    text: 'Фантастическое пребывание! Обязательно вернусь.',
    date: '2024-07-05',
  },
  {
    id: 8,
    name: 'Мария Новикова',
    rating: 3,
    text: 'Было нормально, но не так здорово, как ожидалось.',
    date: '2024-07-03',
  },
  {
    id: 9,
    name: 'Александр Лебедев',
    rating: 4,
    text: 'Хорошее соотношение цены и качества. Персонал был очень полезным.',
    date: '2024-07-01',
  },
  {
    id: 10,
    name: 'Елена Морозова',
    rating: 5,
    text: 'Исключительное обслуживание и красивые номера.',
    date: '2024-06-28',
  },
]

function fetchFeedData(): Promise<TReview[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = mockFeedData
      resolve(data)
    }, 2000)
  })
}

export default fetchFeedData
