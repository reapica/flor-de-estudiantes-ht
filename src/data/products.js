import economiaImg from '../assets/flowers/economia.png';
import matematicaImg from '../assets/flowers/matematicas.png';
import lenguaImg from '../assets/flowers/lengua.png';
import historiaImg from '../assets/flowers/historia.png';
import fisicaImg from '../assets/flowers/fisica.png';
import quimicaImg from '../assets/flowers/quimica.png';

export const products = [
  {
    id: 'f1',
    name: 'Flor Economía',
    emoji: '💮',
    description: 'Arreglo sobrio que florece en 10 días.',
    price: 2999,
    image: economiaImg,
    meta: { subject: 'Economía', code: 'ECON', studentId: 'ALU-1029', newGrade: 10 },
  },
  {
    id: 'f2',
    name: 'Flor Matemática',
    emoji: '🌸',
    description: 'Composición precisa, florece en 10 días.',
    price: 2999,
    image: matematicaImg,
    meta: { subject: 'Matemática', code: 'MATE', studentId: 'ALU-1845', newGrade: 10 },
  },
  {
    id: 'f3',
    name: 'Flor Lengua',
    emoji: '🌺',
    description: 'Ligera y expresiva, florece en 10 días.',
    price: 2799,
    image: lenguaImg,
    meta: { subject: 'Lengua', code: 'LENG', studentId: 'ALU-2007', newGrade: 10 },
  },
  {
    id: 'f4',
    name: 'Flor Historia',
    emoji: '🌼',
    description: 'Clásica y atemporal, florece en 10 días.',
    price: 2599,
    image: historiaImg,
    meta: { subject: 'Historia', code: 'HIST', studentId: 'ALU-1433', newGrade: 10 },
  },
  {
    id: 'f5',
    name: 'Flor Física',
    emoji: '🌻',
    description: 'Energética, florece en 10 días.',
    price: 2899,
    image: fisicaImg,
    meta: { subject: 'Física', code: 'FISI', studentId: 'ALU-1769', newGrade: 10 },
  },
  {
    id: 'f6',
    name: 'Flor Química',
    emoji: '🌷',
    description: 'Reacciona bien, florece en 10 días.',
    price: 2899,
    image: quimicaImg,
    meta: { subject: 'Química', code: 'QUIM', studentId: 'ALU-1912', newGrade: 10 },
  },
];
