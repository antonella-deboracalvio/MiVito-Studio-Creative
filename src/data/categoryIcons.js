import {
  Baby,
  Cake,
  CalendarHeart,
  Church,
  Gift,
  GraduationCap,
  Heart,
  PartyPopper,
  Sparkles,
} from 'lucide-react';

export const categoryIcons = {
  Wedding: Heart,
  Matrimonio: Heart,
  'Kids Party': PartyPopper,
  'Compleanno Kids': PartyPopper,
  'Baby Shower': Baby,
  Nascita: Baby,
  Battesimo: Church,
  Laurea: GraduationCap,
  Party: Sparkles,
  '18 Anni': Cake,
  Anniversary: CalendarHeart,
};

export const fallbackCategoryIcon = Sparkles;
export const giftCategoryIcon = Gift;
