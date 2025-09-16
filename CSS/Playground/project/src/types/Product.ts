export interface Product {
  id: string;
  name: string;
  series: string;
  price: string;
  image: string;
  specs: {
    dpi: string;
    sensor: string;
    weight: string;
    switches: string;
    battery: string;
    connectivity: string;
  };
  features: string[];
}