import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Transformative Impact',
    content:
      'proudly testifies to the transformative impact of Bite Price, their innovative food delivery comparison app, which simplifies the ordering process and empowers users to make informed decisions.',
    user: {
      id: 1,
      name: 'Tebogo Nkuna',
      professional: 'Chief Executive Officer',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Best Quality Apps!',
    content:
      'As the Head of Marketing at Bite Wise, I am proud to contribute to the success of Bite Price, our innovative food delivery comparison app, by effectively promoting it and witnessing its transformative impact in revolutionizing the food delivery industry.',
    user: {
      id: 1,
      name: 'Tshepo Nkuna',
      professional: 'Head Of Marketing',
      photo: '2.jpg',
    },
  },
 
]
