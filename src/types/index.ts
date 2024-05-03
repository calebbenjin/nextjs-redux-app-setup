export interface LinkItem {
  id: number;
  title: string;
  link: string;
  icon: any;
}

export type Payment = {
  id: string;
  name: string;
  plan: "Free" | "Basic" | "Pro";
  email: string;
  signUpDate: string;
  lastSeen: string;
  actions: "Activate" | "Deactivate";
};
