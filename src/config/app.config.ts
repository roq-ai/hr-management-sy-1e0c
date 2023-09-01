interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Employee'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Employee', 'Team Lead', 'HR Manager'],
  tenantName: 'Organization',
  applicationName: 'HR Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View certain public data of the organization.'],
  ownerAbilities: [
    'Manage personal data',
    'Manage work hours',
    'Manage vacation time',
    'Manage owned organization data',
  ],
};
