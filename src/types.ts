export interface ProductItem {
  id: string;
  name: string;
  category: 'stationery' | 'pens' | 'bottles' | 'mugs' | 'hampers' | 'welcome-kits' | 'event-gifts';
  categoryLabel: string;
  price: number;
  description: string;
  features: string[];
  customizationMethods: string[];
  colors: string[];
  minOrderQty: number;
  popular?: boolean;
  tag?: string;
  image: string;
}

export interface CuratedKit {
  id: string;
  name: string;
  price: number;
  tagline: string;
  badge?: string;
  itemsIncluded: string[];
  idealFor: string;
  packaging: string;
  popularFor: string;
  rating: number;
  reviewsCount: number;
  image: string;
}

export interface KitBuilderItem {
  id: string;
  name: string;
  category: 'stationery' | 'pen' | 'bottle' | 'mug' | 'keychain' | 'desk' | 'box' | 'message';
  price: number;
  weightGrams: number;
  options: {
    name: string;
    priceDelta: number;
    description: string;
  }[];
  colors: { name: string; hex: string }[];
  description: string;
  iconName: string;
}

export interface CustomizationOption {
  id: string;
  title: string;
  description: string;
  iconName: string;
  recommendedFor: string;
}

export interface IndustryServe {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  popularKits: string[];
  avgBudget: string;
  iconName: string;
  tags: string[];
}

export interface OccasionItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  recommendedItems: string[];
  timingLeadDays: string;
  seasonTag?: string;
  image: string;
}

export interface QuoteDraft {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  occasion: string;
  quantity: number;
  selectedKitId?: string;
  customKitItems?: {
    itemId: string;
    itemName: string;
    optionName: string;
    color: string;
    unitPrice: number;
  }[];
  brandingType: string[];
  boxColor: string;
  brandText: string;
  corporateMessage: string;
  targetBudgetPerKit?: number;
  targetDeliveryDate?: string;
  city: string;
  additionalNotes?: string;
}
