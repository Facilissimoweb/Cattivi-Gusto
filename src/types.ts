export type CategoryId = 
  | 'tutti' 
  | 'complotto-felino' 
  | 'filosofia-nulla' 
  | 'moda-cringe' 
  | 'cucina-incubo' 
  | 'manifesti'
  | 'oroscopo-oggetti'
  | 'tatuaggi'
  | 'accoppiamento'
  | 'trash-tv'
  | 'estetica-bellezza';

export interface Category {
  id: CategoryId;
  label: string;
  badge: string;
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  date: string;
  text: string;
  likes: number;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: CategoryId;
  categoryLabel: string;
  author: string;
  date: string;
  readTime: string;
  heroImage: string;
  imageAlt: string;
  imageCutoutStyle?: 'green-outline' | 'paper-tape' | 'polaroid' | 'burning-edge' | 'newspaper';
  featured?: boolean;
  gridSpan?: 'full' | 'half' | 'third';
  content: {
    intro: string;
    sections: {
      heading?: string;
      paragraphs: string[];
      quote?: string;
      image?: string;
      imageCaption?: string;
    }[];
    conclusion?: string;
  };
  comments: Comment[];
  likesCount: number;
  isHot?: boolean;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  billingPeriod: string;
  badge: string;
  isPopular?: boolean;
  description: string;
  perks: string[];
  callToAction: string;
  color: string;
}

export interface InanimateObjectFortune {
  id: string;
  objectName: string;
  iconName: string;
  fortune: string;
  mood: string;
  advice: string;
}

export interface VoidWeatherForecast {
  location: string;
  temperature: string;
  condition: string;
  description: string;
  recommendation: string;
}
