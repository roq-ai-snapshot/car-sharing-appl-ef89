interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own user information',
    'Create, read and delete bookings',
    'Create and read reviews',
    'Create reports',
  ],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage car data', 'Manage booking data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/1c6cd91e-f149-4d8c-9104-ede1e4668f5c',
};
