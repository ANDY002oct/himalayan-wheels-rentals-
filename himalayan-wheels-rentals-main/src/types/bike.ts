
export interface Bike {
  id: number;
  name: string;
  type: string;
  price_per_day: number;
  image_url: string;
  location: string;
  is_available: boolean;
  description?: string;
  features?: string[];
  engine_size?: string;
  mileage?: string;
}
